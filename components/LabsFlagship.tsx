import BetaForm from './BetaForm'

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

        <article className="relative mt-12 overflow-hidden rounded-lg bg-[#0B1220] text-slate-100">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'linear-gradient(to bottom right, black, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(to bottom right, black, transparent 70%)',
            }}
          />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
            <div>
              <p className="text-sm text-slate-400">Projet phare, accès bêta fermée</p>

              <h3 className="mt-4 text-4xl font-medium sm:text-6xl">DameJustice</h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Un assistant RAG souverain et hybride pour les cabinets juridiques. Vos dossiers restent sous le contrôle du cabinet, avec une recherche sémantique et lexicale et des réponses sourcées.
              </p>

              <div
                className="mt-8 grid overflow-hidden rounded-md border border-slate-700 sm:grid-cols-2 sm:divide-x sm:divide-slate-700"
                aria-label="Double source : cabinet et corpus OHADA/CCJA"
              >
                <div className="border-b border-slate-700 p-4 sm:border-b-0">
                  <p className="text-sm text-slate-400">Source interne</p>
                  <p className="mt-1 text-base text-white">Dossiers et documents du cabinet</p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-400">Source externe</p>
                  <p className="mt-1 text-base text-white">Corpus OHADA et CCJA</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Les deux sources sont interrogées ensemble. Chaque réponse cite ses références.
              </p>


            </div>

            <div className="self-start rounded-md border border-slate-700 p-6 sm:p-8">
              <h4 className="text-2xl font-medium text-white">Demander un accès bêta</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Les accès sont ouverts progressivement aux professionnels du droit.
              </p>
              <div className="mt-6">
                <BetaForm dark />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
