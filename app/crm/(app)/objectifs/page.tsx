import { Flame } from 'lucide-react'
import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { computeTierProgress, threeMonthsAgoISODate } from '@/lib/crm/objectives'
import { ObjectiveTierBar } from '@/components/crm/ObjectiveTierBar'
import { DAILY_RDV_TARGET } from '@/lib/crm/constants'

export const metadata = {
  title: 'Objectifs — CRM VGL360',
}

export default async function ObjectifsPage() {
  const { userId } = await getCrmSession()
  const supabase = await createClient()

  const [{ data: rdvAll }, { data: tiers }, { data: streak }] = await Promise.all([
    supabase.from('rdv_log').select('rdv_date').eq('user_id', userId).eq('rdv_type', 'pris'),
    supabase.from('objective_tiers').select('*').order('position'),
    supabase.from('streaks').select('*').eq('user_id', userId).maybeSingle(),
  ])

  const cumulativeCount = (rdvAll ?? []).length
  const since = threeMonthsAgoISODate()
  const rolling3MonthsCount = (rdvAll ?? []).filter((r) => r.rdv_date >= since).length

  const tierProgress = computeTierProgress(tiers ?? [], cumulativeCount, rolling3MonthsCount)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-extrabold text-crm-ink">Objectifs</h1>
        <p className="text-crm-muted text-sm mt-1">
          Chaque rendez-vous pris compte. Cumule les paliers pour débloquer tes primes, toutes sociétés confondues.
        </p>
      </div>

      <div className="bg-crm-card rounded-2xl p-6 border border-crm-border flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-crm-accent/10 border border-crm-accent/30 flex items-center justify-center">
          <Flame size={26} className="text-crm-accent fill-crm-accent" />
        </div>
        <div>
          <p className="text-crm-ink font-display font-extrabold text-xl">
            {streak?.current_streak ?? 0} jour{(streak?.current_streak ?? 0) > 1 ? 's' : ''} de série
          </p>
          <p className="text-crm-muted text-sm">
            Record personnel : {streak?.longest_streak ?? 0} jours — valide {DAILY_RDV_TARGET} rendez-vous pris
            par jour pour garder la flamme allumée.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tierProgress.map((tp) => (
          <ObjectiveTierBar key={tp.tier.id} tp={tp} />
        ))}
      </div>
    </div>
  )
}
