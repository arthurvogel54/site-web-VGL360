'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

function WebsiteContent() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero section */}
      <div className="px-4 py-4" style={{ background: 'linear-gradient(135deg, #F5F1FF 0%, #fff 100%)' }}>
        <div className="w-12 h-1.5 rounded-full mb-2" style={{ background: '#6341B8' }} />
        <div className="w-32 h-3 rounded-full mb-1.5" style={{ background: 'rgba(26,15,60,0.25)' }} />
        <div className="w-24 h-3 rounded-full mb-1.5" style={{ background: 'rgba(99,65,184,0.4)' }} />
        <div className="w-28 h-2 rounded-full mb-3" style={{ background: 'rgba(26,15,60,0.12)' }} />
        <div className="flex gap-2">
          <div className="w-16 h-6 rounded-full" style={{ background: '#6341B8' }} />
          <div className="w-14 h-6 rounded-full" style={{ border: '1.5px solid rgba(99,65,184,0.35)' }} />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-2 px-3 py-3">
        {[
          { bg: 'rgba(99,65,184,0.08)', dot: '#6341B8' },
          { bg: '#EDE8FF', dot: '#9B8EC4' },
          { bg: '#F5F1FF', dot: '#DDD6F3' },
        ].map((c, i) => (
          <div key={i} className="flex-1 rounded-lg p-2.5" style={{ background: c.bg }}>
            <div className="w-4 h-4 rounded mb-1.5" style={{ background: c.dot }} />
            <div className="w-full h-1.5 rounded-full mb-1" style={{ background: 'rgba(0,0,0,0.1)' }} />
            <div className="w-3/4 h-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.07)' }} />
          </div>
        ))}
      </div>

      {/* Stars / testimonial */}
      <div className="mx-3 mb-3 rounded-xl p-3" style={{ background: '#F5F1FF' }}>
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="w-2 h-2 rounded-sm" style={{ background: '#6341B8' }} />
          ))}
        </div>
        <div className="w-full h-1.5 rounded-full mb-1" style={{ background: 'rgba(26,15,60,0.15)' }} />
        <div className="w-4/5 h-1.5 rounded-full" style={{ background: 'rgba(26,15,60,0.09)' }} />
      </div>

      {/* Services mini-grid */}
      <div className="grid grid-cols-2 gap-2 px-3 pb-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl p-2.5" style={{ border: '1px solid #DDD6F3' }}>
            <div className="w-5 h-5 rounded-md mb-2" style={{ background: i % 2 === 0 ? 'rgba(99,65,184,0.15)' : '#EDE8FF' }} />
            <div className="w-full h-1.5 rounded-full mb-1" style={{ background: 'rgba(26,15,60,0.18)' }} />
            <div className="w-3/4 h-1.5 rounded-full" style={{ background: 'rgba(26,15,60,0.1)' }} />
          </div>
        ))}
      </div>

      {/* Contact CTA band */}
      <div className="px-3 pb-4">
        <div className="rounded-xl p-3" style={{ background: 'linear-gradient(135deg, #6341B8, #9B55D4)' }}>
          <div className="w-24 h-2.5 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.4)' }} />
          <div className="w-16 h-2 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.25)' }} />
          <div className="w-20 h-6 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }} />
        </div>
      </div>
    </div>
  )
}

function MacbookIllustration() {
  return (
    <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
      {/* Soft glow behind */}
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(214,218,254,0.7) 0%, rgba(99,65,184,0.08) 70%)' }}
      />

      {/* Laptop wrapper — slight 3-D tilt */}
      <div
        className="relative"
        style={{
          width: 'min(460px, 88vw)',
          perspective: '1400px',
        }}
      >
        <div style={{ transform: 'rotateX(3deg) rotateY(-5deg)', transformStyle: 'preserve-3d' }}>

          {/* ── SCREEN LID ── */}
          <div
            style={{
              transformOrigin: 'bottom center',
              transformStyle: 'preserve-3d',
              animation: 'laptop-open 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            }}
          >
            {/* Aluminium bezel */}
            <div
              className="rounded-t-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #3a3a3a 0%, #222 100%)',
                padding: '10px 10px 5px',
                boxShadow: '0 -2px 20px rgba(0,0,0,0.35)',
              }}
            >
              {/* Camera notch */}
              <div className="flex justify-center mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: '#3d3d3d', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6)' }} />
              </div>

              {/* Screen glass */}
              <div className="rounded-lg overflow-hidden" style={{ height: '260px', background: '#fff' }}>
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-2 px-3 py-2"
                  style={{ background: '#f0f0f0', borderBottom: '1px solid #ddd' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                  </div>
                  <div
                    className="flex-1 flex items-center gap-1.5 rounded-full px-3 py-1"
                    style={{ background: '#fff', border: '1px solid #ddd' }}
                  >
                    <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 12 12" fill="none" style={{ color: '#aaa' }}>
                      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1" />
                      <path d="M6 2c0 0-1.5 2-1.5 4s1.5 4 1.5 4M6 2c0 0 1.5 2 1.5 4S6 10 6 10M2 6h8" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                    <span style={{ fontSize: '9px', color: '#aaa', fontWeight: 500 }}>votre-site.fr</span>
                  </div>
                </div>

                {/* Infinite scrolling site */}
                <div className="overflow-hidden" style={{ height: '225px' }}>
                  <div style={{ animation: 'scroll-site 14s linear infinite' }}>
                    <WebsiteContent />
                    <WebsiteContent />
                  </div>
                </div>
              </div>
            </div>

            {/* Hinge lip */}
            <div style={{ height: '4px', background: 'linear-gradient(180deg, #111 0%, #555 100%)' }} />
          </div>

          {/* ── KEYBOARD BASE ── */}
          <div
            className="rounded-b-2xl relative"
            style={{
              background: 'linear-gradient(180deg, #c8c8c8 0%, #adadad 100%)',
              height: '32px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.35)',
            }}
          >
            {/* Tiny keyboard dots */}
            <div className="absolute inset-x-10 top-2.5 flex justify-between" style={{ opacity: 0.25 }}>
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} style={{ width: 4, height: 4, borderRadius: 1, background: '#555' }} />
              ))}
            </div>
            {/* Trackpad */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded"
              style={{ width: '60px', height: '10px', background: 'rgba(0,0,0,0.09)', border: '1px solid rgba(0,0,0,0.08)' }}
            />
          </div>
        </div>

        {/* ── Floating +47% card ── */}
        <div
          className="absolute -left-8 flex items-center gap-3 bg-white rounded-2xl px-4 py-3"
          style={{
            top: '35%',
            boxShadow: '0 8px 30px rgba(99,65,184,0.15)',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,65,184,0.1)' }}>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <path d="M2 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-black leading-none" style={{ color: '#1A0F3C' }}>+47%</div>
            <div className="font-medium" style={{ fontSize: '10px', color: '#9B8EC4' }}>Visibilité locale</div>
          </div>
        </div>

        {/* ── Floating SEO card ── */}
        <div
          className="absolute -right-4 -bottom-6 bg-white rounded-2xl px-4 py-3"
          style={{
            boxShadow: '0 8px 30px rgba(99,65,184,0.12)',
            animation: 'float 6s ease-in-out 1s infinite',
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-black uppercase" style={{ fontSize: '10px', color: '#1A0F3C', letterSpacing: '0.05em' }}>SEO Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden" style={{ width: 80, height: 6, background: '#EDE8FF' }}>
              <div className="h-full rounded-full" style={{ width: '80%', background: '#6341B8' }} />
            </div>
            <span className="text-xs font-black" style={{ color: '#6341B8' }}>96</span>
          </div>
        </div>

        {/* ── 360° badge ── */}
        <div
          className="absolute -top-3 -right-3 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white"
          style={{ background: '#6341B8', boxShadow: '0 8px 24px rgba(99,65,184,0.4)' }}
        >
          <span className="text-xs font-black leading-none">360°</span>
          <span className="font-bold opacity-70 uppercase" style={{ fontSize: '7px', letterSpacing: '0.05em' }}>Google</span>
        </div>
      </div>
    </div>
  )
}

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

      {/* Star decoration */}
      <div aria-hidden="true" className="absolute top-24 left-6 lg:left-10 text-purple/20 pointer-events-none animate-spin-slow">
        <svg className="w-14 h-14" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 4 Q58 30 83 17 Q70 42 96 50 Q70 58 83 83 Q58 70 50 96 Q42 70 17 83 Q30 58 4 50 Q30 42 17 17 Q42 30 50 4 Z" />
        </svg>
      </div>

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
                className="block text-ink whitespace-nowrap"
                style={{ fontSize: 'clamp(1.8rem, 5.8vw, 4.5rem)', lineHeight: '1' }}
              >
                LE SITE WEB
              </span>
              <span
                className="block whitespace-nowrap"
                style={{
                  fontSize: 'clamp(1.5rem, 4.2vw, 3.3rem)',
                  lineHeight: '1.05',
                  WebkitTextStroke: '2px #6341B8',
                  color: 'transparent',
                }}
              >
                QUI DONNE ENVIE
              </span>
              <span
                className="block text-purple whitespace-nowrap"
                style={{ fontSize: 'clamp(1rem, 2.8vw, 2.2rem)', lineHeight: '1.1' }}
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
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button as="a" href="#tarifs" size="lg" variant="outline">
                Voir les tarifs
              </Button>
            </div>

            {/* Engagements */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-light-border pt-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M11 2L4 12h6l-1 6 7-10h-6l1-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-sm font-bold text-ink-soft">Réponse sous 24h</div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                </svg>
                <div className="text-sm font-bold text-ink-soft">100% sur mesure</div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 2C10 2 7 6 7 10s3 8 3 8M10 2c0 0 3 4 3 8s-3 8-3 8M2 10h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <div className="text-sm font-bold text-ink-soft">Certifié Google 360°</div>
              </div>
            </div>
          </div>

          {/* Right: MacBook animation */}
          <MacbookIllustration />
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
