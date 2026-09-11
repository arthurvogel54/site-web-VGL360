'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import {
  LayoutDashboard,
  KanbanSquare,
  Target,
  CalendarDays,
  Trophy,
  LogOut,
} from 'lucide-react'
import { signOut } from '@/app/crm/actions'

const sections = [
  {
    label: 'CRM',
    links: [
      { href: '/crm/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
      { href: '/crm/pipeline', label: 'Affaires en cours', icon: KanbanSquare },
    ],
  },
  {
    label: 'Performance',
    links: [
      { href: '/crm/objectifs', label: 'Objectifs', icon: Target },
      { href: '/crm/trophees', label: 'Trophées', icon: Trophy },
    ],
  },
  {
    label: 'Organisation',
    links: [{ href: '/crm/planning', label: 'Planning', icon: CalendarDays }],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-crm-border bg-crm-sidebar min-h-screen sticky top-0">
      <div className="h-16 flex items-center gap-2 px-6 border-b border-crm-border">
        <div className="w-7 h-7 rounded-lg bg-crm-accent flex items-center justify-center">
          <span className="text-white font-black text-xs">V</span>
        </div>
        <span className="font-black text-crm-ink tracking-tight">
          CRM <span className="text-crm-accent">360</span>
        </span>
      </div>

      <nav className="flex-1 px-3 py-6 flex flex-col gap-6" aria-label="Navigation CRM">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-4 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-crm-muted">
              {section.label}
            </p>
            <div className="flex flex-col gap-1">
              {section.links.map(({ href, label, icon: Icon }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                return (
                  <Link
                    key={href}
                    href={href}
                    className={clsx(
                      'flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150',
                      active
                        ? 'bg-crm-accent text-white shadow-sm shadow-crm-accent/30'
                        : 'text-crm-ink/70 hover:text-crm-ink hover:bg-crm-bg'
                    )}
                  >
                    <Icon size={18} strokeWidth={2} />
                    {label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <form action={signOut} className="px-3 pb-6">
        <button
          type="submit"
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-crm-muted hover:text-crm-ink hover:bg-crm-bg transition-colors duration-150 w-full"
        >
          <LogOut size={18} strokeWidth={2} />
          Déconnexion
        </button>
      </form>
    </aside>
  )
}
