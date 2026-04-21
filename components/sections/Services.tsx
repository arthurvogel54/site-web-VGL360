'use client'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: '01',
    title: 'Sites Vitrine & Corporate',
    short: 'VITRINE',
    desc: 'Présentez votre entreprise avec un site élégant, rapide et optimisé SEO qui convertit vos visiteurs en clients.',
    features: ['Design sur mesure', 'CMS intégré', 'SEO technique', 'Responsive mobile-first'],
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
    title: 'E-Commerce & Boutiques',
    short: 'E-COMMERCE',
    desc: 'Boutiques en ligne performantes et intuitives, optimisées pour maximiser vos conversions et revenus.',
    features: ['Panier & checkout optimisés', 'Paiement sécurisé', 'Gestion stock', 'Analytics e-com'],
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
    title: 'Applications Web',
    short: 'WEB APP',
    desc: 'Plateformes SaaS, tableaux de bord et outils métier sur mesure, conçus pour l\'échelle et la performance.',
    features: ['Architecture Next.js', 'API REST/GraphQL', 'Auth & sécurité', 'Déploiement cloud'],
    color: '#FF3E8A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 18l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14h32" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Design UI/UX',
    short: 'UI / UX',
    desc: 'Interfaces belles et fonctionnelles, systèmes de design cohérents et expériences utilisateur qui fidélisent.',
    features: ['Wireframes & prototypes', 'Design system', 'Tests utilisateurs', 'Handoff développeurs'],
    color: '#C8F135',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '05',
    title: 'SEO & Performance',
    short: 'SEO',
    desc: 'Optimisation technique complète pour dominer les résultats de recherche et offrir une expérience ultra-rapide.',
    features: ['Audit SEO complet', 'Core Web Vitals', 'Link building', 'Rapports mensuels'],
    color: '#D6DAFD',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 28l8-8 6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="29" cy="15" r="2" fill="currentColor"/>
        <path d="M4 34h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Maintenance & Support',
    short: 'SUPPORT',
    desc: 'Votre site entre de bonnes mains : mises à jour, sécurité, corrections rapides et évolutions continues.',
    features: ['Monitoring 24/7', 'Sauvegardes auto', 'Corrections < 24h', 'Rapport mensuel'],
    color: '#7B55D4',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 8l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="3" fill="currentColor"/>
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 lg:py-36 bg-dark-card overflow-hidden"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple/5 blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-citrine/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <Badge variant="fuchsia" className="mb-6">Ce que nous faisons</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="services-heading"
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="block text-white">NOS</span>
              <span
                className="block text-purple"
              >
                SERVICES
              </span>
            </h2>
            <p className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed">
              Des solutions complètes pour tous vos besoins numériques,
              du concept au déploiement.
            </p>
          </div>
        </div>

        {/* Service cards — bold card style like reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative bg-dark-DEFAULT border border-dark-border rounded-2xl p-8 flex flex-col gap-6 hover:border-transparent transition-all duration-300 overflow-hidden cursor-default"
              aria-label={service.title}
            >
              {/* Hover border glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${service.color}40, 0 0 40px ${service.color}10` }}
              />

              {/* Background gradient on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 10% 10%, ${service.color}0A, transparent 60%)` }}
              />

              {/* Top row: number + tag */}
              <div className="flex items-start justify-between relative z-10">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: service.color, opacity: 0.2 }}
                  aria-hidden="true"
                >
                  {service.id}
                </span>
                <span
                  className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: service.color, borderColor: `${service.color}40`, background: `${service.color}12` }}
                >
                  {service.short}
                </span>
              </div>

              {/* Icon */}
              <div
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ color: service.color, background: `${service.color}15` }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white leading-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Features list */}
              <ul className="flex flex-col gap-2 mt-auto relative z-10" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: service.color }}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-8 right-8 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{ background: service.color, color: service.id === '02' || service.id === '04' ? '#0A0A0F' : '#fff' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-dark-border pt-10">
          <p className="text-white/40 text-sm">
            Besoin d'un service sur mesure ? Parlons-en.
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
