'use client'

import { clsx } from 'clsx'

interface CrmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md'
}

export function CrmButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: CrmButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'sm' && 'text-xs px-4 py-2',
        size === 'md' && 'text-sm px-5 py-2.5',
        variant === 'primary' && 'bg-crm-accent text-white hover:bg-crm-accent-dark',
        variant === 'outline' && 'border border-crm-border text-crm-ink hover:bg-crm-bg',
        variant === 'ghost' && 'text-crm-muted hover:text-crm-ink hover:bg-crm-bg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
