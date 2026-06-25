import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://compeel.com'),
  title: {
    default: 'Compeel — Studio technologique africain',
    template: '%s — Compeel',
  },
  description:
    'Compeel construit des produits IA appliqués à des problèmes concrets en Afrique. Agents autonomes, systèmes de recherche, traitement de données.',
  keywords: ['Compeel', 'IA', 'voix', 'Afrique', 'Paris', 'KUMA', 'KARA', 'Mina', 'Ewe'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel — Studio technologique africain',
    description:
      'Produits IA pour l\'Afrique — agents, systèmes de recherche, interfaces vocales. KUMA, KARA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel — Studio technologique africain',
    description: 'Produits IA pour l\'Afrique — agents, systèmes de recherche, interfaces vocales.',
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
    'Studio technologique africain. Produits IA appliqués à des problèmes concrets en Afrique.',
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
    <html lang="fr" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={organizationSchema} />
        <Nav />
        <main className="pt-[61px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
