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
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Un assistant RAG souverain et hybride pour les cabinets juridiques. Vos dossiers restent sous le contrôle du cabinet, avec une recherche sémantique et lexicale et des réponses sourcées.
              </p>

              <div
                className="mt-8 grid border-y border-border"
                aria-label="Double source : cabinet et corpus OHADA/CCJA"
              >
                <div className="border-b border-border py-4">
                  <p className="text-sm text-muted">Source interne</p>
                  <p className="mt-1 text-base">Dossiers et documents du cabinet</p>
                </div>
                <div className="py-4">
                  <p className="text-sm text-muted">Source externe</p>
                  <p className="mt-1 text-base">Corpus OHADA et CCJA</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">
                Les deux sources sont interrogées ensemble. Chaque réponse cite ses références.
              </p>
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
