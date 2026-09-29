import type { Metadata } from 'next'
import { ArrowDown, ArrowUpRight, Search, ShieldCheck, Share2 } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import HeroBlueprint from '@/components/HeroBlueprint'
import CaseStudyCarousel from '@/components/CaseStudyCarousel'

export const metadata: Metadata = {
  title: { absolute: 'Compeel : Ingénierie Logicielle & Architecture de Systèmes' },
  description: 'Compeel conçoit des architectures logicielles résilientes : systèmes critiques, plateformes de paiement et infrastructures transactionnelles en production.',
  alternates: { canonical: '/' },
}

const approche = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse des contraintes',
    text: "Comprendre l'environnement, les usages, les limites techniques et réglementaires pour faire les bons choix dès le départ.",
    checklist: ['Contexte métier et utilisateurs', 'Contraintes techniques et opérationnelles', 'Vision long terme'],
  },
  {
    number: '02',
    icon: Share2,
    title: 'Ingénierie des flux',
    text: 'Concevoir des architectures claires, modulaires et évolutives, en optimisant la circulation des données et la résilience des composants.',
    checklist: ['Architectures distribuées', 'Intégrations et interopérabilité', 'Scalabilité et performance'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Robustesse par design',
    text: 'Anticiper les pannes, tester en conditions réelles, mettre en place l’observabilité et les garde-fous pour assurer la continuité de service.',
    checklist: ['Tolérance aux pannes', 'Monitoring et alerting', 'Amélioration continue'],
  },
]

export default function HomePage() {
  return (
    <div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Compeel',
        alternateName: 'Compeel — Laboratoire d’ingénierie logicielle',
        url: 'https://compeel.com',
        description: 'Laboratoire indépendant d’ingénierie logicielle : architecture de systèmes distribués, résilience en production et plateformes transactionnelles.',
        publisher: { '@id': 'https://compeel.com/#organization' },
        inLanguage: 'fr-FR',
      }} />

      <header className="home-hero relative flex flex-col overflow-hidden border-b border-border">
        <HeroBlueprint />
        <div className="page-shell relative z-10 flex flex-1 flex-col justify-center gap-8 py-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-metal">Architectures · Systèmes distribués · Production</p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              L&apos;ingénierie qui survit à <span className="text-accent-deep">la production.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              Compeel conçoit des architectures distribuées et des systèmes résilients pour des produits qui doivent tenir sous charge, en production, dans la durée.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">Discuter d&apos;un projet<ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#preuve" className="inline-flex min-h-11 items-center justify-center rounded-sm border border-metal px-5 py-3 text-base text-foreground transition-colors hover:border-accent-deep hover:text-accent-deep">
                Voir nos études de cas
              </a>
            </div>
          </div>
        </div>
        <a href="#methode" aria-label="Défiler vers la suite" className="relative z-10 flex min-h-11 items-center justify-center pb-6 text-metal">
          <ArrowDown className="scroll-cue-icon" size={22} aria-hidden="true" />
        </a>
      </header>

      <section id="methode" aria-labelledby="method-heading" className="section-anchor border-t border-border bg-surface">
        <div className="page-shell py-16 sm:py-24">
          <p className="section-label">Notre approche</p>
          <h2 id="method-heading" className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Trois principes.<br />Des systèmes durables.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">Une méthode rigoureuse, nourrie par l&apos;expérience terrain, pour transformer des contraintes complexes en solutions robustes et évolutives.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approche.map(item => (
              <article key={item.number} className="flex flex-col rounded-lg border border-border bg-background p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <item.icon size={22} className="text-accent-deep" aria-hidden="true" />
                  <span className="font-mono text-xs text-metal">{item.number}</span>
                </div>
                <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
                <ul className="mt-5 space-y-2">
                  {item.checklist.map(point => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <ShieldCheck size={14} className="shrink-0 text-accent-deep" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preuve" aria-labelledby="preuve-heading" className="section-anchor border-y border-border bg-surface">
        <div className="page-shell py-16 sm:py-24">
          <p className="section-label">Preuves de terrain</p>
          <h2 id="preuve-heading" className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Des projets concrets.<br />Un impact réel.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">Nous collaborons avec des équipes ambitieuses pour construire des produits critiques, utilisés en conditions réelles.</p>

          <div className="mt-12 mx-auto max-w-2xl">
            <CaseStudyCarousel />
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="section-anchor">
        <div className="page-shell grid gap-10 py-16 md:grid-cols-2 md:gap-20 sm:py-24">
          <div>
            <p className="section-label">Contact</p>
            <h2 id="contact-heading" className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Contacter le labo.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">Pour étudier une architecture, refondre un flux critique ou concevoir un système sur-mesure.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
