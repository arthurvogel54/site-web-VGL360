'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 lg:py-36 bg-light-soft overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,65,184,0.06) 0%, transparent 70%)' }}
      />

      {/* Star decoration */}
      <div aria-hidden="true" className="absolute bottom-10 right-10 pointer-events-none" style={{ transform: 'rotate(-15deg)', opacity: 0.15 }}>
        <img src="/etoile-removebg-preview.png" alt="" className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <Badge variant="purple" className="mb-6">Travaillons ensemble</Badge>
            <h2
              id="contact-heading"
              className="font-display font-black uppercase leading-none mb-8 text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="block">LANCEZ</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '2px #6341B8', color: 'transparent' }}
              >
                VOTRE
              </span>
              <span className="block text-purple">PROJET</span>
            </h2>
            <p className="text-ink-soft leading-relaxed mb-10 max-w-sm">
              Décrivez votre projet en quelques lignes. Je vous réponds sous 24 heures
              avec une estimation personnalisée. Premier échange toujours gratuit.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:easy.vgl360@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Envoyer un email"
              >
                <div className="w-11 h-11 rounded-2xl bg-purple/10 flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple group-hover:text-white transition-colors duration-200" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5h14l-7 7-7-7zM3 5v10h14V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium text-sm text-ink-soft group-hover:text-purple transition-colors duration-200">
                  easy.vgl360@gmail.com
                </span>
              </a>
              <a
                href="tel:+33757631254"
                className="flex items-center gap-4 group"
                aria-label="Appeler VGL360"
              >
                <div className="w-11 h-11 rounded-2xl bg-purple/10 flex items-center justify-center group-hover:bg-purple transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple group-hover:text-white transition-colors duration-200" viewBox="0 0 20 20" fill="none">
                    <path d="M5 3C5 3 4 4 4 6c0 6 6 12 12 12 2 0 3-1 3-1l-2-4-2 1s-2-1-4-3-3-4-3-4l1-2L5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium text-sm text-ink-soft group-hover:text-purple transition-colors duration-200">
                  07 57 63 12 54
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3z" fill="currentColor" opacity="0.7"/>
                  </svg>
                </div>
                <span className="font-medium text-sm text-ink-soft">Toulouse, France</span>
              </div>
            </div>

            {/* Accent text */}
            <div
              aria-hidden="true"
              className="mt-14 text-8xl font-black leading-none select-none"
              style={{ WebkitTextStroke: '1px rgba(99,65,184,0.15)', color: 'transparent' }}
            >
              360°
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 bg-white border border-light-border rounded-3xl p-12 card-shadow">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ink mb-2">Message envoyé !</h3>
                  <p className="text-ink-soft text-sm">Je vous réponds sous 24 heures. À très vite !</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-light-border rounded-3xl p-8 flex flex-col gap-5 card-shadow"
                aria-label="Formulaire de contact"
                noValidate
              >
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-ink-muted mb-2">
                    Nom *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full bg-light-soft border border-light-border rounded-2xl px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-ink-muted mb-2">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@entreprise.com"
                    className="w-full bg-light-soft border border-light-border rounded-2xl px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-ink-muted mb-2">
                    Votre projet *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                    className="w-full bg-light-soft border border-light-border rounded-2xl px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/10 transition-all duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'sending'}
                  className="w-full justify-center"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </Button>

                <p className="text-xs text-ink-muted text-center">
                  Réponse garantie sous 24h · Premier échange toujours gratuit
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
