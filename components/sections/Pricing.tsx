'use client'

import { Badge } from '@/components/ui/Badge'

const packs = [
  {
    medalIcon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 7V13C20 17.4 16.5 21.4 12 23C7.5 21.4 4 17.4 4 13V7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tier: 'Bronze',
    name: 'Pack VITRINE',
    price: 1490,
    tagline: "On crée votre image de marque digitale.",
    color: '#6341B8',
    cardBg: 'bg-white',
    popular: false,
    features: [
      { label: 'Section Hero : photo d\'impact + titre vendeur', bold: false },
      { label: 'Section Prestations : produits & services phares', bold: false },
      { label: 'Module témoignages clients (Social Proof)', bold: false },
      { label: 'CTA mobile "Appeler" / "Itinéraire" bien visible', bold: false },
      { label: 'Carte Google Maps interactive', bold: false },
      { label: 'Design responsive & SSL inclus', bold: false },
    ],
    notIncluded: [
      'Architecture multi-pages (4 pages)',
      'SEO local multi-mots clés',
      'Visite Virtuelle Google 360°',
      'Optimisation Google My Business',
    ],
    cta: 'Choisir VITRINE',
  },
  {
    medalIcon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 6.5 7 1-5 5 1.2 7-6.2-3.3L5.8 21.5 7 14.5 2 9.5l7-1L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tier: 'Argent',
    name: 'Pack NOTORIÉTÉ',
    price: 2490,
    tagline: "Un outil de conquête client, pas juste une vitrine.",
    color: '#6341B8',
    cardBg: 'bg-light-soft',
    popular: false,
    features: [
      { label: 'Tout le Pack VITRINE inclus', bold: true },
      { label: 'Architecture multi-pages (4 pages)', bold: false },
      { label: 'Page Accueil — résumé vendeur', bold: false },
      { label: 'Page Produits/Services — liste complète', bold: false },
      { label: 'Page À Propos / Savoir-faire — l\'histoire', bold: false },
      { label: 'Page Contact — horaires, accès, parking', bold: false },
      { label: 'SEO local multi-mots clés (1 mot-clé/page)', bold: false },
      { label: 'Rédaction de contenu stratégique', bold: false },
    ],
    notIncluded: [
      'Visite Virtuelle Google 360°',
      'Optimisation Google My Business',
    ],
    cta: 'Choisir NOTORIÉTÉ',
  },
  {
    medalIcon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M3 20h18M3 20L6 9l5 5 3-8 3 8 5-5-3 11H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tier: 'Or',
    name: 'Pack IMMERSION',
    price: 3490,
    tagline: "L'effet 'Wow' qui tue la concurrence.",
    color: '#6341B8',
    cardBg: 'bg-purple',
    popular: true,
    features: [
      { label: 'Tout le Pack NOTORIÉTÉ inclus', bold: true },
      { label: 'Visite Virtuelle Google 360° intégrée', bold: true },
      { label: 'Le client entre dans votre boutique depuis le site', bold: false },
      { label: 'Optimisation Google My Business (photos, horaires, posts)', bold: false },
      { label: 'Synergie parfaite site web ↔ boutique physique', bold: false },
    ],
    notIncluded: [],
    cta: 'Choisir IMMERSION',
  },
]

export function Pricing() {
  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-heading"
      className="relative py-28 lg:py-36 bg-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(214,218,254,0.4) 0%, transparent 70%)' }}
      />

      {/* Star decoration */}
      <div aria-hidden="true" className="absolute bottom-16 left-6 pointer-events-none animate-spin-slow" style={{ animationDirection: 'reverse', opacity: 0.12 }}>
        <img src="/etoile-removebg-preview.png" alt="" className="w-20 h-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-6">Tarifs transparents</Badge>
          <h2
            id="pricing-heading"
            className="font-display font-black uppercase leading-none mb-6 text-ink"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            <span className="block">NOS</span>
            <span className="block text-purple">PACKS</span>
          </h2>
          <p className="text-ink-soft max-w-xl mx-auto text-base leading-relaxed">
            Trois niveaux d'ambition, trois offres claires. Chaque pack inclut tout ce du précédent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <article
              key={pack.name}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                pack.popular
                  ? 'shadow-[0_20px_60px_rgba(99,65,184,0.3)] scale-[1.02]'
                  : 'border border-light-border card-shadow card-shadow-hover'
              } ${pack.cardBg}`}
              aria-label={pack.name}
            >
              {/* Top banner for best pack */}
              {pack.popular && (
                <div className="text-center py-2.5 text-xs font-black uppercase tracking-widest text-white bg-white/15">
                  Notre meilleure offre
                </div>
              )}

              <div className="flex flex-col flex-1 p-8 gap-6">

                {/* Medal + tier */}
                <div className="flex items-center gap-3">
                  <span className={`flex-shrink-0 ${pack.popular ? 'text-white' : 'text-purple'}`} aria-hidden="true">
                    {pack.medalIcon}
                  </span>
                  <div>
                    <div className={`text-xs font-black uppercase tracking-widest ${pack.popular ? 'text-white/60' : 'text-ink-muted'}`}>
                      {pack.tier}
                    </div>
                    <div className={`text-lg font-black leading-tight ${pack.popular ? 'text-white' : 'text-ink'}`}>
                      {pack.name}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-end gap-2 mb-1">
                    <span className={`text-5xl font-black leading-none ${pack.popular ? 'text-white' : 'text-ink'}`}>
                      {pack.price.toLocaleString('fr-FR')}€
                    </span>
                    <span className={`text-sm mb-1 font-medium ${pack.popular ? 'text-white/60' : 'text-ink-muted'}`}>HT</span>
                  </div>
                  <p className={`text-sm leading-relaxed italic ${pack.popular ? 'text-white/70' : 'text-ink-soft'}`}>
                    "{pack.tagline}"
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-px ${pack.popular ? 'bg-white/20' : 'bg-light-border'}`} />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1" role="list">
                  {pack.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={`flex items-start gap-3 text-sm ${
                        feature.bold
                          ? pack.popular ? 'text-white font-bold' : 'text-ink font-bold'
                          : pack.popular ? 'text-white/80' : 'text-ink-soft'
                      }`}
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
                      {feature.label}
                    </li>
                  ))}
                  {pack.notIncluded.map((label) => (
                    <li
                      key={label}
                      className={`flex items-start gap-3 text-sm line-through ${
                        pack.popular ? 'text-white/25' : 'text-ink-muted/40'
                      }`}
                    >
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 border ${
                        pack.popular ? 'border-white/15' : 'border-light-border'
                      }`} aria-hidden="true" />
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
                  style={!pack.popular ? { boxShadow: '0 8px 25px rgba(99,65,184,0.25)' } : {}}
                  aria-label={`${pack.cta} — ${pack.price.toLocaleString('fr-FR')}€ HT`}
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

        <p className="text-center text-ink-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Tarifs indicatifs HT. Un devis personnalisé vous sera remis après échange.
          Paiement possible en plusieurs fois sur demande.
        </p>
      </div>
    </section>
  )
}
