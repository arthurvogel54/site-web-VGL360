import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Mentions Légales — VGL360',
  description: 'Mentions légales du site VGL360, agence de création web et visite virtuelle Google 360°.',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h1 className="font-black text-ink uppercase tracking-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1' }}>
            Mentions<br />
            <span className="text-purple">Légales</span>
          </h1>
          <p className="text-ink-muted text-sm mb-12">Dernière mise à jour : avril 2025</p>

          <div className="flex flex-col gap-10 text-ink-soft text-sm leading-relaxed">

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">1. Éditeur du site</h2>
              <p>Le présent site <strong className="text-ink">vgl360.fr</strong> est édité par :</p>
              <ul className="mt-3 flex flex-col gap-1 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Nom :</strong> Arthur Vogel</li>
                <li><strong className="text-ink">Dénomination commerciale :</strong> VGL360</li>
                <li><strong className="text-ink">Statut :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
                <li><strong className="text-ink">Capital social :</strong> 2 000 €</li>
                <li><strong className="text-ink">SIRET :</strong> 925 269 052 00013</li>
                <li><strong className="text-ink">Email :</strong> contact@vgl360.fr</li>
                <li><strong className="text-ink">Activité :</strong> Création de sites web et Visite Virtuelle Google 360°</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="mt-3 flex flex-col gap-1 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Société :</strong> Vercel Inc.</li>
                <li><strong className="text-ink">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong className="text-ink">Site :</strong> vercel.com</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, code source)
                est la propriété exclusive de VGL360, sauf mention contraire expresse, et est protégé par les lois
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation
                préalable et écrite de VGL360.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">4. Limitation de responsabilité</h2>
              <p>
                VGL360 s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, VGL360 ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations
                mises à disposition, et décline toute responsabilité pour toute imprécision, inexactitude ou omission.
              </p>
              <p className="mt-3">
                VGL360 ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;accès
                ou de l&apos;utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. VGL360 n&apos;exerce aucun contrôle sur ces sites
                et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de données personnelles.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">6. Cookies</h2>
              <p>
                Ce site utilise uniquement des cookies techniques strictement nécessaires au bon fonctionnement
                (navigation, sécurité). Aucun cookie publicitaire ni de traçage analytique n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut
                de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
