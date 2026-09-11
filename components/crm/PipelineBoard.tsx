'use client'

import { useEffect, useMemo, useState } from 'react'
import { Plus, Search } from 'lucide-react'
import { clsx } from 'clsx'
import { LeadCard } from './LeadCard'
import { LeadModal } from './LeadModal'
import { moveLead } from '@/app/crm/actions'
import type { Lead, LeadStatus, PipelineStage } from '@/lib/crm/database.types'

interface ProfileLite {
  id: string
  full_name: string
  avatar_color: string
}

const STATUS_TABS: { key: LeadStatus | 'all'; label: string }[] = [
  { key: 'open', label: 'En cours' },
  { key: 'won', label: 'Gagné' },
  { key: 'lost', label: 'Perdu' },
  { key: 'all', label: 'Tous' },
]

export function PipelineBoard({
  stages,
  leads,
  profiles,
}: {
  stages: PipelineStage[]
  leads: Lead[]
  profiles: ProfileLite[]
  currentUserId: string
}) {
  const [localLeads, setLocalLeads] = useState(leads)
  const [modal, setModal] = useState<{ stageId: string; lead: Lead | null } | null>(null)
  const [dragOverStage, setDragOverStage] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('open')
  const [search, setSearch] = useState('')

  useEffect(() => setLocalLeads(leads), [leads])

  const profileById = new Map(profiles.map((p) => [p.id, p]))

  const counts = useMemo(() => {
    const c: Record<string, number> = { open: 0, won: 0, lost: 0, all: localLeads.length }
    for (const l of localLeads) c[l.status] = (c[l.status] ?? 0) + 1
    return c
  }, [localLeads])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return localLeads.filter((l) => {
      if (statusFilter !== 'all' && l.status !== statusFilter) return false
      if (term && !l.prospect_name.toLowerCase().includes(term)) return false
      return true
    })
  }, [localLeads, statusFilter, search])

  function leadsForStage(stageId: string) {
    return filtered.filter((l) => l.stage_id === stageId).sort((a, b) => a.position - b.position)
  }

  function handleDrop(stageId: string) {
    setDragOverStage(null)
    return (e: React.DragEvent) => {
      e.preventDefault()
      const leadId = e.dataTransfer.getData('text/lead-id')
      const lead = localLeads.find((l) => l.id === leadId)
      if (!lead || lead.stage_id === stageId) return

      const newPosition = leadsForStage(stageId).length
      setLocalLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, stage_id: stageId, position: newPosition } : l))
      )
      moveLead(leadId, stageId, newPosition)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex items-center gap-1 bg-crm-card border border-crm-border rounded-full p-1">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setStatusFilter(tab.key)}
              className={clsx(
                'text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-colors duration-150',
                statusFilter === tab.key
                  ? 'bg-crm-accent text-white'
                  : 'text-crm-muted hover:text-crm-ink'
              )}
            >
              {tab.label} {counts[tab.key] ?? 0}
            </button>
          ))}
        </div>

        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-crm-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher…"
            className="w-full rounded-full bg-crm-card border border-crm-border pl-9 pr-4 py-2 text-sm text-crm-ink focus:border-crm-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        {stages.map((stage) => {
          const stageLeads = leadsForStage(stage.id)
          const total = stageLeads.reduce((sum, l) => sum + Number(l.value), 0)

          return (
            <div
              key={stage.id}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOverStage(stage.id)
              }}
              onDragLeave={() => setDragOverStage((s) => (s === stage.id ? null : s))}
              onDrop={handleDrop(stage.id)}
              className={clsx(
                'shrink-0 w-72 rounded-2xl border p-3 flex flex-col gap-3 transition-colors duration-150',
                dragOverStage === stage.id ? 'border-crm-accent bg-crm-accent/5' : 'border-crm-border bg-crm-card'
              )}
            >
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }} />
                  <span className="text-sm font-bold text-crm-ink">{stage.name}</span>
                  <span className="text-xs text-crm-muted">{stageLeads.length}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setModal({ stageId: stage.id, lead: null })}
                  className="text-crm-muted hover:text-crm-accent"
                  aria-label={`Ajouter un lead dans ${stage.name}`}
                >
                  <Plus size={16} />
                </button>
              </div>
              {total > 0 && (
                <span className="px-1 text-[11px] text-crm-muted">
                  {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(total)}{' '}
                  potentiel
                </span>
              )}

              <div className="flex flex-col gap-2 min-h-[4rem]">
                {stageLeads.map((lead) => {
                  const assignee = lead.assigned_to ? profileById.get(lead.assigned_to) : null
                  return (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      assigneeInitial={assignee ? assignee.full_name.slice(0, 1).toUpperCase() : null}
                      assigneeColor={assignee?.avatar_color ?? null}
                      onOpen={() => setModal({ stageId: stage.id, lead })}
                      onDragStart={(e) => e.dataTransfer.setData('text/lead-id', lead.id)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {modal && (
        <LeadModal stageId={modal.stageId} lead={modal.lead} onClose={() => setModal(null)} />
      )}
    </div>
  )
}
