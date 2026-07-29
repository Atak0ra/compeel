import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Alexis — Agent de développement',
  description:
    'Alexis est un agent de développement qui transforme vos tickets en code livré. Spec, plan, implémentation testée, livraison sur votre dépôt GitHub ou GitLab.',
}

const alexisSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Alexis',
  description:
    "Agent de développement pour solopreneurs et agences. Chaque ticket passe par une spécification, un plan, une implémentation testée, avant la livraison sur votre dépôt GitHub ou GitLab.",
  brand: {
    '@type': 'Organization',
    name: 'Compeel',
  },
  category: 'Agent de développement',
  url: 'https://compeel.com/alexis',
}

const pipeline = [
  {
    step: '01',
    title: 'Du ticket à la spécification',
    description:
      'Alexis lit le ticket — titre, description, contexte — rédige une spécification technique détaillée, puis décompose le travail en étapes concrètes avant de commencer à coder.',
  },
  {
    step: '02',
    title: 'Exécution testée, état persisté',
    description:
      'L\'agent écrit le code, lance les tests et itère jusqu\'à ce que tout passe. Chaque étape est persistée : si un run est interrompu ou échoue, Alexis reprend au dernier état stable plutôt que de tout recommencer depuis le début.',
  },
  {
    step: '03',
    title: 'Livraison sur votre dépôt',
    description:
      'Le code est livré sur votre dépôt GitHub ou GitLab. Avec ou sans relecture avant mise en ligne, selon vos réglages. Le coût du ticket est tracé et visible dans le tableau de bord.',
  },
]

const useCases = [
  {
    label: 'Solopreneur multi-projets',
    text: 'Vous gérez plusieurs dépôts en parallèle. Alexis prend en charge les tickets bien cadrés pendant que vous vous concentrez sur ce qui demande votre attention directe.',
  },
  {
    label: 'Agence : paralléliser les tickets',
    text: 'Plusieurs projets clients, plusieurs backlogs. Un seul tableau de bord pour suivre l\'avancement et les coûts, projet par projet.',
  },
  {
    label: 'Tâches de dev bien définies',
    text: 'Alexis est efficace sur des tickets avec un périmètre clair : ajout de fonctionnalité, correction de bug, refactoring ciblé. Pas un outil pour des specs floues.',
  },
]

export default function AlexisPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={alexisSchema} />
      {/* Hero */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-muted">
            Produit · Agent de développement
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            Alexis
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-6">
            Un agent de développement qui transforme vos tickets en code livré.
          </p>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Alexis prend un ticket, rédige une spécification, écrit le code, lance les tests
            et livre le résultat sur votre dépôt. Conçu pour les solopreneurs et les agences
            qui veulent avancer sur plusieurs projets sans passer leurs journées à superviser
            chaque tâche.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Pipeline */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Pipeline technique
        </p>
        <div>
          {pipeline.map(({ step, title, description }, index) => (
            <div
              key={step}
              className={`grid gap-8 py-10 sm:grid-cols-[64px_1fr] ${
                index < pipeline.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div>
                <span className="text-sm font-mono text-muted">{step}</span>
              </div>
              <div>
                <h3 className="mb-3 text-base font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Exemple */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">Exemple</p>
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Du ticket au code livré
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Un ticket bien décrit entre dans Alexis. En sortie : une branche,
              des tests qui passent, une PR prête à relire — et le coût tracé.
            </p>
          </div>
          <div className="rounded border border-border bg-surface p-6 font-mono">
            <p className="text-muted mb-3 text-xs">// Ticket en entrée</p>
            <pre className="text-foreground/50 mb-6 text-xs leading-relaxed">
{`SHOP-89
"Filtre par catégorie
 sur le catalogue"`}
            </pre>
            <p className="text-muted mb-2 text-xs">// Résultat</p>
            <pre className="text-foreground text-xs leading-relaxed overflow-auto">
{`{
  "branch": "feat/shop-89-category-filter",
  "tests": "passed",
  "pr": "github.com/.../pull/34",
  "status": "ready_for_review",
  "cost_eur": 2.39
}`}
            </pre>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Use cases */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Cas d&apos;usage
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {useCases.map(({ label, text }) => (
            <div key={label} className="rounded border border-border bg-surface p-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-foreground font-medium">{label}</p>
              <p className="text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* CTA */}
      <section className="py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-2">
              Essayer Alexis sur votre projet
            </h2>
            <p className="text-sm text-muted">
              Connexion GitHub ou GitLab, premier ticket gratuit, sans carte bancaire.
            </p>
          </div>
          <a
            href="https://alexis-front.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-foreground px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Accéder à Alexis
            <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
