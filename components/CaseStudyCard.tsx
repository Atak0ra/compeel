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
    <article className="grid items-center gap-8 border-t border-border py-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          {'src' in logo ? (
            <span className="inline-flex items-center rounded bg-white px-2.5 py-1.5">
              <Image src={logo.src} alt={logo.alt} width={640} height={181} className="h-5 w-auto" />
            </span>
          ) : (
            <span className="font-mono text-base font-bold tracking-tight text-accent-deep">{logo.text}</span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-wider text-metal">{badge}</span>
        </div>
        <h3 className="mt-5 text-3xl font-medium sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{description}</p>
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
      <div className="min-w-0 overflow-x-auto pb-3" role="region" aria-label={`Aperçu de ${title}`} tabIndex={0}>
        <div className="min-w-[560px]">
          <Preview />
        </div>
      </div>
    </article>
  )
}
