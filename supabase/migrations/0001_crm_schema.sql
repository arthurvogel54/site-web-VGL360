-- ============================================================================
-- VGL360 CRM — schema initial
-- Deux sociétés cloisonnées (Quentin / Arthur), deux alternants partagés
-- (Telma Martin, Enzo Mucci) qui basculent entre les deux avec un pipeline
-- distinct pour chacune. Gamification : objectifs, streak façon Duolingo,
-- trophées, planning (jours fériés / week-end / entreprise / formation).
-- ============================================================================

create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------------------
-- Fonction utilitaire : maj automatique de updated_at
-- ----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ----------------------------------------------------------------------------
-- companies — une ligne par société (Quentin, Arthur)
-- ----------------------------------------------------------------------------
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  theme_color text not null default '#6341B8',
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- profiles — miroir de auth.users avec rôle métier
-- ----------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  role text not null check (role in ('owner', 'alternant')),
  avatar_color text not null default '#6341B8',
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- user_companies — quelles sociétés un profil peut voir/travailler
-- (les owners n'ont que la leur, les alternants ont les deux)
-- ----------------------------------------------------------------------------
create table public.user_companies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  company_id uuid not null references public.companies(id) on delete cascade,
  is_default boolean not null default false,
  unique (user_id, company_id)
);

-- Fonctions RLS réutilisables --------------------------------------------------
create or replace function public.user_has_company_access(p_company_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.user_companies
    where user_id = auth.uid() and company_id = p_company_id
  );
$$;

create or replace function public.shares_company_with(p_user_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.user_companies uc1
    join public.user_companies uc2 on uc1.company_id = uc2.company_id
    where uc1.user_id = auth.uid() and uc2.user_id = p_user_id
  );
$$;

create or replace function public.is_owner()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'owner'
  );
$$;

-- ----------------------------------------------------------------------------
-- pipeline_stages — colonnes du kanban, propres à chaque société
-- ----------------------------------------------------------------------------
create table public.pipeline_stages (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  position int not null default 0,
  color text not null default '#6341B8',
  is_won boolean not null default false,
  is_lost boolean not null default false
);

-- ----------------------------------------------------------------------------
-- leads — cartes du pipeline
-- ----------------------------------------------------------------------------
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  stage_id uuid not null references public.pipeline_stages(id) on delete restrict,
  assigned_to uuid references public.profiles(id) on delete set null,
  created_by uuid not null references public.profiles(id) on delete set null,
  prospect_name text not null,
  value numeric(10, 2) not null default 0,
  city text,
  referent_name text,
  sector text,
  contact_date date,
  notes text,
  status text not null default 'open' check (status in ('open', 'won', 'lost')),
  position int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- Le statut (open/won/lost) suit automatiquement la colonne où atterrit la carte
create or replace function public.sync_lead_status_from_stage()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_stage public.pipeline_stages%rowtype;
begin
  select * into v_stage from public.pipeline_stages where id = new.stage_id;
  if v_stage.is_won then
    new.status := 'won';
  elsif v_stage.is_lost then
    new.status := 'lost';
  else
    new.status := 'open';
  end if;
  return new;
end;
$$;

create trigger leads_sync_status_trg
  before insert or update of stage_id on public.leads
  for each row execute function public.sync_lead_status_from_stage();

-- ----------------------------------------------------------------------------
-- rdv_log — chaque rendez-vous compté (objectifs, streak, trophées)
-- ----------------------------------------------------------------------------
create table public.rdv_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  company_id uuid not null references public.companies(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  rdv_date date not null default current_date,
  rdv_type text not null check (rdv_type in ('pris', 'effectue', 'signe')),
  sector text,
  created_at timestamptz not null default now()
);

create index rdv_log_user_date_idx on public.rdv_log (user_id, rdv_date);

-- ----------------------------------------------------------------------------
-- objective_tiers — paliers primés (référentiel, modifiable)
-- ----------------------------------------------------------------------------
create table public.objective_tiers (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  threshold_rdv int not null,
  reward_label text not null,
  period text not null default 'cumulative' check (period in ('cumulative', '3_months')),
  position int not null default 0,
  is_special boolean not null default false
);

-- ----------------------------------------------------------------------------
-- streaks — flamme quotidienne façon Duolingo (4 rdv/jour valide la flamme)
-- ----------------------------------------------------------------------------
create table public.streaks (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_valid_date date,
  updated_at timestamptz not null default now()
);

create or replace function public.refresh_streak(p_user_id uuid, p_rdv_date date)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count int;
  v_daily_target constant int := 4;
  v_row public.streaks%rowtype;
begin
  select count(*) into v_count
  from public.rdv_log
  where user_id = p_user_id and rdv_date = p_rdv_date and rdv_type = 'pris';

  if v_count < v_daily_target then
    return;
  end if;

  select * into v_row from public.streaks where user_id = p_user_id;

  if not found then
    insert into public.streaks (user_id, current_streak, longest_streak, last_valid_date)
    values (p_user_id, 1, 1, p_rdv_date);
    return;
  end if;

  if v_row.last_valid_date = p_rdv_date then
    return; -- déjà validé ce jour
  elsif v_row.last_valid_date = p_rdv_date - interval '1 day' then
    update public.streaks
    set current_streak = v_row.current_streak + 1,
        longest_streak = greatest(v_row.longest_streak, v_row.current_streak + 1),
        last_valid_date = p_rdv_date,
        updated_at = now()
    where user_id = p_user_id;
  elsif p_rdv_date > v_row.last_valid_date then
    update public.streaks
    set current_streak = 1,
        longest_streak = greatest(v_row.longest_streak, 1),
        last_valid_date = p_rdv_date,
        updated_at = now()
    where user_id = p_user_id;
  end if;
end;
$$;

create or replace function public.rdv_log_after_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.rdv_type = 'pris' then
    perform public.refresh_streak(new.user_id, new.rdv_date);
  end if;
  perform public.evaluate_trophies(new.user_id);
  return new;
end;
$$;

-- ----------------------------------------------------------------------------
-- trophies — catalogue des badges + user_trophies — badges obtenus
-- ----------------------------------------------------------------------------
create table public.trophies (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  label text not null,
  description text not null,
  icon text not null default '🏆',
  category text not null check (category in ('secteur', 'palier', 'etape')),
  criteria jsonb not null,
  position int not null default 0
);

create table public.user_trophies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  trophy_id uuid not null references public.trophies(id) on delete cascade,
  earned_at timestamptz not null default now(),
  unique (user_id, trophy_id)
);

-- Évaluation des trophées : appelée après chaque rdv_log / lead gagné
create or replace function public.evaluate_trophies(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  t record;
  v_count int;
  v_met boolean;
begin
  for t in select * from public.trophies loop
    if exists (select 1 from public.user_trophies where user_id = p_user_id and trophy_id = t.id) then
      continue;
    end if;

    v_met := false;

    if t.criteria->>'type' = 'count' then
      select count(*) into v_count
      from public.rdv_log
      where user_id = p_user_id
        and rdv_type = coalesce(t.criteria->>'rdv_type', 'pris');
      if v_count >= (t.criteria->>'value')::int then
        v_met := true;
      end if;

    elsif t.criteria->>'type' = 'first_sector' then
      v_met := exists (
        select 1 from public.rdv_log
        where user_id = p_user_id
          and rdv_type = coalesce(t.criteria->>'rdv_type', 'pris')
          and lower(sector) = lower(t.criteria->>'sector')
      );

    elsif t.criteria->>'type' = 'first_rdv_type' then
      v_met := exists (
        select 1 from public.rdv_log
        where user_id = p_user_id and rdv_type = t.criteria->>'rdv_type'
      );
    end if;

    if v_met then
      insert into public.user_trophies (user_id, trophy_id) values (p_user_id, t.id)
      on conflict do nothing;
    end if;
  end loop;
end;
$$;

create trigger rdv_log_after_insert_trg
  after insert on public.rdv_log
  for each row execute function public.rdv_log_after_insert();

create or replace function public.leads_after_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.status = 'won' and old.status is distinct from 'won' then
    insert into public.rdv_log (user_id, company_id, lead_id, rdv_date, rdv_type, sector)
    values (coalesce(new.assigned_to, new.created_by), new.company_id, new.id, current_date, 'signe', new.sector);
  end if;
  return new;
end;
$$;

create trigger leads_after_update_trg
  after update on public.leads
  for each row execute function public.leads_after_update();

-- ----------------------------------------------------------------------------
-- planning_entries — jour par jour : type de journée + société assignée
-- ----------------------------------------------------------------------------
create table public.planning_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  entry_date date not null,
  day_type text not null check (day_type in ('travail', 'weekend', 'ferie', 'formation')),
  company_id uuid references public.companies(id) on delete set null,
  note text,
  unique (user_id, entry_date)
);

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.companies enable row level security;
alter table public.profiles enable row level security;
alter table public.user_companies enable row level security;
alter table public.pipeline_stages enable row level security;
alter table public.leads enable row level security;
alter table public.rdv_log enable row level security;
alter table public.objective_tiers enable row level security;
alter table public.streaks enable row level security;
alter table public.trophies enable row level security;
alter table public.user_trophies enable row level security;
alter table public.planning_entries enable row level security;

-- companies : visibles seulement si l'utilisateur y a accès
create policy "companies_select" on public.companies for select
  using (public.user_has_company_access(id));

-- profiles : soi-même + collègues partageant une société
create policy "profiles_select" on public.profiles for select
  using (id = auth.uid() or public.shares_company_with(id));
create policy "profiles_update_self" on public.profiles for update
  using (id = auth.uid());

-- user_companies : ses propres accès + ceux des collègues partagés (pour affichage)
create policy "user_companies_select" on public.user_companies for select
  using (user_id = auth.uid() or public.shares_company_with(user_id));

-- pipeline_stages
create policy "stages_select" on public.pipeline_stages for select
  using (public.user_has_company_access(company_id));
create policy "stages_write" on public.pipeline_stages for all
  using (public.user_has_company_access(company_id))
  with check (public.user_has_company_access(company_id));

-- leads
create policy "leads_select" on public.leads for select
  using (public.user_has_company_access(company_id));
create policy "leads_insert" on public.leads for insert
  with check (public.user_has_company_access(company_id));
create policy "leads_update" on public.leads for update
  using (public.user_has_company_access(company_id))
  with check (public.user_has_company_access(company_id));
create policy "leads_delete" on public.leads for delete
  using (public.user_has_company_access(company_id));

-- rdv_log
create policy "rdv_log_select" on public.rdv_log for select
  using (public.user_has_company_access(company_id));
create policy "rdv_log_insert" on public.rdv_log for insert
  with check (user_id = auth.uid() and public.user_has_company_access(company_id));

-- objective_tiers : référentiel commun, lecture pour tout authentifié
create policy "objective_tiers_select" on public.objective_tiers for select
  using (auth.uid() is not null);

-- streaks : soi-même + collègues partagés (compétition visible)
create policy "streaks_select" on public.streaks for select
  using (user_id = auth.uid() or public.shares_company_with(user_id));

-- trophies : référentiel commun
create policy "trophies_select" on public.trophies for select
  using (auth.uid() is not null);

-- user_trophies : soi-même + collègues partagés (tableau des trophées)
create policy "user_trophies_select" on public.user_trophies for select
  using (user_id = auth.uid() or public.shares_company_with(user_id));

-- planning_entries : soi-même + collègues partagés ; édition par soi-même ou un owner partagé
create policy "planning_select" on public.planning_entries for select
  using (user_id = auth.uid() or public.shares_company_with(user_id));
create policy "planning_write" on public.planning_entries for all
  using (user_id = auth.uid() or (public.is_owner() and public.shares_company_with(user_id)))
  with check (user_id = auth.uid() or (public.is_owner() and public.shares_company_with(user_id)));
