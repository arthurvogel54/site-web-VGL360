import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'CGV — VGL360',
  description: 'Conditions Générales de Vente de VGL360, création de sites web et visite virtuelle Google 360°.',
  robots: { index: false, follow: false },
}

export default function CGV() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h1 className="font-black text-ink uppercase tracking-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1' }}>
            Conditions Générales<br />
            <span className="text-purple">de Vente</span>
          </h1>
          <p className="text-ink-muted text-sm mb-12">Dernière mise à jour : avril 2025</p>

          <div className="flex flex-col gap-10 text-ink-soft text-sm leading-relaxed">

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 1 — Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
                <strong className="text-ink"> VGL360, SASU au capital de 2 000 €</strong> (ci-après «&nbsp;le Prestataire&nbsp;»)
                et toute personne physique ou morale (ci-après «&nbsp;le Client&nbsp;») souhaitant recourir à ses
                services de création de sites web et de visite virtuelle Google 360°.
              </p>
              <p className="mt-3">
                Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 2 — Devis et commande</h2>
              <p>
                Chaque projet fait l&apos;objet d&apos;un devis personnalisé, établi sur la base des informations
                fournies par le Client (brief, cahier des charges, exemples). Le devis est valable 30 jours à
                compter de sa date d&apos;émission.
              </p>
              <p className="mt-3">
                La commande est réputée ferme et définitive dès réception du devis signé et de l&apos;acompte
                correspondant (voir Article 4). Aucune modification majeure de périmètre ne pourra être intégrée
                sans établissement d&apos;un avenant au devis.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 3 — Tarifs</h2>
              <p>
                Les tarifs sont exprimés en euros hors taxes (HT). En tant que SASU assujettie à la TVA,
                celle-ci sera ajoutée au taux légal en vigueur sur chaque facture émise.
              </p>
              <p className="mt-3">
                Les tarifs indicatifs des packs sont disponibles sur la page Tarifs du site. Un devis sur mesure
                peut être demandé pour tout projet spécifique.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 4 — Modalités de paiement</h2>
              <ul className="flex flex-col gap-2 pl-4 border-l-2 border-light-border">
                <li><strong className="text-ink">Acompte :</strong> 30 % du montant total à la signature du devis (démarrage des travaux).</li>
                <li><strong className="text-ink">Solde :</strong> 70 % à la livraison du projet, avant mise en ligne.</li>
                <li><strong className="text-ink">Paiement en plusieurs fois :</strong> possible sur demande, selon accord écrit préalable.</li>
              </ul>
              <p className="mt-3">
                Les paiements s&apos;effectuent par virement bancaire ou tout autre moyen convenu entre les parties.
                Tout retard de paiement entraîne des pénalités de retard au taux légal en vigueur, ainsi qu&apos;une
                indemnité forfaitaire de 40 € pour frais de recouvrement.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 5 — Délais de réalisation</h2>
              <p>
                Les délais indicatifs communiqués lors du devis ne démarrent qu&apos;à réception de l&apos;acompte
                ET des éléments fournis par le Client (textes, logos, photos, accès nécessaires).
              </p>
              <p className="mt-3">
                Tout retard causé par le Client (fourniture tardive d&apos;éléments, délai de validation) ne pourra
                être imputé au Prestataire. Les délais seront alors décalés d&apos;autant.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 6 — Obligations du Client</h2>
              <p>Le Client s&apos;engage à :</p>
              <ul className="mt-3 flex flex-col gap-1.5 pl-4 border-l-2 border-light-border">
                <li>Fournir des informations exactes et complètes nécessaires à la réalisation du projet.</li>
                <li>Valider les étapes intermédiaires dans un délai raisonnable (7 jours ouvrés par défaut).</li>
                <li>S&apos;assurer que les éléments transmis (textes, images) ne violent aucun droit de tiers.</li>
                <li>Régler les factures dans les délais convenus.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 7 — Propriété intellectuelle</h2>
              <p>
                Les créations (maquettes, code source, visuels) réalisées par le Prestataire restent sa propriété
                exclusive jusqu&apos;au paiement intégral des sommes dues. À compter du règlement complet, le Client
                bénéficie d&apos;une licence d&apos;utilisation exclusive et définitive sur le résultat livré.
              </p>
              <p className="mt-3">
                Le Prestataire se réserve le droit de mentionner le projet dans son portfolio, sauf opposition
                écrite du Client dans les 15 jours suivant la livraison.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 8 — Résiliation</h2>
              <p>
                En cas de résiliation à l&apos;initiative du Client après démarrage des travaux, l&apos;acompte versé
                reste acquis au Prestataire. Un décompte proportionnel au travail réalisé pourra être facturé
                si le montant total dépasse l&apos;acompte.
              </p>
              <p className="mt-3">
                En cas de manquement grave du Prestataire à ses obligations, le Client peut résilier le contrat
                après mise en demeure restée sans effet sous 15 jours. L&apos;acompte sera remboursé au prorata
                du travail non réalisé.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 9 — Responsabilité</h2>
              <p>
                La responsabilité du Prestataire ne saurait être engagée pour tout dommage indirect résultant
                de l&apos;utilisation du site livré, notamment en cas de perte de données, manque à gagner ou
                atteinte à l&apos;image du Client.
              </p>
              <p className="mt-3">
                La responsabilité du Prestataire est limitée au montant des sommes effectivement perçues
                au titre du contrat concerné.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 10 — Confidentialité</h2>
              <p>
                Les parties s&apos;engagent mutuellement à ne pas divulguer à des tiers les informations confidentielles
                échangées dans le cadre du projet (données commerciales, stratégiques, techniques).
                Cette obligation persiste pendant 2 ans après la fin du contrat.
              </p>
            </section>

            <section>
              <h2 className="font-black text-ink text-base uppercase tracking-wide mb-3">Article 11 — Droit applicable et litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties rechercheront
                en priorité une solution amiable. À défaut d&apos;accord dans un délai de 30 jours, le tribunal
                compétent sera celui du ressort du domicile du Prestataire.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
