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
    default: 'Compeel · Studio d\'ingénierie logicielle sur-mesure',
    template: '%s · Compeel',
  },
  description:
    "Compeel est un studio d'ingénierie logicielle sur-mesure. Nous concevons KARA, Alexis et Dame Justice, trois produits ancrés dans les réalités africaines.",
  keywords: ['Compeel', 'ingénierie logicielle sur-mesure', 'KARA', 'Alexis', 'Dame Justice', 'studio technologique', 'Afrique'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel · Studio d\'ingénierie logicielle sur-mesure',
    description:
      "Ingénierie logicielle sur-mesure. KARA, Alexis et Dame Justice, conçus par le studio Compeel.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel · Studio d\'ingénierie logicielle sur-mesure',
    description: "Ingénierie logicielle sur-mesure. KARA, Alexis et Dame Justice, conçus par le studio Compeel.",
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
    "Studio d'ingénierie logicielle sur-mesure, créateur de KARA, Alexis et Dame Justice.",
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
        <a href="#contenu" className="sr-only z-[60] bg-white p-4 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Aller au contenu</a>
        <JsonLd data={organizationSchema} />
        <Nav />
        <main id="contenu" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
