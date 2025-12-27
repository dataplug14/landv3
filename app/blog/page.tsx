import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Cloud Infrastructure Insights | Nubis',
  description: 'Read about cloud infrastructure, DevOps best practices, and technical insights from the Nubis team.',
}

// Blog posts data - In production, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'introducing-nubis-cloud',
    title: 'Introducing Nubis: A Developer-First Cloud Platform',
    excerpt: 'We\'re building a cloud infrastructure platform that addresses the complexity and cost challenges developers face with traditional providers. Learn about our mission and what makes Nubis different.',
    author: 'Nubis Team',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Product',
    image: '/blog/nubis-intro.jpg',
  },
  {
    slug: 'cloud-costs-explained',
    title: 'Understanding Cloud Costs: A Comprehensive Guide',
    excerpt: 'Cloud pricing can be confusing. In this guide, we break down how cloud costs work, common pitfalls, and strategies to optimize your infrastructure spending.',
    author: 'John Smith',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Guide',
    image: '/blog/cloud-costs.jpg',
  },
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Running Kubernetes in production requires careful planning. Here are essential best practices for security, reliability, and performance.',
    author: 'Sarah Johnson',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Tutorial',
    image: '/blog/kubernetes.jpg',
  },
  {
    slug: 'migrating-from-aws',
    title: 'Migrating from AWS: A Step-by-Step Guide',
    excerpt: 'Considering a move away from AWS? This guide walks through the migration process, from planning to execution, with real-world examples.',
    author: 'Michael Chen',
    date: '2024-12-28',
    readTime: '12 min read',
    category: 'Guide',
    image: '/blog/migration.jpg',
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Infrastructure as Code: Terraform vs Alternatives',
    excerpt: 'Compare different infrastructure as code tools and learn when to use each one. We cover Terraform, Pulumi, and other popular options.',
    author: 'Emma Davis',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'Comparison',
    image: '/blog/iac.jpg',
  },
  {
    slug: 'database-performance',
    title: 'Optimizing Database Performance in the Cloud',
    excerpt: 'Learn how to tune your cloud databases for maximum performance. From query optimization to resource allocation strategies.',
    author: 'David Kumar',
    date: '2024-12-15',
    readTime: '9 min read',
    category: 'Tutorial',
    image: '/blog/database.jpg',
  },
]

const categories = ['All', 'Product', 'Guide', 'Tutorial', 'Comparison']

export default function BlogPage() {
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === 'All'
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
          </div>
        </section>

        {/* Upload Instructions */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border bg-background p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">How to Add Blog Posts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This blog system uses a simple file-based approach. To add new blog posts, you have two options:
                </p>
                <div className="space-y-6 mt-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-foreground mb-2">Option 1: Edit the blog data directly</h3>
                    <p className="text-sm">
                      Edit the <code className="px-2 py-1 rounded bg-muted">app/blog/page.tsx</code> file and add new entries to the <code className="px-2 py-1 rounded bg-muted">blogPosts</code> array with title, excerpt, author, date, and other metadata.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-foreground mb-2">Option 2: Use Notion as a CMS (Recommended)</h3>
                    <p className="text-sm mb-3">
                      For a more user-friendly experience, integrate with Notion using the Notion API. This allows you to write blog posts in Notion and automatically sync them to your website.
                    </p>
                    <a
                      href="https://developers.notion.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Notion API Documentation
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-foreground mb-2">Option 3: Markdown files</h3>
                    <p className="text-sm">
                      Create markdown files in <code className="px-2 py-1 rounded bg-muted">content/blog/</code> directory and use a markdown parser to render them dynamically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
