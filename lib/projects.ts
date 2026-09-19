export const projects = [
  {
    id: 'kara',
    name: 'KARA',
    domain: 'Santé',
    headline: 'La voix devient mémoire clinique.',
    description: 'Dicter une observation, retrouver un dossier, partager son historique. Un outil pour les soignants, hébergé dans leur structure.',
    href: '/kara',
    website: 'https://kara.compeel.com/',
    access: 'Démo publique',
    audience: 'Cliniques, cabinets et hôpitaux',
  },
  {
    id: 'alexis',
    name: 'Alexis',
    domain: 'Développement logiciel',
    headline: 'Du travail à confier. Du code à relire.',
    description: 'Un agent qui transforme une demande en code, exécute les vérifications et livre sur votre dépôt. Vous gardez la main aux étapes clés.',
    href: '/alexis',
    website: 'https://alexis.compeel.com/',
    access: 'Essai proposé',
    audience: 'Développeurs, indépendants et équipes produit',
  },
  {
    id: 'damejustice',
    name: 'Dame Justice',
    domain: 'Droit',
    headline: 'Une réponse compte. Sa source aussi.',
    description: 'Interroger le droit togolais et les textes OHADA avec leurs références. Un outil de recherche juridique, pas un substitut au jugement du professionnel.',
    href: '/damejustice',
    website: 'https://damejustice.vercel.app/',
    access: 'Bêta fermée',
    audience: 'Juristes, avocats et chercheurs',
  },
] as const

export type Project = typeof projects[number]
export type ProjectId = Project['id']