import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import ProductPreview from '@/components/product-previews/ProductPreview'

export default function ProductShowcase() {
  return (
    <div>
      {projects.map(project => (
        <article key={project.id} className="grid gap-8 border-t border-border py-12 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] lg:gap-12" aria-labelledby={`${project.id}-title`}>
          <div className="flex flex-col items-start">
            <p className="mb-4 text-sm text-accent-deep">{project.domain}</p>
            <h3 id={`${project.id}-title`} className="font-serif text-4xl sm:text-5xl">{project.name}</h3>
            <p className="mt-5 max-w-md text-xl leading-snug">{project.headline}</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{project.description}</p>
            <p className="mt-6 text-sm text-muted">{project.access}</p>
            <Link href={project.href} className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-foreground pb-1 text-base font-medium transition-colors hover:text-accent-deep">
              Découvrir {project.name}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ProductPreview id={project.id} />
        </article>
      ))}
    </div>
  )
}