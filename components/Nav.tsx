'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/kuma', label: 'KUMA' },
  { href: '/kara', label: 'KARA' },
  { href: '/about', label: 'À propos' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-base font-normal tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          Compeel
        </Link>

        <ul className="flex items-center gap-7">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-foreground'
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
