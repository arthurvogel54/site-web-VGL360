import { clsx } from 'clsx'
import type { Trophy } from '@/lib/crm/database.types'

const CATEGORY_LABELS: Record<Trophy['category'], string> = {
  etape: 'Étapes clés',
  secteur: 'Secteurs d\'activité',
  palier: 'Paliers de rendez-vous',
}

export function TrophyGrid({
  trophies,
  earnedIds,
}: {
  trophies: Trophy[]
  earnedIds: Set<string>
}) {
  const categories: Trophy['category'][] = ['etape', 'secteur', 'palier']

  return (
    <div className="flex flex-col gap-8">
      {categories.map((cat) => {
        const list = trophies.filter((t) => t.category === cat)
        if (list.length === 0) return null
        return (
          <div key={cat}>
            <h2 className="text-lg font-display font-bold text-crm-ink mb-3">{CATEGORY_LABELS[cat]}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {list.map((t) => {
                const earned = earnedIds.has(t.id)
                return (
                  <div
                    key={t.id}
                    className={clsx(
                      'rounded-2xl p-4 border flex flex-col items-center text-center gap-2',
                      earned ? 'bg-crm-accent/5 border-crm-accent/30' : 'bg-crm-card border-crm-border opacity-50'
                    )}
                  >
                    <span className="text-3xl" role="img" aria-hidden>
                      {t.icon}
                    </span>
                    <span className={clsx('text-sm font-bold', earned ? 'text-crm-accent' : 'text-crm-ink')}>
                      {t.label}
                    </span>
                    <span className="text-[11px] text-crm-muted leading-snug">{t.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
