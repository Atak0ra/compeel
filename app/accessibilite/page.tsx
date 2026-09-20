import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibilité',
  description: "Déclaration d'accessibilité de compeel.com : engagements, mesures prises et contact pour signaler un défaut.",
  alternates: { canonical: '/accessibilite' },
}

export default function AccessibilitePage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Accessibilité</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Déclaration d&apos;accessibilité.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Dernière mise à jour : 19 septembre 2026.</p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Engagement</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Compeel s&apos;efforce de rendre compeel.com accessible au plus grand nombre, en visant les critères des
          Règles pour l&apos;Accessibilité des Contenus Web (WCAG 2.1, niveau AA).
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">État de conformité</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          compeel.com n&apos;a pas fait l&apos;objet d&apos;un audit RGAA formel par un tiers. Une revue interne a été
          menée sur les points ci-dessous ; elle ne remplace pas un audit complet et indépendant.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Mesures déjà en place</h2>
        <ul className="max-w-2xl list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>Structure HTML sémantique et hiérarchie de titres cohérente sur chaque page.</li>
          <li>Contrastes de texte vérifiés (ratio minimum 4,5:1 pour le texte courant, conforme WCAG AA).</li>
          <li>Navigation utilisable au clavier, avec indicateur de focus visible.</li>
          <li>Champs de formulaire associés à leur libellé (nom, email, message).</li>
          <li>Maquettes visuelles des produits décrites par un texte alternatif (<code>aria-label</code>) pour les technologies d&apos;assistance.</li>
          <li>Icônes purement décoratives masquées aux lecteurs d&apos;écran (<code>aria-hidden</code>).</li>
          <li>Contenu textuel visible sans dépendre du JavaScript ; les animations n&apos;empêchent jamais la lecture.</li>
          <li>Lien d&apos;évitement permettant de passer directement au contenu principal.</li>
        </ul>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Limites connues</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Certains contrastes décoratifs (motifs en arrière-plan, états de survol) peuvent être inférieurs au seuil
          recommandé sans nuire à la compréhension du contenu, celui-ci restant accessible par d&apos;autres moyens
          (texte, focus clavier). Cette liste sera mise à jour au fil des vérifications.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Signaler un problème</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Si une partie du site ne vous est pas accessible, écrivez à{' '}
          <a href="mailto:williams.stanley.desouza@gmail.com" className="underline underline-offset-4 hover:text-accent-deep">williams.stanley.desouza@gmail.com</a>{' '}
          en décrivant le problème rencontré. Nous nous engageons à répondre dans un délai raisonnable.
        </p>
      </section>
    </div>
  )
}
