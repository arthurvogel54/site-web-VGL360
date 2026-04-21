'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const budgets = [
  '< 3 000 €',
  '3 000 – 8 000 €',
  '8 000 – 20 000 €',
  '> 20 000 €',
]

const serviceTypes = [
  'Site vitrine',
  'E-commerce',
  'Application web',
  'Design UI/UX',
  'SEO',
  'Autre',
]

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission — wire to Supabase or email service
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 lg:py-36 bg-dark-card overflow-hidden"
    >
      {/* Decorative */}
      <div aria-hidden="true" className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple/10 blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-citrine/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <Badge variant="purple" className="mb-6">Travaillons ensemble</Badge>
            <h2
              id="contact-heading"
              className="font-black uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="block text-white">LANCEZ</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '2px #F4D03F', color: 'transparent' }}
              >
                VOTRE
              </span>
              <span className="block text-purple">PROJET</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Décrivez votre projet et nous vous répondrons dans les 24 heures
              avec une estimation personnalisée. Premier échange toujours gratuit.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              <a
                href="mailto:hello@vgl360.com"
                className="flex items-center gap-4 group text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Envoyer un email à hello@vgl360.com"
              >
                <div className="w-10 h-10 rounded-xl bg-purple/15 flex items-center justify-center group-hover:bg-purple/30 transition-colors duration-200 flex-shrink-0">
                  <svg className="w-5 h-5 text-mauve" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5h14l-7 7-7-7zM3 5v10h14V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">hello@vgl360.com</span>
              </a>
              <a
                href="tel:+33612345678"
                className="flex items-center gap-4 group text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Appeler VGL360"
              >
                <div className="w-10 h-10 rounded-xl bg-purple/15 flex items-center justify-center group-hover:bg-purple/30 transition-colors duration-200 flex-shrink-0">
                  <svg className="w-5 h-5 text-mauve" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 3C5 3 4 4 4 6c0 6 6 12 12 12 2 0 3-1 3-1l-2-4-2 1s-2-1-4-3-3-4-3-4l1-2L5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">+33 6 12 34 56 78</span>
              </a>
            </div>

            {/* Bold accent */}
            <div
              aria-hidden="true"
              className="mt-16 text-8xl font-black leading-none select-none"
              style={{ WebkitTextStroke: '1px rgba(99,65,184,0.2)', color: 'transparent' }}
            >
              360°
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 bg-dark-DEFAULT border border-green-500/20 rounded-2xl p-12">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Message envoyé !</h3>
                  <p className="text-white/50">Nous vous répondrons dans les 24 heures. À très vite !</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-dark-DEFAULT border border-dark-border rounded-2xl p-8 flex flex-col gap-5"
                aria-label="Formulaire de contact"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
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
                      className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple focus:bg-purple/5 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
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
                      className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple focus:bg-purple/5 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                    Entreprise
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Mon Entreprise SAS"
                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple focus:bg-purple/5 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                    Type de service
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, service: s }))}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                          form.service === s
                            ? 'bg-purple border-purple text-white'
                            : 'border-dark-border text-white/50 hover:border-purple/50 hover:text-white/80'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                    Budget indicatif
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                          form.budget === b
                            ? 'bg-citrine border-citrine text-dark-DEFAULT'
                            : 'border-dark-border text-white/50 hover:border-citrine/50 hover:text-white/80'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre projet, vos objectifs, vos délais..."
                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple focus:bg-purple/5 focus:outline-none transition-colors duration-200 resize-none"
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

                <p className="text-xs text-white/25 text-center">
                  Réponse garantie sous 24h · Premier échange gratuit
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
