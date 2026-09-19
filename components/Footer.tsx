import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-shell py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-serif text-3xl text-foreground"
            >
              Compeel
            </Link>
            <p className="text-base text-muted max-w-xs">
              Studio technologique africain.<br />Des idées aux produits.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted mb-1">Compeel</p>
            <Link href="/realisations" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">
              Produits
            </Link>
            <Link href="/about" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">
              Le studio
            </Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center text-base hover:text-accent-deep">Contact</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Compeel. Paris, France.
          </p>
          <p className="text-sm text-muted italic">
            In memory of Alexis Sambou, co-founder.
          </p>
        </div>
      </div>
    </footer>
  )
}
