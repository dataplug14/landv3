import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Database, Zap, Shield, Copy, Activity, Lock, RefreshCw, Server } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Databases - Managed Database Services | Nubis',
  description: 'Fully managed PostgreSQL, MySQL, and MongoDB databases with automated backups, high availability, and point-in-time recovery.',
}

export default function DatabasesPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Database className="size-4" />
                Managed Databases
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Fully Managed Database Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Deploy PostgreSQL, MySQL, and MongoDB databases with automated backups, high availability, 
                and enterprise-grade security. We handle maintenance, you focus on your application.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link 
                  href="https://console.usenubis.com/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Create Database
                </Link>
                <Link 
                  href="https://docs.usenubis.com/databases"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Database Types */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Database Engine</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Popular open-source databases, fully managed and optimized
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-xl p-8 border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6">
                  <Database className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">PostgreSQL</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced relational database with ACID compliance, JSON support, and powerful extensions.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Versions</span>
                    <span className="font-semibold">12, 13, 14, 15, 16</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Storage</span>
                    <span className="font-semibold">16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Memory</span>
                    <span className="font-semibold">512 GB RAM</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    PostGIS for geospatial data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Full-text search
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Advanced indexing
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-8 border hover:shadow-lg transition-shadow border-primary">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-4">
                  POPULAR
                </div>
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6">
                  <Database className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">MySQL</h3>
                <p className="text-muted-foreground mb-6">
                  World's most popular open-source database, optimized for web applications and high performance.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Versions</span>
                    <span className="font-semibold">5.7, 8.0, 8.4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Storage</span>
                    <span className="font-semibold">16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Memory</span>
                    <span className="font-semibold">512 GB RAM</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    InnoDB storage engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Replication support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Performance schema
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-8 border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6">
                  <Database className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">MongoDB</h3>
                <p className="text-muted-foreground mb-6">
                  Document-oriented NoSQL database for flexible schemas and horizontal scalability.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Versions</span>
                    <span className="font-semibold">5.0, 6.0, 7.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Storage</span>
                    <span className="font-semibold">16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Memory</span>
                    <span className="font-semibold">512 GB RAM</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Replica sets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Aggregation framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    BSON document storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Database Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle the complexity so you can focus on your application
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-muted/50 rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Copy className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Backups</h3>
                <p className="text-muted-foreground">
                  Daily automated backups with 30-day retention. Point-in-time recovery for any second within retention period.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Shield className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Availability</h3>
                <p className="text-muted-foreground">
                  Multi-node configurations with automatic failover. 99.95% uptime SLA for production databases.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Server className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Read Replicas</h3>
                <p className="text-muted-foreground">
                  Create read replicas to scale read operations. Asynchronous replication with minimal lag.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <RefreshCw className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automatic Updates</h3>
                <p className="text-muted-foreground">
                  Automated minor version updates and security patches during maintenance windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Database Plans */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Configuration Options</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Right-sized configurations for every workload
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border bg-background p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for testing and development</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU</span>
                    <span className="font-semibold">1-2 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">1-4 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">10-50 GB SSD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connections</span>
                    <span className="font-semibold">Up to 100</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Daily backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    7-day retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Single node
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 hover:shadow-lg transition-shadow border-primary">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold mb-2">Production</h3>
                <p className="text-sm text-muted-foreground mb-4">Enterprise-ready with high availability</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU</span>
                    <span className="font-semibold">4-16 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">16-128 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">100-4000 GB SSD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connections</span>
                    <span className="font-semibold">Up to 5,000</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Automated backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    30-day retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    High availability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Read replicas
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground mb-4">Maximum performance and scale</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU</span>
                    <span className="font-semibold">32-64 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">256-512 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">Up to 16 TB SSD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connections</span>
                    <span className="font-semibold">Up to 15,000</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Continuous backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    90-day retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Multi-region HA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Multiple replicas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Database Features</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Lock className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    AES-256 encryption at rest and TLS encryption in transit for all connections.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Activity className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Performance Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time metrics for queries, connections, CPU, memory, and disk utilization.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Zap className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Connection Pooling</h3>
                  <p className="text-sm text-muted-foreground">
                    Built-in connection pooling with PgBouncer for PostgreSQL and ProxySQL for MySQL.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Shield className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">VPC Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy databases in private networks with no public internet access.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <RefreshCw className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Version Upgrades</h3>
                  <p className="text-sm text-muted-foreground">
                    One-click major version upgrades with minimal downtime and automatic rollback.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Copy className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Database Cloning</h3>
                  <p className="text-sm text-muted-foreground">
                    Clone production databases for development and testing environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border bg-background p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Your Database Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Deploy a fully managed database in minutes. We handle backups, updates, and scaling.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="https://accounts.usenubis.com/waitlist"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Join the Waitlist
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
