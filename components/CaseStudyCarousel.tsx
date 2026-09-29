'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CaseStudyCard from './CaseStudyCard'
import VersusFinancePreview from './VersusFinancePreview'
import CrpayPreview from './CrpayPreview'

const caseStudies = [
  {
    id: 'versusfinance',
    logo: { src: '/logos/versus-finances-tech.png', alt: 'VersusFinance' },
    badge: 'Fintech · Data',
    title: 'VersusFinance',
    description: 'Une interface conversationnelle qui transforme des requêtes en langage naturel en insights financiers en temps réel.',
    checklist: ['NLP & Data Visualization', 'Architecture scalable', 'Utilisé en production'],
    Preview: VersusFinancePreview,
  },
  {
    id: 'crpay',
    logo: { text: 'CRPAY' },
    badge: 'Paiement · Infrastructure',
    title: 'CRPAY',
    description: 'Une passerelle unique pour le mobile money : intégration multi-opérateurs, scoping par rôle et traçabilité complète.',
    checklist: ['API unifiée', 'Traçabilité end-to-end', 'Haute disponibilité'],
    Preview: CrpayPreview,
  },
] as const

const AUTOPLAY_MS = 6000

export default function CaseStudyCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
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
      <div className="flex justify-end gap-3">
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

      <div className="mt-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {caseStudies.map(s => (
            <div key={s.id} className="w-full shrink-0 px-1">
              <CaseStudyCard
                logo={s.logo}
                badge={s.badge}
                title={s.title}
                description={s.description}
                checklist={[...s.checklist]}
                Preview={s.Preview}
              />
            </div>
          ))}
        </div>
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
