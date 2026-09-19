import type { Metadata } from 'next'
import ProductStory from '@/components/ProductStory'
import { projects } from '@/lib/projects'

export const metadata: Metadata = { title: 'Alexis · Agent de développement', description: projects[1].description }

export default function AlexisPage() {
  return <ProductStory
    project={projects[1]}
    introduction="Écrire du code n'est qu'une partie du travail. Il faut cadrer la demande, vérifier le résultat et garder un historique. Alexis rassemble ces étapes autour de votre dépôt, avec des validations humaines."
    decisions={[
      { title: 'Cadrer avant de coder', text: 'La demande devient une spécification, puis un plan. Ces étapes sont soumises à validation avant l’implémentation.' },
      { title: 'Vérifier le travail', text: 'Les contrôles de qualité et les tests encadrent la livraison. Les tentatives de correction sont bornées ; un échec doit rester visible.' },
      { title: 'Votre dépôt reste la référence', text: 'Le code rejoint votre dépôt GitHub ou GitLab. Vous conservez l’historique et la décision de valider le travail.' },
    ]}
    boundary="Un parcours résumé, avec validation humaine aux étapes clés."
    steps={[
      { title: 'Spécifier', text: 'Décrire la demande et valider son périmètre.' },
      { title: 'Planifier', text: 'Relire le plan technique avant de lancer le développement.' },
      { title: 'Développer et vérifier', text: 'Implémenter, exécuter les contrôles et corriger dans une boucle bornée.' },
      { title: 'Relire et livrer', text: 'Examiner le résultat sur le dépôt avant son intégration.' },
    ]}
    limitation="Des tests réussis ne garantissent pas l'absence de défauts. Les contrôles disponibles dépendent de la stack et de la configuration du projet. La revue humaine reste nécessaire."
    action="Découvrir Alexis"
  />
}