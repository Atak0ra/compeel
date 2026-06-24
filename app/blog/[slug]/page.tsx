import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, markdownToHtml, formatDate } from '@/lib/mdx'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Williams de Souza',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Compeel',
      url: 'https://compeel.com',
    },
    url: `https://compeel.com/blog/${post.slug}`,
  }

  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd data={articleSchema} />
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

          <div className="flex flex-wrap items-center gap-2 mb-6 mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted border border-border rounded px-2 py-0.5"
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

          <div className="flex items-center gap-3 text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Content */}
      <section className="py-16">
        <div
          className="prose max-w-2xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
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
