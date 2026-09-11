'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { LayoutDashboard, KanbanSquare, Target, CalendarDays, Trophy } from 'lucide-react'

const links = [
  { href: '/crm/dashboard', label: 'Accueil', icon: LayoutDashboard },
  { href: '/crm/pipeline', label: 'Pipeline', icon: KanbanSquare },
  { href: '/crm/objectifs', label: 'Objectifs', icon: Target },
  { href: '/crm/planning', label: 'Planning', icon: CalendarDays },
  { href: '/crm/trophees', label: 'Trophées', icon: Trophy },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navigation CRM mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-crm-card border-t border-crm-border flex items-stretch"
    >
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide',
              active ? 'text-crm-accent' : 'text-crm-muted'
            )}
          >
            <Icon size={18} strokeWidth={2} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
