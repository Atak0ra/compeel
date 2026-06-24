import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Compeel — Studio technologique africain',
  description:
    'Compeel construit des produits IA appliqués à des problèmes concrets en Afrique. Agents autonomes, systèmes de recherche, traitement de données.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Compeel',
  url: 'https://compeel.com',
  description:
    'Studio technologique africain. Produits IA appliqués à des problèmes concrets en Afrique.',
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={websiteSchema} />
      {/* Hero */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-muted">
            Paris, France
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight mb-8">
            Nous construisons des produits IA pour l&apos;Afrique.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Compeel est un studio technologique africain. Nous construisons des produits IA
            appliqués à des problèmes concrets dans des domaines comme la santé, la mobilité
            et le droit. Chaque produit part d&apos;un vrai problème, pas d&apos;une tendance.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Products */}
      <section className="py-24">
        <p className="mb-12 text-xs uppercase tracking-widest text-muted">
          Produits
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* KUMA */}
          <Link
            href="/kuma"
            className="group block rounded border border-border bg-surface p-8 transition-colors hover:border-foreground/20 hover:bg-surface-2"
          >
            <div className="mb-8 flex items-start justify-between">
              <span className="font-serif text-2xl text-foreground">KUMA</span>
              <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <p className="mb-3 text-xs uppercase tracking-wider text-muted">
              API vocale · Mina & Ewe
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Détection d&apos;intention vocale en langues locales. Un utilisateur parle en Mina,
              l&apos;API retourne une intention structurée que n&apos;importe quelle application peut utiliser.
            </p>
            <p className="mt-6 text-xs text-muted/60">
              Cas d&apos;usage principal : mobilité urbaine à Lomé
            </p>
          </Link>

          {/* KARA */}
          <Link
            href="/kara"
            className="group block rounded border border-border bg-surface p-8 transition-colors hover:border-foreground/20 hover:bg-surface-2"
          >
            <div className="mb-8 flex items-start justify-between">
              <span className="font-serif text-2xl text-foreground">KARA</span>
              <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <p className="mb-3 text-xs uppercase tracking-wider text-muted">
              Dossier patient vocal · Santé
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Chaque soignant enregistre sa voix sur le dossier d&apos;un patient. Tout est transcrit,
              centralisé et consultable. 100% on-premise, aucune donnée ne quitte la structure.
            </p>
            <p className="mt-6 text-xs text-muted/60">
              Pour les structures médicales en Afrique de l&apos;Ouest
            </p>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Vision */}
      <section className="py-24 max-w-2xl">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted">
          Vision
        </p>
        <blockquote className="font-serif text-2xl sm:text-3xl text-foreground leading-snug">
          &ldquo;La technologie doit parler la langue de ceux qu&apos;elle sert.&rdquo;
        </blockquote>
        <p className="mt-8 text-sm text-muted leading-relaxed">
          Nous ne construisons pas pour un marché abstrait. Nous construisons pour des gens précis,
          dans des villes précises, avec des contraintes précises. C&apos;est ce qui rend nos produits utiles.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Blog CTA */}
      <section className="py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-muted">Blog</p>
            <h2 className="font-serif text-2xl text-foreground">
              Réflexions sur la tech en Afrique
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-surface"
          >
            Lire le blog
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
