import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'
import type { ComponentType } from 'react'

type Logo = { src: string; alt: string } | { text: string }

export default function CaseStudyCard({
  logo,
  badge,
  title,
  description,
  checklist,
  Preview,
}: {
  logo: Logo
  badge: string
  title: string
  description: string
  checklist: string[]
  Preview: ComponentType
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-metal bg-surface">
      <div className="p-6 pb-0 sm:p-7 sm:pb-0">
        <div className="flex items-center justify-between gap-3">
          {'src' in logo ? (
            <span className="inline-flex items-center rounded bg-white px-2.5 py-1.5">
              <Image src={logo.src} alt={logo.alt} width={640} height={181} className="h-5 w-auto" />
            </span>
          ) : (
            <span className="font-mono text-base font-bold tracking-tight text-accent-deep">{logo.text}</span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-wider text-metal">{badge}</span>
        </div>
        <h3 className="mt-4 text-xl font-medium">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      </div>

      <div className="mt-6 border-y border-border p-5">
        <Preview />
      </div>

      <div className="flex flex-1 flex-col p-6 pt-0 sm:p-7 sm:pt-0">
        <ul className="mt-6 space-y-2">
          {checklist.map(item => (
            <li key={item} className="flex items-center gap-2 text-sm text-foreground">
              <Check size={15} className="shrink-0 text-accent-deep" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-deep hover:underline">
          Voir l&apos;étude de cas<ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
