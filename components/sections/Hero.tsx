'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

function WebsiteContent() {
  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: 'linear-gradient(135deg, #F5F1FF 0%, #fff 100%)', padding: '14px 14px 10px' }}>
        <div style={{ width: 40, height: 5, borderRadius: 4, background: '#6341B8', marginBottom: 8 }} />
        <div style={{ width: 120, height: 10, borderRadius: 5, background: 'rgba(26,15,60,0.22)', marginBottom: 6 }} />
        <div style={{ width: 90, height: 10, borderRadius: 5, background: 'rgba(99,65,184,0.38)', marginBottom: 6 }} />
        <div style={{ width: 105, height: 7, borderRadius: 4, background: 'rgba(26,15,60,0.1)', marginBottom: 12 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 60, height: 22, borderRadius: 20, background: '#6341B8' }} />
          <div style={{ width: 52, height: 22, borderRadius: 20, border: '1.5px solid rgba(99,65,184,0.3)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '10px 12px' }}>
        {[
          { bg: 'rgba(99,65,184,0.08)', dot: '#6341B8' },
          { bg: '#EDE8FF', dot: '#9B8EC4' },
          { bg: '#F5F1FF', dot: '#C4BCE8' },
        ].map((c, i) => (
          <div key={i} style={{ flex: 1, borderRadius: 10, padding: 10, background: c.bg }}>
            <div style={{ width: 16, height: 16, borderRadius: 5, background: c.dot, marginBottom: 7 }} />
            <div style={{ height: 5, borderRadius: 3, background: 'rgba(0,0,0,0.1)', marginBottom: 4 }} />
            <div style={{ width: '70%', height: 5, borderRadius: 3, background: 'rgba(0,0,0,0.07)' }} />
          </div>
        ))}
      </div>

      <div style={{ margin: '0 12px 10px', borderRadius: 10, padding: '10px 12px', background: '#F5F1FF' }}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 7 }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} style={{ width: 8, height: 8, borderRadius: 2, background: '#6341B8' }} />
          ))}
        </div>
        <div style={{ height: 5, borderRadius: 3, background: 'rgba(26,15,60,0.14)', marginBottom: 4 }} />
        <div style={{ width: '80%', height: 5, borderRadius: 3, background: 'rgba(26,15,60,0.08)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 12px 10px' }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ borderRadius: 10, padding: 10, border: '1px solid #DDD6F3' }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: i % 2 === 0 ? 'rgba(99,65,184,0.15)' : '#EDE8FF', marginBottom: 7 }} />
            <div style={{ height: 5, borderRadius: 3, background: 'rgba(26,15,60,0.16)', marginBottom: 4 }} />
            <div style={{ width: '70%', height: 5, borderRadius: 3, background: 'rgba(26,15,60,0.09)' }} />
          </div>
        ))}
      </div>

      <div style={{ padding: '0 12px 16px' }}>
        <div style={{ borderRadius: 12, padding: 12, background: 'linear-gradient(135deg, #6341B8, #9B55D4)' }}>
          <div style={{ width: 88, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.38)', marginBottom: 7 }} />
          <div style={{ width: 60, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.22)', marginBottom: 12 }} />
          <div style={{ width: 72, height: 22, borderRadius: 20, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }} />
        </div>
      </div>
    </div>
  )
}

function MacbookIllustration() {
  return (
    <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
      {/* Glow blob */}
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(214,218,254,0.65) 0%, rgba(99,65,184,0.06) 70%)' }}
      />

      {/* Desk shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: '80%', height: 16, background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)', filter: 'blur(6px)' }}
      />

      <div className="relative" style={{ width: 'min(460px, 88vw)' }}>
        {/* Perspective wrapper */}
        <div style={{ perspective: '1400px', perspectiveOrigin: '50% 30%' }}>
          {/* 3-D tilt */}
          <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(6deg) rotateY(-4deg)' }}>

            {/* Laptop body — lid + base share this container */}
            <div style={{ position: 'relative', height: 36, transformStyle: 'preserve-3d' }}>

              {/* ── LID ── pivot from bottom = hinge at top of base */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 36,        /* bottom edge of lid sits on top edge of base */
                  left: '3%',
                  width: '94%',
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d',
                  /* starts closed: back of lid faces viewer */
                  transform: 'rotateX(84deg)',
                  animation: 'laptop-open 2.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards',
                }}
              >
                {/* FRONT FACE — screen side (hidden when closed) */}
                <div style={{ backfaceVisibility: 'hidden' }}>
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)',
                      borderRadius: '13px 13px 0 0',
                      padding: '10px 10px 5px',
                      boxShadow: '0 -4px 24px rgba(0,0,0,0.5)',
                    }}
                  >
                    {/* Camera */}
                    <div style={{ textAlign: 'center', marginBottom: 8 }}>
                      <div style={{
                        display: 'inline-block', width: 6, height: 6,
                        borderRadius: '50%', background: '#3a3a3a',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9), 0 0 0 1px #484848',
                      }} />
                    </div>

                    {/* Screen glass */}
                    <div style={{ borderRadius: 7, overflow: 'hidden', height: 270, background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
                      {/* Browser bar */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', background: '#f0f0f0', borderBottom: '1px solid #e2e2e2' }}>
                        <div style={{ display: 'flex', gap: 5 }}>
                          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                        </div>
                        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '3px 10px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" style={{ color: '#bbb', flexShrink: 0 }}>
                            <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1" />
                            <path d="M6 2c0 0-1.5 2-1.5 4s1.5 4 1.5 4M6 2c0 0 1.5 2 1.5 4S6 10 6 10M2 6h8" stroke="currentColor" strokeWidth="0.75" />
                          </svg>
                          <span style={{ fontSize: 9, color: '#bbb', fontWeight: 500 }}>votre-site.fr</span>
                        </div>
                      </div>

                      {/* Scrolling site — starts after lid is fully open */}
                      <div style={{ height: 236, overflow: 'hidden' }}>
                        <div style={{ animation: 'scroll-site 14s linear 3.5s infinite' }}>
                          <WebsiteContent />
                          <WebsiteContent />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: 5, background: 'linear-gradient(180deg, #777 0%, #999 100%)' }} />
                </div>

                {/* BACK FACE — aluminium (visible when closed) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(140deg, #e6e6e6 0%, #c8c8c8 45%, #d4d4d4 75%, #bebebe 100%)',
                      borderRadius: '0 0 13px 13px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Subtle logo mark */}
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: 'rgba(0,0,0,0.04)',
                      border: '1px solid rgba(0,0,0,0.07)',
                    }} />
                  </div>
                </div>
              </div>

              {/* ── BASE / KEYBOARD ── */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: 36,
                  background: 'linear-gradient(180deg, #d2d2d2 0%, #b6b6b6 100%)',
                  borderRadius: '0 0 16px 16px',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.55)',
                }}
              >
                {/* Keyboard dot row */}
                <div style={{ position: 'absolute', top: 9, left: 44, right: 44, display: 'flex', justifyContent: 'space-between', opacity: 0.22 }}>
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} style={{ width: 4, height: 4, borderRadius: 1, background: '#555' }} />
                  ))}
                </div>
                {/* Trackpad */}
                <div style={{
                  position: 'absolute', bottom: 5, left: '50%', transform: 'translateX(-50%)',
                  width: 68, height: 10, borderRadius: 4,
                  background: 'rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.06)',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating +47% card ── fades in after laptop opens */}
        <div
          style={{
            position: 'absolute', left: -32, top: '35%',
            background: '#fff', borderRadius: 16, padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 8px 30px rgba(99,65,184,0.15)',
            opacity: 0,
            animation: 'fade-in-card 0.8s ease 3.2s forwards, float 6s ease-in-out 4s infinite',
          }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(99,65,184,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <path d="M2 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#1A0F3C', lineHeight: 1 }}>+47%</div>
            <div style={{ fontSize: 10, color: '#9B8EC4', fontWeight: 500, marginTop: 3 }}>Visibilité locale</div>
          </div>
        </div>

        {/* ── Floating SEO card ── */}
        <div
          style={{
            position: 'absolute', right: -16, bottom: -24,
            background: '#fff', borderRadius: 16, padding: '12px 16px',
            boxShadow: '0 8px 30px rgba(99,65,184,0.12)',
            opacity: 0,
            animation: 'fade-in-card 0.8s ease 3.6s forwards, float 6s ease-in-out 4.4s infinite',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#1A0F3C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SEO Score</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 80, height: 6, borderRadius: 3, background: '#EDE8FF', overflow: 'hidden' }}>
              <div style={{ width: '80%', height: '100%', borderRadius: 3, background: '#6341B8' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 900, color: '#6341B8' }}>96</span>
          </div>
        </div>

        {/* ── 360° badge ── */}
        <div
          style={{
            position: 'absolute', top: -12, right: -12,
            width: 54, height: 54, borderRadius: '50%',
            background: '#6341B8', boxShadow: '0 8px 24px rgba(99,65,184,0.45)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: '#fff', opacity: 0,
            animation: 'fade-in-card 0.6s ease 2.8s forwards',
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 900, lineHeight: 1 }}>360°</span>
          <span style={{ fontSize: 7, fontWeight: 700, opacity: 0.72, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Google</span>
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
      <div aria-hidden="true" className="absolute top-24 left-6 lg:left-10 pointer-events-none animate-spin-slow" style={{ opacity: 0.2 }}>
        <img src="/etoile-removebg-preview.png" alt="" className="w-14 h-14" />
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

            <h1 className="font-black uppercase tracking-tight leading-none mb-8">
              <span className="block text-ink whitespace-nowrap" style={{ fontSize: 'clamp(1.8rem, 5.8vw, 4.5rem)', lineHeight: '1' }}>
                LE SITE WEB
              </span>
              <span
                className="block whitespace-nowrap"
                style={{ fontSize: 'clamp(1.5rem, 4.2vw, 3.3rem)', lineHeight: '1.05', WebkitTextStroke: '2px #6341B8', color: 'transparent' }}
              >
                QUI DONNE ENVIE
              </span>
              <span className="block text-purple whitespace-nowrap" style={{ fontSize: 'clamp(1rem, 2.8vw, 2.2rem)', lineHeight: '1.1' }}>
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

          {/* Right: MacBook */}
          <MacbookIllustration />
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-ink-muted uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple/40 to-transparent" />
      </div>
    </section>
  )
}
