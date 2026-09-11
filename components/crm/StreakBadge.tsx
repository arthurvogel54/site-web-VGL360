import { Flame } from 'lucide-react'
import { clsx } from 'clsx'

export function StreakBadge({ current, validatedToday }: { current: number; validatedToday: boolean }) {
  return (
    <div
      className={clsx(
        'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold border',
        validatedToday
          ? 'bg-crm-accent/10 border-crm-accent/30 text-crm-accent'
          : 'bg-crm-bg border-crm-border text-crm-muted'
      )}
      title={
        validatedToday
          ? "Flamme du jour validée (4 rendez-vous pris) !"
          : "Prends 4 rendez-vous aujourd'hui pour garder la flamme"
      }
    >
      <Flame size={16} className={validatedToday ? 'fill-crm-accent' : ''} />
      {current}
    </div>
  )
}
