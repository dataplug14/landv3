import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { NotionBlocksRenderer } from '@/components/notion-blocks-renderer'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllPostSlugs } from '@/lib/notion'

type Props = {
  params: Promise<{ slug: string }>
}

// Revalidate every 60 seconds
export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Nubis Blog',
    }
  }

  return {
    title: `${post.title} | Nubis Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <article className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="size-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <NotionBlocksRenderer blocks={post.content} />

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Continue Reading</h3>
              <p className="text-muted-foreground mb-6">
                Explore more articles about cloud infrastructure, DevOps, and technical insights.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSection />
    </>
  )
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}
