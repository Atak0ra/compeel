import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions d'utilisation du site compeel.com : accès, contenu, liens tiers et responsabilité.",
  alternates: { canonical: '/cgu' },
}

export default function CGUPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Conditions</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Conditions générales d&apos;utilisation.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Dernière mise à jour : 19 septembre 2026.</p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Objet</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les présentes conditions régissent l&apos;accès et l&apos;utilisation du site compeel.com, vitrine du studio
          Compeel et de ses produits KARA, Alexis et Dame Justice. La navigation sur le site vaut acceptation de ces
          conditions.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Accès au site</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          L&apos;accès à compeel.com est gratuit. Compeel s&apos;efforce d&apos;assurer une disponibilité continue du
          site, sans garantie absolue : des interruptions peuvent survenir pour maintenance ou pour des raisons hors
          de son contrôle.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Aucune vente sur ce site</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          compeel.com ne propose aucun paiement, abonnement ou achat en ligne. Le site présente le studio et ses
          produits ; les demandes se font via le formulaire de contact ou les sites propres de chaque produit.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Formulaire de contact</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          En utilisant le formulaire de contact, vous vous engagez à fournir des informations exactes et à ne pas
          l&apos;utiliser à des fins abusives (spam, contenu illicite). Voir la{' '}
          <Link href="/confidentialite" className="underline underline-offset-4 hover:text-accent-deep">politique de confidentialité</Link> pour le traitement de vos données.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Liens vers des sites tiers</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les liens vers les sites de KARA, Alexis et Dame Justice, ou vers leurs démonstrations, mènent à des
          services distincts de compeel.com, avec leurs propres conditions. Compeel n&apos;est pas responsable de leur
          contenu ni de leur disponibilité.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Propriété intellectuelle</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Voir les <Link href="/mentions-legales" className="underline underline-offset-4 hover:text-accent-deep">mentions légales</Link> pour les droits relatifs aux contenus du site.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Limitation de responsabilité</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les informations présentées sur ce site le sont à titre indicatif. Les produits sont décrits avec leurs
          fonctionnalités réelles, sans garantie de résultat spécifique pour un usage donné. Les aperçus visuels des
          produits sont des vues illustratives, réalisées avec des données fictives.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Droit applicable</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Ces conditions sont soumises au droit français. En cas de litige non résolu à l&apos;amiable, les tribunaux
          de Paris seront compétents.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Modification des conditions</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Compeel peut mettre à jour ces conditions ; la date en haut de page reflète la version en vigueur.
        </p>
      </section>
    </div>
  )
}
