import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ProductShowcase from '@/components/ProductShowcase'
import TrustedBy from '@/components/TrustedBy'
import ScrollCue from '@/components/ScrollCue'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Compeel · Studio technologique africain' },
  description: 'Compeel conçoit ses propres produits : KARA pour la mémoire clinique, Alexis pour le développement logiciel et Dame Justice pour la recherche juridique.',
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Compeel', url: 'https://compeel.com', description: 'Studio technologique africain. KARA, Alexis et Dame Justice.' }} />
      <header className="relative flex min-h-[calc(100dvh-70px)] flex-col justify-center py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted"><p>Studio technologique africain</p><p>Indépendant. Depuis 2016.</p></div>
        <h1 className="my-6 font-serif text-[72px] leading-none sm:my-8 sm:text-[112px] lg:text-[144px]">Compeel<span className="text-accent-deep">.</span></h1>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-end">
          <p className="max-w-2xl text-2xl leading-snug sm:text-3xl">Nous imaginons et développons nos propres produits. Ancrés dans les réalités africaines.</p>
          <a href="#produits" className="inline-flex min-h-11 items-center gap-3 justify-self-start text-base md:justify-self-end">Découvrir les produits<ArrowDown size={18} aria-hidden="true" /></a>
        </div>
        <ScrollCue />
      </header>
      <section id="produits" className="section-space scroll-mt-24 border-t border-border" aria-labelledby="products-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6"><h2 id="products-heading" className="font-serif text-2xl">Les produits du studio</h2><p className="text-sm text-muted">Santé, logiciel et droit.</p></div>
        <ProductShowcase />
      </section>
      <section className="section-space grid gap-8 border-t border-border md:grid-cols-[1fr_2fr]">
        <h2 className="font-serif text-3xl sm:text-4xl">Un studio.<br />Des convictions.</h2>
        <div>
          <p className="max-w-2xl text-xl leading-relaxed">Un produit commence par une situation qui mérite mieux. Un dossier difficile à retrouver. Du code à vérifier. Un texte juridique dispersé.</p>
          <div className="mt-9 grid gap-7 sm:grid-cols-2"><div><h3 className="mb-3 text-base font-medium">L&apos;usage avant la technologie</h3><p className="text-base leading-relaxed text-muted">La voix pour KARA, les validations pour Alexis, les références pour Dame Justice. Chaque choix répond à un besoin précis.</p></div><div><h3 className="mb-3 text-base font-medium">Garder la maîtrise</h3><p className="text-base leading-relaxed text-muted">Ses données, son code, ses sources. Nos produits sont conçus pour laisser leur place aux professionnels qui les utilisent.</p></div></div>
          <Link href="/about" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground text-base">Rencontrer le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <TrustedBy />
      <section id="contact" className="section-space grid scroll-mt-24 gap-10 border-t border-border md:grid-cols-2">
        <div><p className="mb-4 text-sm text-accent-deep">Contact</p><h2 className="font-serif text-4xl">Parlons de ce<br />qui vous intéresse.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-muted">Découvrir un produit, l&apos;adopter dans votre structure ou échanger avec le studio. Écrivez-nous.</p></div>
        <ContactForm />
      </section>
    </div>
  )
}