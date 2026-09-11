import type { TierProgress } from '@/lib/crm/objectives'

export function ObjectiveTierBar({ tp }: { tp: TierProgress }) {
  return (
    <div
      className={`rounded-2xl p-4 border ${
        tp.achieved ? 'border-crm-accent/40 bg-crm-accent/5' : 'border-crm-border bg-crm-card'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`font-bold text-sm ${tp.achieved ? 'text-crm-accent' : 'text-crm-ink'}`}>
          {tp.tier.is_special ? '🏁 ' : ''}
          {tp.tier.label}
        </span>
        <span className="text-xs text-crm-muted">
          {tp.count}/{tp.target} rdv
        </span>
      </div>
      <div className="h-2 rounded-full bg-crm-bg overflow-hidden mb-2">
        <div
          className="h-full rounded-full transition-all duration-500 bg-crm-accent"
          style={{ width: `${tp.progress * 100}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-crm-muted">
          {tp.tier.period === '3_months' ? 'Sur 3 mois glissants' : 'Cumulé'}
        </span>
        <span className={tp.achieved ? 'text-crm-accent font-semibold' : 'text-crm-muted'}>
          Récompense : {tp.tier.reward_label}
        </span>
      </div>
    </div>
  )
}
