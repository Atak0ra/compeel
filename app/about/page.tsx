import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Le studio et son histoire',
  description: "Compeel, studio indépendant fondé par Williams de Souza. Une pratique de l'architecture logicielle, des systèmes backend et de l'IA appliquée, nourrie par un parcours de Staff Engineer chez OCTO Technology.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Le studio</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Notre histoire.</h1>
        <p className="mt-6 max-w-3xl text-2xl leading-snug sm:text-3xl">Un studio indépendant, une pratique exigeante de l&apos;ingénierie.</p>
      </header>
      <section className="section-space grid gap-8 border-t border-border md:grid-cols-[1fr_2fr]">
        <div><h2 className="font-serif text-3xl">Williams de SOUZA</h2><p className="mt-3 text-base text-muted">co-Fondateur de Compeel</p></div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
          <p>Nous avons fondé Compeel en 2016 avec une idée simple : construire des outils technologiques qui répondent aux réalités africaines, plutôt qu&apos;à ce que l&apos;on imagine d&apos;elles de loin.</p>
          <p className="text-muted">Après une pause de six ans, je poursuis cette histoire avec une activité centrée sur les missions d&apos;ingénierie pour les entreprises. Mon parcours de Staff Engineer chez OCTO Technology nourrit ma pratique de l&apos;architecture, du développement backend et de la mise en production.</p>
          <p className="text-muted">Avec Compeel, j&apos;accompagne les équipes dans leurs choix techniques et leur exécution. Le studio a notamment livré des missions pour VersusFinance et Crpay. Les travaux de R&amp;D et les produits internes sont regroupés dans un espace distinct : Compeel Labs.</p>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_2fr]"><h2 className="font-serif text-3xl">Une méthode de travail.</h2><p className="max-w-xl text-lg leading-relaxed text-muted">Des choix techniques explicites, reliés aux contraintes du métier et de l&apos;équipe.</p></div>
        <div className="grid gap-9 md:grid-cols-3">
          <div><h3 className="mb-3 text-xl">Comprendre avant de concevoir</h3><p className="text-base leading-relaxed text-muted">Clarifier le besoin, examiner le système existant et identifier les contraintes avant de choisir une architecture.</p></div>
          <div><h3 className="mb-3 text-xl">Vérifier avant de livrer</h3><p className="text-base leading-relaxed text-muted">Tests, revues et attention aux conditions d&apos;exploitation. Pour l&apos;IA, des évaluations et des limites explicites.</p></div>
          <div><h3 className="mb-3 text-xl">Transmettre la maîtrise</h3><p className="text-base leading-relaxed text-muted">Documenter les décisions, rendre les systèmes observables et permettre à l&apos;équipe de les maintenir et de les faire évoluer.</p></div>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <h2 className="mb-4 font-serif text-3xl">Compeel Labs.</h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">En parallèle des missions clients, le Labs accueille les produits et les expérimentations du studio.</p>
        <div className="divide-y divide-border">{projects.map(project => <Link key={project.id} href={project.href} className="flex flex-wrap items-center justify-between gap-4 py-6 hover:text-accent-deep"><span className="font-serif text-2xl">{project.name}</span><span className="flex items-center gap-3 text-base">{project.domain}<ArrowUpRight size={18} aria-hidden="true" /></span></Link>)}</div>
        <Link href="/#contact" className="button-primary mt-9">Échanger avec le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}