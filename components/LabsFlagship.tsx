import { ArrowDown } from 'lucide-react'
import BetaForm from './BetaForm'
import DameJusticePreview from './product-previews/DameJusticePreview'

export default function LabsFlagship() {
  return (
    <section id="labs" aria-labelledby="labs-heading" className="section-anchor border-b border-border">
      <div className="page-shell py-16 sm:py-24">
        <h2 id="labs-heading" className="text-3xl font-medium leading-tight sm:text-4xl">
          Compeel Labs
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Nos incubateurs d&apos;infrastructures logicielles et d&apos;IA appliquée aux secteurs à forte complexité.
        </p>

        <article className="mt-12 border-t border-border text-foreground">
          <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]">
            <div className="min-w-0">
              <p className="text-sm text-muted">Produit phare · Compeel Labs</p>

              <h3 className="mt-4 text-4xl font-medium sm:text-5xl lg:text-4xl xl:text-5xl">DameJustice</h3>
              <p className="mt-5 text-2xl font-medium leading-snug">
                Retrouvez ce que votre cabinet sait déjà.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                Posez votre question en langage courant. DameJustice cherche dans les documents de votre cabinet et vous montre les passages qui fondent chaque réponse. Vos documents restent chez vous.
              </p>

              <dl className="mt-8 grid border-y border-border" aria-label="Ce que DameJustice apporte au cabinet">
                <div className="border-b border-border py-4">
                  <dt className="text-base font-medium">Moins de temps à chercher</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">Une clause déjà négociée, une consultation rendue il y a trois ans : vous les retrouvez en quelques secondes.</dd>
                </div>
                <div className="border-b border-border py-4">
                  <dt className="text-base font-medium">Des réponses que vous pouvez vérifier</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">Chaque réponse renvoie aux documents et aux extraits utilisés. Vous relisez la source avant de vous en servir.</dd>
                </div>
                <div className="py-4">
                  <dt className="text-base font-medium">Des documents qui ne quittent pas le cabinet</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">DameJustice fonctionne sur un serveur installé chez vous. Vos documents ne sont envoyés à aucun service externe.</dd>
                </div>
              </dl>
              <a href="#damejustice-beta" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-foreground py-2 text-base font-medium transition-colors hover:text-muted">
                Demander un accès bêta<ArrowDown size={18} className="shrink-0" aria-hidden="true" />
              </a>
            </div>
            <DameJusticePreview />
          </div>

          <div id="damejustice-beta" className="section-anchor grid gap-8 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-10">
            <div>
              <h4 className="text-2xl font-medium">Demander un accès bêta</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Les accès sont ouverts progressivement aux professionnels du droit.
              </p>
            </div>
            <div className="min-w-0 max-w-xl">
              <BetaForm />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
