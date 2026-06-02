import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'L\'histoire de Compeel — un studio technologique africain fondé à Lomé, Togo.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Header */}
      <section className="py-32 sm:py-40">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-accent">
            À propos
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight">
            Un studio né à Lomé.
          </h1>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Story */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Histoire</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              Compeel a été fondé en 2016 avec Alexis Sambou. L&apos;idée était simple :
              construire des outils technologiques qui répondent aux réalités africaines,
              pas aux fantasmes qu&apos;on projette sur elles depuis l&apos;extérieur.
            </p>
            <p>
              On a travaillé ensemble pendant quelques années. On a exploré, prototypé,
              cherché. Puis la vie a imposé une pause. Six ans.
            </p>
            <p>
              Alexis n&apos;est plus là pour voir la suite. Cette absence est réelle,
              et elle est présente dans chaque ligne de code qu&apos;on écrit aujourd&apos;hui.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Reprise */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Aujourd&apos;hui</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              Le projet reprend. Avec une vision plus claire, des produits plus précis,
              et une conviction renforcée par six ans de recul.
            </p>
            <p>
              L&apos;Afrique de l&apos;Ouest a des langues riches, des contraintes réelles,
              et des besoins que la tech globale ignore systématiquement. Pas par malveillance —
              par ignorance. Personne ne construit pour ce marché parce que personne ne le connaît
              de l&apos;intérieur.
            </p>
            <p>
              Nous, si.
            </p>
            <p>
              KUMA est né de l&apos;observation que ma mère ne peut pas commander un taxi
              dans sa langue maternelle. KARA est né de l&apos;observation que les soignants
              perdent un temps précieux à remplir des formulaires papier dans des structures
              sous-équipées.
            </p>
            <p>
              Ce ne sont pas des problèmes abstraits. Ce sont des problèmes que je vois
              chaque fois que je rentre à Lomé.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Valeurs */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Principes</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Terrain d\'abord',
                text: 'On construit à partir de ce qu\'on observe, pas de ce qu\'on imagine. Chaque produit commence par une frustration réelle.',
              },
              {
                title: 'Langues locales',
                text: 'Le Mina, l\'Ewe, le Dioula — ce sont des langues vivantes, parlées par des millions de personnes. Elles méritent des outils à leur hauteur.',
              },
              {
                title: 'Contraintes réelles',
                text: 'Connectivité limitée, infrastructure fragile, données sensibles. On conçoit pour ces contraintes, pas malgré elles.',
              },
              {
                title: 'Sobriété',
                text: 'Pas de features inutiles. Pas de complexité pour impressionner. Des outils qui font une chose, bien.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="space-y-2">
                <h3 className="text-sm font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
