import type { Metadata } from 'next'
import { Bot, Scale, Stethoscope } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import ScrollCue from '@/components/ScrollCue'

export const metadata: Metadata = {
  title: 'Réalisations',
  description:
    'Preuves de méthode : des architectures logicielles conçues par Compeel pour des frictions de terrain réelles, en conformité, santé, mobilité et droit.',
}

const realisationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Réalisations Compeel',
  description: 'Architectures logicielles conçues par Compeel pour des frictions de terrain réelles.',
}

const realisations = [
  {
    domain: 'Droit · Conformité réglementaire',
    icon: Scale,
    title: 'DameJustice · Recherche et analyse de corpus juridiques',
    constat:
      'L\'accès, l\'analyse croisée et la maîtrise des corpus juridiques et réglementaires en Afrique (textes nationaux, jurisprudence, droit OHADA) se heurtent à la dispersion des sources et à la hiérarchie des normes. Pour les professionnels du droit, exploiter rapidement cette masse documentaire est un défi opérationnel permanent.',
    solution:
      'Une infrastructure logicielle conçue pour automatiser la recherche, l\'analyse et la synthèse de données juridiques denses, avec traçabilité systématique de chaque référence citée.',
    architecture: [
      'RAG contextuel : interrogation sémantique de corpus juridiques volumineux, avec extraction de références exactes et croisées.',
      'Workflows agentiques : structuration automatisée des dossiers, veille réglementaire, pré-analyses documentaires.',
      'Garde-fous : couches de vérification pour la précision terminologique et la conformité des résultats aux exigences de rigueur juridique.',
    ],
  },
  {
    domain: 'Développement logiciel · Automatisation',
    icon: Bot,
    title: 'Alexis · Un agent qui livre du code, sous contrôle humain',
    constat:
      'Solopreneurs et agences gèrent plusieurs dépôts et backlogs en parallèle. Le triage, la relecture et le suivi de coût des tickets bien cadrés consomment un temps mieux investi ailleurs.',
    solution:
      'Un agent qui prend un ticket, rédige une spécification technique, décompose le travail, écrit le code, lance les tests, puis livre le résultat sur le dépôt, avec ou sans relecture avant mise en ligne.',
    architecture: [
      'Workflow agentique déterministe : spécification, plan, implémentation testée, jamais d\'exécution en roue libre.',
      'État persisté : un run interrompu reprend au dernier état stable plutôt que de tout recommencer.',
      'Coût tracé par ticket, visible en continu.',
    ],
  },
  {
    domain: 'Santé · Souveraineté des données',
    icon: Stethoscope,
    title: 'KARA · Dossier patient à saisie vocale, qui reste dans la structure',
    constat:
      'Dans les structures médicales ouest-africaines, la saisie manuelle des dossiers patients est lente et incomplète. Les solutions cloud existantes posent une question non négociable : où vont les données de santé.',
    solution:
      'Les soignants enregistrent leur voix directement sur le dossier patient. Le système transcrit, centralise, rend consultable, sans qu\'aucune donnée ne quitte la structure.',
    architecture: [
      'Transcription et indexation locales, sans dépendance à un cloud externe.',
      'Architecture conçue pour la contrainte de souveraineté dès la spécification, pas ajoutée après coup.',
    ],
  },
]

export default function RealisationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={realisationsSchema} />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-61px)] flex-col justify-center py-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-accent-deep">
            Réalisations
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            Des architectures livrées pour des frictions de terrain réelles.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Chaque cas ci-dessous part d&apos;un problème identifié sur le terrain, documenté avant
            toute ligne de code. Ce ne sont pas des produits sur étagère.
          </p>
        </div>
        <ScrollCue />
      </section>

      <div className="border-t border-border" />

      {realisations.map(({ domain, title, constat, solution, architecture, icon: Icon }, index) => (
        <div key={title}>
          <section className="py-24">
            <div className="grid gap-16 sm:grid-cols-[1fr_2fr]">
              <div className="flex items-start gap-3 sm:flex-col sm:gap-4">
                {Icon && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-accent/30 bg-background">
                    <Icon size={18} className="text-accent-deep" strokeWidth={1.5} />
                  </div>
                )}
                <p className="text-xs uppercase tracking-widest text-accent-deep">{domain}</p>
              </div>
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-8">
                  {title}
                </h2>
                <div className="space-y-6 text-base text-muted leading-relaxed">
                  <p>{constat}</p>
                  <p>{solution}</p>
                </div>

                <div className="mt-10 rounded border border-border border-l-4 border-l-accent bg-surface p-6">
                  <p className="mb-4 text-xs uppercase tracking-wider text-accent-deep">Architecture</p>
                  <ul className="space-y-3">
                    {architecture.map((line) => (
                      <li key={line} className="text-sm text-muted leading-relaxed flex gap-3">
                        <span className="text-accent">·</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {index < realisations.length - 1 && <div className="border-t border-border" />}
        </div>
      ))}
    </div>
  )
}
