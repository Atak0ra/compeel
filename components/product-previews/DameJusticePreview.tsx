import { BookOpen, FileText, Quote, Scale, Search } from 'lucide-react'

export default function DameJusticePreview() {
  return (
    <figure data-preview="damejustice" className="min-w-0">
      <div role="img" aria-label="Maquette Dame Justice : recherche juridique, consultation du corpus et renvois aux sources. Contenu de démonstration sans portée juridique." className="overflow-hidden rounded-md border border-[#d9d7cf] bg-[#f7f7f2] text-[#272724] shadow-subtle">
        <div aria-hidden="true">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9d7cf] px-5 py-4 sm:px-7">
            <span className="flex items-center gap-2 font-serif text-lg"><Scale size={19} className="text-[#a03022]" /> Dame Justice</span>
            <span className="text-sm text-[#a03022]">Bêta fermée</span>
          </div>
          <div className="min-h-[390px] p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3 border-b border-[#a5a59c] pb-3 text-sm"><Search size={17} className="shrink-0 text-[#a03022]" /><span>Rechercher dans le droit togolais</span></div>
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_150px]">
              <div className="min-w-0">
                <p className="mb-4 text-sm text-[#62625a]">Recherche de démonstration</p>
                <p className="font-serif text-2xl leading-tight">Retrouver le texte.<br />Lire dans son contexte.</p>
                <div className="my-5 border-l-2 border-[#a03022] pl-4">
                  <p className="mb-2 flex items-center gap-2 text-sm text-[#a03022]"><Quote size={15} /> Réponse et références</p>
                  <p className="text-sm leading-relaxed text-[#62625a]">Les passages retrouvés accompagnent la réponse. Chaque référence permet de revenir au document source.</p>
                </div>
                <p className="flex items-center gap-2 border-t border-[#d9d7cf] pt-4 text-sm"><FileText size={16} className="shrink-0 text-[#a03022]" /> Source · Code civil togolais</p>
              </div>
              <div className="border-t border-[#d9d7cf] pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <p className="mb-4 flex items-center gap-2 text-sm text-[#62625a]"><BookOpen size={16} /> Corpus</p>
                <p className="font-serif text-lg">Code civil togolais</p>
                <p className="mt-3 text-sm leading-relaxed text-[#62625a]">Texte annoncé comme indexé.</p>
                <p className="mt-6 border-t border-[#d9d7cf] pt-3 text-sm text-[#62625a]">Togo<br />Droit civil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">Dame Justice · Vue illustrative, sans portée juridique.</figcaption>
    </figure>
  )
}