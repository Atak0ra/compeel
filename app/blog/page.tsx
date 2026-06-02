import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Réflexions sur la technologie, les langues africaines, et la construction de produits pour l\'Afrique de l\'Ouest.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Header */}
      <section className="py-32 sm:py-40">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-accent">
            Blog
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-tight">
            Réflexions.
          </h1>
          <p className="mt-6 text-base text-muted leading-relaxed">
            Sur la technologie, les langues africaines, et ce que ça veut dire
            de construire des produits pour des gens qu&apos;on connaît.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Posts */}
      <section className="py-16">
        {posts.length === 0 ? (
          <p className="text-muted text-sm py-12">Aucun article pour l&apos;instant.</p>
        ) : (
          <div className="divide-y divide-border">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 max-w-2xl">
                      <h2 className="font-serif text-xl sm:text-2xl text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs uppercase tracking-wider text-muted/60 border border-border rounded px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-end sm:gap-2 shrink-0">
                      <time className="text-xs text-muted" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="text-xs text-muted/60">{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
