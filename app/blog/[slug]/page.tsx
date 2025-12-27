import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Blog posts data - Same as in blog listing page
const blogPosts = [
  {
    slug: 'introducing-nubis-cloud',
    title: 'Introducing Nubis: A Developer-First Cloud Platform',
    excerpt: 'We\'re building a cloud infrastructure platform that addresses the complexity and cost challenges developers face with traditional providers. Learn about our mission and what makes Nubis different.',
    author: 'Nubis Team',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Product',
    content: `
# Introducing Nubis: A Developer-First Cloud Platform

We're excited to introduce Nubis, a cloud infrastructure platform designed with developers in mind. After years of working with traditional cloud providers, we identified key pain points that consistently frustrated development teams: complex pricing, steep learning curves, and infrastructure management overhead.

## Our Mission

Nubis was born from a simple idea: cloud infrastructure should be transparent, affordable, and easy to use. We believe developers should spend their time building applications, not deciphering bills or navigating convoluted console interfaces.

## What Makes Nubis Different

### Transparent Pricing
No hidden fees, no surprise charges. Our pricing is straightforward: you pay for what you use, calculated by the hour. Every service has clear, published rates with no fine print.

### Developer Experience
Our API and console are built for developers. Clean documentation, intuitive interfaces, and powerful automation tools that integrate with your existing workflow.

### Enterprise-Grade Infrastructure
We don't compromise on quality. Our platform provides the reliability and performance you'd expect from enterprise providers, with 99.95% uptime SLA and enterprise-grade security.

## Getting Started

Join our closed beta program to be among the first to experience Nubis. We're working with select customers to refine our platform before general availability.

[Join the waitlist →](https://accounts.usenubis.com/waitlist)
    `,
  },
  {
    slug: 'cloud-costs-explained',
    title: 'Understanding Cloud Costs: A Comprehensive Guide',
    excerpt: 'Cloud pricing can be confusing. In this guide, we break down how cloud costs work, common pitfalls, and strategies to optimize your infrastructure spending.',
    author: 'John Smith',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Guide',
    content: `
# Understanding Cloud Costs: A Comprehensive Guide

Cloud infrastructure costs can quickly spiral out of control if you're not careful. This guide will help you understand how cloud pricing works and how to optimize your spending.

## Common Cost Components

### Compute Costs
Virtual machine pricing typically includes CPU, memory, and local storage. Costs vary by instance size and can range from cents to hundreds of dollars per hour.

### Storage Costs
Storage is charged per GB-month for data at rest, plus data transfer costs. Block storage for databases tends to be more expensive than object storage for files.

### Network Costs
Data transfer between services, regions, or to the internet incurs charges. Inbound traffic is typically free, but outbound can add up quickly.

## Cost Optimization Strategies

1. **Right-size your instances**: Don't overprovision resources
2. **Use autoscaling**: Scale down during off-peak hours
3. **Optimize storage**: Use lifecycle policies to move data to cheaper tiers
4. **Monitor usage**: Set up billing alerts and regular cost reviews
5. **Reserved capacity**: Commit to longer terms for discounts

Understanding these fundamentals will help you make informed decisions about your infrastructure spending.
    `,
  },
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Running Kubernetes in production requires careful planning. Here are essential best practices for security, reliability, and performance.',
    author: 'Sarah Johnson',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Tutorial',
    content: `
# Kubernetes Best Practices for Production

Running Kubernetes in production environments requires attention to security, reliability, and performance. Here are the essential best practices we've learned from operating production clusters.

## Security

### Use RBAC
Implement role-based access control to limit permissions. Never use cluster-admin for applications.

### Network Policies
Define network policies to control traffic between pods. Default deny, then allow specific communication.

### Pod Security Standards
Enforce pod security standards to prevent privileged containers and other security risks.

## Reliability

### Health Checks
Configure liveness and readiness probes for all applications. This enables Kubernetes to automatically restart failed containers and route traffic only to healthy pods.

### Resource Limits
Set CPU and memory limits to prevent resource exhaustion. Always define both requests and limits.

### Multiple Replicas
Run multiple replicas of critical services across different nodes and availability zones.

## Performance

### Horizontal Pod Autoscaling
Configure HPA to automatically scale based on CPU, memory, or custom metrics.

### Node Affinity
Use node affinity and anti-affinity rules to distribute workloads optimally.

### Persistent Volume Classes
Choose appropriate storage classes for your workload requirements.

Following these practices will help you run reliable, secure Kubernetes clusters in production.
    `,
  },
  {
    slug: 'migrating-from-aws',
    title: 'Migrating from AWS: A Step-by-Step Guide',
    excerpt: 'Considering a move away from AWS? This guide walks through the migration process, from planning to execution, with real-world examples.',
    author: 'Michael Chen',
    date: '2024-12-28',
    readTime: '12 min read',
    category: 'Guide',
    content: `
# Migrating from AWS: A Step-by-Step Guide

Migrating from AWS to a new cloud provider can seem daunting, but with proper planning, it can be smooth and even reduce your infrastructure costs.

## Planning Phase

### Inventory Your Resources
Document all AWS resources: EC2 instances, RDS databases, S3 buckets, load balancers, and networking configuration.

### Identify Dependencies
Map dependencies between services. Understanding these relationships is crucial for planning the migration order.

### Choose Migration Strategy
- **Lift and Shift**: Move as-is, minimal changes
- **Re-platform**: Minor optimizations during migration
- **Re-architect**: Redesign for the new platform

## Execution Phase

### 1. Set Up Target Environment
Create equivalent infrastructure in the target cloud. Start with networking (VPCs, subnets) then add compute and storage resources.

### 2. Migrate Data
Move data first, while keeping the source database active. Use database replication or snapshot transfers depending on your requirements.

### 3. Test Thoroughly
Run comprehensive tests in the target environment before switching traffic. Validate performance, functionality, and security.

### 4. Switch Traffic
Use DNS updates to gradually shift traffic to the new environment. Keep AWS resources running for rollback capability.

### 5. Decommission Old Resources
After confirming stability, decommission AWS resources. Do this gradually, keeping backups until you're confident.

## Common Challenges

- **Service Mapping**: Not all AWS services have exact equivalents
- **Data Transfer**: Large datasets take time to move
- **Application Changes**: Some code changes may be needed
- **Team Training**: Staff needs to learn new tools

Migration takes time, but with careful planning, you can successfully move to a more cost-effective platform.
    `,
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Infrastructure as Code: Terraform vs Alternatives',
    excerpt: 'Compare different infrastructure as code tools and learn when to use each one. We cover Terraform, Pulumi, and other popular options.',
    author: 'Emma Davis',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'Comparison',
    content: `
# Infrastructure as Code: Terraform vs Alternatives

Infrastructure as Code (IaC) has become essential for managing cloud resources. Let's compare popular IaC tools to help you choose the right one.

## Terraform

### Pros
- Provider-agnostic: works with multiple clouds
- Large ecosystem and community
- Mature tooling and best practices
- State management built-in

### Cons
- HCL learning curve
- State file complexity in teams
- Limited programming constructs

### Best For
Multi-cloud deployments, teams comfortable with declarative configuration

## Pulumi

### Pros
- Use familiar programming languages (TypeScript, Python, Go)
- Full programming language features (loops, conditionals, functions)
- Type safety and IDE support
- Built-in testing capabilities

### Cons
- Smaller community than Terraform
- Vendor lock-in to Pulumi service (for state)
- More complex for simple use cases

### Best For
Development teams wanting programming language flexibility

## CloudFormation

### Pros
- Native AWS integration
- Free to use
- Deep AWS service support
- Change sets for preview

### Cons
- AWS-only
- YAML/JSON verbosity
- Slower than alternatives
- Limited abstraction capabilities

### Best For
AWS-only deployments, teams already invested in AWS ecosystem

## Choosing the Right Tool

Consider these factors:
1. **Cloud providers**: Single or multi-cloud?
2. **Team skills**: Infrastructure or development focused?
3. **Complexity**: Simple deployments or complex logic?
4. **Existing tools**: Integration requirements?

All these tools are viable options. Choose based on your team's needs and preferences.
    `,
  },
  {
    slug: 'database-performance',
    title: 'Optimizing Database Performance in the Cloud',
    excerpt: 'Learn how to tune your cloud databases for maximum performance. From query optimization to resource allocation strategies.',
    author: 'David Kumar',
    date: '2024-12-15',
    readTime: '9 min read',
    category: 'Tutorial',
    content: `
# Optimizing Database Performance in the Cloud

Database performance is critical for application responsiveness. Here's how to optimize your cloud databases for maximum performance.

## Query Optimization

### Index Strategy
Create indexes on frequently queried columns. But don't over-index—each index adds overhead for writes.

\`\`\`sql
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_date ON orders(created_at);
\`\`\`

### Query Analysis
Use EXPLAIN to analyze query execution plans. Identify table scans and missing indexes.

### Connection Pooling
Use connection pooling to reuse database connections. This reduces connection overhead significantly.

## Resource Allocation

### Right-Size Instances
Monitor CPU, memory, and IOPS usage. Scale vertically when approaching resource limits.

### Storage Performance
Choose appropriate storage types:
- Standard SSD for general workloads
- Provisioned IOPS for high-performance needs
- Network-attached for large capacity

## Caching Strategies

### Application-Level Caching
Implement Redis or Memcached to cache frequently accessed data. This can reduce database load by 70%+.

### Query Result Caching
Cache query results when data doesn't change frequently. Set appropriate TTL values.

### Database Query Cache
Enable database-level query caching for read-heavy workloads.

## Monitoring

Track these key metrics:
- Query response time
- Connection count
- CPU and memory utilization
- Disk IOPS and throughput
- Replication lag (if using replicas)

Set up alerts for anomalies and performance degradation.

## Best Practices

1. Regularly update statistics
2. Archive old data
3. Partition large tables
4. Use read replicas for read-heavy workloads
5. Schedule maintenance during off-peak hours

Proper database optimization can improve application performance dramatically while reducing infrastructure costs.
    `,
  },
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
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
  const post = blogPosts.find(p => p.slug === slug)

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

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>
            </div>

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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
