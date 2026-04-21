'use client'

const currentYear = new Date().getFullYear()

const links = {
  Services: ['Site vitrine', 'E-commerce', 'Application web', 'Design UI/UX', 'SEO & Performance', 'Maintenance'],
  Agence: ['Notre approche', 'Pourquoi VGL360', 'Processus', 'Contact'],
  Légal: ['Mentions légales', 'Politique de confidentialité', 'CGV'],
}

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark-DEFAULT border-t border-dark-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <a href="#" aria-label="VGL360 — Accueil" className="flex items-center gap-2 mb-6 group w-fit">
            <div className="w-8 h-8 rounded-lg bg-purple flex items-center justify-center group-hover:bg-citrine transition-colors duration-300">
              <span className="text-white group-hover:text-dark-DEFAULT font-black text-xs transition-colors duration-300">V</span>
            </div>
            <span className="font-black text-white text-lg tracking-tight">
              VGL<span className="text-citrine">360</span>
            </span>
          </a>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Agence de conception et développement web. Nous transformons vos idées en expériences numériques qui font la différence.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {(['LinkedIn', 'Twitter', 'GitHub'] as const).map((social) => (
              <a
                key={social}
                href="#"
                aria-label={`VGL360 sur ${social}`}
                className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-white/40 hover:text-white hover:border-purple/40 hover:bg-purple/10 transition-all duration-200"
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
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} VGL360. Tous droits réservés.
          </p>
          {/* Bold stamp */}
          <div
            className="text-xs font-black uppercase tracking-[0.3em] text-white/10 select-none"
            aria-hidden="true"
          >
            BUILT WITH PASSION — VGL360
          </div>
        </div>
      </div>
    </footer>
  )
}
