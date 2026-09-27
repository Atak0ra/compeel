import type { Metadata } from 'next'
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
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

const studioMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-technical',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://compeel.com'),
  title: {
    default: 'Compeel · Laboratoire indépendant d’ingénierie des systèmes',
    template: '%s · Compeel',
  },
  description:
    "Laboratoire indépendant d’ingénierie des systèmes. Architecture, résilience des flux, vérification en conditions dégradées et transmission de la maîtrise.",
  keywords: ['Compeel', 'laboratoire indépendant', 'ingénierie des systèmes', 'architecture', 'résilience', 'distribution asynchrone'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel · Laboratoire indépendant d’ingénierie des systèmes',
    description:
      "Des systèmes qui tiennent. En production. Sous charge. Dans le temps.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel · Laboratoire indépendant d’ingénierie des systèmes',
    description: "Des systèmes qui tiennent. En production. Sous charge. Dans le temps.",
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
    "Laboratoire indépendant d’ingénierie des systèmes. Conception d’architectures, résilience des flux et maîtrise de l’exploitation.",
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
    <html lang="fr" className={`${studioSans.variable} ${studioMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#contenu" className="sr-only z-[60] bg-foreground p-4 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Aller au contenu</a>
        <JsonLd data={organizationSchema} />
        <Nav />
        <main id="contenu" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
