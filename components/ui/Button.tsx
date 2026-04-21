'use client'

import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer group relative overflow-hidden',
    size === 'sm' && 'text-xs px-5 py-2.5',
    size === 'md' && 'text-sm px-7 py-3.5',
    size === 'lg' && 'text-base px-9 py-4',
    variant === 'primary' && [
      'bg-citrine text-dark-DEFAULT',
      'hover:bg-citrine-dark hover:scale-105 hover:shadow-[0_0_40px_rgba(244,208,63,0.5)]',
      'active:scale-95',
    ],
    variant === 'secondary' && [
      'bg-purple text-white',
      'hover:bg-purple-light hover:scale-105 hover:shadow-[0_0_40px_rgba(99,65,184,0.5)]',
      'active:scale-95',
    ],
    variant === 'outline' && [
      'border-2 border-mauve/40 text-white',
      'hover:border-purple hover:bg-purple/10 hover:scale-105',
      'active:scale-95',
    ],
    variant === 'ghost' && [
      'text-mauve',
      'hover:text-white hover:bg-white/5',
    ],
    className
  )

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
