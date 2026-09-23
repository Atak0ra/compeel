'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const links = [
  { href: '/#references', label: 'Références' },
  { href: '/about', label: 'Le studio' },
  { href: '/realisations', label: 'Labs' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeight = () => {
      document.documentElement.style.setProperty('--site-nav-height', `${header.getBoundingClientRect().height}px`)
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--site-nav-height')
    }
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-background">
      <nav aria-label="Navigation principale" className="page-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-serif text-2xl font-medium text-accent-deep"
        >
          Compeel<span className="text-patina">.</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-8">
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
