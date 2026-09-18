import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Compeel — Studio d\'ingénierie logicielle',
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
    title: 'Diagnostiquer',
    text: 'On isole la contrainte exacte — réglementaire, financière, opérationnelle — directement chez ceux qui la subissent. Pas de brief générique.',
  },
  {
    step: '02',
    title: 'Architecturer',
    text: 'Chaque contrainte devient une décision de conception assumée : conformité, routage des flux, résistance à la rupture réseau. L\'architecture se pense avant que le code ne s\'écrive.',
  },
  {
    step: '03',
    title: 'Industrialiser',
    text: 'Sécurité, montée en charge, résilience terrain. Un système qui tient en production, pas un prototype qui impressionne en démo.',
  },
]

const stack = [
  {
    title: 'RAG',
    text: 'Interroger et structurer une documentation réglementaire ou comptable dense, avec traçabilité de la source citée à chaque réponse.',
  },
  {
    title: 'IA agentique',
    text: 'Automatiser la tuyauterie administrative — rapprochement, routage, vérification — via des workflows supervisés et déterministes. Jamais un agent en roue libre sur une décision financière.',
  },
  {
    title: 'Garde-fous',
    text: 'Tests systématiques sur les cas limites avant mise en production. Journalisation de toute action touchant un flux financier. Rejet par défaut face à un cas non prévu.',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={websiteSchema} />

      {/* Hero */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-muted">
            Studio d&apos;ingénierie logicielle
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            On ne vend pas de logiciels. On conçoit les architectures qui tiennent quand le terrain résiste.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Conformité, flux financiers, intégrations complexes — les problèmes que la tech standard
            contourne. Compeel les prend de front, depuis le diagnostic jusqu&apos;à l&apos;infrastructure
            en production.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Manifeste */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Manifeste</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed max-w-2xl">
            <p>
              La tech qui circule vient, presque toujours, d&apos;ailleurs. Conçue pour des marchés où le
              droit des affaires est stable, où un seul rail de paiement suffit, où le réseau ne tombe
              jamais. Ce n&apos;est pas notre terrain.
            </p>
            <p>
              Une solution qui ignore le droit OHADA, qui suppose un mode de paiement unique, qui part
              du principe que la connexion est acquise — cette solution est fragile par construction.
              Elle marche en démo. Elle casse au contact du réel.
            </p>
            <p>
              On ne fait pas d&apos;adaptation cosmétique de produits pensés ailleurs. On construit depuis
              les contraintes réelles vers l&apos;architecture. C&apos;est plus lent. C&apos;est la seule
              approche qui tient dans la durée.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Méthode */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Notre méthode
        </p>
        <div>
          {methode.map(({ step, title, text }, index) => (
            <div
              key={step}
              className={`grid gap-8 py-10 sm:grid-cols-[64px_1fr] ${
                index < methode.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div>
                <span className="text-sm font-mono text-muted">{step}</span>
              </div>
              <div>
                <h3 className="mb-3 text-base font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-xl">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Stack */}
      <section className="py-24">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted">
          Des outils, pas des gadgets
        </p>
        <p className="mb-12 text-sm text-muted leading-relaxed max-w-2xl">
          Chaque brique technique répond à une friction identifiée en amont — jamais utilisée parce
          qu&apos;elle est à la mode.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {stack.map(({ title, text }) => (
            <div key={title} className="rounded border border-border bg-surface p-6">
              <p className="mb-3 text-sm font-medium text-foreground">{title}</p>
              <p className="text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Flux financiers */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Flux financiers</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed max-w-2xl">
            <p>
              Compeel ne devient jamais tiers-collecteur. Les fonds transitent par des passerelles de
              paiement agréées — Compeel conçoit la couche de routage et de split, sans jamais détenir
              les flux du client.
            </p>
            <p>
              Le client garde le contrôle total et la titularité juridique de ses flux, à tout moment,
              avec une traçabilité complète, auditable.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Réalisations teaser */}
      <section className="py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-muted">Réalisations</p>
            <h2 className="font-serif text-2xl text-foreground max-w-lg">
              Ce que cette méthode donne, en production.
            </h2>
          </div>
          <Link
            href="/realisations"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-surface"
          >
            Voir les réalisations
            <span>→</span>
          </Link>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* CTA final */}
      <section className="py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-foreground leading-snug mb-4">
            Un projet d&apos;envergure à structurer ?
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            Institutions, grands comptes, partenaires qui investissent dans une infrastructure durable
            plutôt que dans un outil de plus. Parlons du problème avant de parler de solution.
          </p>
          <a
            href="mailto:contact@compeel.com"
            className="inline-flex items-center gap-2 rounded border border-foreground px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Nous contacter
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
