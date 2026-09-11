'use client'

import { useState, useTransition } from 'react'
import { CheckCircle2, Handshake, PenLine } from 'lucide-react'
import { logRdv } from '@/app/crm/actions'
import type { RdvType } from '@/lib/crm/database.types'

const options: { type: RdvType; label: string; icon: typeof CheckCircle2 }[] = [
  { type: 'pris', label: 'RDV pris', icon: CheckCircle2 },
  { type: 'effectue', label: 'RDV effectué', icon: Handshake },
  { type: 'signe', label: 'RDV signé', icon: PenLine },
]

export function QuickLogRdv({ companyName }: { companyName: string }) {
  const [isPending, startTransition] = useTransition()
  const [justLogged, setJustLogged] = useState<RdvType | null>(null)

  function handleLog(type: RdvType) {
    startTransition(async () => {
      await logRdv(null, type, null)
      setJustLogged(type)
      setTimeout(() => setJustLogged(null), 2000)
    })
  }

  return (
    <div className="bg-crm-card rounded-2xl p-5 border border-crm-border">
      <p className="text-sm text-crm-muted mb-3">
        Enregistrer un rendez-vous pour <span className="text-crm-ink font-semibold">{companyName}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            type="button"
            disabled={isPending}
            onClick={() => handleLog(type)}
            className="flex items-center gap-2 rounded-xl bg-crm-accent/10 hover:bg-crm-accent/20 border border-crm-accent/25 px-4 py-2.5 text-sm font-semibold text-crm-accent transition-colors duration-150 disabled:opacity-50"
          >
            <Icon size={16} />
            {justLogged === type ? 'Ajouté ✓' : label}
          </button>
        ))}
      </div>
    </div>
  )
}
