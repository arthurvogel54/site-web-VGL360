'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const packs = [
  {
    id: '01',
    name: 'Essentiel',
    price: 1500,
    monthly: 150,
    monthsCount: 10,
    tagline: 'Pour démarrer avec un site propre et professionnel.',
    color: '#D6DAFD',
    textDark: true,
    features: [
      { label: 'Site vitrine jusqu\'à 5 pages', included: true },
      { label: 'Design personnalisé', included: true },
      { label: 'Responsive mobile-first', included: true },
      { label: 'Formulaire de contact', included: true },
      { label: 'SEO de base intégré', included: true },
      { label: 'Déploiement & mise en ligne', included: true },
      { label: 'Animations & micro-interactions', included: false },
      { label: 'Blog / actualités', included: false },
      { label: 'Visite virtuelle Google', included: false },
    ],
    cta: 'Choisir Essentiel',
    popular: false,
  },
  {
    id: '02',
    name: 'Pro',
    price: 2000,
    monthly: 200,
    monthsCount: 10,
    tagline: 'Pour aller plus loin avec un site complet et animé.',
    color: '#6341B8',
    textDark: false,
    features: [
      { label: 'Site vitrine jusqu\'à 10 pages', included: true },
      { label: 'Design personnalisé premium', included: true },
      { label: 'Responsive mobile-first', included: true },
      { label: 'Formulaire de contact avancé', included: true },
      { label: 'SEO technique complet', included: true },
      { label: 'Déploiement & mise en ligne', included: true },
      { label: 'Animations & micro-interactions', included: true },
      { label: 'Blog / actualités', included: true },
      { label: 'Visite virtuelle Google', included: false },
    ],
    cta: 'Choisir Pro',
    popular: true,
  },
  {
    id: '03',
    name: 'Premium',
    price: 3000,
    monthly: 300,
    monthsCount: 10,
    tagline: 'L\'offre complète pour une présence en ligne maximale.',
    color: '#F4D03F',
    textDark: true,
    features: [
      { label: 'Pages illimitées', included: true },
      { label: 'Design sur mesure haut de gamme', included: true },
      { label: 'Responsive mobile-first', included: true },
      { label: 'Formulaire de contact avancé', included: true },
      { label: 'SEO technique complet', included: true },
      { label: 'Déploiement & mise en ligne', included: true },
      { label: 'Animations & micro-interactions', included: true },
      { label: 'Blog / actualités', included: true },
      { label: 'Visite virtuelle Google 360°', included: true },
    ],
    cta: 'Choisir Premium',
    popular: false,
  },
]

export function Pricing() {
  const [monthly, setMonthly] = useState(false)

  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-heading"
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="purple" className="mb-6">Tarifs transparents</Badge>
          <h2
            id="pricing-heading"
            className="font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            <span className="block text-white">NOS</span>
            <span className="block text-citrine">PACKS</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Des offres claires, sans surprise. Choisissez le pack qui correspond
            à votre projet et votre budget.
          </p>
        </div>

        {/* Paiement toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-bold transition-colors duration-200 ${!monthly ? 'text-white' : 'text-white/40'}`}>
            Paiement unique
          </span>
          <button
            role="switch"
            aria-checked={monthly}
            aria-label="Basculer vers le paiement mensuel"
            onClick={() => setMonthly(!monthly)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple ${monthly ? 'bg-purple' : 'bg-dark-border'}`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${monthly ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
          <span className={`text-sm font-bold transition-colors duration-200 ${monthly ? 'text-white' : 'text-white/40'}`}>
            Paiement mensuel
          </span>
          {monthly && (
            <span className="text-xs font-black bg-purple/20 text-mauve border border-purple/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Sur 10 mois
            </span>
          )}
        </div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                pack.popular
                  ? 'ring-2 ring-purple scale-[1.02] shadow-[0_0_60px_rgba(99,65,184,0.25)]'
                  : 'border border-dark-border hover:border-purple/30'
              }`}
              aria-label={`Pack ${pack.name}`}
            >
              {/* Popular badge */}
              {pack.popular && (
                <div
                  className="text-center py-2 text-xs font-black uppercase tracking-widest text-white"
                  style={{ background: pack.color }}
                  aria-label="Le plus populaire"
                >
                  ★ Le plus populaire
                </div>
              )}

              <div className="bg-dark-card flex flex-col flex-1 p-8 gap-8">
                {/* Pack name & price */}
                <div>
                  {/* Number accent */}
                  <div
                    className="text-6xl font-black leading-none mb-4 opacity-15"
                    style={{ color: pack.color }}
                    aria-hidden="true"
                  >
                    {pack.id}
                  </div>

                  <div
                    className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                    style={{ color: pack.textDark ? '#0A0A0F' : '#fff', background: pack.color }}
                  >
                    {pack.name}
                  </div>

                  <div className="flex items-end gap-2 mt-4 mb-1">
                    <span className="text-5xl font-black text-white leading-none">
                      {monthly ? pack.monthly : pack.price}€
                    </span>
                    <span className="text-white/40 text-sm mb-1 font-medium">
                      {monthly ? '/ mois' : 'HT'}
                    </span>
                  </div>
                  {monthly && (
                    <p className="text-white/30 text-xs">
                      soit {pack.price}€ sur {pack.monthsCount} mois — sans intérêt
                    </p>
                  )}
                  <p className="text-white/50 text-sm leading-relaxed mt-3">
                    {pack.tagline}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {pack.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={`flex items-start gap-3 text-sm ${feature.included ? 'text-white/80' : 'text-white/25 line-through decoration-white/15'}`}
                    >
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black ${
                          feature.included ? '' : 'bg-white/5'
                        }`}
                        style={feature.included ? { background: pack.color, color: pack.textDark ? '#0A0A0F' : '#fff' } : {}}
                        aria-hidden="true"
                      >
                        {feature.included ? '✓' : ''}
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  style={{
                    background: pack.color,
                    color: pack.textDark ? '#0A0A0F' : '#fff',
                  }}
                  aria-label={`${pack.cta} — ${monthly ? pack.monthly + '€/mois' : pack.price + '€'}`}
                >
                  {pack.cta}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Tous les tarifs sont indicatifs et peuvent varier selon la complexité du projet.
          Le paiement mensuel s'étale sur 10 mois sans frais supplémentaires.
          Un devis personnalisé vous sera fourni après échange.
        </p>
      </div>
    </section>
  )
}
