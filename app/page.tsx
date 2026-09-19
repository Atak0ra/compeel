import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Cpu, Layers, Search, Send, ShieldCheck, Target } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import ContactForm from '@/components/ContactForm'
import ScrollCue from '@/components/ScrollCue'
import FadeIn from '@/components/FadeIn'
import HeroVisual from '@/components/HeroVisual'

export const metadata: Metadata = {
  title: 'Compeel · Studio d\'ingénierie logicielle',
  description:
    'Compeel conçoit des architectures logicielles sur-mesure pour des environnements exigeants : conformité, paiements, intégration. Studio d\'ingénierie, pas catalogue de produits.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Compeel',
  url: 'https://compeel.com',
  description:
    'Studio d\'ingénierie et de conception logicielle. Architectures sur-mesure pour des environnements exigeants.',
}

const methode = [
  {
    step: '01',
    icon: Search,
    title: 'Diagnostiquer',
    text: 'On isole la contrainte exacte (réglementaire, financière, opérationnelle) directement chez ceux qui la subissent. Pas de brief générique.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Architecturer',
    text: 'Chaque contrainte devient une décision de conception assumée : conformité, routage des flux, résistance à la rupture réseau. L\'architecture se pense avant que le code ne s\'écrive.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Industrialiser',
    text: 'Sécurité, montée en charge, résilience terrain. Un système qui tient en production, pas un prototype qui impressionne en démo.',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={websiteSchema} />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-61px)] flex-col justify-center py-20">
        <HeroVisual />
        <div className="relative max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded border border-accent/30 bg-background">
              <Cpu size={18} className="text-accent-deep" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-widest text-accent-deep">
              Studio d&apos;ingénierie logicielle
            </p>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            Nous concevons des architectures logicielles pour des environnements exigeants.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10">
            Conformité, flux financiers, intégrations complexes : des problèmes que les outils standards
            ne couvrent pas bien. Compeel s&apos;en occupe, du diagnostic jusqu&apos;à la mise en
            production.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-accent bg-accent px-6 py-3 text-sm text-background transition-colors hover:border-accent-deep hover:bg-accent-deep"
            >
              Nous contacter
              <span>→</span>
            </a>
            <Link
              href="/realisations"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>
        <ScrollCue />
      </section>

      <div className="border-t border-border" />

      {/* Manifeste */}
      <section className="py-24">
        <FadeIn className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div className="flex items-start gap-3 sm:flex-col sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-accent/30 bg-background">
              <Target size={18} className="text-accent-deep" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-widest text-accent-deep">Manifeste</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed max-w-2xl">
            <p>
              La plupart des outils logiciels disponibles viennent de marchés où le droit des affaires
              est stable, où un seul rail de paiement suffit, où le réseau est fiable. Ce n&apos;est pas
              toujours le cas sur nos marchés.
            </p>
            <p>
              Une solution qui suppose un cadre réglementaire unique, un mode de paiement unique ou une
              connexion permanente tient rarement une fois déployée sur le terrain.
            </p>
            <p>
              Plutôt que d&apos;adapter à la marge un produit conçu ailleurs, nous partons des contraintes
              réelles pour construire l&apos;architecture. C&apos;est plus lent, et ça tient mieux dans le
              temps.
            </p>
          </div>
        </FadeIn>
      </section>

      <div className="border-t border-border" />

      {/* Méthode */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-accent-deep">
          Notre méthode
        </p>
        <div>
          {methode.map(({ step, icon: Icon, title, text }, index) => (
            <FadeIn
              key={step}
              className={`grid gap-8 py-10 sm:grid-cols-[64px_1fr] ${
                index < methode.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                <span className="font-serif text-xl text-accent">{step}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded border border-accent/30 bg-background">
                  <Icon size={16} className="text-accent-deep" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-base font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-xl">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Réalisations teaser */}
      <section className="py-24">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-accent/30 bg-background">
                <Briefcase size={18} className="text-accent-deep" strokeWidth={1.5} />
              </div>
              <p className="text-xs uppercase tracking-widest text-accent-deep">Réalisations</p>
            </div>
            <h2 className="font-serif text-2xl text-foreground max-w-lg">
              Ce que cette méthode donne, en production.
            </h2>
          </div>
          <Link
            href="/realisations"
            className="inline-flex shrink-0 items-center rounded border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Voir les réalisations
          </Link>
        </FadeIn>
      </section>

      <div className="border-t border-accent/30" />

      {/* CTA final */}
      <section id="contact" className="py-24 scroll-mt-24">
        <FadeIn className="max-w-2xl">
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded border border-accent/30 bg-background">
            <Send size={18} className="text-accent-deep" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl text-foreground leading-snug mb-4">
            Un projet d&apos;envergure à structurer ?
          </h2>
          <p className="text-base text-muted leading-relaxed mb-10">
            Institutions, grands comptes, partenaires qui investissent dans une infrastructure durable
            plutôt que dans un outil de plus. Parlons du problème avant de parler de solution.
          </p>
          <ContactForm />
        </FadeIn>
      </section>
    </div>
  )
}
