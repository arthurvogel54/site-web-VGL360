'use client'

const currentYear = new Date().getFullYear()

const links = {
  Services: [
    { label: 'Site vitrine', href: '/#services' },
    { label: 'Landing Page', href: '/#services' },
    { label: 'Visite Virtuelle 360°', href: '/#services' },
    { label: 'Refonte de site', href: '/#contact' },
  ],
  Agence: [
    { label: 'À Propos', href: '/#apropos' },
    { label: 'Pourquoi VGL360', href: '/#pourquoi' },
    { label: 'Tarifs', href: '/#tarifs' },
    { label: 'Contact', href: '/#contact' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ],
}

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#" aria-label="VGL360 — Accueil" className="flex items-center mb-6 w-fit">
            <img
              src="/360logo-removebg-preview.png"
              alt="VGL360"
              className="h-14 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Création web & Visite Virtuelle Google 360°. Votre présence en ligne, architecturée avec soin.
          </p>
          <div className="flex gap-3">
            {(['LinkedIn', 'Instagram', 'Google'] as const).map((social) => (
              <a
                key={social}
                href="#"
                aria-label={`VGL360 sur ${social}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-purple/60 hover:bg-purple/20 transition-all duration-200"
              >
                <span className="text-xs font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-5">
              {section}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} VGL360. Tous droits réservés.
          </p>
          <div className="text-xs font-black uppercase tracking-[0.3em] text-white/10 select-none" aria-hidden="true">
            MADE WITH PASSION — VGL360
          </div>
        </div>
      </div>
    </footer>
  )
}
