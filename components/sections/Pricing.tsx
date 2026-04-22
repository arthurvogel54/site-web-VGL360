'use client'

import { Badge } from '@/components/ui/Badge'

const packs = [
  {
    id: '01',
    name: 'Pack Standard',
    price: 2299,
    tagline: 'La base solide pour votre présence en ligne.',
    features: [
      'Site vitrine complet',
      'Landing Page optimisée',
      'SEO de base intégré',
      'Design Responsive',
      'Formulaire de contact',
      'Déploiement & mise en ligne',
      'SSL & sécurité inclus',
    ],
    notIncluded: ['Visite Virtuelle Google 360°', 'Boost référencement local'],
    cta: 'Choisir Standard',
    popular: false,
  },
  {
    id: '02',
    name: 'Pack Premium Google+',
    price: 2999,
    tagline: "L'offre complète pour une visibilité locale maximale.",
    features: [
      'Tout le Pack Standard inclus',
      'Visite Virtuelle Google 360°',
      'Boost référencement local',
      'Intégration Google My Business',
      'Immersion client maximale',
      'Déploiement & mise en ligne',
      'SSL & sécurité inclus',
    ],
    notIncluded: [],
    cta: 'Choisir Premium Google+',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-heading"
      className="relative py-28 lg:py-36 bg-white overflow-hidden"
    >
      {/* Soft purple blob */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(214,218,254,0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-6">Tarifs transparents</Badge>
          <h2
            id="pricing-heading"
            className="font-black uppercase leading-none mb-6 text-ink"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            <span className="block">NOS</span>
            <span className="block text-purple">PACKS</span>
          </h2>
          <p className="text-ink-soft max-w-xl mx-auto text-base leading-relaxed">
            Deux offres claires, sans surprise. Choisissez le pack qui correspond à votre ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                pack.popular
                  ? 'bg-purple text-white shadow-[0_20px_60px_rgba(99,65,184,0.3)]'
                  : 'bg-white border border-light-border card-shadow card-shadow-hover'
              }`}
              aria-label={`Pack ${pack.name}`}
            >
              {/* Popular banner */}
              {pack.popular && (
                <div className="text-center py-2.5 text-xs font-black uppercase tracking-widest bg-white/15">
                  ★ Recommandé — Notre meilleure offre
                </div>
              )}

              <div className="flex flex-col flex-1 p-8 gap-8">
                {/* Number */}
                <div
                  className="text-7xl font-black leading-none select-none"
                  style={{ opacity: 0.1 }}
                  aria-hidden="true"
                >
                  {pack.id}
                </div>

                {/* Name pill */}
                <div>
                  <div
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 ${
                      pack.popular ? 'bg-white/20 text-white' : 'bg-purple/10 text-purple'
                    }`}
                  >
                    {pack.popular && (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
                      </svg>
                    )}
                    {pack.name}
                  </div>

                  <div className="flex items-end gap-2 mb-2">
                    <span className={`text-6xl font-black leading-none ${pack.popular ? 'text-white' : 'text-ink'}`}>
                      {pack.price.toLocaleString('fr-FR')}€
                    </span>
                    <span className={`text-sm mb-1.5 font-medium ${pack.popular ? 'text-white/70' : 'text-ink-muted'}`}>HT</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${pack.popular ? 'text-white/70' : 'text-ink-soft'}`}>
                    {pack.tagline}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {pack.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        pack.popular ? 'text-white/90' : 'text-ink-soft'
                      } ${feature === 'Tout le Pack Standard inclus' ? 'font-bold' : ''}`}
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          pack.popular ? 'bg-white/20' : 'bg-purple/10'
                        }`}
                        aria-hidden="true"
                      >
                        <svg className={`w-3 h-3 ${pack.popular ? 'text-white' : 'text-purple'}`} viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                  {pack.notIncluded.map((label) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-sm text-ink-muted/50 line-through"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 border border-current/20" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-black uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                    pack.popular
                      ? 'bg-white text-purple hover:bg-light-soft'
                      : 'bg-purple text-white hover:bg-purple-dark'
                  }`}
                  style={pack.popular ? {} : { boxShadow: '0 8px 30px rgba(99,65,184,0.25)' }}
                  aria-label={`${pack.cta} — ${pack.price.toLocaleString('fr-FR')}€ HT`}
                >
                  {pack.cta}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* 360° note on premium */}
                {pack.popular && (
                  <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-2 border-white/50 flex-shrink-0 text-white">
                      360°
                    </div>
                    <p className="text-xs text-white/60 leading-tight">
                      Visite immersive certifiée Google Street View
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-ink-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Tarifs indicatifs HT. Un devis personnalisé vous sera remis après échange.
          Paiement possible en plusieurs fois sur demande.
        </p>
      </div>
    </section>
  )
}
