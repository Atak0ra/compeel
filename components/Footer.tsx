import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="border-b border-border bg-surface-2">
        <div className="page-shell flex flex-wrap items-center justify-between gap-6 py-14">
          <p className="max-w-lg text-2xl font-medium leading-tight sm:text-3xl">Des fondations solides pour ce qui compte demain.</p>
          <a href="/#contact" className="button-primary">Discuter d&apos;un projet<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="bg-surface">
      <div className="page-shell py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-sans text-3xl font-medium text-accent"
            >
              Compeel
            </Link>
            <p className="text-base text-muted max-w-xs">
              Racines africaines. Exigence de terrain.<br />Laboratoire indépendant d&apos;ingénierie des systèmes.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted mb-1">Compeel</p>
            <Link href="/#methode" className="inline-flex min-h-11 items-center text-base hover:text-foreground">
              Approche d&apos;ingénierie
            </Link>
            <Link href="/about" className="inline-flex min-h-11 items-center text-base hover:text-foreground">
              Le laboratoire
            </Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center text-base hover:text-foreground">Contact</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <nav aria-label="Informations légales" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <Link href="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
              <Link href="/confidentialite" className="hover:text-foreground">Confidentialité</Link>
              <Link href="/cgu" className="hover:text-foreground">CGU</Link>
              <Link href="/cookies" className="hover:text-foreground">Cookies</Link>
              <Link href="/remboursement" className="hover:text-foreground">Remboursement</Link>
              <Link href="/accessibilite" className="hover:text-foreground">Accessibilité</Link>
            </nav>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Compeel. Paris, France.
            </p>
          </div>
          <p className="text-sm italic tracking-wide text-muted">
            In memory of Alexis Sambou, co-founder.
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
