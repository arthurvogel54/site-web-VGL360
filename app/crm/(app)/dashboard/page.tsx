import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { computeTierProgress, threeMonthsAgoISODate } from '@/lib/crm/objectives'
import { ObjectiveTierBar } from '@/components/crm/ObjectiveTierBar'
import { QuickLogRdv } from '@/components/crm/QuickLogRdv'
import { CompanyBalance } from '@/components/crm/CompanyBalance'
import { Flame, Briefcase, Euro, CalendarCheck } from 'lucide-react'

export const metadata = {
  title: 'Tableau de bord — CRM VGL360',
}

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export default async function DashboardPage() {
  const { userId, profile, companies, activeCompany } = await getCrmSession()
  const supabase = await createClient()

  const [{ data: leads }, { data: rdvAll }, { data: tiers }, { data: streak }] = await Promise.all([
    supabase
      .from('leads')
      .select('id, value, status')
      .eq('company_id', activeCompany.id),
    supabase
      .from('rdv_log')
      .select('company_id, rdv_date')
      .eq('user_id', userId)
      .eq('rdv_type', 'pris'),
    supabase.from('objective_tiers').select('*').order('position'),
    supabase.from('streaks').select('*').eq('user_id', userId).maybeSingle(),
  ])

  const openLeads = (leads ?? []).filter((l) => l.status === 'open')
  const openValue = openLeads.reduce((sum, l) => sum + Number(l.value), 0)
  const wonLeads = (leads ?? []).filter((l) => l.status === 'won')

  const cumulativeCount = (rdvAll ?? []).length
  const since = threeMonthsAgoISODate()
  const rolling3MonthsCount = (rdvAll ?? []).filter((r) => r.rdv_date >= since).length

  const tierProgress = computeTierProgress(tiers ?? [], cumulativeCount, rolling3MonthsCount)
  const nextTier = tierProgress.find((tp) => !tp.achieved)

  const counts: Record<string, number> = {}
  for (const r of rdvAll ?? []) {
    counts[r.company_id] = (counts[r.company_id] ?? 0) + 1
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-extrabold text-crm-ink">
          Bonjour {profile.full_name.split(' ')[0]} 👋
        </h1>
        <p className="text-crm-muted text-sm mt-1">
          Tableau de bord — <span style={{ color: activeCompany.theme_color }}>{activeCompany.name}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Briefcase} label="Affaires en cours" value={String(openLeads.length)} />
        <StatCard icon={Euro} label="Valeur pipeline" value={currencyFormatter.format(openValue)} />
        <StatCard icon={CalendarCheck} label="Affaires signées" value={String(wonLeads.length)} />
        <StatCard icon={Flame} label="Série actuelle" value={`${streak?.current_streak ?? 0} jours`} />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <QuickLogRdv companyName={activeCompany.name} />
        {companies.length > 1 && <CompanyBalance companies={companies} counts={counts} />}
      </div>

      {nextTier && (
        <div>
          <h2 className="text-lg font-display font-bold text-crm-ink mb-3">Prochain objectif</h2>
          <ObjectiveTierBar tp={nextTier} />
        </div>
      )}
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Briefcase
  label: string
  value: string
}) {
  return (
    <div className="bg-crm-card border border-crm-border rounded-2xl p-4 flex flex-col gap-2">
      <Icon size={18} className="text-crm-accent" />
      <span className="text-xl font-display font-extrabold text-crm-ink">{value}</span>
      <span className="text-xs text-crm-muted">{label}</span>
    </div>
  )
}
