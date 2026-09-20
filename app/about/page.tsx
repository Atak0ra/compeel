import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Le studio et son histoire',
  description: "Fondé en 2016, le studio Compeel est reparti d'une conviction précise : partir d'un usage réel plutôt que d'un produit pensé de loin. Histoire, équipe et convictions.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Le studio</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Notre histoire.</h1>
        <p className="mt-6 max-w-3xl text-2xl leading-snug sm:text-3xl">Créer des produits à partir des réalités que l&apos;on connaît.</p>
      </header>
      <section className="section-space grid gap-8 border-t border-border md:grid-cols-[1fr_2fr]">
        <div><h2 className="font-serif text-3xl">Williams de SOUZA</h2><p className="mt-3 text-base text-muted">co-Fondateur de Compeel</p></div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
          <p>Nous avons fondé Compeel en 2016 avec une idée simple : construire des outils technologiques qui répondent aux réalités africaines, plutôt qu&apos;à ce que l&apos;on imagine d&apos;elles de loin.</p>
          <p className="text-muted">Nous avons exploré, prototypé, cherché. Puis la vie a imposé une pause de six ans. Le studio reprend avec une conviction plus précise : partir d&apos;un usage, en comprendre les contraintes et développer un produit qui y répond.</p>
          <p className="text-muted">Ce travail, c&apos;est de l&apos;ingénierie logicielle sur-mesure : construire un système à partir d&apos;une contrainte réelle plutôt que d&apos;adapter un produit générique. Aujourd&apos;hui, il prend trois formes : KARA pour la mémoire clinique, Alexis pour le développement logiciel et Dame Justice pour la recherche juridique.</p>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_2fr]"><h2 className="font-serif text-3xl">Ce qui nous guide.</h2><p className="max-w-xl text-lg leading-relaxed text-muted">Les convictions du studio se lisent dans les produits. Elles doivent correspondre à des décisions concrètes.</p></div>
        <div className="grid gap-9 md:grid-cols-3">
          <div><p className="mb-4 text-sm text-accent-deep">KARA</p><h3 className="mb-3 text-xl">Respecter le terrain</h3><p className="text-base leading-relaxed text-muted">Une voix plutôt qu&apos;un formulaire. Un serveur local plutôt qu&apos;une dépendance à un cloud externe. La conception commence avec les contraintes des soignants.</p></div>
          <div><p className="mb-4 text-sm text-accent-deep">Alexis</p><h3 className="mb-3 text-xl">Laisser le contrôle</h3><p className="text-base leading-relaxed text-muted">Automatiser le travail ne signifie pas supprimer le jugement. Spécification, vérifications et validation humaine encadrent le développement.</p></div>
          <div><p className="mb-4 text-sm text-accent-deep">Dame Justice</p><h3 className="mb-3 text-xl">Montrer ses sources</h3><p className="text-base leading-relaxed text-muted">Une réponse juridique ne vaut pas sans contexte. Pouvoir revenir au document fait partie du produit, pas d&apos;une note de bas de page.</p></div>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <h2 className="mb-8 font-serif text-3xl">Ce que nous construisons.</h2>
        <div className="divide-y divide-border">{projects.map(project => <Link key={project.id} href={project.href} className="flex flex-wrap items-center justify-between gap-4 py-6 hover:text-accent-deep"><span className="font-serif text-2xl">{project.name}</span><span className="flex items-center gap-3 text-base">{project.domain}<ArrowUpRight size={18} aria-hidden="true" /></span></Link>)}</div>
        <Link href="/#contact" className="button-primary mt-9">Échanger avec le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}