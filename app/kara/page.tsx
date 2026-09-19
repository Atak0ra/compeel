import type { Metadata } from 'next'
import ProductStory from '@/components/ProductStory'
import { projects } from '@/lib/projects'

export const metadata: Metadata = { title: 'KARA · Mémoire clinique vocale', description: projects[0].description }

export default function KaraPage() {
  return <ProductStory
    project={projects[0]}
    introduction="Les observations se dispersent entre papier, fichiers et transmissions orales. KARA part d'un geste simple : enregistrer sa voix sur le dossier du patient, puis retrouver cette information avec son contexte."
    decisions={[
      { title: 'La voix comme point de départ', text: 'Le soignant dicte ses observations depuis le navigateur de son téléphone. La note vocale reste associée au dossier.' },
      { title: 'Une mémoire partagée', text: 'Les transcriptions et les documents se retrouvent dans le même historique, consultable par les soignants de la structure.' },
      { title: 'Un hébergement local', text: 'Transcription et recherche sont conçues pour fonctionner sur le serveur de la structure, sans externalisation des données médicales.' },
    ]}
    boundary="Le parcours de l'information, à l'intérieur de la structure médicale."
    steps={[
      { title: 'Dicter', text: 'Une observation vocale est enregistrée sur le dossier patient.' },
      { title: 'Transcrire', text: 'La note devient un compte-rendu structuré, après traitement local.' },
      { title: 'Centraliser', text: 'Le compte-rendu rejoint les documents et l’historique du dossier.' },
      { title: 'Retrouver', text: 'Le soignant consulte un dossier ou recherche une information.' },
    ]}
    limitation="L'hébergement local ne remplace pas la gestion des accès, les sauvegardes ni la vérification des transcriptions par les soignants. Les conditions de déploiement sont à étudier avec chaque structure."
    action="Découvrir KARA"
    demo="https://demo-kara.compeel.com/"
  />
}