'use client'

const items = [
  'SITES VITRINES',
  '✦',
  'LANDING PAGES',
  '✦',
  'VISITE VIRTUELLE 360°',
  '✦',
  'SEO & VISIBILITÉ',
  '✦',
  'DESIGN RESPONSIVE',
  '✦',
  'GOOGLE MY BUSINESS',
  '✦',
  'PERFORMANCE WEB',
  '✦',
  'IMMERSION CLIENT',
  '✦',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden py-5 bg-purple"
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
