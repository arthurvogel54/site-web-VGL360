'use client'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const values = [
  { icon: '⚡', label: 'Rapidité de livraison' },
  { icon: '🎯', label: 'Design sur mesure' },
  { icon: '🔍', label: 'SEO intégré dès le départ' },
  { icon: '🌐', label: 'Innovation 360°' },
]

const skills = [
  { label: 'Développement Web', level: 95 },
  { label: 'UX / UI Design', level: 88 },
  { label: 'SEO & Visibilité locale', level: 82 },
  { label: 'Visite Virtuelle 360°', level: 92 },
]

export function Approach() {
  return (
    <section
      id="apropos"
      aria-labelledby="apropos-heading"
      className="relative py-28 lg:py-36 bg-dark-DEFAULT overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple/40 to-transparent" />
      <div aria-hidden="true" className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-purple/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Photo */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Star decoration */}
            <div aria-hidden="true" className="absolute -top-6 -left-4 animate-spin-slow" style={{ animationDuration: '16s' }}>
              <svg className="w-10 h-10 text-citrine" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"/>
              </svg>
            </div>
            {/* Rotated square */}
            <div aria-hidden="true" className="absolute -bottom-6 -right-4 w-16 h-16 border-2 border-purple/30 rotate-45" />

            {/* Main photo frame */}
            <div className="relative" style={{ width: 'min(360px, 80vw)' }}>
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #6341B8 40%, #DFFF00)' }}
              />

              {/* Corner brackets */}
              <div aria-hidden="true" className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-citrine z-10" />

              {/* Photo */}
              <div
                className="relative overflow-hidden rounded-2xl border border-purple/30"
                style={{ height: 'min(460px, 115vw)' }}
              >
                <img
                  src="/photo.jpg"
                  alt="Fondateur VGL360 — créateur de solutions numériques"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.85), transparent)' }}
                />
                {/* Name tag at bottom */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest">VGL360</div>
                  <div className="text-sm font-black text-white">Fondateur & Développeur</div>
                </div>
              </div>

              {/* 360° floating card */}
              <div
                className="absolute -right-7 top-1/3 -translate-y-1/2 px-4 py-3 rounded-2xl border border-dark-border z-10 flex flex-col gap-1"
                style={{ background: '#12121A', minWidth: '130px' }}
              >
                <div className="text-3xl font-black leading-none" style={{ color: '#DFFF00' }}>360°</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wide font-bold leading-tight">
                  Google<br/>Certifié
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="order-1 lg:order-2">
            <Badge variant="purple" className="mb-6">Mon Parcours</Badge>

            <h2
              id="apropos-heading"
              className="font-black uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="block text-white">TECH.</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '2px #DFFF00', color: 'transparent' }}
              >
                DESIGN.
              </span>
              <span className="block text-purple">IMMERSION.</span>
            </h2>

            <blockquote className="border-l-2 border-citrine pl-5 mb-8">
              <p className="text-white/70 italic leading-relaxed text-base lg:text-lg">
                "Passionné par l'image et le code, je fusionne la précision du développement web
                avec l'immersion de la technologie 360° pour transformer votre visibilité locale
                en expérience client."
              </p>
            </blockquote>

            <p className="text-white/50 leading-relaxed mb-10 text-sm lg:text-base">
              Créateur de solutions numériques qui allie technique et esthétique, je construis
              des sites web qui performent et des visites virtuelles qui captivent.
              Chaque projet est une opportunité de propulser votre présence en ligne à un niveau supérieur.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-3.5 hover:border-purple/30 transition-colors duration-200"
                >
                  <span className="text-lg flex-shrink-0">{v.icon}</span>
                  <span className="text-xs font-bold text-white/70 leading-tight">{v.label}</span>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="flex flex-col gap-4 mb-10">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-white/60">{skill.label}</span>
                    <span style={{ color: '#DFFF00' }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-dark-border overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #6341B8, #DFFF00)',
                      }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.label}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button as="a" href="#contact" variant="primary">
              Travaillons ensemble
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
