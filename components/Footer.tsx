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
              className="font-serif text-base text-foreground transition-opacity hover:opacity-70"
            >
              Compeel
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Studio technologique africain. Produits vocaux et IA pour l&apos;Afrique de l&apos;Ouest.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Produits</p>
            <Link href="/kuma" className="text-sm text-muted transition-colors hover:text-foreground">
              KUMA
            </Link>
            <Link href="/kara" className="text-sm text-muted transition-colors hover:text-foreground">
              KARA
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Studio</p>
            <Link href="/about" className="text-sm text-muted transition-colors hover:text-foreground">
              À propos
            </Link>
            <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
              Blog
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Compeel. Lomé, Togo.
          </p>
          <p className="text-xs text-muted italic">
            In memory of Alexis Sambou, co-founder.
          </p>
        </div>
      </div>
    </footer>
  )
}
