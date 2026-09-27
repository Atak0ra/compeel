'use client'

import { ArrowDown, ArrowRight, Check, GitBranch, Pause, Radio, RotateCcw } from 'lucide-react'
import { useState } from 'react'

export default function SystemBlueprint() {
  const [isInterrupted, setIsInterrupted] = useState(false)

  return (
    <figure className="blueprint-grid border-y border-border" aria-label="Schéma de distribution asynchrone avec reprise après interruption">
      <div className="page-shell py-5 sm:py-7">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <p className="font-mono text-xs uppercase tracking-widest text-metal">Fig. 01 / Continuité des flux</p>
          <div className="inline-flex border border-metal bg-surface p-1" role="group" aria-label="État du schéma">
            <button type="button" aria-pressed={!isInterrupted} onClick={() => setIsInterrupted(false)} className={`inline-flex min-h-9 items-center gap-2 px-3 text-sm ${!isInterrupted ? 'bg-foreground text-surface' : 'text-metal'}`}><Radio size={14} aria-hidden="true" />Nominal</button>
            <button type="button" aria-pressed={isInterrupted} onClick={() => setIsInterrupted(true)} className={`inline-flex min-h-9 items-center gap-2 px-3 text-sm ${isInterrupted ? 'bg-foreground text-surface' : 'text-metal'}`}><Pause size={14} aria-hidden="true" />Interruption</button>
          </div>
        </div>
        <div className="grid items-center gap-3 py-6 md:grid-cols-[1fr_40px_1fr_40px_1fr] md:gap-4 md:py-10">
          <div className="border border-metal bg-surface p-4 sm:p-5">
            <p className="mb-2 font-mono text-xs text-metal">01 / ENTRÉE</p>
            <h3 className="text-lg">Recevoir &amp; valider</h3>
            <p className="mt-2 text-base text-muted">Contrat explicite. Admission bornée.</p>
          </div>
          <div className="flex justify-center text-accent-deep"><ArrowRight className="hidden md:block" aria-hidden="true" /><ArrowDown className="md:hidden" size={18} aria-hidden="true" /></div>
          <div className="border border-metal bg-surface p-4 sm:p-5">
            <p className="mb-2 font-mono text-xs text-metal">02 / JOURNAL DURABLE</p>
            <h3 className="text-lg">Persister &amp; découpler</h3>
            <p className="mt-2 text-base text-muted">Conserver avant d&apos;acquitter.</p>
          </div>
          <div className="flex justify-center text-accent-deep"><ArrowRight className="hidden md:block" aria-hidden="true" /><ArrowDown className="md:hidden" size={18} aria-hidden="true" /></div>
          <div className={`border bg-surface p-4 sm:p-5 ${isInterrupted ? 'border-dashed border-metal' : 'border-metal'}`}>
            <p className="mb-2 font-mono text-xs text-metal">03 / {isInterrupted ? 'TRAITEMENT SUSPENDU' : 'TRAITEMENT'}</p>
            <h3 className="text-lg">Exécuter &amp; confirmer</h3>
            <p className="mt-2 text-base text-muted">Rejouer sans doubler les effets.</p>
          </div>
        </div>
        <div className="grid gap-4 border-t border-dashed border-metal/40 pt-4 md:grid-cols-[1fr_2fr] md:gap-8">
          <p className="flex items-start gap-2 font-mono text-xs uppercase tracking-wider text-metal"><GitBranch size={16} className="shrink-0" aria-hidden="true" />Observation / Reprise / Traçabilité</p>
          <div aria-live="polite" aria-atomic="true" className="min-h-[88px] sm:min-h-[64px]">
            <p className="flex items-start gap-2 text-base text-foreground">{isInterrupted ? <RotateCcw size={18} className="mt-1 shrink-0 text-accent-deep" aria-hidden="true" /> : <Check size={18} className="mt-1 shrink-0 text-accent-deep" aria-hidden="true" />}<span>{isInterrupted ? 'Traitement indisponible : les éléments acceptés restent dans le journal. Reprise depuis le dernier point confirmé, sous réserve de capacité.' : 'Flux nominal : chaque élément accepté est persisté, puis traité. La confirmation fait progresser le point de reprise.'}</span></p>
          </div>
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">Schéma de principe, pas une infrastructure client. Rétention, capacité et délais de reprise à dimensionner selon les contraintes.</figcaption>
      </div>
    </figure>
  )
}