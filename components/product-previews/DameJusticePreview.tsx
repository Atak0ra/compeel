import { ArrowRight, ExternalLink, FileText, Folder, Search, Star } from 'lucide-react'

const navigation = [
  { label: 'Rechercher', icon: Search, active: true },
  { label: 'Documents', icon: FileText, active: false },
  { label: 'Dossiers', icon: Folder, active: false },
  { label: 'Favoris', icon: Star, active: false },
]

const sources = [
  { name: 'Conclusions récapitulatives.pdf', page: 'p. 18' },
  { name: 'Mémoire d\'appel.pdf', page: 'p. 6' },
  { name: 'Ordonnance de première instance.pdf', page: 'p. 3' },
]

export default function DameJusticePreview() {
  return (
    <figure data-preview="damejustice" className="min-w-0">
      <div className="overflow-x-auto rounded-lg border border-[#e3dfd6] bg-[#f1efea] text-[#16181d] shadow-xl" role="region" aria-label="Aperçu de l'interface DameJustice" tabIndex={0}>
        <div role="img" aria-label="DameJustice : une question posée sur le dossier Martin contre Durand, une réponse rédigée et trois sources citées avec leur page. Données fictives." className="min-w-[620px] text-[10px] leading-normal tracking-normal">
          <div aria-hidden="true" className="grid min-h-[360px] grid-cols-[150px_minmax(0,1fr)]">
            <aside className="flex flex-col border-r border-[#e3dfd6] bg-[#f1efea] p-3">
              <p className="border-b border-[#e3dfd6] px-1 pb-4 pt-1 font-serif text-[14px]">DameJustice</p>
              <ul className="mt-4 space-y-1">
                {navigation.map(({ label, icon: Icon, active }) => (
                  <li key={label} className={`flex items-center gap-2 rounded px-2 py-2 text-[10px] ${active ? 'bg-[#e4e1da] font-medium' : 'text-[#3d424b]'}`}>
                    <Icon size={12} />{label}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2 px-1 pt-6">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e4e1da] text-[8px]">AC</span>
                <span><span className="block text-[9px] font-medium">Alexandre C.</span><span className="block text-[8px] text-[#8a8d94]">Associé</span></span>
              </div>
            </aside>
            <div className="min-w-0 bg-[#fcfbf9] px-5 py-4">
              <p className="text-right text-[8px] text-[#67696f]">Tous les documents</p>
              <div className="mt-5 flex items-center justify-between gap-3 rounded border border-[#e3dfd6] bg-white px-3 py-2.5">
                <span>Quelle stratégie avons-nous retenue dans le dossier Martin contre Durand ?</span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eeece7]"><ArrowRight size={10} /></span>
              </div>
              <div className="mt-3 rounded border border-[#e3dfd6] bg-white p-3">
                <p className="leading-relaxed">Dans le dossier Martin contre Durand (2021), le cabinet avait retenu une stratégie fondée sur la contestation de la compétence territoriale, en soutenant l&apos;absence de lien suffisant avec le ressort du tribunal saisi. Cette argumentation avait été accueillie favorablement en première instance, avant d&apos;être partiellement remise en cause en appel.</p>
                <p className="mb-2 mt-4 text-[9px]">Sources</p>
                <ul className="divide-y divide-[#e3dfd6] rounded border border-[#e3dfd6]">
                  {sources.map(source => (
                    <li key={source.name} className="flex items-center gap-2 px-2.5 py-2">
                      <FileText size={12} className="shrink-0 text-[#8a8d94]" />
                      <span className="min-w-0 flex-1"><span className="block truncate">{source.name}</span><span className="block text-[8px] text-[#8a8d94]">Dossier Martin c. Durand</span></span>
                      <span className="text-[8px] text-[#8a8d94]">{source.page}</span>
                      <ExternalLink size={10} className="shrink-0 text-[#8a8d94]" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted">DameJustice · Aperçu reconstitué de l&apos;interface. Cabinet et documents fictifs.</figcaption>
    </figure>
  )
}

