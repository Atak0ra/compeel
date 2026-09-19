import type { Metadata } from 'next'
import ProductStory from '@/components/ProductStory'
import { projects } from '@/lib/projects'

export const metadata: Metadata = { title: 'Dame Justice · Recherche juridique', description: projects[2].description }

export default function DameJusticePage() {
  return <ProductStory
    project={projects[2]}
    introduction="Trouver un texte est une première étape. Comprendre sa portée, sa source et sa place dans la hiérarchie des normes en est une autre. Dame Justice explore cette continuité pour les professionnels du droit togolais et OHADA."
    decisions={[
      { title: 'Partir des documents', text: 'La recherche s’appuie sur un corpus identifié. Le Code civil togolais est annoncé comme indexé ; le périmètre disponible évolue avec la bêta.' },
      { title: 'Rendre les sources visibles', text: 'La réponse s’accompagne de références pour permettre au professionnel de revenir au texte et à son contexte.' },
      { title: 'Respecter le rôle du juriste', text: 'L’outil assiste la recherche et la lecture. Il ne remplace ni l’analyse du dossier ni la responsabilité du professionnel.' },
    ]}
    boundary="Un schéma de recherche documentaire, pas une garantie de validité juridique."
    steps={[
      { title: 'Questionner', text: 'Formuler une question et préciser le contexte juridique.' },
      { title: 'Rechercher', text: 'Retrouver des passages pertinents dans le corpus disponible.' },
      { title: 'Référencer', text: 'Présenter une réponse accompagnée de ses sources.' },
      { title: 'Examiner', text: 'Revenir aux documents et vérifier leur portée pour le dossier.' },
    ]}
    limitation="Bêta fermée, sur demande d'accès. Les informations fournies ne constituent pas un conseil juridique. La couverture du corpus et l'actualité des textes doivent être vérifiées."
    action="Demander un accès bêta"
  />
}