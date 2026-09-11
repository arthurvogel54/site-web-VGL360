import { Trophy as TrophyIcon } from 'lucide-react'
import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { TrophyGrid } from '@/components/crm/TrophyGrid'

export const metadata = {
  title: 'Trophées — CRM VGL360',
}

export default async function TropheesPage() {
  const { userId } = await getCrmSession()
  const supabase = await createClient()

  const [{ data: trophies }, { data: userTrophies }, { data: leaderboard }] = await Promise.all([
    supabase.from('trophies').select('*').order('position'),
    supabase.from('user_trophies').select('trophy_id').eq('user_id', userId),
    supabase
      .from('user_trophies')
      .select('user_id, profiles(full_name, avatar_color)'),
  ])

  const earnedIds = new Set((userTrophies ?? []).map((t) => t.trophy_id))

  const counts = new Map<string, { name: string; color: string; count: number }>()
  for (const row of leaderboard ?? []) {
    const p = row.profiles as unknown as { full_name: string; avatar_color: string } | null
    if (!p) continue
    const existing = counts.get(row.user_id)
    if (existing) {
      existing.count += 1
    } else {
      counts.set(row.user_id, { name: p.full_name, color: p.avatar_color, count: 1 })
    }
  }
  const ranking = Array.from(counts.values()).sort((a, b) => b.count - a.count)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-extrabold text-crm-ink">Trophées</h1>
        <p className="text-crm-muted text-sm mt-1">
          {earnedIds.size} / {(trophies ?? []).length} débloqués — chaque étape franchie compte.
        </p>
      </div>

      {ranking.length > 1 && (
        <div className="bg-crm-card rounded-2xl p-5 border border-crm-border">
          <p className="text-sm text-crm-muted mb-3 flex items-center gap-2">
            <TrophyIcon size={16} className="text-crm-accent" /> Classement de l&apos;équipe
          </p>
          <div className="flex flex-col gap-2">
            {ranking.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3">
                <span className="text-xs text-crm-muted w-4">{i + 1}</span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="text-sm text-crm-ink flex-1">{r.name}</span>
                <span className="text-sm font-bold text-crm-accent">{r.count} 🏆</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <TrophyGrid trophies={trophies ?? []} earnedIds={earnedIds} />
    </div>
  )
}
