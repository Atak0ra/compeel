import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment compeel.com collecte, utilise et protège les données transmises via le formulaire de contact, conformément au RGPD.',
}

export default function ConfidentialitePage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Vie privée</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Politique de confidentialité.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Dernière mise à jour : 19 septembre 2026. Compeel collecte le minimum de données nécessaires, uniquement
          via le formulaire de contact.
        </p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Responsable de traitement</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Williams de Souza (Compeel) est responsable du traitement des données décrites ici. Contact :{' '}
          <a href="mailto:williams.stanley.desouza@gmail.com" className="underline underline-offset-4 hover:text-accent-deep">williams.stanley.desouza@gmail.com</a>.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Données collectées</h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            compeel.com ne dispose d&apos;aucun compte utilisateur et ne collecte aucune donnée personnelle en dehors
            du formulaire de contact. Trois champs, strictement nécessaires pour répondre à une demande, y sont
            recueillis :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Message</li>
          </ul>
          <p>
            Aucune autre information n&apos;est demandée ni conservée. L&apos;hébergeur (Vercel) peut générer des
            journaux techniques standards (adresse IP, horodatage) à des fins de sécurité et de bon fonctionnement du
            service ; Compeel n&apos;y accède pas et ne les exploite pas.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Finalité et base légale</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les données du formulaire servent uniquement à répondre à la demande envoyée. La base légale est le
          consentement : vous transmettez ces informations volontairement en soumettant le formulaire.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Destinataires et sous-traitants</h2>
        <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
          <p>Le message est lu uniquement par Williams de Souza. Deux prestataires techniques interviennent pour l&apos;acheminer :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-foreground">Resend</strong> (Plus Five Five, Inc., États-Unis) pour l&apos;envoi de l&apos;email.
            </li>
            <li>
              <strong className="font-medium text-foreground">Google (Gmail)</strong> pour la réception dans la boîte de messagerie de Compeel.
            </li>
          </ul>
          <p>
            Ces prestataires étant établis aux États-Unis, les données transitent potentiellement en dehors de
            l&apos;Union européenne. Ils s&apos;appuient sur leurs propres garanties de transfert (clauses contractuelles
            types ou cadres équivalents) ; leurs politiques respectives sont consultables sur resend.com et
            policies.google.com.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Durée de conservation</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les données transmises via le formulaire sont conservées le temps nécessaire pour traiter la demande, puis
          supprimées dans un délai raisonnable, n&apos;excédant pas 3 ans en l&apos;absence d&apos;échange donnant suite.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Cookies</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          compeel.com n&apos;utilise aucun cookie ni traceur. Détails sur la{' '}
          <Link href="/cookies" className="underline underline-offset-4 hover:text-accent-deep">politique de cookies</Link>.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Vos droits</h2>
        <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
            limitation, d&apos;opposition et de portabilité sur vos données. Pour l&apos;exercer, écrivez à{' '}
            <a href="mailto:williams.stanley.desouza@gmail.com" className="underline underline-offset-4 hover:text-accent-deep">williams.stanley.desouza@gmail.com</a>.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-deep">cnil.fr</a>
            ) si vous estimez que vos droits ne sont pas respectés.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Sécurité</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Le site est servi en HTTPS et hébergé sur une infrastructure sécurisée (Vercel). Aucune base de données de
          contacts n&apos;est constituée sur le site lui-même.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Modifications</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Cette politique peut évoluer, notamment si de nouveaux outils (mesure d&apos;audience, par exemple) étaient
          ajoutés au site. La date de mise à jour en haut de page reflète la version en vigueur.
        </p>
      </section>
    </div>
  )
}
