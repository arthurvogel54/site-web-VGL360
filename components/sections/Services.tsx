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
    title: 'Site Hero & Prestations',
    desc: 'Une photo d\'impact, un titre qui donne envie, et vos produits ou services phares mis en avant avec clarté.',
    pack: 'Vitrine',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 8l4 12h12l-10 7 4 12-10-7-10 7 4-12L4 20h12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Témoignages & Social Proof',
    desc: 'Module avis clients intégré pour instaurer la confiance et convaincre les visiteurs avant même qu\'ils appellent.',
    pack: 'Vitrine',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20h4M28 20h4M20 8v4M20 28v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'CTA Mobile + Carte Maps',
    desc: 'Bouton "Appeler" ou "Itinéraire" bien visible sur mobile, et carte Google Maps interactive pour guider vos clients.',
    pack: 'Vitrine',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Architecture Multi-Pages',
    desc: '4 pages dédiées : Accueil, Produits/Services, À Propos/Savoir-faire et Contact avec horaires & accès.',
    pack: 'Notoriété',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 6C20 6 14 13 14 20s6 14 6 14M20 6c0 0 6 7 6 14s-6 14-6 14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO Local Multi-Mots Clés',
    desc: 'Chaque page optimisée sur un mot-clé différent — plus de chances d\'apparaître sur Google pour vos clients locaux.',
    pack: 'Notoriété',
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
    desc: 'Le client entre dans votre boutique sans bouger. Immersion totale intégrée au site et à votre fiche Google.',
    pack: 'Immersion',
  },
]

const packColors: Record<string, string> = {
  Vitrine: 'bg-mauve/40 text-purple border-mauve',
  Notoriété: 'bg-purple/10 text-purple border-purple/20',
  Immersion: 'bg-purple text-white border-purple',
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 lg:py-36 bg-light-soft overflow-hidden"
    >
      {/* Star decoration */}
      <div aria-hidden="true" className="absolute top-10 right-8 pointer-events-none" style={{ transform: 'rotate(20deg)', opacity: 0.12 }}>
        <img src="/etoile-removebg-preview.png" alt="" className="w-28 h-28" />
      </div>

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
              De la vitrine locale à l'immersion 360°, chaque fonctionnalité est pensée
              pour attirer plus de clients près de chez vous.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative rounded-3xl p-7 flex flex-col gap-5 bg-white border border-light-border card-shadow card-shadow-hover transition-all duration-300"
              aria-label={feature.title}
            >
              {/* Pack badge */}
              <span
                className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${packColors[feature.pack]}`}
              >
                {feature.pack}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-light-soft text-purple transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-ink leading-tight pr-14">{feature.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-ink-muted text-sm">Vous avez un projet en tête ? Parlons-en, c'est gratuit.</p>
          <Button as="a" href="#tarifs" variant="primary">
            Voir les packs & tarifs
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
