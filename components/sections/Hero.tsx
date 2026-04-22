'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Section principale"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Soft background blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(214,218,254,0.5) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,65,184,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="mb-8">
              <Badge variant="purple">
                <span className="w-1.5 h-1.5 rounded-full bg-purple inline-block" />
                Création Web — Toulouse & Remote
              </Badge>
            </div>

            <h1 className="font-black uppercase tracking-tight leading-none mb-8">
              <span
                className="block text-ink"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: '0.92' }}
              >
                L'ARCHITECTURE
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                  lineHeight: '0.92',
                  WebkitTextStroke: '2px #6341B8',
                  color: 'transparent',
                }}
              >
                DE VOTRE
              </span>
              <span
                className="block text-purple"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: '0.92' }}
              >
                PRÉSENCE EN LIGNE.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-ink-soft max-w-lg leading-relaxed mb-10">
              Sites vitrines, landing pages optimisées et Visite Virtuelle Google 360° —
              <span className="text-purple font-semibold"> tout pour renforcer votre visibilité locale.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#contact" size="lg" variant="primary">
                Démarrer mon projet
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button as="a" href="#tarifs" size="lg" variant="outline">
                Voir les tarifs
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10 border-t border-light-border pt-8">
              {[
                { value: '50+', label: 'Projets livrés' },
                { value: '98%', label: 'Clients satisfaits' },
                { value: '24h', label: 'Support réactif' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-purple leading-none">{stat.value}</div>
                  <div className="text-xs text-ink-muted uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative blobs behind photo */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem]"
              style={{ background: 'linear-gradient(135deg, rgba(214,218,254,0.6) 0%, rgba(99,65,184,0.1) 100%)' }}
            />

            {/* Photo */}
            <div className="relative" style={{ width: 'min(340px, 85vw)' }}>
              <div
                className="relative overflow-hidden rounded-[2.5rem]"
                style={{
                  height: 'min(440px, 110vw)',
                  boxShadow: '0 20px 60px rgba(99,65,184,0.2)',
                }}
              >
                <img
                  src="/photo.jpg"
                  alt="Fondateur VGL360"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(99,65,184,0.6), transparent)' }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-5 left-5">
                  <div className="text-xs font-bold text-white/70 uppercase tracking-widest">VGL360</div>
                  <div className="text-sm font-black text-white">Fondateur & Développeur</div>
                </div>
              </div>

              {/* "Fondateur" pill */}
              <div
                className="absolute -top-4 -left-4 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg"
                style={{ background: '#6341B8', color: '#fff' }}
              >
                Fondateur
              </div>

              {/* 360° card */}
              <div
                className="absolute -right-5 top-1/3 -translate-y-1/2 px-4 py-3 rounded-2xl z-10 flex flex-col gap-1"
                style={{
                  background: 'white',
                  boxShadow: '0 8px 30px rgba(99,65,184,0.15)',
                }}
              >
                <div className="text-2xl font-black leading-none text-purple">360°</div>
                <div className="text-[10px] text-ink-muted uppercase tracking-wide font-bold leading-tight">
                  Google<br/>Certifié
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-ink-muted uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple/40 to-transparent" />
      </div>
    </section>
  )
}
