import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de remboursement',
  description: "compeel.com ne propose aucune vente en ligne : cette page précise ce que cela implique.",
}

export default function RemboursementPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Remboursement</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Politique de remboursement.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Dernière mise à jour : 19 septembre 2026.</p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Aucune vente sur compeel.com</h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            compeel.com ne propose aucun paiement, abonnement ou achat en ligne. Aucune transaction n&apos;a lieu sur ce
            site : cette politique de remboursement ne s&apos;applique donc à rien, à ce jour.
          </p>
          <p>
            KARA, Alexis et Dame Justice disposent chacun de leur propre site, où des conditions commerciales et de
            remboursement spécifiques seront publiées si et quand une offre payante y sera proposée. Elles ne relèvent
            pas de compeel.com.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Une question ?</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Pour toute question sur un produit, écrivez à{' '}
          <a href="mailto:williams.stanley.desouza@gmail.com" className="underline underline-offset-4 hover:text-accent-deep">williams.stanley.desouza@gmail.com</a>.
        </p>
      </section>
    </div>
  )
}
