'use client'

import { Badge } from '@/components/ui/Badge'

const packs = [
  {
    id: '01',
    name: 'Pack Standard',
    price: 2299,
    tagline: 'La base solide pour votre présence en ligne.',
    color: '#6341B8',
    textOnColor: '#fff',
    features: [
      { label: 'Site vitrine complet', star: false },
      { label: 'Landing Page optimisée', star: false },
      { label: 'SEO de base intégré', star: false },
      { label: 'Design Responsive', star: false },
      { label: 'Formulaire de contact', star: false },
      { label: 'Déploiement & mise en ligne', star: false },
      { label: 'SSL & sécurité inclus', star: false },
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
    color: '#DFFF00',
    textOnColor: '#0A0A0F',
    features: [
      { label: 'Tout le Pack Standard inclus', star: true },
      { label: 'Visite Virtuelle Google 360°', star: true },
      { label: 'Boost référencement local', star: true },
      { label: 'Intégration Google My Business', star: false },
      { label: 'Immersion client maximale', star: false },
      { label: 'Déploiement & mise en ligne', star: false },
      { label: 'SSL & sécurité inclus', star: false },
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
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
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
            Deux offres claires, sans surprise. Choisissez le pack qui correspond à votre ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                pack.popular
                  ? 'ring-2 shadow-[0_0_60px_rgba(223,255,0,0.12)]'
                  : 'border border-dark-border'
              }`}
              style={pack.popular ? { ringColor: pack.color, outlineColor: pack.color, boxShadow: '0 0 0 2px #DFFF00, 0 0 60px rgba(223,255,0,0.12)' } : {}}
              aria-label={`Pack ${pack.name}`}
            >
              {/* Top banner for popular */}
              {pack.popular && (
                <div
                  className="text-center py-2.5 text-xs font-black uppercase tracking-widest"
                  style={{ background: pack.color, color: pack.textOnColor }}
                >
                  ★ Recommandé — Notre meilleure offre
                </div>
              )}

              <div className="bg-dark-card flex flex-col flex-1 p-8 gap-8">

                {/* Pack number + name */}
                <div>
                  <div
                    className="text-7xl font-black leading-none mb-4 select-none"
                    style={{ color: pack.color, opacity: 0.1 }}
                    aria-hidden="true"
                  >
                    {pack.id}
                  </div>

                  <div
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                    style={{ background: pack.color, color: pack.textOnColor }}
                  >
                    {pack.popular && (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
                      </svg>
                    )}
                    {pack.name}
                  </div>

                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-6xl font-black text-white leading-none">
                      {pack.price.toLocaleString('fr-FR')}€
                    </span>
                    <span className="text-white/40 text-sm mb-1.5 font-medium">HT</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{pack.tagline}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {pack.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={`flex items-start gap-3 text-sm ${feature.star ? 'text-white font-semibold' : 'text-white/70'}`}
                    >
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{ background: pack.color, color: pack.textOnColor }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {feature.label}
                    </li>
                  ))}
                  {pack.notIncluded.map((label) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-sm text-white/20 line-through decoration-white/10"
                    >
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5"
                        aria-hidden="true"
                      />
                      {label}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-black uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ background: pack.color, color: pack.textOnColor }}
                  aria-label={`${pack.cta} — ${pack.price.toLocaleString('fr-FR')}€ HT`}
                >
                  {pack.cta}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Premium 360° badge */}
                {pack.popular && (
                  <div className="flex items-center gap-3 pt-2 border-t border-dark-border">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-2 flex-shrink-0"
                      style={{ borderColor: '#DFFF00', color: '#DFFF00' }}
                      aria-hidden="true"
                    >
                      360°
                    </div>
                    <p className="text-xs text-white/30 leading-tight">
                      Technologie de visite immersive certifiée Google Street View
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Separator note */}
        <p className="text-center text-white/25 text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Tarifs indicatifs HT. Un devis personnalisé vous sera remis après échange.
          Paiement possible en plusieurs fois sur demande.
        </p>
      </div>
    </section>
  )
}
