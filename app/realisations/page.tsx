import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProductShowcase from '@/components/ProductShowcase'
import JsonLd from '@/components/JsonLd'
import { projects } from '@/lib/projects'

export const metadata: Metadata = { title: 'Nos produits', description: 'Découvrez KARA, Alexis et Dame Justice : trois produits conçus et développés par le studio Compeel.' }

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Produits Compeel', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.name, url: `https://compeel.com${project.href}` })) }} />
      <header className="py-12 sm:py-20"><p className="mb-5 text-sm text-accent-deep">Conçus par Compeel</p><h1 className="font-serif text-5xl sm:text-6xl">Nos produits.</h1><p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">Trois domaines, trois usages. La même attention à ce que les professionnels ont besoin de faire, chaque jour.</p></header>
      <h2 className="sr-only">KARA, Alexis et Dame Justice</h2>
      <ProductShowcase />
      <section className="section-space flex flex-wrap items-center justify-between gap-6 border-t border-border">
        <div><h2 className="font-serif text-3xl">Un projet du même ordre ?</h2><p className="mt-3 text-base text-muted">Parlons de vos contraintes avec le studio.</p></div>
        <Link href="/#contact" className="button-primary">Échanger avec le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}