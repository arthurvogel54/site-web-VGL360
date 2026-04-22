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
        <circle cx="19" cy="11" r="1.5" fill="currentColor"/>
        <path d="M10 20h12M10 25h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Site Vitrine Complet',
    desc: 'Pages de présentation claires et percutantes qui convertissent vos visiteurs en clients. Design sur mesure, identité visuelle forte.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M8 32V16l12-8 12 8v16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 16v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Landing Page Optimisée',
    desc: 'Page unique dédiée à convertir — campagnes publicitaires, lancement de produit ou capture de leads. Conçue pour le ROI.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 6C20 6 14 13 14 20s6 14 6 14M20 6c0 0 6 7 6 14s-6 14-6 14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14h24M8 26h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO de Base',
    desc: 'Structure technique, balises méta optimisées, sitemap et vitesse de chargement — pour être trouvé sur Google dès le lancement.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="4" y="8" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="20" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 28h4M26 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Design Responsive',
    desc: 'Rendu parfait sur mobile, tablette et desktop. Aucun client ne vous échappe, quelle que soit la taille de son écran.',
    premium: false,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 6a14 14 0 0 1 0 28M20 6a14 14 0 0 0 0 28" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20h6M28 20h6M20 6v6M20 28v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Visite Virtuelle Google 360°',
    desc: "Immersion totale intégrée à votre fiche Google. Boostez votre référencement local et faites visiter vos locaux 24h/24 à vos prospects.",
    premium: true,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 6l3.5 10.5L34 20l-10.5 3.5L20 34l-3.5-10.5L6 20l10.5-3.5L20 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Boost Référencement Local',
    desc: 'Optimisation complète de votre présence Google My Business. Dominez les recherches locales et attirez les clients proches de vous.',
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
      className="relative py-28 lg:py-36 bg-dark-card overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple/5 blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-citrine/4 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
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
              Un seul service maîtrisé de A à Z — du design à la mise en ligne,
              avec l'option exclusive de la Visite Virtuelle Google 360°.
            </p>
          </div>
        </div>

        {/* Feature bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group relative rounded-2xl p-7 flex flex-col gap-5 border transition-all duration-300 overflow-hidden ${
                feature.premium
                  ? 'border-citrine/30 bg-citrine/5 hover:bg-citrine/10 hover:border-citrine/50'
                  : 'border-dark-border bg-dark-DEFAULT hover:border-purple/40 hover:bg-purple/5'
              }`}
              aria-label={feature.title}
            >
              {/* Premium label */}
              {feature.premium && (
                <span
                  className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: '#DFFF00', color: '#0A0A0F' }}
                >
                  Premium
                </span>
              )}

              {/* Hover radial */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: feature.premium
                    ? 'radial-gradient(circle at 0% 0%, rgba(223,255,0,0.07), transparent 70%)'
                    : 'radial-gradient(circle at 0% 0%, rgba(99,65,184,0.07), transparent 70%)',
                }}
              />

              {/* Icon */}
              <div
                className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                  feature.premium ? 'bg-citrine/20 text-citrine' : 'bg-purple/15 text-mauve'
                }`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className={`text-base font-black leading-tight ${feature.premium ? 'text-citrine' : 'text-white'}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Included block */}
        <div className="border border-dark-border rounded-2xl p-8 lg:p-10 bg-dark-DEFAULT mb-12">
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Inclus dans chaque projet</h3>
            <p className="text-white font-bold text-lg">Pas de mauvaise surprise — tout est compris.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                <span
                  className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(99,65,184,0.25)' }}
                  aria-hidden="true"
                >
                  <span className="text-[9px] text-mauve font-black">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-dark-border pt-10">
          <p className="text-white/40 text-sm">Vous avez un projet en tête ? Parlons-en, c'est gratuit.</p>
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
