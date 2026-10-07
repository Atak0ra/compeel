import { Bell, CheckCircle2, ChevronDown, FileStack, FileText, FolderKanban, Library, Plus, Scale, Search, Settings, ShieldCheck, UploadCloud, Users } from 'lucide-react'

const documents = [
  { name: 'Modèle de contrat de bail commercial.pdf', category: 'Contrat', size: '248 Ko', date: '02/10/2026' },
  { name: 'Modèle de statuts de SARL — OHADA.pdf', category: 'Acte', size: '186 Ko', date: '02/10/2026' },
  { name: 'Note juridique — Recouvrement de créances.pdf', category: 'Note juridique', size: '124 Ko', date: '01/10/2026' },
  { name: 'Modèle de requête en injonction de payer.pdf', category: 'Procédure', size: '96 Ko', date: '01/10/2026' },
  { name: 'Modèle de mise en demeure de payer.pdf', category: 'Courrier', size: '78 Ko', date: '30/09/2026' },
  { name: 'Modèle de conclusions en défense.pdf', category: 'Procédure', size: '212 Ko', date: '30/09/2026' },
  { name: 'Note de jurisprudence — Résiliation du bail.pdf', category: 'Jurisprudence', size: '164 Ko', date: '29/09/2026' },
]

const matters = ['Recouvrement de créances', 'Bail commercial', 'Constitution de société']

export default function DameJusticePreview() {
  return (
    <figure data-preview="damejustice" className="min-w-0">
      <div className="overflow-x-auto rounded-lg border border-[#cbd3df] bg-[#e9edf3] text-[#303b4c] shadow-xl" role="region" aria-label="Aperçu de la bibliothèque juridique DameJustice" tabIndex={0}>
        <div role="img" aria-label="DameJustice : base documentaire du cabinet, sept modèles et notes juridiques indexés, dossiers récents et serveur local connecté. Données fictives." className="min-w-[620px] text-[10px] leading-normal tracking-normal">
          <div aria-hidden="true">
            <div className="flex h-7 items-center gap-1.5 px-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-semibold">DameJustice — Compeel Labs</span>
            </div>
            <div className="flex h-11 items-center justify-between gap-3 border-b border-[#cbd3df] bg-[#f6f8fb] px-3">
              <div className="flex items-center gap-2 rounded border border-[#cbd3df] bg-white px-2 py-1.5 text-[#67758b]">
                <Search size={12} />Posez votre question…
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#278363]" />
                <div className="text-right text-[9px]">
                  <p className="font-medium">Serveur local connecté</p>
                  <p className="text-[#67758b]">Aucune donnée dans le cloud</p>
                </div>
                <Bell size={13} className="text-[#67758b]" />
                <span className="flex items-center gap-2 rounded border border-[#cbd3df] bg-white px-2 py-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eeebfb] text-[#6554bb]">CM</span>
                  <span>Cabinet Morel<ChevronDown size={10} className="ml-1 inline" /></span>
                </span>
              </div>
            </div>
            <div className="grid min-h-[390px] grid-cols-[132px_minmax(0,1fr)]">
              <aside className="flex flex-col border-r border-[#cbd3df] bg-[#f6f8fb]">
                <div className="flex items-center gap-2 border-b border-[#d8dee7] px-3 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#213c61] text-white"><Scale size={19} /></span>
                  <p className="font-semibold">DameJustice</p>
                </div>
                <div className="space-y-1 px-2 py-3">
                  <p className="flex items-center gap-1.5 px-1 py-2"><FolderKanban size={12} />Mes affaires<span className="ml-auto text-[#67758b]">3</span><Plus size={10} /></p>
                  <p className="flex items-center gap-1.5 rounded bg-[#e1e5ee] px-1 py-2 font-medium text-[#5947cc]"><Library size={12} />Base documentaire<span className="ml-auto">7</span></p>
                </div>
                <p className="px-3 text-[8px] font-medium uppercase text-[#67758b]">Affaires récentes</p>
                <div className="space-y-3 px-3 py-3">
                  {matters.map(matter => <p key={matter} className="flex items-start gap-1.5 text-[9px]"><FileStack size={11} className="mt-0.5 shrink-0 text-[#67758b]" />{matter}</p>)}
                </div>
                <div className="mt-auto space-y-3 border-t border-[#cbd3df] px-3 py-3 text-[9px]">
                  <p className="flex items-center gap-2"><Users size={12} />Comptes du cabinet</p>
                  <p className="flex items-center gap-2"><Settings size={12} />Paramètres du serveur</p>
                  <p className="flex items-start gap-1.5 text-[8px] text-[#67758b]"><ShieldCheck size={11} className="shrink-0 text-[#278363]" /><span>DameJustice v1.0.0<br />Fonctionne sur le serveur du cabinet</span></p>
                </div>
              </aside>
              <div className="min-w-0">
                <div className="flex items-center gap-2 border-b border-[#d8dee7] bg-white px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#e1e5eb]"><Library size={15} /></span>
                  <div><p className="text-[11px] font-semibold">Base documentaire du cabinet</p><p className="text-[9px] text-[#67758b]">Modèles d&apos;actes, mémos et précédents — accessibles depuis toutes les affaires.</p></div>
                </div>
                <div className="px-3 py-3">
                  <div className="mb-4 flex items-center gap-2 rounded border border-dashed border-[#cbd3df] bg-[#f6f8fb] px-3 py-3 text-[#67758b]">
                    <UploadCloud size={14} /><p>Glissez-déposez vos documents ici ou <span className="text-[#365e9b]">parcourez</span></p>
                  </div>
                  <table className="w-full table-fixed border-collapse text-left text-[8px]">
                    <colgroup><col className="w-[48%]" /><col className="w-[18%]" /><col className="w-[9%]" /><col className="w-[15%]" /><col className="w-[10%]" /></colgroup>
                    <thead className="border-b border-[#cbd3df] text-[7px] uppercase text-[#67758b]">
                      <tr>{['Nom', 'Catégorie', 'Taille', 'Ajouté', 'Statut'].map(label => <th key={label} className="px-1 py-2 font-medium">{label}</th>)}</tr>
                    </thead>
                    <tbody>
                      {documents.map(document => (
                        <tr key={document.name} className="border-b border-[#e1e6ed]">
                          <td className="px-1 py-3"><span className="flex items-start gap-1.5"><FileText size={11} className="mt-0.5 shrink-0 text-[#cc5a50]" /><span>{document.name}</span></span></td>
                          <td className="px-1 py-3"><span className="inline-block rounded-sm border border-[#f0d68b] bg-[#fffbeb] px-1 py-0.5 text-[7px] text-[#916217]">{document.category}</span></td>
                          <td className="px-1 py-3 text-[#67758b]">{document.size}</td>
                          <td className="px-1 py-3 text-[#67758b]">{document.date}</td>
                          <td className="px-1 py-3 text-[#278363]"><span className="inline-flex items-center gap-0.5"><CheckCircle2 size={8} />Indexé</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted">DameJustice · Aperçu reconstitué de l&apos;interface. Cabinet et documents fictifs.</figcaption>
    </figure>
  )
}