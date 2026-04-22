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
    desc: "Chaque décision de design est guidée par vos objectifs. Des sites conçus pour convertir.",
  },
  {
    icon: '🌐',
    title: 'Exclusif 360°',
    desc: "L'intégration de Visite Virtuelle Google certifiée dans votre région. Un avantage concurrentiel unique.",
  },
]

export function Process() {
  return (
    <section
      id="pourquoi"
      aria-labelledby="pourquoi-heading"
      className="relative py-28 lg:py-36 bg-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(214,218,254,0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Badge variant="purple" className="mb-6">Pourquoi nous choisir</Badge>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h2
            id="pourquoi-heading"
            className="font-black uppercase leading-none text-ink"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            <span className="block">POURQUOI</span>
            <span className="block text-purple">VGL360 ?</span>
          </h2>
          <p className="text-ink-soft max-w-xs lg:text-right text-sm leading-relaxed">
            Plus qu'un prestataire — un partenaire de croissance numérique engagé pour votre succès local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whys.map((item) => (
            <article
              key={item.title}
              className="group bg-white border border-light-border rounded-3xl p-8 flex gap-6 card-shadow card-shadow-hover transition-all duration-300"
              aria-label={item.title}
            >
              <div
                className="w-12 h-12 flex-shrink-0 rounded-2xl bg-light-soft flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-black text-ink text-base mb-2 group-hover:text-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div aria-hidden="true" className="mt-16 flex items-center gap-8">
          <div className="flex-1 h-px bg-light-border" />
          <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest">
            <span className="text-purple/40">WEB</span>
            <span className="text-mauve">✦</span>
            <span className="text-ink-muted">360°</span>
            <span className="text-mauve">✦</span>
            <span className="text-purple/40">VGL360</span>
          </div>
          <div className="flex-1 h-px bg-light-border" />
        </div>
      </div>
    </section>
  )
}
