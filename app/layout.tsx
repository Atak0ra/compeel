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
    default: 'Compeel — Studio d\'ingénierie logicielle',
    template: '%s — Compeel',
  },
  description:
    'Compeel conçoit des architectures logicielles sur-mesure pour des environnements exigeants : conformité, paiements, intégration.',
  keywords: ['Compeel', 'ingénierie logicielle', 'OHADA', 'conformité', 'paiements', 'Afrique', 'Paris'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel — Studio d\'ingénierie logicielle',
    description:
      'Architectures logicielles sur-mesure pour des environnements exigeants : conformité, paiements, intégration.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel — Studio d\'ingénierie logicielle',
    description: 'Architectures logicielles sur-mesure pour des environnements exigeants.',
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
    'Studio d\'ingénierie et de conception logicielle. Architectures sur-mesure pour des environnements exigeants.',
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
