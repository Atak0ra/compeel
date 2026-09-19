import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: "compeel.com n'utilise aucun cookie ni traceur.",
}

export default function CookiesPage() {
  return (
    <div className="page-shell">
      <header className="py-12 sm:py-20">
        <p className="mb-5 text-sm text-accent-deep">Cookies</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Politique de cookies.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Dernière mise à jour : 19 septembre 2026.</p>
      </header>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Aucun cookie sur ce site</h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            Un cookie est un petit fichier déposé dans votre navigateur, généralement utilisé pour la mesure
            d&apos;audience, la publicité ciblée ou la mémorisation de préférences.
          </p>
          <p>
            <strong className="font-medium text-foreground">compeel.com ne dépose aucun cookie, ni aucun traceur équivalent</strong> (pixel, stockage local utilisé à des fins de suivi, etc.). Le site n&apos;intègre ni outil de mesure d&apos;audience, ni publicité, ni bouton de partage social.
          </p>
          <p>
            Aucun cookie n&apos;étant utilisé, aucun bandeau de consentement n&apos;est nécessaire à ce jour : il n&apos;y a
            rien à consentir.
          </p>
        </div>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Si cela change</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Si un outil de mesure d&apos;audience ou tout autre traceur non essentiel venait à être ajouté, cette page
          serait mise à jour et un bandeau de consentement serait mis en place avant tout dépôt de cookie, conformément
          à la réglementation européenne (directive ePrivacy).
        </p>
      </section>

      <section className="section-space border-t border-border">
        <h2 className="mb-5 font-serif text-2xl">Voir aussi</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Pour le détail des données collectées via le formulaire de contact, consultez la{' '}
          <Link href="/confidentialite" className="underline underline-offset-4 hover:text-accent-deep">politique de confidentialité</Link>.
        </p>
      </section>
    </div>
  )
}
