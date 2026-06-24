import type { Metadata } from 'next'
import { Mic, FileText, Search, Lock, LayoutGrid, Zap } from 'lucide-react'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'KARA — Dossier patient vocal',
  description:
    'KARA est un système de dossier patient vocal pour les structures médicales en Afrique de l\'Ouest. 100% on-premise.',
}

const karaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'KARA',
  description:
    "Système de dossier patient vocal pour les structures médicales en Afrique de l'Ouest. Transcription automatique, recherche en langage naturel. 100% on-premise.",
  brand: {
    '@type': 'Organization',
    name: 'Compeel',
  },
  category: 'Logiciel médical',
  url: 'https://compeel.com/kara',
}

const features = [
  {
    icon: Mic,
    title: 'Enregistrement vocal',
    description:
      'Chaque soignant enregistre sa voix directement sur le dossier du patient. Pas de clavier, pas de formulaire. Juste la voix.',
  },
  {
    icon: FileText,
    title: 'Transcription automatique',
    description:
      'Tout est transcrit automatiquement en temps réel. Les notes vocales deviennent du texte structuré, consultable et archivé.',
  },
  {
    icon: Search,
    title: 'Recherche en langage naturel',
    description:
      'Retrouvez n\'importe quelle information dans les dossiers en posant une question simple. "Patients diabétiques vus ce mois". KARA répond.',
  },
  {
    icon: Lock,
    title: '100% on-premise',
    description:
      'Aucune donnée ne quitte la structure. KARA tourne entièrement sur vos serveurs locaux. Conformité totale avec les exigences de confidentialité médicale.',
  },
  {
    icon: LayoutGrid,
    title: 'Dossier centralisé',
    description:
      'Tous les soignants d\'une structure accèdent au même dossier patient. Fin des informations dispersées entre services.',
  },
  {
    icon: Zap,
    title: 'Faible infrastructure',
    description:
      'Conçu pour fonctionner avec une connectivité limitée et du matériel standard. Pas besoin de serveurs cloud ou de connexion permanente.',
  },
]

export default function KaraPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={karaSchema} />
      {/* Hero */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-muted">
            Produit · Santé
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            KARA
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-6">
            Le dossier patient qui s&apos;écoute.
          </p>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            KARA est un système de dossier patient vocal pour les structures médicales
            en Afrique de l&apos;Ouest. Chaque soignant enregistre sa voix sur le dossier
            d&apos;un patient. Tout est transcrit automatiquement, centralisé et consultable
            en langage naturel.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Problème */}
      <section className="py-24">
        <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Le problème</p>
          </div>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              Dans la plupart des structures médicales en Afrique de l&apos;Ouest,
              les dossiers patients sont encore sur papier. Quand ils sont numérisés,
              c&apos;est souvent dans des tableurs Excel ou des logiciels inadaptés.
            </p>
            <p>
              Les soignants passent un temps précieux à remplir des formulaires
              au lieu de soigner. Les informations se perdent entre les services.
              Les antécédents d&apos;un patient sont introuvables en urgence.
            </p>
            <p>
              KARA résout ce problème avec la voix, l&apos;interface la plus naturelle
              qui soit pour un soignant en pleine consultation.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Features */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Fonctionnalités
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded border border-border bg-surface p-6 space-y-4"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded border border-border bg-background">
                <Icon size={14} className="text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-medium text-foreground">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* On-premise highlight */}
      <section className="py-24">
        <div className="rounded border border-border bg-surface p-10 sm:p-12">
          <p className="mb-4 text-xs uppercase tracking-widest text-muted">
            Confidentialité
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6 max-w-xl">
            Aucune donnée médicale ne quitte votre structure.
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            KARA est 100% on-premise. Le modèle de transcription, la base de données,
            le moteur de recherche, tout tourne sur vos serveurs locaux.
            Pas de cloud, pas de synchronisation externe, pas de risque de fuite.
            Vos patients vous font confiance. Nous respectons cette confiance.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* CTA */}
      <section className="py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-2">
              Déployer KARA dans votre structure
            </h2>
            <p className="text-sm text-muted">
              Démonstration, installation et support disponibles.
            </p>
          </div>
          <a
            href="https://kara.compeel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-foreground px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            En savoir plus
            <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
