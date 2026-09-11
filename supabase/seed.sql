-- ============================================================================
-- Données de référence — à exécuter une fois après la migration 0001.
-- Ne crée PAS les comptes utilisateurs (voir supabase/seed_profiles.sql.example
-- et docs/CRM_SETUP.md pour la procédure de création des 4 comptes).
-- ============================================================================

-- Sociétés -------------------------------------------------------------------
insert into public.companies (slug, name, theme_color) values
  ('quentin', 'Société de Quentin', '#6341B8'),
  ('arthur', 'Société d''Arthur', '#F4D03F')
on conflict (slug) do nothing;

-- Étapes du pipeline (identiques pour les deux sociétés, personnalisables ensuite)
insert into public.pipeline_stages (company_id, name, position, color, is_won, is_lost)
select c.id, s.name, s.position, s.color, s.is_won, s.is_lost
from public.companies c
cross join (
  values
    ('Nouveau', 0, '#7B55D4', false, false),
    ('Contacté', 1, '#6341B8', false, false),
    ('RDV pris', 2, '#D6DAFD', false, false),
    ('RDV effectué', 3, '#F4D03F', false, false),
    ('Proposition envoyée', 4, '#FF3E8A', false, false),
    ('Signé', 5, '#C8F135', true, false),
    ('Perdu', 6, '#4A2E8F', false, true)
) as s(name, position, color, is_won, is_lost)
where not exists (
  select 1 from public.pipeline_stages ps where ps.company_id = c.id and ps.name = s.name
);

-- Paliers d'objectifs (rendez-vous primés) ------------------------------------
insert into public.objective_tiers (label, threshold_rdv, reward_label, period, position, is_special)
values
  ('Palier 1', 40, '50 €', 'cumulative', 0, false),
  ('Palier 2', 60, '100 €', 'cumulative', 1, false),
  ('Palier 3', 80, '150 €', 'cumulative', 2, false),
  ('Objectif Monaco', 90, 'Monaco 🏁', '3_months', 3, true)
on conflict do nothing;

-- Catalogue des trophées -------------------------------------------------------
insert into public.trophies (key, label, description, icon, category, criteria, position) values
  ('first_rdv_pris', 'Premier pas', 'Premier rendez-vous pris', '🥇', 'etape', '{"type":"first_rdv_type","rdv_type":"pris"}', 0),
  ('first_rdv_effectue', 'Sur le terrain', 'Premier rendez-vous effectué', '🚗', 'etape', '{"type":"first_rdv_type","rdv_type":"effectue"}', 1),
  ('first_rdv_signe', 'Premier contrat', 'Premier rendez-vous signé', '✍️', 'etape', '{"type":"first_rdv_type","rdv_type":"signe"}', 2),

  ('first_sector_agent_immobilier', 'Immo Starter', 'Premier rendez-vous avec un agent immobilier', '🏠', 'secteur', '{"type":"first_sector","sector":"agent immobilier"}', 10),
  ('first_sector_architecte', 'Architecte du succès', 'Premier rendez-vous avec un architecte', '📐', 'secteur', '{"type":"first_sector","sector":"architecte"}', 11),
  ('first_sector_ecole', 'Bon élève', 'Premier rendez-vous avec une école', '🎓', 'secteur', '{"type":"first_sector","sector":"école"}', 12),
  ('first_sector_notaire', 'Sceau officiel', 'Premier rendez-vous avec un notaire', '📜', 'secteur', '{"type":"first_sector","sector":"notaire"}', 13),
  ('first_sector_artisan', 'Coup de main', 'Premier rendez-vous avec un artisan', '🔨', 'secteur', '{"type":"first_sector","sector":"artisan"}', 14),

  ('palier_1_rdv', '1 rendez-vous', '1 rendez-vous pris', '🔥', 'palier', '{"type":"count","rdv_type":"pris","value":1}', 20),
  ('palier_10_rdv', '10 rendez-vous', '10 rendez-vous pris', '🔥', 'palier', '{"type":"count","rdv_type":"pris","value":10}', 21),
  ('palier_15_rdv', '15 rendez-vous', '15 rendez-vous pris', '🔥', 'palier', '{"type":"count","rdv_type":"pris","value":15}', 22),
  ('palier_25_rdv', '25 rendez-vous', '25 rendez-vous pris', '🔥', 'palier', '{"type":"count","rdv_type":"pris","value":25}', 23),
  ('palier_50_rdv', '50 rendez-vous', '50 rendez-vous pris', '🔥', 'palier', '{"type":"count","rdv_type":"pris","value":50}', 24),
  ('palier_100_rdv', '100 rendez-vous', '100 rendez-vous pris', '💯', 'palier', '{"type":"count","rdv_type":"pris","value":100}', 25),

  ('palier_10_signes', '10 signatures', '10 rendez-vous signés', '🏆', 'palier', '{"type":"count","rdv_type":"signe","value":10}', 30)
on conflict (key) do nothing;
