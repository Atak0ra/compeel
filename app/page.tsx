import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import HeroBlueprint from '@/components/HeroBlueprint'
import VersusFinancePreview from '@/components/VersusFinancePreview'

export const metadata: Metadata = {
  title: { absolute: 'Compeel · Conception de systèmes logiciels résilients' },
  description: "Laboratoire d'ingénierie logicielle indépendant. Analyse des contraintes, ingénierie des flux et robustesse en production.",
  alternates: { canonical: '/' },
}

const approche = [
  { number: '01', title: 'Analyse des contraintes.', text: 'Étude des volumes, des flux et des limites opérationnelles avant toute conception. Zéro architecture théorique hors-sol.' },
  { number: '02', title: 'Ingénierie des flux.', text: "Maîtrise de l'asynchronisme, de la distribution et de l'intégrité des données pour éliminer les points de rupture." },
  { number: '03', title: 'Livraison et robustesse.', text: 'Du design initial à la mise en production, chaque brique est calibrée pour résister à la charge réelle.' },
]

const preuve = [
  { label: 'Le problème', text: "L'interrogation de volumes massifs de données financières ou opérationnelles exige traditionnellement des requêtes complexes, des interfaces lourdes ou des équipes d'analystes dédiées." },
  { label: 'La solution', text: 'Conception d’un moteur d’orchestration sémantique traduisant instantanément une question métier en français (écrit ou oral) en requêtes structurées, couplé à une génération dynamique de graphiques.' },
  { label: 'Le résultat', text: 'Un assistant décisionnel accessible sans friction technique, restituant immédiatement la métrique et la visualisation correspondante.' },
]

export default function HomePage() {
  return (
    <div>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Compeel', url: 'https://compeel.com', description: 'Laboratoire indépendant d’ingénierie des systèmes.' }} />
      <header className="home-hero relative flex flex-col overflow-hidden border-b border-border">
        <HeroBlueprint />
        <div className="page-shell relative z-10 flex flex-1 flex-col justify-center gap-3">
          <div className="flex flex-wrap justify-between gap-3 font-mono text-xs uppercase tracking-widest text-metal">
            <p>Compeel / Laboratoire d&apos;ingénierie logicielle</p>
            <p className="hidden sm:block">Architectures distribuées &amp; systèmes critiques</p>
          </div>
          <div className="mt-7 max-w-4xl">
            <h1 className="text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Conception de systèmes logiciels résilients.</h1>
            <a href="#contact" className="button-primary mt-8">Soumettre un projet<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <a href="#methode" aria-label="Défiler vers la suite" className="relative z-10 flex min-h-11 items-center justify-center pb-8 text-metal">
          <ArrowDown className="scroll-cue-icon" size={26} aria-hidden="true" />
        </a>
      </header>

      <section id="methode" aria-labelledby="method-heading" className="section-anchor border-t border-border bg-surface">
        <div className="page-shell py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
            <p className="section-label">01 / L&apos;approche</p>
            <h2 id="method-heading" className="section-title">Ce que fait le labo.</h2>
          </div>
          <div className="mt-12 border-t border-metal">
            {approche.map(item => (
              <article key={item.number} className="grid gap-4 border-b border-border py-7 md:grid-cols-[48px_1fr_1.3fr] md:gap-8">
                <span className="font-mono text-sm text-accent-deep">{item.number}</span>
                <h3 className="max-w-xs text-2xl font-medium leading-tight">{item.title}</h3>
                <p className="max-w-xl text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preuve" aria-labelledby="preuve-heading" className="section-anchor border-y border-border bg-surface">
        <div className="page-shell py-16 sm:py-24">
          <p className="section-label">02 / Preuve de terrain</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Image src="/logos/versus-finances-tech.png" alt="VersusFinance" width={640} height={181} className="h-8 w-auto sm:h-9" />
            <h2 id="preuve-heading" className="section-title">Pilotage financier conversationnel.</h2>
          </div>
          <div className="mt-12 grid gap-px border border-metal bg-border sm:grid-cols-3">
            {preuve.map(item => (
              <div key={item.label} className="bg-background p-6 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-deep">{item.label}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <VersusFinancePreview />
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="section-anchor">
        <div className="page-shell grid gap-10 py-16 md:grid-cols-2 md:gap-20 sm:py-24">
          <div>
            <p className="section-label">03 / Contact</p>
            <h2 id="contact-heading" className="section-title mt-6">Contacter le labo.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">Pour étudier une architecture, refondre un flux critique ou concevoir un système sur-mesure.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
