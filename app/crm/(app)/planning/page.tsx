import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { getMonthGrid, monthLabel, parseMonthParam, shiftMonthParam } from '@/lib/crm/calendar'
import { frenchPublicHolidays } from '@/lib/crm/holidays'
import { PlanningCalendar } from '@/components/crm/PlanningCalendar'
import type { Company, PlanningEntry } from '@/lib/crm/database.types'

export const metadata = {
  title: 'Planning — CRM VGL360',
}

export default async function PlanningPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; user?: string }>
}) {
  const params = await searchParams
  const { userId, profile } = await getCrmSession()
  const supabase = await createClient()

  const { data: allProfiles } = await supabase
    .from('profiles')
    .select('id, full_name, role, avatar_color')

  const alternants = (allProfiles ?? []).filter((p) => p.role === 'alternant')
  const selectableProfiles = alternants.length > 0 ? alternants : (allProfiles ?? [])

  const targetUserId =
    params.user && selectableProfiles.some((p) => p.id === params.user) ? params.user : userId
  const targetProfile = selectableProfiles.find((p) => p.id === targetUserId) ?? profile
  const canEdit = targetUserId === userId || profile.role === 'owner'

  const { year, monthIndex0 } = parseMonthParam(params.month)
  const cells = getMonthGrid(year, monthIndex0)
  const rangeStart = cells[0].dateISO
  const rangeEnd = cells[cells.length - 1].dateISO

  const [{ data: entriesData }, { data: targetUserCompanies }] = await Promise.all([
    supabase
      .from('planning_entries')
      .select('*')
      .eq('user_id', targetUserId)
      .gte('entry_date', rangeStart)
      .lte('entry_date', rangeEnd),
    supabase.from('user_companies').select('companies(*)').eq('user_id', targetUserId),
  ])

  const companies = (targetUserCompanies ?? [])
    .map((uc) => uc.companies as unknown as Company)
    .filter(Boolean)

  const entries: Record<string, PlanningEntry> = {}
  for (const e of entriesData ?? []) entries[e.entry_date] = e

  const holidays = [
    ...frenchPublicHolidays(year),
    ...frenchPublicHolidays(year + (monthIndex0 === 11 ? 1 : 0)),
  ]

  const prevMonth = shiftMonthParam(year, monthIndex0, -1)
  const nextMonth = shiftMonthParam(year, monthIndex0, 1)
  const userQuery = params.user ? `&user=${params.user}` : ''

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-extrabold text-crm-ink">Planning</h1>
        <p className="text-crm-muted text-sm mt-1">
          Jours travaillés, week-ends, jours fériés et périodes de formation — société assignée pour chaque
          jour travaillé.
        </p>
      </div>

      {selectableProfiles.length > 1 && (
        <div className="flex gap-2">
          {selectableProfiles.map((p) => (
            <Link
              key={p.id}
              href={`/crm/planning?month=${year}-${String(monthIndex0 + 1).padStart(2, '0')}&user=${p.id}`}
              className={clsx(
                'text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-colors duration-150',
                targetUserId === p.id
                  ? 'bg-crm-accent/10 border-crm-accent text-crm-accent'
                  : 'bg-crm-card border-crm-border text-crm-muted hover:text-crm-ink'
              )}
            >
              {p.full_name}
            </Link>
          ))}
        </div>
      )}

      <div className="bg-crm-card rounded-2xl p-5 border border-crm-border">
        <div className="flex items-center justify-between mb-5">
          <Link
            href={`/crm/planning?month=${prevMonth}${userQuery}`}
            className="p-2 rounded-full hover:bg-crm-bg text-crm-muted hover:text-crm-ink"
          >
            <ChevronLeft size={18} />
          </Link>
          <h2 className="text-crm-ink font-display font-bold capitalize">
            {monthLabel(year, monthIndex0)} — {targetProfile.full_name}
          </h2>
          <Link
            href={`/crm/planning?month=${nextMonth}${userQuery}`}
            className="p-2 rounded-full hover:bg-crm-bg text-crm-muted hover:text-crm-ink"
          >
            <ChevronRight size={18} />
          </Link>
        </div>

        <PlanningCalendar
          cells={cells}
          entries={entries}
          holidays={holidays}
          companies={companies}
          canEdit={canEdit}
          targetUserId={targetUserId}
        />
      </div>
    </div>
  )
}
