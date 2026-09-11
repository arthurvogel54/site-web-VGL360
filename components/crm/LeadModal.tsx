'use client'

import { useState, useTransition } from 'react'
import { X, Trash2 } from 'lucide-react'
import { CrmButton } from '@/components/crm/Button'
import { SECTOR_SUGGESTIONS } from '@/lib/crm/constants'
import { createLead, updateLead, deleteLead, type LeadInput } from '@/app/crm/actions'
import type { Lead } from '@/lib/crm/database.types'

const emptyForm: LeadInput = {
  prospect_name: '',
  value: 0,
  city: '',
  referent_name: '',
  sector: '',
  contact_date: '',
  notes: '',
}

export function LeadModal({
  stageId,
  lead,
  onClose,
}: {
  stageId: string
  lead: Lead | null
  onClose: () => void
}) {
  const [form, setForm] = useState<LeadInput>(
    lead
      ? {
          prospect_name: lead.prospect_name,
          value: lead.value,
          city: lead.city ?? '',
          referent_name: lead.referent_name ?? '',
          sector: lead.sector ?? '',
          contact_date: lead.contact_date ?? '',
          notes: lead.notes ?? '',
        }
      : emptyForm
  )
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function update<K extends keyof LeadInput>(key: K, value: LeadInput[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.prospect_name.trim()) {
      setError('Le nom de la société est requis.')
      return
    }
    setError(null)
    startTransition(async () => {
      const result = lead ? await updateLead(lead.id, form) : await createLead(stageId, form)
      if (result?.error) {
        setError(result.error)
        return
      }
      onClose()
    })
  }

  function handleDelete() {
    if (!lead) return
    if (!confirm(`Supprimer la carte « ${lead.prospect_name} » ?`)) return
    startTransition(async () => {
      await deleteLead(lead.id)
      onClose()
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg bg-crm-card border border-crm-border rounded-3xl p-6 max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-bold text-crm-ink">
            {lead ? 'Modifier le lead' : 'Nouveau lead'}
          </h2>
          <button type="button" onClick={onClose} className="text-crm-muted hover:text-crm-ink">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Nom de la société">
            <input
              required
              value={form.prospect_name}
              onChange={(e) => update('prospect_name', e.target.value)}
              className={inputClass}
              placeholder="Ex : Agence Immo du Port"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Valeur du lead (€)">
              <input
                type="number"
                min={0}
                step="0.01"
                value={form.value}
                onChange={(e) => update('value', Number(e.target.value))}
                className={inputClass}
              />
            </Field>
            <Field label="Date de contact">
              <input
                type="date"
                value={form.contact_date}
                onChange={(e) => update('contact_date', e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Ville / lieu">
            <input
              value={form.city}
              onChange={(e) => update('city', e.target.value)}
              className={inputClass}
              placeholder="Ex : Cannes"
            />
          </Field>

          <Field label="Nom du référent">
            <input
              value={form.referent_name}
              onChange={(e) => update('referent_name', e.target.value)}
              className={inputClass}
              placeholder="Ex : Julie Martin"
            />
          </Field>

          <Field label="Secteur d'activité">
            <input
              list="sector-suggestions"
              value={form.sector}
              onChange={(e) => update('sector', e.target.value)}
              className={inputClass}
              placeholder="Ex : Agent immobilier"
            />
            <datalist id="sector-suggestions">
              {SECTOR_SUGGESTIONS.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
          </Field>

          <Field label="Notes">
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              className={inputClass + ' min-h-24 resize-y'}
              placeholder="Échanges, relances à prévoir…"
            />
          </Field>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between mt-2">
            {lead ? (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 text-sm text-red-600/80 hover:text-red-600"
              >
                <Trash2 size={16} /> Supprimer
              </button>
            ) : (
              <span />
            )}
            <CrmButton type="submit" variant="primary" size="sm" disabled={isPending}>
              {isPending ? 'Enregistrement…' : 'Enregistrer'}
            </CrmButton>
          </div>
        </form>
      </div>
    </div>
  )
}

const inputClass =
  'w-full rounded-xl bg-crm-bg border border-crm-border px-4 py-2.5 text-crm-ink text-sm focus:border-crm-accent focus:outline-none'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">{label}</span>
      {children}
    </label>
  )
}
