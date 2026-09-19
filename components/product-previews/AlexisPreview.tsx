import { CheckCheck, Circle, FileCheck2, GitBranch, GitPullRequest, ListTodo } from 'lucide-react'

const columns = [
  { title: 'À faire', icon: ListTodo, tickets: [{ name: 'Recherche dans les dossiers', tag: 'Fonctionnalité', state: 'À préciser' }] },
  { title: 'Cadrage', icon: FileCheck2, tickets: [{ name: 'Export des documents', tag: 'Spécification', state: 'À valider' }] },
  { title: 'Développement', icon: GitBranch, tickets: [{ name: 'Pagination des résultats', tag: 'Implémentation', state: 'Tests en cours' }] },
  { title: 'Terminé', icon: CheckCheck, tickets: [{ name: 'Validation du formulaire', tag: 'Correction', state: 'Vérifié' }] },
]

export default function AlexisPreview() {
  return (
    <figure data-preview="alexis" className="min-w-0">
      <div role="img" aria-label="Maquette Alexis : quatre étapes de travail, ticket de développement et validation humaine avant livraison. Projet fictif." className="overflow-hidden rounded-md border border-[#dcdbe7] bg-[#fafafe] text-[#262431] shadow-subtle">
        <div aria-hidden="true">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e1eb] bg-white px-5 py-4 sm:px-7">
            <span className="flex items-center gap-2 font-semibold"><span className="flex h-7 w-7 items-center justify-center rounded bg-[#5141de] text-sm text-white">A</span> Alexis</span>
            <span className="flex items-center gap-2 text-sm text-[#625e73]"><GitBranch size={15} /> Projet de démonstration</span>
          </div>
          <div className="min-h-[390px] p-4 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><p className="font-medium">Espace de travail</p><span className="text-sm text-[#625e73]">Votre dépôt, votre code.</span></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {columns.map(({ title, icon: Icon, tickets }) => (
                <div key={title} className="min-w-0">
                  <p className="mb-3 flex min-h-10 items-center gap-1.5 text-xs font-medium sm:text-sm"><Icon size={14} className="shrink-0 text-[#5141de]" />{title}</p>
                  {tickets.map(ticket => (
                    <div key={ticket.name} className="flex min-h-[158px] flex-col rounded border border-[#e2e1eb] bg-white p-3">
                      <p className="mb-3 break-words text-xs text-[#5141de]">{ticket.tag}</p>
                      <p className="break-words text-sm leading-relaxed">{ticket.name}</p>
                      <p className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-[#625e73]"><Circle size={10} className="shrink-0" />{ticket.state}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-[#e2e1eb] pt-5">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium"><GitPullRequest size={17} className="text-[#5141de]" /> Validation du formulaire</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#625e73]"><span>Tests exécutés</span><span>Code vérifié</span><span className="font-medium text-[#5141de]">Relecture humaine</span></div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">Alexis · Vue illustrative, données fictives.</figcaption>
    </figure>
  )
}