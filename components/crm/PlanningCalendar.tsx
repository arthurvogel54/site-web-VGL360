'use client'

import { useState, useTransition } from 'react'
import { clsx } from 'clsx'
import { X } from 'lucide-react'
import type { MonthCell } from '@/lib/crm/calendar'
import type { Company, DayType, PlanningEntry } from '@/lib/crm/database.types'
import { DAY_TYPE_LABELS } from '@/lib/crm/constants'
import { upsertPlanningEntry } from '@/app/crm/actions'

const WEEKDAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

export function PlanningCalendar({
  cells,
  entries,
  holidays,
  companies,
  canEdit,
  targetUserId,
}: {
  cells: MonthCell[]
  entries: Record<string, PlanningEntry>
  holidays: string[]
  companies: Company[]
  canEdit: boolean
  targetUserId: string
}) {
  const holidaySet = new Set(holidays)
  const [editing, setEditing] = useState<string | null>(null)

  function resolvedType(dateISO: string): DayType {
    const entry = entries[dateISO]
    if (entry) return entry.day_type
    if (holidaySet.has(dateISO)) return 'ferie'
    const weekday = new Date(dateISO + 'T00:00:00Z').getUTCDay()
    if (weekday === 0 || weekday === 6) return 'weekend'
    return 'travail'
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {WEEKDAY_LABELS.map((w) => (
          <div key={w} className="text-center text-[11px] uppercase tracking-wider text-crm-muted font-semibold">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {cells.map((cell) => {
          const type = resolvedType(cell.dateISO)
          const entry = entries[cell.dateISO]
          const company = entry?.company_id ? companies.find((c) => c.id === entry.company_id) : null

          return (
            <button
              key={cell.dateISO}
              type="button"
              disabled={!canEdit}
              onClick={() => setEditing(cell.dateISO)}
              className={clsx(
                'aspect-square rounded-xl p-1.5 flex flex-col items-start justify-between text-left border transition-colors duration-150',
                !cell.inMonth && 'opacity-30',
                type === 'weekend' && 'bg-crm-bg border-crm-border',
                type === 'ferie' && 'bg-red-50 border-red-200',
                type === 'formation' && 'bg-blue-50 border-blue-200',
                type === 'travail' && 'bg-crm-accent/5 border-crm-accent/20',
                canEdit && 'hover:border-crm-accent/50 cursor-pointer'
              )}
            >
              <span className="text-xs font-semibold text-crm-ink/80">{cell.day}</span>
              {type === 'travail' && company && (
                <span
                  className="text-[9px] font-bold uppercase tracking-wide rounded-full px-1.5 py-0.5 w-full truncate"
                  style={{ backgroundColor: `${company.theme_color}22`, color: company.theme_color }}
                >
                  {company.name}
                </span>
              )}
              {type !== 'travail' && (
                <span className="text-[9px] text-crm-muted truncate w-full">{DAY_TYPE_LABELS[type]}</span>
              )}
            </button>
          )
        })}
      </div>

      {editing && (
        <DayEditor
          dateISO={editing}
          entry={entries[editing] ?? null}
          companies={companies}
          targetUserId={targetUserId}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  )
}

function DayEditor({
  dateISO,
  entry,
  companies,
  targetUserId,
  onClose,
}: {
  dateISO: string
  entry: PlanningEntry | null
  companies: Company[]
  targetUserId: string
  onClose: () => void
}) {
  const [dayType, setDayType] = useState<DayType>(entry?.day_type ?? 'travail')
  const [companyId, setCompanyId] = useState<string>(entry?.company_id ?? companies[0]?.id ?? '')
  const [note, setNote] = useState(entry?.note ?? '')
  const [isPending, startTransition] = useTransition()

  function handleSave() {
    startTransition(async () => {
      await upsertPlanningEntry(targetUserId, dateISO, dayType, dayType === 'travail' ? companyId : null, note)
      onClose()
    })
  }

  const label = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(
    new Date(dateISO + 'T00:00:00Z')
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="w-full max-w-sm bg-crm-card border border-crm-border rounded-3xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-crm-ink font-bold capitalize">{label}</h3>
          <button onClick={onClose} className="text-crm-muted hover:text-crm-ink">
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">Type de journée</span>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(DAY_TYPE_LABELS) as DayType[]).map((dt) => (
                <button
                  key={dt}
                  type="button"
                  onClick={() => setDayType(dt)}
                  className={clsx(
                    'text-xs font-semibold rounded-lg px-3 py-2 border transition-colors duration-150',
                    dayType === dt
                      ? 'bg-crm-accent/10 border-crm-accent text-crm-accent'
                      : 'bg-crm-bg border-crm-border text-crm-muted hover:text-crm-ink'
                  )}
                >
                  {DAY_TYPE_LABELS[dt]}
                </button>
              ))}
            </div>
          </div>

          {dayType === 'travail' && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">Société</span>
              <div className="flex gap-2">
                {companies.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCompanyId(c.id)}
                    className="flex-1 text-xs font-bold rounded-lg px-3 py-2 border transition-colors duration-150"
                    style={
                      companyId === c.id
                        ? { backgroundColor: `${c.theme_color}1A`, borderColor: c.theme_color, color: c.theme_color }
                        : { borderColor: 'rgba(36,28,21,0.12)', color: '#8A7B6C' }
                    }
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <span className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">Note</span>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-xl bg-crm-bg border border-crm-border px-3 py-2 text-crm-ink text-sm focus:border-crm-accent focus:outline-none"
              placeholder="Optionnel"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="mt-2 rounded-full bg-crm-accent text-white font-bold text-sm py-2.5 hover:bg-crm-accent-dark transition-colors duration-150 disabled:opacity-50"
          >
            {isPending ? 'Enregistrement…' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  )
}
