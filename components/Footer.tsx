import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-serif text-base text-accent-deep transition-opacity hover:opacity-60"
            >
              Compeel
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Studio d&apos;ingénierie et de conception logicielle.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted/60 mb-1">Studio</p>
            <Link href="/realisations" className="text-sm text-muted transition-colors hover:text-accent">
              Réalisations
            </Link>
            <Link href="/about" className="text-sm text-muted transition-colors hover:text-accent">
              À propos
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Compeel. Paris, France.
          </p>
          <p className="text-xs text-muted italic">
            In memory of Alexis Sambou, co-founder.
          </p>
        </div>
      </div>
    </footer>
  )
}
