import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Le laboratoire et son histoire',
  description: "Compeel, laboratoire indépendant fondé par Williams de Souza. Une pratique de l’architecture et de la résilience ancrée dans les réalités du terrain.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="section-label mb-5">Compeel / Le laboratoire</p>
        <h1 className="font-sans text-4xl sm:text-6xl">L’ingénierie au contact du terrain.</h1>
        <p className="mt-6 max-w-3xl text-2xl leading-snug sm:text-3xl">Un laboratoire indépendant, une pratique exigeante de l&apos;ingénierie.</p>
      </header>
      <section className="section-space grid gap-8 border-t border-border md:grid-cols-[1fr_2fr]">
        <div><h2 className="font-sans text-3xl">Williams de SOUZA</h2><p className="mt-3 text-base text-muted">co-Fondateur de Compeel</p></div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
          <p>Nous avons fondé Compeel en 2016 avec une idée simple : construire des outils technologiques qui répondent aux réalités africaines, plutôt qu&apos;à ce que l&apos;on imagine d&apos;elles de loin.</p>
          <p className="text-muted">Je poursuis cette histoire avec une pratique centrée sur l&apos;architecture, la fiabilité et l&apos;exploitation. Je pars des contraintes du système et de celles des équipes qui en ont la responsabilité.</p>
          <p className="text-muted">Avec Compeel, j&apos;accompagne les équipes dans leurs décisions de conception et leur vérification. Le laboratoire reste indépendant : aucune technologie à imposer, aucun choix soustrait à l&apos;examen des contraintes.</p>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_2fr]"><h2 className="font-sans text-3xl">Une méthode de travail.</h2><p className="max-w-xl text-lg leading-relaxed text-muted">Des choix techniques explicites, reliés aux contraintes du métier et de l&apos;équipe.</p></div>
        <div className="grid gap-9 md:grid-cols-3">
          <div><h3 className="mb-3 text-xl">Comprendre avant de concevoir</h3><p className="text-base leading-relaxed text-muted">Clarifier le besoin, examiner le système existant et identifier les contraintes avant de choisir une architecture.</p></div>
          <div><h3 className="mb-3 text-xl">Vérifier avant de livrer</h3><p className="text-base leading-relaxed text-muted">Éprouver la charge, les interruptions et les scénarios de reprise. Documenter les résultats, les limites et les conditions d&apos;exploitation.</p></div>
          <div><h3 className="mb-3 text-xl">Transmettre la maîtrise</h3><p className="text-base leading-relaxed text-muted">Documenter les décisions, rendre les systèmes observables et permettre à l&apos;équipe de les maintenir et de les faire évoluer.</p></div>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <h2 className="mb-4 font-sans text-3xl">La recherche comme discipline.</h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">Le terrain fait émerger les questions. Le laboratoire formule les hypothèses, construit les épreuves et examine les résultats. Ce travail nourrit des architectures que les équipes peuvent comprendre, exploiter et faire évoluer.</p>
        <Link href="/#contact" className="button-primary mt-4">Discuter d&apos;un système<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}