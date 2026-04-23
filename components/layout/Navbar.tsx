'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'À Propos', href: '#apropos' },
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
          ? 'bg-white/95 backdrop-blur-xl border-b border-light-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" aria-label="VGL360 — Accueil" className="flex items-center group">
          <img
            src="/360logo-removebg-preview.png"
            alt="VGL360"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-soft hover:text-purple font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300 rounded-full" />
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

        {/* Mobile toggle */}
        <button
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={clsx('w-6 h-0.5 bg-ink transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('w-6 h-0.5 bg-ink transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('w-6 h-0.5 bg-ink transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden bg-white border-b border-light-border transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col px-6 py-6 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-ink-soft hover:text-purple font-medium text-lg block transition-colors duration-200"
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
