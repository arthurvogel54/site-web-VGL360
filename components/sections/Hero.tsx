'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Section principale"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-DEFAULT bg-grid pt-16"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full bg-purple/8 blur-[150px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-citrine/5 blur-[120px] pointer-events-none"
      />

      {/* Large faded 360 */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 font-black text-purple/4 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(10rem, 28vw, 28rem)', lineHeight: '0.8' }}
      >
        360
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text */}
          <div>
            <div className="mb-8">
              <Badge variant="purple">
                <span className="w-1.5 h-1.5 rounded-full bg-citrine inline-block animate-pulse" />
                Création Web — Toulouse & Remote
              </Badge>
            </div>

            <h1 className="font-black uppercase tracking-tight leading-none mb-8">
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7rem)', lineHeight: '0.92' }}
              >
                VGL360 :
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  lineHeight: '0.95',
                  WebkitTextStroke: '2px #DFFF00',
                  color: 'transparent',
                }}
              >
                L'ARCHITECTURE
              </span>
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: '0.95' }}
              >
                DE VOTRE
              </span>
              <span
                className="block text-purple"
                style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: '0.95' }}
              >
                PRÉSENCE EN LIGNE.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-white/60 max-w-lg leading-relaxed mb-10">
              Sites vitrines, landing pages optimisées et intégration exclusive de Visite Virtuelle Google 360°.
              <span className="text-mauve font-medium"> Design audacieux. Code moderne. Résultats mesurables.</span>
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

            {/* Mini stats */}
            <div className="mt-12 flex gap-10 border-t border-dark-border pt-8">
              {[
                { value: '50+', label: 'Projets livrés' },
                { value: '98%', label: 'Clients satisfaits' },
                { value: '24h', label: 'Support réactif' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-citrine leading-none">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Arrow decoration */}
            <div aria-hidden="true" className="absolute -top-6 right-0 lg:right-4">
              <svg className="w-16 h-16 lg:w-20 lg:h-20 text-citrine opacity-90" viewBox="0 0 80 80" fill="none">
                <path d="M8 72 L72 8 M52 8 L72 8 L72 28" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/>
              </svg>
            </div>

            {/* Spinning star */}
            <div aria-hidden="true" className="absolute bottom-8 -left-4 animate-spin-slow">
              <svg className="w-8 h-8 text-purple" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"/>
              </svg>
            </div>

            {/* Photo container */}
            <div className="relative" style={{ width: 'min(340px, 85vw)' }}>
              {/* Glow behind */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #6341B8, #DFFF00)' }}
              />

              {/* Corner brackets */}
              <div aria-hidden="true" className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-citrine z-10" />
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-citrine z-10" />

              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-2xl border border-purple/40"
                style={{ height: 'min(440px, 110vw)' }}
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
                  style={{ background: 'linear-gradient(to top, #0A0A0F, transparent)' }}
                />
              </div>

              {/* "Fondateur" pill */}
              <div
                className="absolute -top-5 -left-5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider z-20"
                style={{ background: '#6341B8', color: '#fff' }}
              >
                Fondateur
              </div>

              {/* 360° badge */}
              <div
                className="absolute -right-5 top-1/3 px-4 py-3 rounded-2xl border border-dark-border z-20 flex flex-col gap-0.5"
                style={{ background: '#12121A' }}
              >
                <div className="text-2xl font-black leading-none" style={{ color: '#DFFF00' }}>360°</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wide font-bold">Google Certifié</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/50 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
