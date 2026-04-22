'use client'

import { Badge } from '@/components/ui/Badge'

const whys = [
  {
    icon: '⚡',
    title: 'Livraison rapide',
    desc: 'Processus structuré pour tenir les délais. Site complet livré en 2 à 4 semaines selon la complexité.',
  },
  {
    icon: '🎨',
    title: 'Design unique',
    desc: 'Chaque site est créé sur mesure, pas de template générique. Votre identité visuelle, votre personnalité.',
  },
  {
    icon: '📈',
    title: 'Orienté résultats',
    desc: 'Chaque décision de design est guidée par vos objectifs. Sites conçus pour convertir, pas juste pour être beaux.',
  },
  {
    icon: '🌐',
    title: 'Exclusif 360°',
    desc: "Seul créateur web proposant l'intégration de Visite Virtuelle Google certifiée dans votre région. Un avantage concurrentiel unique.",
  },
]

export function Process() {
  return (
    <section
      id="pourquoi"
      aria-labelledby="pourquoi-heading"
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      {/* Corner accents */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-purple/60 to-transparent" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-purple/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Badge variant="purple" className="mb-6">Pourquoi nous choisir</Badge>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h2
            id="pourquoi-heading"
            className="font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            <span className="block text-white">POURQUOI</span>
            <span className="block text-citrine">VGL360 ?</span>
          </h2>
          <p className="text-white/50 max-w-xs lg:text-right text-sm leading-relaxed">
            Plus qu'un prestataire — un partenaire de croissance numérique engagé pour votre succès local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whys.map((item) => (
            <article
              key={item.title}
              className="group bg-dark-card border border-dark-border rounded-2xl p-8 flex gap-6 hover:border-purple/40 transition-all duration-300 hover:bg-purple/5"
              aria-label={item.title}
            >
              <div
                className="w-12 h-12 flex-shrink-0 rounded-xl bg-purple/15 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-black text-white text-base mb-2 group-hover:text-citrine transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bold accent */}
        <div aria-hidden="true" className="mt-16 flex items-center gap-8 overflow-hidden">
          <div className="flex-1 h-px bg-dark-border" />
          <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest">
            <span className="text-purple/60">WEB</span>
            <span className="text-citrine/60">✦</span>
            <span className="text-white/20">360°</span>
            <span className="text-citrine/60">✦</span>
            <span className="text-purple/60">VGL360</span>
          </div>
          <div className="flex-1 h-px bg-dark-border" />
        </div>
      </div>
    </section>
  )
}
