'use client'

import { useTransition } from 'react'
import { clsx } from 'clsx'
import { switchCompany } from '@/app/crm/actions'
import type { Company } from '@/lib/crm/database.types'

export function CompanySwitcher({
  companies,
  activeCompanyId,
}: {
  companies: Company[]
  activeCompanyId: string
}) {
  const [isPending, startTransition] = useTransition()

  if (companies.length < 2) {
    const only = companies[0]
    return only ? (
      <span
        className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border"
        style={{ borderColor: `${only.theme_color}55`, color: only.theme_color, backgroundColor: `${only.theme_color}12` }}
      >
        {only.name}
      </span>
    ) : null
  }

  return (
    <div className="flex items-center gap-1 bg-crm-bg border border-crm-border rounded-full p-1">
      {companies.map((company) => {
        const active = company.id === activeCompanyId
        return (
          <button
            key={company.id}
            type="button"
            disabled={isPending}
            onClick={() => startTransition(() => switchCompany(company.slug))}
            className={clsx(
              'text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200',
              active ? 'text-white' : 'text-crm-muted hover:text-crm-ink'
            )}
            style={active ? { backgroundColor: company.theme_color } : undefined}
          >
            {company.name}
          </button>
        )
      })}
    </div>
  )
}
