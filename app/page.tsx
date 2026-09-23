import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import TrustedBy from '@/components/TrustedBy'
import JsonLd from '@/components/JsonLd'
import ScrollCue from '@/components/ScrollCue'

export const metadata: Metadata = {
  title: { absolute: "Compeel · Ingénierie logicielle et IA appliquée" },
  description: "Studio indépendant d'ingénierie logicielle et d'IA appliquée. Architecture, systèmes backend et intégration IA. Références fintech : VersusFinance et Crpay.",
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Compeel', url: 'https://compeel.com', description: "Studio indépendant d'ingénierie logicielle et d'IA appliquée." }} />
      <header className="home-hero flex flex-col gap-4 pb-6">
        <div className="page-shell flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="mx-auto my-auto w-full max-w-5xl shrink-0 py-4 sm:py-6">
            <h1 className="font-serif text-[64px] font-normal leading-none text-accent-deep sm:text-[104px] lg:text-[144px]">Compeel<span className="text-patina">.</span></h1>
            <div className="mt-6 grid items-start gap-6 border-t border-border pt-8 sm:mt-8 sm:pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
              <div className="space-y-3 md:space-y-5">
                <p className="font-mono text-sm text-patina">Studio indépendant / Depuis 2016</p>
                <p className="text-base leading-relaxed text-muted">Ingénierie logicielle<br />&amp; IA appliquée</p>
                <p className="text-sm leading-relaxed text-patina">Racines africaines. Regard global.</p>
              </div>
              <div className="min-w-0 max-w-xl">
                <p className="font-serif text-3xl leading-tight sm:text-4xl">Comprendre le terrain.<br />Construire pour durer.</p>
                <p className="mt-4 text-base leading-relaxed text-muted">Architecture logicielle, systèmes backend, IA appliquée. Nous accompagnons vos équipes des premiers choix techniques à la mise en production.</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href="#contact" className="button-primary">Parlons de votre projet<ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a href="#references" className="inline-flex min-h-11 items-center gap-2 text-base text-patina">Les références<ArrowUpRight size={18} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollCue />
      </header>
      <TrustedBy />
      <section aria-labelledby="engineering-heading">
        <div className="page-shell py-20 lg:py-32">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
            <div><p className="mb-5 font-mono text-sm text-patina">02 / La pratique</p><h2 id="engineering-heading" className="font-serif text-4xl font-normal leading-tight">Des choix.<br />Puis des actes.</h2></div>
            <div><p className="max-w-2xl text-xl leading-relaxed">Je suis Williams de Souza. Mon parcours de Staff Engineer chez OCTO Technology nourrit une conviction : un système doit pouvoir être compris, exploité et transmis.</p><Link href="/about" className="mt-5 inline-flex min-h-11 items-center gap-2 text-base text-accent-deep">Rencontrer le studio<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          </div>
          <div className="mt-16 space-y-12 lg:mt-20 lg:space-y-16">
            {[
              { number: '01', title: 'Partir des contraintes.', label: 'Architecture pragmatique', text: 'Le métier, l’existant, les conditions d’exploitation. Choisir la complexité utile et documenter les arbitrages.' },
              { number: '02', title: 'Tenir en production.', label: 'Développement rigoureux', text: 'Des interfaces explicites, des tests et une mise en production maîtrisée. La sécurité et la montée en charge se travaillent dès la conception.' },
              { number: '03', title: 'Garder le jugement.', label: 'IA appliquée', text: 'Intégrer l’IA pour un usage précis. Évaluer les résultats, protéger les données et prévoir la validation humaine.' },
            ].map(item => (
              <div key={item.number} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
                <div className="flex items-baseline gap-4"><span aria-hidden="true" className="font-mono text-sm text-accent-deep">{item.number}</span><h3 className="font-serif text-2xl font-normal">{item.title}</h3></div>
                <div className="space-y-3"><p className="text-base font-medium text-patina">{item.label}</p><p className="max-w-xl text-base leading-relaxed text-muted">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="scroll-mt-36 bg-surface">
        <div className="page-shell grid gap-12 py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-20 lg:py-32">
        <div><p className="mb-6 font-mono text-sm text-accent-deep">03 / Prendre contact</p><h2 className="max-w-md font-serif text-4xl font-normal leading-tight text-accent-deep sm:text-5xl">Votre terrain.<br /><span className="text-foreground">Ses contraintes.<br />On en parle.</span></h2><p className="mt-6 max-w-sm text-base leading-relaxed text-muted">Une architecture à définir, un backend à fiabiliser ou une intégration IA à cadrer. Décrivez votre contexte.</p></div>
        <ContactForm />
        </div>
      </section>
      <section id="labs" className="scroll-mt-36" aria-labelledby="labs-heading">
        <div className="page-shell grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 lg:py-24">
          <div><p className="mb-3 font-mono text-sm text-patina">En parallèle / R&amp;D</p><h2 id="labs-heading" className="font-serif text-2xl font-normal">Compeel Labs</h2></div>
          <div><p className="max-w-xl text-base leading-relaxed text-muted">Un espace distinct des missions clients pour les produits du studio : agents logiciels, santé et recherche juridique.</p><Link href="/realisations" className="mt-3 inline-flex min-h-11 items-center gap-2 text-base text-patina">Explorer les travaux du Labs<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </div>
  )
}