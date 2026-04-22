'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

function HeroIllustration() {
  return (
    <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
      {/* Glow blob behind */}
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(214,218,254,0.7) 0%, rgba(99,65,184,0.08) 70%)' }}
      />

      {/* Main browser mockup */}
      <div
        className="relative animate-float"
        style={{ width: 'min(480px, 90vw)' }}
      >
        {/* Browser window */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 24px 80px rgba(99,65,184,0.18), 0 4px 20px rgba(99,65,184,0.1)' }}
        >
          {/* Browser chrome */}
          <div className="bg-white border-b border-light-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 bg-light-soft rounded-full px-4 py-1.5 flex items-center gap-2">
              <svg className="w-3 h-3 text-ink-muted flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 2C8 2 6 5 6 8s2 6 2 6M8 2c0 0 2 3 2 6s-2 6-2 6M2 8h12" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="text-xs text-ink-muted font-medium">votre-site.fr</span>
            </div>
          </div>

          {/* Website content inside browser */}
          <div className="bg-white overflow-hidden" style={{ height: '300px' }}>
            {/* Mini navbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-light-border/50">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-purple" />
                <div className="w-14 h-2.5 rounded-full bg-ink/20" />
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-2 rounded-full bg-ink/10" />
                <div className="w-10 h-2 rounded-full bg-ink/10" />
                <div className="w-10 h-2 rounded-full bg-ink/10" />
              </div>
              <div className="w-16 h-6 rounded-full bg-purple/20" />
            </div>

            {/* Mini hero */}
            <div className="px-5 py-5">
              <div className="w-16 h-2 rounded-full bg-purple/30 mb-3" />
              <div className="w-40 h-5 rounded-full bg-ink/25 mb-2" />
              <div className="w-32 h-5 rounded-full bg-purple/40 mb-2" />
              <div className="w-36 h-5 rounded-full bg-ink/20 mb-4" />
              <div className="w-28 h-3 rounded-full bg-ink/10 mb-1" />
              <div className="w-36 h-3 rounded-full bg-ink/10 mb-5" />
              <div className="flex gap-2">
                <div className="w-24 h-8 rounded-full bg-purple" />
                <div className="w-20 h-8 rounded-full border-2 border-purple/30" />
              </div>
            </div>

            {/* Mini cards row */}
            <div className="px-5 flex gap-3 mt-2">
              {[purple, mauve, light].map((_, i) => (
                <div key={i} className="flex-1 rounded-xl p-3" style={{ background: i === 0 ? 'rgba(99,65,184,0.08)' : i === 1 ? 'rgba(214,218,254,0.4)' : '#F5F1FF' }}>
                  <div className="w-6 h-6 rounded-lg mb-2" style={{ background: i === 0 ? '#6341B8' : i === 1 ? '#D6DAFE' : '#EDE8FF' }} />
                  <div className="w-full h-2 rounded-full bg-ink/15 mb-1" />
                  <div className="w-3/4 h-2 rounded-full bg-ink/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating 360° badge */}
        <div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
          style={{ background: '#6341B8', boxShadow: '0 8px 24px rgba(99,65,184,0.4)' }}
        >
          <span className="text-sm font-black leading-none">360°</span>
          <span className="text-[8px] font-bold opacity-70 uppercase tracking-wide">Google</span>
        </div>

        {/* Floating stat card */}
        <div
          className="absolute -left-6 top-1/3 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
          style={{ boxShadow: '0 8px 30px rgba(99,65,184,0.12)' }}
        >
          <div className="w-8 h-8 rounded-xl bg-purple/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-purple" viewBox="0 0 16 16" fill="none">
              <path d="M2 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-sm font-black text-ink leading-none">+47%</div>
            <div className="text-[10px] text-ink-muted font-medium">Visibilité locale</div>
          </div>
        </div>

        {/* Floating SEO card */}
        <div
          className="absolute -bottom-4 -right-2 bg-white rounded-2xl px-4 py-3 shadow-lg"
          style={{ boxShadow: '0 8px 30px rgba(99,65,184,0.12)' }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="w-3.5 h-3.5 text-purple" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[10px] font-black text-ink uppercase tracking-wide">SEO Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-20 h-1.5 rounded-full bg-light-card overflow-hidden">
              <div className="w-4/5 h-full rounded-full bg-purple" />
            </div>
            <span className="text-xs font-black text-purple">96</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dummy vars to avoid lint errors in map
const purple = 'purple', mauve = 'mauve', light = 'light'

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
        style={{ background: 'radial-gradient(circle, rgba(214,218,254,0.4) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,65,184,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="mb-8">
              <Badge variant="purple">
                <span className="w-1.5 h-1.5 rounded-full bg-purple inline-block" />
                Création Web — Partout en France
              </Badge>
            </div>

            {/* 3-line headline */}
            <h1 className="font-black uppercase tracking-tight leading-none mb-8">
              <span
                className="block text-ink"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: '0.95' }}
              >
                LE SITE WEB
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                  lineHeight: '0.95',
                  WebkitTextStroke: '2px #6341B8',
                  color: 'transparent',
                }}
              >
                QUI DONNE ENVIE
              </span>
              <span
                className="block text-purple"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: '0.95' }}
              >
                DE POUSSER VOTRE PORTE.
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

          {/* Right: Illustration */}
          <HeroIllustration />
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
