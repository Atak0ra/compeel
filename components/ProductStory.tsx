import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import JsonLd from '@/components/JsonLd'
import ProductPreview from '@/components/product-previews/ProductPreview'

type StoryItem = { title: string; text: string }

export default function ProductStory({ project, introduction, decisions, steps, boundary, limitation, action, demo }: {
  project: Project
  introduction: string
  decisions: StoryItem[]
  steps: StoryItem[]
  boundary: string
  limitation: string
  action: string
  demo?: string
}) {
  return (
    <div className="page-shell">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: project.name, description: project.description, applicationCategory: project.domain, url: `https://compeel.com${project.href}`, creator: { '@type': 'Organization', name: 'Compeel' } }} />
      <header className="py-12 sm:py-16">
        <Link href="/realisations" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground"><ArrowLeft size={16} aria-hidden="true" />Tous les produits</Link>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3"><h1 className="font-serif text-5xl sm:text-7xl">{project.name}</h1><p className="text-sm text-accent-deep">{project.domain} · {project.access}</p></div>
        <p className="mt-6 max-w-2xl text-2xl leading-snug sm:text-3xl">{project.headline}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="button-primary">{action}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-base underline underline-offset-4">Voir la démo<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>}
        </div>
      </header>
      <div className="max-w-4xl"><ProductPreview id={project.id} /></div>
      <section className="section-space grid gap-7 md:grid-cols-[1fr_2fr]">
        <h2 className="font-serif text-3xl">Le point de départ</h2>
        <div><p className="max-w-2xl text-lg leading-relaxed text-muted">{introduction}</p><p className="mt-6 text-sm text-accent-deep">Pour {project.audience.toLocaleLowerCase('fr')}. Conçu par le <Link href="/about" className="underline underline-offset-4 hover:text-foreground">studio Compeel</Link>.</p></div>
      </section>
      <section className="section-space border-t border-border">
        <h2 className="mb-10 font-serif text-3xl sm:text-4xl">Des choix de conception.</h2>
        <div className="grid gap-8 md:grid-cols-3">{decisions.map(item => <div key={item.title}><h3 className="mb-3 text-lg font-medium">{item.title}</h3><p className="text-base leading-relaxed text-muted">{item.text}</p></div>)}</div>
      </section>
      <section className="section-space border-t border-border">
        <h2 className="font-serif text-3xl sm:text-4xl">Du besoin au résultat.</h2>
        <p className="mb-8 mt-4 text-base text-muted">{boundary}</p>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><div className="mb-4 flex items-center justify-between text-accent-deep"><span className="text-sm">Étape {index + 1}</span>{index < steps.length - 1 && <ArrowRight size={18} aria-hidden="true" />}</div><h3 className="mb-3 text-lg font-medium">{step.title}</h3><p className="text-base leading-relaxed text-muted">{step.text}</p></li>)}
        </ol>
        <p className="mt-9 max-w-3xl text-sm leading-relaxed text-muted">{limitation}</p>
      </section>
      <section className="section-space flex flex-wrap items-center justify-between gap-6 border-t border-border">
        <div><h2 className="font-serif text-3xl">Explorer {project.name}</h2><p className="mt-3 text-base text-muted">Fonctionnement et accès sur le site du produit.</p></div>
        <a href={project.website} target="_blank" rel="noopener noreferrer" className="button-primary">{action}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>
      </section>
      <section className="section-space flex flex-wrap items-center justify-between gap-6 border-t border-border">
        <div><h2 className="font-serif text-3xl">Un projet du même ordre ?</h2><p className="mt-3 text-base text-muted">Parlons de vos contraintes avec le studio.</p></div>
        <Link href="/#contact" className="button-primary">Échanger avec le studio<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}