import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'KUMA — API vocale en Mina et Ewe',
  description:
    'KUMA est une API de détection d\'intention vocale en Mina et Ewe. Cas d\'usage principal : la mobilité urbaine à Lomé, Togo.',
}

const pipeline = [
  {
    step: '01',
    title: 'Capture audio',
    description:
      'L\'application cliente envoie un flux audio ou un fichier WAV via l\'API REST. Aucun SDK propriétaire requis.',
  },
  {
    step: '02',
    title: 'Reconnaissance & transcription',
    description:
      'Le moteur ASR de KUMA transcrit la parole en Mina ou Ewe. Modèles entraînés sur des données collectées localement à Lomé.',
  },
  {
    step: '03',
    title: 'Détection d\'intention',
    description:
      'Le NLU extrait l\'intention structurée : action, entités, paramètres. Retourné en JSON, prêt à être consommé par n\'importe quelle application.',
  },
]

const useCases = [
  {
    label: 'Mobilité urbaine',
    text: 'Un utilisateur dit "M\'amener Tokoin" en Mina. KUMA retourne { intent: "book_ride", destination: "Tokoin" }. Gozem ou n\'importe quelle app de taxi peut l\'utiliser directement.',
  },
  {
    label: 'Commerce vocal',
    text: 'Commandes vocales pour les marchands et clients dans les marchés locaux. Pas besoin de lire ou d\'écrire.',
  },
  {
    label: 'Services publics',
    text: 'Accès aux services administratifs par la voix, dans la langue du citoyen.',
  },
]

export default function KumaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-accent">
            Produit · API vocale
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            KUMA
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-6">
            Détection d&apos;intention vocale en Mina et Ewe.
          </p>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            KUMA permet à n&apos;importe quelle application de comprendre ce qu&apos;un locuteur
            veut faire dans sa langue maternelle. Un utilisateur parle en Mina,
            l&apos;API retourne une intention structurée que votre application peut utiliser directement.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Pipeline */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Pipeline technique
        </p>
        <div className="grid gap-0">
          {pipeline.map(({ step, title, description }, index) => (
            <div
              key={step}
              className={`grid gap-8 py-10 sm:grid-cols-[80px_1fr] ${
                index < pipeline.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex items-start">
                <span className="font-serif text-4xl text-border leading-none">{step}</span>
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

      {/* Exemple de réponse */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">Exemple</p>
            <h2 className="font-serif text-2xl text-foreground mb-4">
              De la voix à l&apos;intention
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Un utilisateur parle en Mina. En moins de 300ms, KUMA retourne
              une intention structurée, prête à être consommée.
            </p>
          </div>
          <div className="rounded-lg bg-surface border border-border p-6 font-mono text-sm">
            <p className="text-muted mb-4 text-xs">// Entrée audio → Mina</p>
            <p className="text-foreground/60 mb-6 italic text-xs">
              &ldquo;M&apos;amener Tokoin, akpe&rdquo;
            </p>
            <p className="text-muted mb-2 text-xs">// Réponse JSON</p>
            <pre className="text-foreground text-xs leading-relaxed overflow-auto">
{`{
  "intent": "book_ride",
  "confidence": 0.94,
  "entities": {
    "destination": "Tokoin",
    "language": "mina"
  },
  "latency_ms": 287
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
        <div className="grid gap-6 sm:grid-cols-3">
          {useCases.map(({ label, text }) => (
            <div key={label} className="rounded-lg border border-border bg-surface p-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-accent">{label}</p>
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
              Intégrer KUMA dans votre application
            </h2>
            <p className="text-sm text-muted">
              Documentation, accès API et support disponibles sur kuma.atakora.pro
            </p>
          </div>
          <a
            href="https://kuma.atakora.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-accent px-6 py-3 text-sm text-accent transition-all hover:bg-accent hover:text-foreground"
          >
            Accéder à KUMA
            <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
