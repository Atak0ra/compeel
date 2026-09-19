import { AudioLines, Check, FileText, LockKeyhole, Mic, Search, Server, UserRound } from 'lucide-react'

export default function KaraPreview() {
  return (
    <figure data-preview="kara" className="min-w-0">
      <div role="img" aria-label="Maquette KARA : dossier fictif, note vocale transcrite et historique conservé sur le serveur local." className="overflow-hidden rounded-md border border-[#214338] bg-[#10251d] text-[#f1f5ef] shadow-subtle">
        <div aria-hidden="true">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#315046] px-5 py-4 sm:px-7">
            <span className="font-semibold">KARA</span>
            <span className="flex items-center gap-2 text-sm text-[#bfd5c9]"><Server size={15} /> Serveur local</span>
          </div>
          <div className="grid min-h-[390px] sm:grid-cols-[150px_minmax(0,1fr)]">
            <div className="flex flex-wrap gap-4 border-b border-[#315046] p-4 text-sm text-[#bfd5c9] sm:flex-col sm:border-b-0 sm:border-r sm:py-6">
              <span className="flex items-center gap-2 text-white"><UserRound size={16} /> Dossiers</span>
              <span className="flex items-center gap-2"><AudioLines size={16} /> Notes vocales</span>
              <span className="flex items-center gap-2"><Search size={16} /> Recherche</span>
              <span className="mt-auto flex items-center gap-2 pt-2"><LockKeyhole size={14} /> Réseau interne</span>
            </div>
            <div className="min-w-0 space-y-5 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div><p className="text-sm text-[#bfd5c9]">Dossier de démonstration</p><p className="mt-1 font-serif text-2xl">M John Doe</p></div>
                <UserRound size={25} className="shrink-0 text-[#9bd1b6]" />
              </div>
              <div className="flex flex-wrap gap-5 border-b border-[#315046] pb-3 text-sm"><span className="text-[#b6e5cc]">Observations</span><span className="text-[#bfd5c9]">Documents</span></div>
              <div className="flex items-center gap-3">
                <Mic size={20} className="shrink-0 text-[#9bd1b6]" />
                <div className="min-w-0 flex-1"><p className="font-medium">Note de consultation</p><p className="text-sm text-[#bfd5c9]">Enregistrement vocal</p></div>
                <Check size={18} className="text-[#9bd1b6]" />
              </div>
              <div className="flex h-12 items-center justify-between gap-1 border-y border-[#315046]" aria-hidden="true">
                {['h-2', 'h-5', 'h-3', 'h-8', 'h-6', 'h-4', 'h-7', 'h-3', 'h-5', 'h-9', 'h-4', 'h-6', 'h-3', 'h-8', 'h-5', 'h-2', 'h-4', 'h-6', 'h-3', 'h-2'].map((height, index) => <span key={index} className={`${height} w-1 rounded-full bg-[#9bd1b6]`} />)}
              </div>
              <div><p className="mb-2 flex items-center gap-2 text-sm text-[#b6e5cc]"><FileText size={15} /> Transcription disponible</p><p className="text-sm leading-relaxed text-[#e0e9e3]">Entretien de suivi. Les observations de la consultation sont regroupées dans le dossier pour la prochaine visite.</p></div>
              <p className="border-t border-[#315046] pt-3 text-sm text-[#bfd5c9]">Historique du dossier conservé dans la structure.</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">KARA · Vue illustrative, données fictives.</figcaption>
    </figure>
  )
}