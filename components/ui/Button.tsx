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
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden',
    size === 'sm' && 'text-xs px-5 py-2.5 tracking-wide',
    size === 'md' && 'text-sm px-7 py-3.5 tracking-wide',
    size === 'lg' && 'text-base px-9 py-4 tracking-wide',
    variant === 'primary' && [
      'bg-purple text-white shadow-lg',
      'hover:bg-purple-dark hover:scale-105 hover:shadow-[0_8px_30px_rgba(99,65,184,0.35)]',
      'active:scale-95',
    ],
    variant === 'secondary' && [
      'bg-mauve text-ink',
      'hover:bg-mauve-dark hover:scale-105',
      'active:scale-95',
    ],
    variant === 'outline' && [
      'border-2 border-purple text-purple bg-white',
      'hover:bg-purple hover:text-white hover:scale-105',
      'active:scale-95',
    ],
    variant === 'ghost' && [
      'text-purple',
      'hover:text-purple-dark hover:bg-purple/5',
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
