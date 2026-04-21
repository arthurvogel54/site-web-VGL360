'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'Approche', href: '#approche' },
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#processus' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-dark-DEFAULT/90 backdrop-blur-xl border-b border-dark-border'
          : 'bg-transparent'
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" aria-label="VGL360 — Accueil" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-purple flex items-center justify-center group-hover:bg-citrine transition-colors duration-300">
            <span className="text-white group-hover:text-dark-DEFAULT font-black text-xs transition-colors duration-300">V</span>
          </div>
          <span className="font-black text-white text-lg tracking-tight">
            VGL<span className="text-citrine">360</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/60 hover:text-white font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-citrine group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button as="a" href="#contact" size="sm" variant="primary">
            Démarrer un projet
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
        >
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden bg-dark-DEFAULT/95 backdrop-blur-xl border-b border-dark-border transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col px-6 py-6 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white font-medium text-lg block transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button as="a" href="#contact" variant="primary" className="w-full justify-center mt-2">
              Démarrer un projet
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
