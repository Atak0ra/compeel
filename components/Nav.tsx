'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/realisations', label: 'Produits' },
  { href: '/about', label: 'Le studio' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav aria-label="Navigation principale" className="page-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-serif text-2xl text-foreground"
        >
          Compeel
        </Link>

        <ul className="flex flex-wrap items-center gap-5 sm:gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href === '/realisations' && ['/kara', '/alexis', '/damejustice'].includes(pathname))
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center text-sm transition-colors ${
                    isActive
                      ? 'text-accent-deep underline underline-offset-8'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
