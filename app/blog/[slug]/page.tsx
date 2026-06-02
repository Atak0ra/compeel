import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/mdx'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="max-w-2xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
          >
            <span>←</span>
            Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base text-muted leading-relaxed mb-8">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Content */}
      <section className="py-16">
        <div className="prose prose-invert max-w-2xl">
          <MDXRemote source={post.content} />
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Footer nav */}
      <section className="py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <span>←</span>
          Retour au blog
        </Link>
      </section>
    </div>
  )
}
