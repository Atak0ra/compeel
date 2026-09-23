import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProductShowcase from '@/components/ProductShowcase'
import JsonLd from '@/components/JsonLd'
import { projects } from '@/lib/projects'

export const metadata: Metadata = { title: 'Compeel Labs', description: 'Les travaux de R&D et les produits internes de Compeel : KARA, Alexis et Dame Justice. Un espace distinct des missions clients du studio.', alternates: { canonical: '/realisations' } }

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Compeel Labs', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.name, url: `https://compeel.com${project.href}` })) }} />
      <header className="py-12 sm:py-20"><p className="mb-5 text-base text-muted">R&amp;D · Produits internes</p><h1 className="text-5xl font-semibold sm:text-6xl">Compeel Labs.</h1><p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">Un espace pour explorer des usages et développer les produits du studio, distinct des missions clients. Santé, agents logiciels et recherche juridique.</p></header>
      <h2 className="sr-only">KARA, Alexis et Dame Justice</h2>
      <ProductShowcase />
      <section className="section-space flex flex-wrap items-center justify-between gap-6 border-t border-border">
        <div><h2 className="text-3xl font-semibold">Un sujet à explorer ensemble ?</h2><p className="mt-3 text-base text-muted">Échangeons sur un usage, une expérimentation ou un partenariat.</p></div>
        <Link href="/#contact" className="button-primary">Échanger avec le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}