'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const values = [
  {
    icon: (
      <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M11 2L4 12h6l-1 6 7-10h-6l1-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Rapidité de livraison',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      </svg>
    ),
    label: 'Design sur mesure',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'SEO intégré dès le départ',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2C10 2 7 6 7 10s3 8 3 8M10 2c0 0 3 4 3 8s-3 8-3 8M2 10h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Innovation 360°',
  },
]

const skills = [
  { label: 'Développement Web', level: 95 },
  { label: 'UX / UI Design', level: 88 },
  { label: 'SEO & Visibilité locale', level: 82 },
  { label: 'Visite Virtuelle 360°', level: 92 },
]

export function Approach() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section
      id="apropos"
      aria-labelledby="apropos-heading"
      className="relative py-28 lg:py-36 bg-light-soft overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,65,184,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Photo */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Spinning star */}
            <div aria-hidden="true" className="absolute -top-6 -left-2 animate-spin-slow" style={{ animationDuration: '16s', opacity: 0.4 }}>
              <img src="/etoile-removebg-preview.png" alt="" className="w-10 h-10" />
            </div>

            <div className="relative" style={{ width: 'min(360px, 80vw)' }}>
              {/* Soft glow behind */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3rem] pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(214,218,254,0.7) 0%, rgba(99,65,184,0.1) 100%)' }}
              />

              {/* Corner brackets */}
              <div aria-hidden="true" className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-purple z-10" />
              <div aria-hidden="true" className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-purple z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-purple z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-purple z-10" />

              {/* Photo */}
              <div
                className="relative overflow-hidden rounded-[2rem]"
                style={{
                  height: 'min(460px, 115vw)',
                  boxShadow: '0 20px 60px rgba(99,65,184,0.15)',
                }}
              >
                {photoError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-light-card gap-4">
                    <svg className="w-16 h-16 text-purple/30" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xs text-ink-muted font-medium">Photo à venir</span>
                  </div>
                ) : (
                  <img
                    src="/photoarthur.png"
                    alt="Fondateur VGL360"
                    className="w-full h-full object-cover object-top"
                    onError={() => setPhotoError(true)}
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(99,65,184,0.6), transparent)' }}
                />
                <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-bold text-white/70 uppercase tracking-widest">VGL360</div>
                  <div className="text-sm font-black text-white">Fondateur & Développeur</div>
                </div>
              </div>

              {/* 360° floating card */}
              <div
                className="absolute -right-7 top-1/3 -translate-y-1/2 px-4 py-3 rounded-2xl z-10 flex flex-col gap-1 bg-white"
                style={{ boxShadow: '0 8px 30px rgba(99,65,184,0.15)' }}
              >
                <div className="text-3xl font-black leading-none text-purple">360°</div>
                <div className="text-[10px] text-ink-muted uppercase tracking-wide font-bold leading-tight">
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
              className="font-display font-black uppercase leading-none mb-8 text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="block">TECH.</span>
              <span className="block">DESIGN.</span>
              <span className="block">IMMERSION.</span>
            </h2>

            <blockquote className="border-l-2 border-purple pl-5 mb-8">
              <p className="text-ink-soft italic leading-relaxed text-base lg:text-lg">
                "Passionné par l'image et le code, je fusionne la précision du développement web
                avec l'immersion de la technologie 360° pour transformer votre visibilité locale
                en expérience client."
              </p>
            </blockquote>

            <p className="text-ink-soft leading-relaxed mb-10 text-sm lg:text-base">
              Créateur de solutions numériques alliant technique et esthétique, je construis
              des sites web qui performent et des visites virtuelles qui captivent.
              Chaque projet est une opportunité de propulser votre présence en ligne à un niveau supérieur.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 bg-white border border-light-border rounded-2xl p-3.5 card-shadow"
                >
                  {v.icon}
                  <span className="text-xs font-bold text-ink-soft leading-tight">{v.label}</span>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="flex flex-col gap-4 mb-10">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-ink-soft">{skill.label}</span>
                    <span className="text-purple">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-light-card overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #D6DAFE, #6341B8)',
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
