import type { Metadata } from 'next'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import HeroBlueprint from '@/components/HeroBlueprint'
import CaseStudyCarousel from '@/components/CaseStudyCarousel'

export const metadata: Metadata = {
  title: { absolute: 'Compeel · Conception de systèmes logiciels résilients' },
  description: 'Compeel conçoit des architectures distribuées taillées pour tenir sous charge, encaisser le trafic et tourner en production sans faillir.',
  alternates: { canonical: '/' },
}

const approche = [
  { number: '01', title: 'Analyse des contraintes.', text: 'Étude des volumes, des flux et des limites opérationnelles avant toute conception. Zéro architecture théorique hors-sol.' },
  { number: '02', title: 'Ingénierie des flux.', text: "Maîtrise de l'asynchronisme, de la distribution et de l'intégrité des données pour éliminer les points de rupture." },
  { number: '03', title: 'Livraison et robustesse.', text: 'Du design initial à la mise en production, chaque brique est calibrée pour résister à la charge réelle.' },
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
            <p className="mt-6 max-w-2xl text-balance text-xl leading-relaxed text-muted sm:text-2xl">Compeel conçoit des architectures distribuées taillées pour tenir sous charge, encaisser le trafic et tourner en production sans faillir.</p>
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
          <h2 id="preuve-heading" className="sr-only">Preuve de terrain</h2>
          <div className="mt-6">
            <CaseStudyCarousel />
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
