'use client'

import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'purple' | 'citrine' | 'fuchsia' | 'outline'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ children, variant = 'purple', size = 'md', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-semibold uppercase tracking-widest rounded-full',
        size === 'sm' && 'text-xs px-3 py-1',
        size === 'md' && 'text-xs px-4 py-1.5',
        variant === 'purple' && 'bg-purple/20 text-mauve border border-purple/30',
        variant === 'citrine' && 'bg-citrine/20 text-citrine border border-citrine/30',
        variant === 'fuchsia' && 'bg-fuchsia-vgl/20 text-fuchsia-vgl border border-fuchsia-vgl/30',
        variant === 'outline' && 'border border-white/20 text-white/70',
        className
      )}
    >
      {children}
    </span>
  )
}
