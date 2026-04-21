'use client'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const siteTypes = [
  {
    id: '01',
    title: 'Site Vitrine',
    short: 'VITRINE',
    desc: 'Présentez votre activité avec élégance. Un site clair, rapide et optimisé SEO qui donne envie de vous contacter.',
    features: ['Design sur mesure', 'SEO technique intégré', 'Responsive mobile-first', 'Formulaire de contact'],
    color: '#6341B8',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2"/>
        <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="14" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="11" r="1.5" fill="currentColor"/>
        <path d="M10 20h12M10 25h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Site E-Commerce',
    short: 'E-COMMERCE',
    desc: 'Vendez en ligne avec une boutique performante, intuitive et pensée pour maximiser chaque conversion.',
    features: ['Catalogue produits', 'Panier & paiement sécurisé', 'Gestion des commandes', 'Optimisé conversion'],
    color: '#F4D03F',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M6 8h4l3 14h14l3-10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="30" r="2" fill="currentColor"/>
        <circle cx="26" cy="30" r="2" fill="currentColor"/>
        <path d="M20 14v6M17 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Site Sur Mesure',
    short: 'SUR MESURE',
    desc: 'Votre projet ne rentre dans aucune case ? Je conçois des solutions web entièrement personnalisées à vos besoins.',
    features: ['Fonctionnalités spécifiques', 'Architecture adaptée', 'Intégrations API', 'Évolutif & maintenable'],
    color: '#D6DAFD',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 20h6l4-8 4 16 4-8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="6" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="20" cy="34" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
]

const included = [
  { icon: '⚡', label: 'Performance & rapidité', desc: 'Temps de chargement optimisés, score Lighthouse 90+' },
  { icon: '📱', label: 'Responsive design', desc: 'Parfait sur mobile, tablette et desktop' },
  { icon: '🔍', label: 'SEO intégré', desc: 'Structure technique et balises optimisées dès le départ' },
  { icon: '♿', label: 'Accessibilité', desc: 'Norme WCAG 2.1 AA pour toucher tous vos utilisateurs' },
  { icon: '🔒', label: 'Sécurité', desc: 'HTTPS, protection des données, bonnes pratiques OWASP' },
  { icon: '🚀', label: 'Déploiement inclus', desc: 'Mise en ligne sur hébergement performant et sécurisé' },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 lg:py-36 bg-dark-card overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple/5 blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-citrine/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <Badge variant="citrine" className="mb-6">Ce que je fais</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="services-heading"
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="block text-white">CRÉATION</span>
              <span className="block text-purple">DE SITES WEB</span>
            </h2>
            <p className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed">
              Un seul service, maîtrisé de A à Z — du design à la mise en ligne,
              je construis des sites qui vous ressemblent et qui performent.
            </p>
          </div>
        </div>

        {/* Site type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {siteTypes.map((type) => (
            <article
              key={type.id}
              className="group relative bg-dark-DEFAULT border border-dark-border rounded-2xl p-8 flex flex-col gap-6 hover:border-transparent transition-all duration-300 overflow-hidden cursor-default"
              aria-label={type.title}
            >
              {/* Hover border glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${type.color}50, 0 0 40px ${type.color}10` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 10% 10%, ${type.color}08, transparent 60%)` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between relative z-10">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: type.color, opacity: 0.2 }}
                  aria-hidden="true"
                >
                  {type.id}
                </span>
                <span
                  className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: type.color, borderColor: `${type.color}40`, background: `${type.color}12` }}
                >
                  {type.short}
                </span>
              </div>

              {/* Icon */}
              <div
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ color: type.color, background: `${type.color}15` }}
              >
                {type.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-white leading-tight relative z-10">
                {type.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed relative z-10">
                {type.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mt-auto relative z-10" role="list">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: type.color }}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div
                aria-hidden="true"
                className="absolute bottom-8 right-8 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{
                  background: type.color,
                  color: type.id === '02' || type.id === '03' ? '#0A0A0F' : '#fff',
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* "Inclus dans chaque projet" block */}
        <div className="border border-dark-border rounded-2xl p-8 lg:p-12 bg-dark-DEFAULT">
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest text-white/30 mb-1">Inclus dans chaque projet</h3>
            <p className="text-white font-bold text-lg">Pas de mauvaise surprise — tout est compris.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-purple/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-dark-border pt-10">
          <p className="text-white/40 text-sm">
            Vous avez un projet en tête ? Parlons-en, c'est gratuit.
          </p>
          <Button as="a" href="#contact" variant="primary">
            Demander un devis gratuit
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
