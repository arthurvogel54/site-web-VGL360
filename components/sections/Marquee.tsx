'use client'

const items = [
  'DESIGN UI/UX',
  '✦',
  'DÉVELOPPEMENT WEB',
  '✦',
  'NEXT.JS & REACT',
  '✦',
  'IDENTITÉ DE MARQUE',
  '✦',
  'E-COMMERCE',
  '✦',
  'SEO & PERFORMANCE',
  '✦',
  'APPLICATIONS WEB',
  '✦',
  'CONSEIL DIGITAL',
  '✦',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden py-5 bg-purple border-y border-purple-light/20"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-6 text-sm font-black uppercase tracking-widest text-white/90 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
