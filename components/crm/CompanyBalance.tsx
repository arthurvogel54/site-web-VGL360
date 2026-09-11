import type { Company } from '@/lib/crm/database.types'

export function CompanyBalance({
  companies,
  counts,
}: {
  companies: Company[]
  counts: Record<string, number>
}) {
  const total = companies.reduce((sum, c) => sum + (counts[c.id] ?? 0), 0) || 1

  return (
    <div className="bg-crm-card rounded-2xl p-5 border border-crm-border">
      <p className="text-sm text-crm-muted mb-3">Répartition du travail entre les deux sociétés</p>
      <div className="flex h-3 w-full rounded-full overflow-hidden bg-crm-bg mb-3">
        {companies.map((c) => {
          const pct = ((counts[c.id] ?? 0) / total) * 100
          return (
            <div
              key={c.id}
              style={{ width: `${pct}%`, backgroundColor: c.theme_color }}
              title={`${c.name} : ${Math.round(pct)}%`}
            />
          )
        })}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        {companies.map((c) => {
          const pct = Math.round(((counts[c.id] ?? 0) / total) * 100)
          return (
            <span key={c.id} className="flex items-center gap-2 text-xs text-crm-muted">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.theme_color }} />
              {c.name} — {counts[c.id] ?? 0} rdv ({pct}%)
            </span>
          )
        })}
      </div>
    </div>
  )
}
