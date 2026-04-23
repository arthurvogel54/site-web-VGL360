'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

function SiteContent() {
  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: 'linear-gradient(135deg,#F5F1FF,#fff)', padding: '12px 14px 10px' }}>
        <div style={{ width: 38, height: 5, borderRadius: 4, background: '#6341B8', marginBottom: 8 }} />
        <div style={{ width: 110, height: 9, borderRadius: 5, background: 'rgba(26,15,60,.22)', marginBottom: 5 }} />
        <div style={{ width: 80, height: 9, borderRadius: 5, background: 'rgba(99,65,184,.38)', marginBottom: 10 }} />
        <div style={{ display: 'flex', gap: 7 }}>
          <div style={{ width: 54, height: 19, borderRadius: 20, background: '#6341B8' }} />
          <div style={{ width: 46, height: 19, borderRadius: 20, border: '1.5px solid rgba(99,65,184,.3)' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 7, padding: '9px 11px' }}>
        {['rgba(99,65,184,.08)', '#EDE8FF', '#F5F1FF'].map((bg, i) => (
          <div key={i} style={{ flex: 1, borderRadius: 8, padding: 9, background: bg }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: i === 0 ? '#6341B8' : i === 1 ? '#9B8EC4' : '#C4BCE8', marginBottom: 6 }} />
            <div style={{ height: 4, borderRadius: 3, background: 'rgba(0,0,0,.1)', marginBottom: 3 }} />
            <div style={{ width: '70%', height: 4, borderRadius: 3, background: 'rgba(0,0,0,.07)' }} />
          </div>
        ))}
      </div>
      <div style={{ margin: '0 11px 9px', borderRadius: 9, padding: '9px 11px', background: '#F5F1FF' }}>
        <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
          {[1,2,3,4,5].map(s => <div key={s} style={{ width: 7, height: 7, borderRadius: 2, background: '#6341B8' }} />)}
        </div>
        <div style={{ height: 4, borderRadius: 3, background: 'rgba(26,15,60,.13)', marginBottom: 3 }} />
        <div style={{ width: '80%', height: 4, borderRadius: 3, background: 'rgba(26,15,60,.08)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, padding: '0 11px 9px' }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ borderRadius: 9, padding: 9, border: '1px solid #DDD6F3' }}>
            <div style={{ width: 16, height: 16, borderRadius: 4, background: i%2===0 ? 'rgba(99,65,184,.14)' : '#EDE8FF', marginBottom: 6 }} />
            <div style={{ height: 4, borderRadius: 3, background: 'rgba(26,15,60,.16)', marginBottom: 3 }} />
            <div style={{ width: '70%', height: 4, borderRadius: 3, background: 'rgba(26,15,60,.09)' }} />
          </div>
        ))}
      </div>
      <div style={{ padding: '0 11px 14px' }}>
        <div style={{ borderRadius: 11, padding: 11, background: 'linear-gradient(135deg,#6341B8,#9B55D4)' }}>
          <div style={{ width: 80, height: 7, borderRadius: 4, background: 'rgba(255,255,255,.38)', marginBottom: 6 }} />
          <div style={{ width: 56, height: 5, borderRadius: 3, background: 'rgba(255,255,255,.22)', marginBottom: 11 }} />
          <div style={{ width: 64, height: 19, borderRadius: 20, background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)' }} />
        </div>
      </div>
    </div>
  )
}

function MobileContent() {
  return (
    <div style={{ background: '#fff', height: '100%' }}>
      <div style={{ background: 'linear-gradient(135deg,#F5F1FF,#fff)', padding: '10px 10px 8px' }}>
        <div style={{ width: 24, height: 4, borderRadius: 3, background: '#6341B8', marginBottom: 7 }} />
        <div style={{ width: 70, height: 7, borderRadius: 4, background: 'rgba(26,15,60,.2)', marginBottom: 4 }} />
        <div style={{ width: 50, height: 7, borderRadius: 4, background: 'rgba(99,65,184,.35)', marginBottom: 9 }} />
        <div style={{ width: 44, height: 16, borderRadius: 16, background: '#6341B8' }} />
      </div>
      <div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ borderRadius: 7, padding: 8, background: i===1 ? 'rgba(99,65,184,.08)' : '#F5F1FF' }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: i===1 ? '#6341B8' : '#C4BCE8', marginBottom: 5 }} />
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(26,15,60,.14)', marginBottom: 3 }} />
            <div style={{ width: '70%', height: 3, borderRadius: 2, background: 'rgba(26,15,60,.08)' }} />
          </div>
        ))}
      </div>
      <div style={{ padding: '0 10px' }}>
        <div style={{ borderRadius: 9, padding: 9, background: 'linear-gradient(135deg,#6341B8,#9B55D4)' }}>
          <div style={{ width: 60, height: 5, borderRadius: 3, background: 'rgba(255,255,255,.4)', marginBottom: 5 }} />
          <div style={{ width: 40, height: 4, borderRadius: 2, background: 'rgba(255,255,255,.24)', marginBottom: 9 }} />
          <div style={{ width: 50, height: 15, borderRadius: 15, background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)' }} />
        </div>
      </div>
    </div>
  )
}

function HeroIllustration() {
  return (
    <div className="relative flex justify-center items-center" aria-hidden="true">
      {/* Glow */}
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 55% 45%, rgba(214,218,254,0.65) 0%, rgba(99,65,184,0.06) 70%)' }}
      />

      {/* Devices container */}
      <div className="relative" style={{ width: 'min(420px, 88vw)', paddingBottom: 60 }}>

        {/* ── MacBook ── */}
        <div className="animate-float" style={{ position: 'relative', zIndex: 2 }}>
          {/* Screen */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 60px rgba(99,65,184,0.18), 0 4px 16px rgba(0,0,0,0.12)',
              border: '1px solid rgba(214,218,254,0.6)',
            }}
          >
            {/* Browser chrome */}
            <div style={{ background: '#f5f5f5', borderBottom: '1px solid #e8e8e8', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
              </div>
              <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '3px 10px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" style={{ color: '#bbb', flexShrink: 0 }}>
                  <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1" />
                  <path d="M6 2c0 0-1.5 2-1.5 4s1.5 4 1.5 4M6 2c0 0 1.5 2 1.5 4S6 10 6 10M2 6h8" stroke="currentColor" strokeWidth="0.75" />
                </svg>
                <span style={{ fontSize: 9, color: '#bbb', fontWeight: 500 }}>votre-site.fr</span>
              </div>
            </div>
            {/* Scrolling content */}
            <div style={{ height: 220, overflow: 'hidden', background: '#fff' }}>
              <div style={{ animation: 'scroll-site 12s linear infinite' }}>
                <SiteContent />
                <SiteContent />
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div style={{ height: 14, background: 'linear-gradient(180deg,#d0d0d0,#b8b8b8)', borderRadius: '0 0 10px 10px', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}>
            <div style={{ margin: '0 auto', width: '35%', height: 5, borderRadius: '0 0 6px 6px', background: 'rgba(0,0,0,0.08)' }} />
          </div>
        </div>

        {/* ── Smartphone ── overlapping bottom-right */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            bottom: 0,
            right: -20,
            zIndex: 3,
            animationDelay: '1.2s',
            transform: 'rotate(4deg)',
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              width: 110,
              borderRadius: 24,
              background: '#1a1a1a',
              padding: '10px 6px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.28), 0 4px 12px rgba(99,65,184,0.2)',
            }}
          >
            {/* Notch */}
            <div style={{ width: 32, height: 6, borderRadius: 4, background: '#111', margin: '0 auto 6px' }} />
            {/* Screen */}
            <div style={{ borderRadius: 14, overflow: 'hidden', height: 200, background: '#fff' }}>
              <MobileContent />
            </div>
            {/* Home bar */}
            <div style={{ width: 36, height: 4, borderRadius: 3, background: '#333', margin: '7px auto 0' }} />
          </div>
        </div>

        {/* Connection line between devices */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 105,
            width: 50,
            height: 2,
            background: 'linear-gradient(90deg, rgba(99,65,184,0.3), rgba(99,65,184,0.6))',
            borderRadius: 2,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 120,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#6341B8',
            opacity: 0.5,
            zIndex: 1,
          }}
        />

        {/* ── +47% badge ── */}
        <div
          className="absolute flex items-center gap-3 bg-white rounded-2xl"
          style={{
            left: -24,
            top: '28%',
            padding: '10px 14px',
            boxShadow: '0 8px 30px rgba(99,65,184,0.15)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 4,
          }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(99,65,184,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <path d="M2 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#1A0F3C', lineHeight: 1 }}>+47%</div>
            <div style={{ fontSize: 10, color: '#9B8EC4', fontWeight: 500, marginTop: 2 }}>Visibilité locale</div>
          </div>
        </div>

        {/* ── SEO Score badge ── */}
        <div
          className="absolute bg-white rounded-2xl"
          style={{
            left: -20,
            bottom: 70,
            padding: '10px 14px',
            boxShadow: '0 8px 30px rgba(99,65,184,0.12)',
            animation: 'float 6s ease-in-out 1.5s infinite',
            zIndex: 4,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: '#6341B8' }}>
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 9, fontWeight: 900, color: '#1A0F3C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SEO Score</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 70, height: 5, borderRadius: 3, background: '#EDE8FF', overflow: 'hidden' }}>
              <div style={{ width: '80%', height: '100%', borderRadius: 3, background: '#6341B8' }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#6341B8' }}>96</span>
          </div>
        </div>

        {/* ── 360° badge ── */}
        <div
          style={{
            position: 'absolute',
            top: -10,
            right: 30,
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: '#6341B8',
            boxShadow: '0 8px 24px rgba(99,65,184,0.42)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            zIndex: 4,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 900, lineHeight: 1 }}>360°</span>
          <span style={{ fontSize: 6, fontWeight: 700, opacity: 0.72, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Google</span>
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

            <h1 className="font-display font-black uppercase leading-none mb-8" style={{ letterSpacing: '-0.01em' }}>
              <span className="block text-ink whitespace-nowrap" style={{ fontSize: 'clamp(1.8rem, 5.8vw, 4.5rem)', lineHeight: '1' }}>
                LE SITE WEB
              </span>
              <span className="block text-ink whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 4.2vw, 3.3rem)', lineHeight: '1' }}>
                QUI DONNE ENVIE
              </span>
              <span className="block text-ink whitespace-nowrap" style={{ fontSize: 'clamp(1rem, 2.8vw, 2.2rem)', lineHeight: '1.05' }}>
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

          {/* Right: Devices illustration */}
          <HeroIllustration />
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-ink-muted uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple/40 to-transparent" />
      </div>
    </section>
  )
}
