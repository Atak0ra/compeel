import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de compeel.com : éditeur, hébergement, propriété intellectuelle et droit applicable.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Informations légales</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Mentions légales.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Dernière mise à jour : 19 septembre 2026.</p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Éditeur du site</h2>
        <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
          <p>Le site compeel.com est édité par Williams de Souza, à titre individuel.</p>
          <p>
            Compeel est en cours de structuration juridique : l&apos;activité n&apos;est, à ce jour, rattachée à aucune
            immatriculation (SIRET) ni société enregistrée. Ces informations seront ajoutées ici dès que la structure
            sera formellement créée.
          </p>
          <p>Ville : Paris, France.</p>
          <p>Contact : <a href="mailto:williams.stanley.desouza@gmail.com" className="underline underline-offset-4 hover:text-accent-deep">williams.stanley.desouza@gmail.com</a></p>
          <p>Directeur de la publication : Williams de SOUZA.</p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Hébergement</h2>
        <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
          <p>Le site est hébergé par :</p>
          <p>
            Vercel Inc.<br />
            440 N Barranca Avenue #4133<br />
            Covina, CA 91723<br />
            États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-deep">vercel.com</a>
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Propriété intellectuelle</h2>
        <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
          <p>
            L&apos;ensemble des contenus présents sur compeel.com (textes, visuels, code, identité graphique) est la
            propriété de Williams de Souza / Compeel, sauf mention contraire. Toute reproduction, même partielle, sans
            autorisation préalable est interdite.
          </p>
          <p>
            Les aperçus visuels des produits KARA, Alexis et Dame Justice présentés sur ce site sont des maquettes
            illustratives, réalisées avec des données fictives.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Liens vers des sites tiers</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Ce site contient des liens vers les sites propres de KARA, Alexis et Dame Justice, ainsi que vers leurs
          démonstrations. Ces sites sont distincts de compeel.com et peuvent être soumis à leurs propres conditions.
          Compeel ne peut être tenu responsable de leur contenu ou de leur fonctionnement.
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Droit applicable</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Les présentes mentions légales sont soumises au droit français. Pour les visiteurs situés dans l&apos;Union
          européenne, les réglementations européennes applicables (notamment le RGPD) s&apos;appliquent également. En cas
          de litige, et à défaut de résolution amiable, les tribunaux compétents seront ceux de Paris.
        </p>
      </section>
    </div>
  )
}
