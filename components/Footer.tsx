import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="page-shell py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-serif text-3xl font-medium text-accent-deep"
            >
              Compeel
            </Link>
            <p className="text-base text-muted max-w-xs">
              Racines africaines. Regard global.<br />Ingénierie logicielle et IA appliquée.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted mb-1">Compeel</p>
            <Link href="/realisations" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">
              Compeel Labs
            </Link>
            <Link href="/about" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">
              Le studio
            </Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">Contact</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 pt-8">
          <nav aria-label="Informations légales" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/mentions-legales" className="hover:text-accent-deep">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-accent-deep">Confidentialité</Link>
            <Link href="/cgu" className="hover:text-accent-deep">CGU</Link>
            <Link href="/cookies" className="hover:text-accent-deep">Cookies</Link>
            <Link href="/remboursement" className="hover:text-accent-deep">Remboursement</Link>
            <Link href="/accessibilite" className="hover:text-accent-deep">Accessibilité</Link>
          </nav>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Compeel. Paris, France.
            </p>
            <p className="text-sm text-muted italic">
              In memory of Alexis Sambou, co-founder.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
