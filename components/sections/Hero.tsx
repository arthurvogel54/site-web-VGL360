'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Geometric abstract shapes as inline SVG components
function GeometricShapes() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-right bold arrow like reference image */}
      <svg
        className="absolute top-16 right-8 lg:right-16 w-24 h-24 lg:w-40 lg:h-40 text-citrine opacity-80"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M10 90 L90 10 M60 10 L90 10 L90 40" stroke="currentColor" strokeWidth="8" strokeLinecap="square"/>
      </svg>

      {/* Star/asterisk shapes */}
      <svg
        className="absolute top-48 right-32 lg:right-64 w-6 h-6 text-mauve animate-spin-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"/>
      </svg>
      <svg
        className="absolute bottom-48 left-16 w-4 h-4 text-citrine animate-spin-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDirection: 'reverse', animationDuration: '8s' }}
      >
        <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"/>
      </svg>

      {/* Circle outline */}
      <svg
        className="absolute bottom-32 right-12 lg:right-24 w-32 h-32 text-purple-light opacity-30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4"/>
      </svg>

      {/* Abstract grid block */}
      <div className="absolute top-1/3 left-4 lg:left-8 w-16 h-16 border-2 border-purple/30 rotate-12 opacity-50" />
      <div className="absolute top-1/3 left-6 lg:left-10 w-16 h-16 border border-citrine/20 rotate-6 opacity-30" />

      {/* Dot cluster */}
      <div className="absolute bottom-1/4 left-1/4 grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-mauve" />
        ))}
      </div>

      {/* Large faded number like reference */}
      <div className="absolute -bottom-8 right-0 text-[20rem] font-black text-purple/5 leading-none select-none">
        360
      </div>
    </div>
  )
}

function CounterStat({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const duration = 1500
          const step = (timestamp: number, startTime: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame((ts) => step(ts, startTime))
          }
          requestAnimationFrame((ts) => step(ts, ts))
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-black text-citrine">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/50 mt-1 font-medium uppercase tracking-wider">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Section principale"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-DEFAULT bg-grid pt-16"
    >
      <GeometricShapes />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/10 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-5xl">
          {/* Pre-badge */}
          <div className="mb-8">
            <Badge variant="purple">
              <span className="w-1.5 h-1.5 rounded-full bg-citrine inline-block animate-pulse" />
              Agence web — Paris & Remote
            </Badge>
          </div>

          {/* Main headline — bold display type like reference */}
          <h1 className="font-black leading-none uppercase tracking-tight mb-6">
            <span
              className="block text-white"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', lineHeight: '0.92' }}
            >
              IDÉES.
            </span>
            <span
              className="block text-stroke-citrine"
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                lineHeight: '0.92',
                WebkitTextStroke: '3px #F4D03F',
                color: 'transparent',
              }}
            >
              IMPACT.
            </span>
            <span
              className="block text-purple"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', lineHeight: '0.92' }}
            >
              WEB.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mt-8 mb-10">
            VGL360 conçoit et développe des expériences numériques qui captivent,
            convertissent et propulsent votre marque vers l'avant.
            <span className="text-mauve font-medium"> Design audacieux. Code moderne. Résultats mesurables.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button as="a" href="#contact" size="lg" variant="primary">
              Lancer mon projet
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Button as="a" href="#services" size="lg" variant="outline">
              Voir nos services
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-dark-border pt-10">
          <CounterStat end={50} suffix="+" label="Projets livrés" />
          <CounterStat end={98} suffix="%" label="Clients satisfaits" />
          <CounterStat end={5} suffix="×" label="Croissance moy." />
          <CounterStat end={24} suffix="h" label="Support réactif" />
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
