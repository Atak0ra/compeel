import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import TrustedBy from '@/components/TrustedBy'
import JsonLd from '@/components/JsonLd'
import ScrollCue from '@/components/ScrollCue'

export const metadata: Metadata = {
  title: { absolute: "Compeel · Laboratoire d'ingénierie logicielle et IA" },
  description: "Laboratoire indépendant d'ingénierie logicielle et d'IA appliquée. Les missions financent la recherche ; la recherche devient produits. Références fintech : VersusFinance et Crpay.",
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Compeel', url: 'https://compeel.com', description: "Laboratoire indépendant d'ingénierie logicielle et d'IA appliquée." }} />
      <header className="home-hero flex flex-col gap-4 pb-6">
        <div className="page-shell flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="mx-auto my-auto w-full max-w-5xl shrink-0 py-4 sm:py-6">
            <h1 className="font-sans text-[64px] font-normal leading-none text-accent-deep sm:text-[104px] lg:text-[144px]">Compeel<span className="text-metal">.</span></h1>
            <div className="mt-12 grid items-start gap-6 sm:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
              <div>
                <p className="font-mono text-sm text-metal">Laboratoire d&apos;ingénierie logicielle &amp; IA / Depuis 2016</p>
              </div>
              <div className="min-w-0 max-w-xl">
                <p className="font-sans text-3xl leading-tight sm:text-4xl">Compeel n&apos;est pas une agence. Compeel n&apos;est pas un studio créatif. Compeel ne vend pas du code au kilomètre.</p>
                <p className="mt-4 text-base leading-relaxed text-muted">Compeel est un laboratoire d&apos;ingénierie. On conçoit des systèmes qui tiennent — en production, sous charge, dans le temps.</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href="#contact" className="button-primary">Discuter d&apos;une mission<ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a href="#labs" className="inline-flex min-h-11 items-center gap-2 text-base text-metal">Voir Compeel Labs<ArrowUpRight size={18} aria-hidden="true" /></a>
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
            <div><p className="mb-5 font-mono text-sm text-metal">02 / Le manifeste</p><h2 id="engineering-heading" className="font-sans text-4xl font-normal leading-tight">Rien ne sort<br />sans avoir tenu.</h2></div>
            <div><p className="max-w-2xl text-xl leading-relaxed">Je suis Williams de Souza. Staff Engineer passé par OCTO Technology, je construis chez Compeel des systèmes qui peuvent être compris, exploités et transmis. Rien ne sort du laboratoire qui n&apos;ait pas été éprouvé sur le terrain.</p><Link href="/about" className="mt-5 inline-flex min-h-11 items-center gap-2 text-base text-accent-deep">Rencontrer le laboratoire<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          </div>
          <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-20">
            {[
              { title: 'On prend les problèmes durs.', label: 'Missions d’ingénierie', text: 'Architecture, backend critique, IA appliquée. Des contextes où la fiabilité n’est pas négociable.' },
              { title: 'On en tire de la R&D.', label: 'Laboratoire', text: 'Ce qu’on apprend en production alimente ce qu’on explore au labo. Expérimenter vite, documenter les arbitrages.' },
              { title: 'On extrait des produits.', label: 'Scalabilité', text: 'Quand une recherche tient la route, elle devient un produit qui vit seul.' },
            ].map(item => (
              <div key={item.title} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
                <div><h3 className="font-sans text-2xl font-normal">{item.title}</h3></div>
                <div className="space-y-3"><p className="text-base font-medium text-metal">{item.label}</p><p className="max-w-xl text-base leading-relaxed text-muted">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="model-heading">
        <div className="page-shell py-20 lg:py-32">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
            <div><p className="mb-5 font-mono text-sm text-metal">03 / Le moteur</p><h2 id="model-heading" className="font-sans text-4xl font-normal leading-tight">Terrain → Recherche<br />→ Produit.</h2></div>
            <div><p className="max-w-2xl text-xl leading-relaxed">Une mission d&apos;ingénierie n&apos;est jamais un one-shot. Chaque système livré à un client — fintech, paiement, infrastructure critique — nourrit une base de compétences que le laboratoire réinvestit. Pas de levée pour financer une idée non testée. Ce qui devient produit a déjà survécu à un système en production.</p></div>
          </div>
        </div>
      </section>
      <section id="contact" className="scroll-mt-36 bg-surface">
        <div className="page-shell grid gap-12 py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-20 lg:py-32">
        <div><p className="mb-6 font-mono text-sm text-accent-deep">04 / Prendre contact</p><h2 className="max-w-md font-sans text-4xl font-normal leading-tight text-accent-deep sm:text-5xl">Un problème d&apos;ingénierie<br /><span className="text-foreground">qui fait peur aux autres ?</span></h2><p className="mt-6 max-w-sm text-base leading-relaxed text-muted">Écrivez. On répond avec une lecture technique du problème, pas un devis générique.</p></div>
        <ContactForm />
        </div>
      </section>
      <section id="labs" className="scroll-mt-36" aria-labelledby="labs-heading">
        <div className="page-shell grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 lg:py-24">
          <div><p className="mb-3 font-mono text-sm text-metal">05 / Ce qui en sort</p><h2 id="labs-heading" className="font-sans text-2xl font-normal">Compeel Labs</h2></div>
          <div><p className="max-w-xl text-base leading-relaxed text-muted">L&apos;espace où la recherche devient produit. Trois produits, une seule discipline : ne rien livrer qui n&apos;ait pas été vérifié.</p><Link href="/realisations" className="mt-3 inline-flex min-h-11 items-center gap-2 text-base text-metal">Explorer le Labs<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </div>
  )
}
