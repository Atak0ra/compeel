'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import VersusFinancePreview from './VersusFinancePreview'
import CrpayPreview from './CrpayPreview'

const caseStudies = [
  {
    id: 'versusfinance',
    logo: { src: '/logos/versus-finances-tech.png', alt: 'VersusFinance' },
    title: 'Pilotage financier conversationnel.',
    pillars: [
      { label: 'Le problème', text: "L'interrogation de volumes massifs de données financières ou opérationnelles exige traditionnellement des requêtes complexes, des interfaces lourdes ou des équipes d'analystes dédiées." },
      { label: 'La solution', text: 'Conception d’un moteur d’orchestration sémantique traduisant instantanément une question métier en français (écrit ou oral) en requêtes structurées, couplé à une génération dynamique de graphiques.' },
      { label: 'Le résultat', text: 'Un assistant décisionnel accessible sans friction technique, restituant immédiatement la métrique et la visualisation correspondante.' },
    ],
    Preview: VersusFinancePreview,
  },
  {
    id: 'crpay',
    logo: { text: 'CRPAY' },
    title: 'Passerelle de paiement mobile money.',
    pillars: [
      { label: 'Le problème', text: "Encaisser des paiements mobile money (MTN, Orange…) exige normalement une intégration directe avec chaque opérateur télécom, un chantier redondant pour chaque marchand." },
      { label: 'La solution', text: "Conception d'une passerelle API unique : authentification JWT, dispatch asynchrone des transactions vers le provider externe, traçabilité complète des échanges (requête, réponse, code HTTP) et accès scopé par rôle (interne, marchand, client)." },
      { label: 'Le résultat', text: 'Une API unifiée pour encaisser sur plusieurs opérateurs, un historique consultable et filtrable par statut, montant et date, avec documentation Swagger pour les intégrateurs.' },
    ],
    Preview: CrpayPreview,
  },
] as const

const AUTOPLAY_MS = 6000

export default function CaseStudyCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const study = caseStudies[index]
  const Preview = study.Preview
  const go = (next: number) => setIndex((next + caseStudies.length) % caseStudies.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex(current => (current + 1) % caseStudies.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused])

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-x-5 gap-y-3">
          {'src' in study.logo ? (
            <Image src={study.logo.src} alt={study.logo.alt} width={640} height={181} className="h-8 w-auto sm:h-9" />
          ) : (
            <span className="font-mono text-xl font-bold tracking-tight text-accent-deep">{study.logo.text}</span>
          )}
          <h2 className="section-title">{study.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs text-metal" aria-live="polite">{index + 1} / {caseStudies.length}</p>
          <div className="flex gap-1">
            <button type="button" onClick={() => go(index - 1)} aria-label="Réalisation précédente" className="flex h-9 w-9 items-center justify-center border border-metal text-metal hover:border-accent-deep hover:text-accent-deep">
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Réalisation suivante" className="flex h-9 w-9 items-center justify-center border border-metal text-metal hover:border-accent-deep hover:text-accent-deep">
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
        <div className="flex flex-col gap-px border border-metal bg-border">
          {study.pillars.map(item => (
            <div key={item.label} className="flex flex-1 flex-col bg-background p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-deep">{item.label}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <Preview />
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {caseStudies.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Voir la réalisation ${s.title}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent-deep' : 'w-1.5 bg-metal/40'}`}
          />
        ))}
      </div>
    </div>
  )
}
