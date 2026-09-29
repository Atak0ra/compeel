'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/#methode', label: 'Approche' },
  { href: '/#preuve', label: 'Études de cas' },
  { href: '/about', label: 'À propos' },
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
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav aria-label="Navigation principale" className="page-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-deep text-sm font-bold text-white">C</span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-lg font-medium text-foreground">Compeel</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-wider text-metal sm:block">Laboratoire d&apos;ingénierie logicielle</span>
          </span>
        </Link>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6">
          {links.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname + '' === href
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/#contact" className="button-primary hidden sm:inline-flex">
            Discuter d&apos;un projet<ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
