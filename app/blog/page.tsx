import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/notion'

export const metadata: Metadata = {
  title: 'Blog - Cloud Infrastructure Insights | Nubis',
  description: 'Read about cloud infrastructure, DevOps best practices, and technical insights from the Nubis team.',
}

// Revalidate every 60 seconds
export const revalidate = 60

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  // Extract unique categories from posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Nubis Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Technical insights, cloud infrastructure best practices, and product updates from the Nubis team.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${category === 'All'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border hover:bg-accent'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-background"
                  >
                    <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background text-xs font-medium border">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="size-4" />
                          {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                        >
                          Read more
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
