'use client'

import { MapPin, User2, CalendarClock } from 'lucide-react'
import type { Lead } from '@/lib/crm/database.types'

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short' })

export function LeadCard({
  lead,
  assigneeInitial,
  assigneeColor,
  onOpen,
  onDragStart,
}: {
  lead: Lead
  assigneeInitial: string | null
  assigneeColor: string | null
  onOpen: () => void
  onDragStart: (e: React.DragEvent) => void
}) {
  return (
    <button
      type="button"
      draggable
      onDragStart={onDragStart}
      onClick={onOpen}
      className="w-full text-left bg-crm-card border border-crm-border hover:border-crm-accent/50 hover:shadow-sm rounded-2xl p-4 flex flex-col gap-2 cursor-grab active:cursor-grabbing transition-all duration-150"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-crm-ink text-sm leading-tight">{lead.prospect_name}</span>
        {assigneeInitial && (
          <span
            className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            style={{ backgroundColor: assigneeColor ?? '#FF6A13' }}
          >
            {assigneeInitial}
          </span>
        )}
      </div>

      <span className="text-crm-accent font-bold text-sm">{currencyFormatter.format(lead.value)}</span>

      {lead.sector && (
        <span className="inline-flex w-fit text-[10px] uppercase tracking-wider font-semibold text-crm-accent bg-crm-accent/10 border border-crm-accent/20 rounded-full px-2.5 py-1">
          {lead.sector}
        </span>
      )}

      <div className="flex flex-col gap-1 text-xs text-crm-muted mt-1">
        {lead.city && (
          <span className="flex items-center gap-1.5">
            <MapPin size={12} /> {lead.city}
          </span>
        )}
        {lead.referent_name && (
          <span className="flex items-center gap-1.5">
            <User2 size={12} /> {lead.referent_name}
          </span>
        )}
        {lead.contact_date && (
          <span className="flex items-center gap-1.5">
            <CalendarClock size={12} /> {dateFormatter.format(new Date(lead.contact_date))}
          </span>
        )}
      </div>
    </button>
  )
}
