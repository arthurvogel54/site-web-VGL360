import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — VGL360',
  description: 'Politique de confidentialité et protection des données personnelles de VGL360.',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h1 className="font-black text-ink uppercase tracking-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1' }}>
            Politique de<br />
            <span className="text-purple">Confidentialité</span>
          </h1>
          <p className="text-ink-muted text-sm mb-12">Dernière mise à jour : avril 2025</p>

          <div className="flex flex-col gap-10 text-ink-soft text-sm leading-relaxed">

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données est <strong className="text-ink">Arthur Vogel — VGL360</strong>,
                joignable à l&apos;adresse : contact@vgl360.fr
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">2. Données collectées</h2>
              <p>Dans le cadre de l&apos;utilisation de ce site, les données suivantes peuvent être collectées :</p>
              <ul className="mt-3 flex flex-col gap-2 pl-4 border-l-2 border-light-border">
                <li>
                  <strong className="text-ink">Formulaire de contact :</strong> nom, adresse e-mail, message libre.
                  Ces données sont utilisées exclusivement pour répondre à votre demande.
                </li>
                <li>
                  <strong className="text-ink">Données de navigation :</strong> données techniques anonymes
                  (adresse IP, navigateur, pages visitées) à des fins de sécurité et de bon fonctionnement du site.
                  Aucun outil d&apos;analytics tiers n&apos;est utilisé.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">3. Base légale du traitement</h2>
              <ul className="flex flex-col gap-2 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Formulaire de contact :</strong> votre consentement explicite (soumission du formulaire).</li>
                <li><strong className="text-ink">Données techniques :</strong> intérêt légitime pour la sécurité et le fonctionnement du site.</li>
                <li><strong className="text-ink">Relation commerciale :</strong> exécution d&apos;un contrat ou mesures précontractuelles.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">4. Finalité des traitements</h2>
              <ul className="flex flex-col gap-2 pl-4 border-l-2 border-light-border">
                <li>Répondre à vos demandes de contact et établir des devis.</li>
                <li>Gérer la relation commerciale (facturation, suivi de projet).</li>
                <li>Assurer le bon fonctionnement et la sécurité du site.</li>
              </ul>
              <p className="mt-3">
                Vos données ne sont jamais vendues, louées ni communiquées à des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">5. Durée de conservation</h2>
              <ul className="flex flex-col gap-2 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Données de contact :</strong> 3 ans à compter du dernier échange, sauf relation commerciale active.</li>
                <li><strong className="text-ink">Données de facturation :</strong> 10 ans conformément aux obligations légales comptables.</li>
                <li><strong className="text-ink">Données techniques :</strong> supprimées sous 12 mois.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">6. Vos droits</h2>
              <p>Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
              <ul className="mt-3 flex flex-col gap-1.5 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Droit d&apos;accès :</strong> obtenir une copie des données vous concernant.</li>
                <li><strong className="text-ink">Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
                <li><strong className="text-ink">Droit à l&apos;effacement :</strong> demander la suppression de vos données («&nbsp;droit à l&apos;oubli&nbsp;»).</li>
                <li><strong className="text-ink">Droit à la limitation :</strong> limiter le traitement de vos données dans certains cas.</li>
                <li><strong className="text-ink">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes.</li>
                <li><strong className="text-ink">Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible par machine.</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : <strong className="text-ink">contact@vgl360.fr</strong>
              </p>
              <p className="mt-3">
                En cas de réclamation, vous pouvez également contacter la <strong className="text-ink">CNIL</strong> (
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">
                  www.cnil.fr
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">7. Sécurité des données</h2>
              <p>
                VGL360 met en œuvre les mesures techniques et organisationnelles appropriées pour protéger
                vos données contre tout accès non autorisé, perte, altération ou divulgation. Le site utilise
                un certificat SSL/TLS pour chiffrer les échanges.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">8. Cookies</h2>
              <p>
                Ce site n&apos;utilise pas de cookies de traçage ou publicitaires. Seuls des cookies techniques
                strictement nécessaires au fonctionnement du site peuvent être déposés. Vous pouvez configurer
                votre navigateur pour refuser les cookies, sans que cela n&apos;affecte votre navigation sur ce site.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">9. Modifications de la politique</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour pour refléter l&apos;évolution de nos pratiques
                ou des obligations légales. La date de dernière mise à jour est indiquée en haut de cette page.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
