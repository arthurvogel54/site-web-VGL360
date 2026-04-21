'use client'

import { Badge } from '@/components/ui/Badge'

const steps = [
  {
    number: '01',
    title: 'DÉCOUVERTE',
    desc: 'Analyse approfondie de vos objectifs, votre audience et votre marché.',
    color: '#6341B8',
    accent: '#D6DAFD',
    symbol: '◎',
  },
  {
    number: '02',
    title: 'CONCEPTION',
    desc: 'Wireframes, maquettes haute-fidélité et prototypes interactifs.',
    color: '#F4D03F',
    accent: '#0A0A0F',
    symbol: '⬡',
  },
  {
    number: '03',
    title: 'DÉVELOPPEMENT',
    desc: 'Code propre, performant et scalable avec les dernières technologies.',
    color: '#FF3E8A',
    accent: '#fff',
    symbol: '{ }',
  },
  {
    number: '04',
    title: 'DÉPLOIEMENT',
    desc: 'Mise en ligne optimisée, tests rigoureux et monitoring continu.',
    color: '#C8F135',
    accent: '#0A0A0F',
    symbol: '▲',
  },
  {
    number: '05',
    title: 'CROISSANCE',
    desc: 'Analyse des données, optimisations continues et évolution de votre produit.',
    color: '#D6DAFD',
    accent: '#0A0A0F',
    symbol: '↗',
  },
]

export function Approach() {
  return (
    <section
      id="approche"
      aria-labelledby="approche-heading"
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      {/* Background accent */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <Badge variant="citrine" className="mb-6">Notre méthode</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="approche-heading"
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="block text-white">DES IDÉES</span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: '2px #F4D03F',
                  color: 'transparent',
                }}
              >
                À L'IMPACT
              </span>
            </h2>
            <p className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed">
              Un processus éprouvé en 5 étapes pour transformer votre vision
              en réalité numérique performante.
            </p>
          </div>
        </div>

        {/* Steps grid — like reference "FROM IDEAS TO IMPACT" layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-dark-border rounded-2xl overflow-hidden border border-dark-border">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative bg-dark-card p-8 flex flex-col gap-6 hover:bg-dark-DEFAULT transition-colors duration-300 overflow-hidden"
              aria-label={`Étape ${step.number}: ${step.title}`}
            >
              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 0%, ${step.color}15, transparent 60%)` }}
              />

              {/* Number + symbol row */}
              <div className="flex items-start justify-between">
                <span className="text-6xl font-black leading-none" style={{ color: step.color, opacity: 0.15 }}>
                  {step.number}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: step.color, color: step.accent }}
                  aria-hidden="true"
                >
                  {step.symbol}
                </div>
              </div>

              {/* Title */}
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
                  Étape {index + 1}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-citrine transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mt-auto">
                {step.desc}
              </p>

              {/* Bottom accent line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: step.color }}
              />
            </article>
          ))}
        </div>

        {/* Bold typography accent — inspired by reference */}
        <div aria-hidden="true" className="mt-16 flex items-center gap-8 overflow-hidden">
          <div className="flex-1 h-px bg-dark-border" />
          <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-white/20">
            <span className="text-purple/60">IDEAS</span>
            <span className="text-citrine/60">✦</span>
            <span className="text-white/20">BUILT</span>
            <span className="text-citrine/60">✦</span>
            <span className="text-purple/60">FOR IMPACT</span>
          </div>
          <div className="flex-1 h-px bg-dark-border" />
        </div>
      </div>
    </section>
  )
}
