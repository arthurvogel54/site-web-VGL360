'use client'

import { Badge } from '@/components/ui/Badge'

// Bold number display cards like the "1234 567 890" section in the reference image
const techStack = [
  { label: 'Next.js', num: '14', desc: 'Framework React de référence' },
  { label: 'TypeScript', num: 'TS', desc: 'Code robuste et maintenable' },
  { label: 'Tailwind', num: 'TW', desc: 'Style utilitaire & cohérent' },
  { label: 'Supabase', num: 'SB', desc: 'Backend & base de données' },
  { label: 'Vercel', num: '▲', desc: 'Déploiement mondial & CDN' },
  { label: 'Figma', num: 'Fg', desc: 'Design & prototypage' },
]

const whys = [
  {
    icon: '⚡',
    title: 'Livraison rapide',
    desc: 'Processus agile avec livraisons itératives. MVP en 4 semaines, site complet en 8.',
  },
  {
    icon: '🔒',
    title: 'Code de qualité',
    desc: 'Tests automatisés, revues de code, CI/CD. Votre site est maintenu et sécurisé.',
  },
  {
    icon: '📈',
    title: 'Orienté résultats',
    desc: 'Chaque décision de design est guidée par vos KPIs business et votre croissance.',
  },
  {
    icon: '🤝',
    title: 'Partenaire long terme',
    desc: 'Nous ne sommes pas des prestataires ponctuels, mais votre équipe tech dédiée.',
  },
]

export function Process() {
  return (
    <section
      id="processus"
      aria-labelledby="process-heading"
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      {/* Corner accent */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-purple/60 to-transparent" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-purple/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section 1: Bold number grid — inspired by "1234 567 890" reference block */}
        <div className="mb-28 lg:mb-36">
          <Badge variant="outline" className="mb-6">Stack technologique</Badge>
          <h2
            id="process-heading"
            className="font-black uppercase leading-none mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            <span className="text-white">LES OUTILS</span>{' '}
            <span style={{ WebkitTextStroke: '2px #6341B8', color: 'transparent' }}>
              QUI FONT LA DIFFÉRENCE
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-dark-border border border-dark-border rounded-2xl overflow-hidden">
            {techStack.map((tech, i) => (
              <div
                key={tech.label}
                className="group bg-dark-card hover:bg-dark-DEFAULT transition-colors duration-300 p-6 flex flex-col items-center justify-center gap-3 text-center"
              >
                {/* Big number / symbol like reference */}
                <div
                  className="font-black text-5xl lg:text-6xl leading-none group-hover:scale-110 transition-transform duration-300"
                  style={{
                    color: i % 2 === 0 ? '#6341B8' : '#F4D03F',
                    opacity: 0.7,
                  }}
                  aria-label={tech.label}
                >
                  {tech.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-300">
                  {tech.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Why VGL360 */}
        <div>
          <Badge variant="purple" className="mb-6">Pourquoi nous choisir</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <h2
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              <span className="block text-white">POURQUOI</span>
              <span
                className="block text-citrine"
              >
                VGL360 ?
              </span>
            </h2>
            <p className="text-white/50 max-w-xs lg:text-right">
              Plus qu'une agence web — un partenaire de croissance numérique engagé pour votre succès.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whys.map((item) => (
              <article
                key={item.title}
                className="group bg-dark-card border border-dark-border rounded-2xl p-8 flex gap-6 hover:border-purple/40 transition-all duration-300 hover:bg-purple/5"
              >
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl bg-purple/15 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-white text-lg mb-2 group-hover:text-citrine transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
