'use client'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2"/>
        <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="14" cy="11" r="1.5" fill="currentColor"/>
        <path d="M10 20h12M10 25h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Site Vitrine Complet',
    desc: 'Pages de présentation élégantes qui convertissent vos visiteurs en clients. Design sur mesure, identité visuelle forte.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M8 32V16l12-8 12 8v16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Landing Page Optimisée',
    desc: 'Page unique dédiée à convertir — campagnes publicitaires, lancement de produit ou capture de leads.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 6C20 6 14 13 14 20s6 14 6 14M20 6c0 0 6 7 6 14s-6 14-6 14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO de Base',
    desc: 'Structure technique, balises méta et vitesse de chargement optimisés pour être trouvé sur Google dès le lancement.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="4" y="8" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="20" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Design Responsive',
    desc: 'Rendu parfait sur mobile, tablette et desktop. Aucun client ne vous échappe quelle que soit la taille de son écran.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20h9M25 20h9M20 6v9M20 25v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Visite Virtuelle Google 360°',
    desc: 'Immersion totale intégrée à votre fiche Google. Boostez votre référencement local et faites visiter vos locaux 24h/24.',
    premium: true,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 6l3.5 10.5L34 20l-10.5 3.5L20 34l-3.5-10.5L6 20l10.5-3.5L20 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Boost Référencement Local',
    desc: 'Optimisation de votre présence Google My Business pour dominer les recherches locales et attirer plus de clients.',
    premium: true,
  },
]

const included = [
  'Design personnalisé aux couleurs de votre marque',
  'Formulaire de contact fonctionnel',
  'Déploiement & mise en ligne inclus',
  'Hébergement haute performance',
  'SSL (HTTPS) & sécurité inclus',
  'Support & maintenance 3 mois offerts',
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 lg:py-36 bg-light-soft overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <Badge variant="purple" className="mb-6">Ce que je fais</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="services-heading"
              className="font-black uppercase leading-none text-ink"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="block">CRÉATION</span>
              <span className="block text-purple">DE SITES WEB</span>
            </h2>
            <p className="text-ink-soft max-w-sm lg:text-right text-base leading-relaxed">
              Un seul service, maîtrisé de A à Z — du design à la mise en ligne,
              avec l'option exclusive de la Visite Virtuelle Google 360°.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group relative rounded-3xl p-7 flex flex-col gap-5 bg-white transition-all duration-300 card-shadow card-shadow-hover cursor-default ${
                feature.premium ? 'border-2 border-purple/20' : 'border border-light-border'
              }`}
              aria-label={feature.title}
            >
              {feature.premium && (
                <span
                  className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple text-white"
                >
                  Premium
                </span>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  feature.premium
                    ? 'bg-purple/10 text-purple'
                    : 'bg-light-soft text-purple'
                }`}
              >
                {feature.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-ink leading-tight">{feature.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Included block */}
        <div className="rounded-3xl p-8 lg:p-10 bg-white border border-light-border card-shadow mb-12">
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-ink-muted mb-1">Inclus dans chaque projet</h3>
            <p className="text-ink font-bold text-lg">Pas de mauvaise surprise — tout est compris.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-purple/10"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 text-purple" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-ink-muted text-sm">Vous avez un projet en tête ? Parlons-en, c'est gratuit.</p>
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
