'use client'

import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'purple' | 'mauve' | 'outline' | 'white'
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
        variant === 'purple' && 'bg-purple/10 text-purple border border-purple/20',
        variant === 'mauve' && 'bg-mauve/60 text-ink border border-mauve',
        variant === 'outline' && 'border border-ink/20 text-ink-soft',
        variant === 'white' && 'bg-white/20 text-white border border-white/30',
        className
      )}
    >
      {children}
    </span>
  )
}
