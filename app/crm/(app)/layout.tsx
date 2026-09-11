import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { Sidebar } from '@/components/crm/Sidebar'
import { MobileNav } from '@/components/crm/MobileNav'
import { CompanySwitcher } from '@/components/crm/CompanySwitcher'
import { StreakBadge } from '@/components/crm/StreakBadge'

export default async function CrmAppLayout({ children }: { children: React.ReactNode }) {
  const { userId, profile, companies, activeCompany } = await getCrmSession()
  const supabase = await createClient()

  const { data: streak } = await supabase
    .from('streaks')
    .select('current_streak, last_valid_date')
    .eq('user_id', userId)
    .maybeSingle()

  const today = new Date().toISOString().slice(0, 10)
  const validatedToday = streak?.last_valid_date === today

  return (
    <div className="min-h-screen bg-crm-bg flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-crm-border bg-crm-card flex items-center justify-between px-4 md:px-8 gap-4">
          <CompanySwitcher companies={companies} activeCompanyId={activeCompany.id} />
          <div className="flex items-center gap-4">
            <StreakBadge current={streak?.current_streak ?? 0} validatedToday={validatedToday} />
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: profile.avatar_color }}
              >
                {profile.full_name.slice(0, 1).toUpperCase()}
              </div>
              <span className="hidden sm:block text-sm text-crm-ink font-medium">
                {profile.full_name}
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 pb-20 md:pb-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
