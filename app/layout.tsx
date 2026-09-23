import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const studioSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-studio',
  display: 'swap',
})

const studioSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-editorial',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://compeel.com'),
  title: {
    default: 'Compeel · Ingénierie logicielle et IA appliquée',
    template: '%s · Compeel',
  },
  description:
    "Compeel est un studio indépendant d'ingénierie logicielle et d'IA appliquée. Architecture, systèmes backend et intégration IA pour les entreprises.",
  keywords: ['Compeel', 'ingénierie logicielle', 'architecture logicielle', 'backend', 'IA appliquée', 'fintech'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel · Ingénierie logicielle et IA appliquée',
    description:
      "Studio indépendant. Architecture logicielle, systèmes backend et IA appliquée pour les entreprises.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel · Ingénierie logicielle et IA appliquée',
    description: "Studio indépendant. Architecture logicielle, systèmes backend et IA appliquée pour les entreprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Compeel',
  url: 'https://compeel.com',
  description:
    "Studio indépendant d'ingénierie logicielle et d'IA appliquée. Compeel Labs accueille les travaux de R&D et les produits internes.",
  founder: {
    '@type': 'Person',
    name: 'Williams de Souza',
  },
  location: {
    '@type': 'Place',
    name: 'Paris, France',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${studioSans.variable} ${studioSerif.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#contenu" className="sr-only z-[60] bg-white p-4 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Aller au contenu</a>
        <JsonLd data={organizationSchema} />
        <Nav />
        <main id="contenu" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
