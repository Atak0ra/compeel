import { ArrowUpRight } from 'lucide-react'
import DameJusticePreview from './product-previews/DameJusticePreview'
import { damejustice } from '@/lib/projects'

export default function LabsFlagship() {
  return (
    <section id="labs" aria-labelledby="labs-heading" className="section-anchor border-b border-border">
      <div className="page-shell py-16 sm:py-24">
        <p className="section-label">Compeel Labs</p>
        <h2 id="labs-heading" className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
          Ce que le laboratoire construit pour lui-même.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Compeel Labs réunit les produits nés de notre recherche. Ils vivent sur leur propre site, distincts des missions menées pour nos clients.
        </p>

        <article className="mt-12 grid items-center gap-10 border-t border-border py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]" aria-labelledby="damejustice-title">
          <div className="min-w-0">
            <p className="text-sm text-accent-deep">{damejustice.domain} · Un produit Compeel Labs</p>
            <h3 id="damejustice-title" className="mt-4 text-4xl font-medium sm:text-5xl lg:text-4xl xl:text-5xl">{damejustice.name}</h3>
            <p className="mt-5 text-2xl font-medium leading-snug">{damejustice.headline}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{damejustice.description}</p>
            <p className="mt-6 text-sm text-muted">Pour {damejustice.audience.toLocaleLowerCase('fr')}. {damejustice.access}.</p>
            <a href={damejustice.website} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-foreground py-2 text-base font-medium transition-colors hover:text-muted">
              Découvrir DameJustice<ArrowUpRight size={18} className="shrink-0" aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
          <DameJusticePreview />
        </article>
      </div>
    </section>
  )
}
