import type { Metadata } from 'next'
import ScrollCue from '@/components/ScrollCue'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Compeel est un studio d\'ingénierie et de conception logicielle ancré en Afrique, qui construit des architectures sur-mesure pour des environnements exigeants.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Header */}
      <section className="relative flex min-h-[calc(100vh-61px)] flex-col justify-center py-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-accent-deep">
            À propos
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight">
            Un studio africain.
          </h1>
        </div>
        <ScrollCue />
      </section>

      <div className="border-t border-border" />

      {/* Story */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-deep">Histoire</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              Compeel a été fondé en 2016 avec Alexis Sambou et Beny Marel Pambou. L&apos;idée était simple :
              construire des outils technologiques qui répondent aux réalités africaines,
              pas aux fantasmes qu&apos;on projette sur elles depuis l&apos;extérieur.
            </p>
            <p>
              On a travaillé ensemble pendant quelques années. On a exploré, prototypé,
              cherché. Puis la vie a imposé une pause. Six ans.
            </p>
            <p>
              Alex n&apos;est plus là pour voir la suite. Cette absence est réelle,
              et elle est présente dans chaque ligne de code qu&apos;on écrit aujourd&apos;hui.
              Marel, lui, a pris une autre route.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Aujourd'hui */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-deep">Aujourd&apos;hui</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              Le studio reprend. Avec une vision plus claire, une méthode plus précise,
              et une conviction renforcée par six ans de recul.
            </p>
            <p>
              Compeel conçoit des architectures logicielles sur-mesure pour des frictions de terrain
              réelles : conformité réglementaire, flux financiers, intégration de systèmes hétérogènes.
              Dans des domaines comme la santé, la mobilité, le droit.
            </p>
            <p>
              Certaines de nos réalisations utilisent la voix parce que le problème l&apos;exige.
              D&apos;autres non. Ce qui ne change pas, c&apos;est le point de départ : un vrai problème,
              observé de l&apos;intérieur.
            </p>
            <p>
              L&apos;Afrique de l&apos;Ouest a des contraintes réelles et des besoins que la tech globale
              ignore systématiquement. Pas par malveillance, par ignorance. Personne ne construit pour
              ce marché parce que personne ne le connaît de l&apos;intérieur.
            </p>
            <p>
              Nous, si.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Principes */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-deep">Principes</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Terrain d\'abord',
                text: 'On construit à partir de ce qu\'on observe, pas de ce qu\'on imagine. Chaque produit commence par une frustration réelle.',
              },
              {
                title: 'Contraintes réelles',
                text: 'Connectivité limitée, infrastructure fragile, données sensibles. On conçoit pour ces contraintes, pas malgré elles.',
              },
              {
                title: 'Sobriété',
                text: 'Pas de features inutiles. Pas de complexité pour impressionner. Des outils qui font une chose, bien.',
              },
              {
                title: 'Honnêteté',
                text: 'On dit ce qu\'on fait. On ne promet pas ce qu\'on ne peut pas livrer. On construit ce qui est utile.',
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
