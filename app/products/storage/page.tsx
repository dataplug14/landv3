import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Database, HardDrive, Lock, Zap, Cloud, Copy, Shield, Activity } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Storage - Block & Object Storage | Nubis',
  description: 'Scalable storage solutions with SSD and NVMe block storage, S3-compatible object storage, automated snapshots, and encryption at rest.',
}

export default function StoragePage() {
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
                Storage Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Scalable Storage for Your Data
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                High-performance block storage and S3-compatible object storage with enterprise-grade 
                reliability, encryption, and automated backups.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link 
                  href="https://console.usenubis.com/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Create Volume
                </Link>
                <Link 
                  href="https://docs.usenubis.com/storage"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Types */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Storage Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose between block storage for databases and object storage for files
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-background rounded-xl p-8 border">
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6">
                  <HardDrive className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Block Storage</h3>
                <p className="text-muted-foreground mb-6">
                  High-performance persistent volumes that attach to your compute instances. 
                  Perfect for databases, file systems, and applications requiring low-latency storage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">NVMe SSD Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        Up to 1 million IOPS with ultra-low latency for demanding workloads
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Copy className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Automatic Snapshots</h4>
                      <p className="text-sm text-muted-foreground">
                        Schedule automated snapshots for backup and disaster recovery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Scalable Capacity</h4>
                      <p className="text-sm text-muted-foreground">
                        Start at 10GB and scale to 16TB per volume without downtime
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-8 border">
                <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6">
                  <Cloud className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Object Storage</h3>
                <p className="text-muted-foreground mb-6">
                  S3-compatible object storage for unstructured data. Store files, images, videos, 
                  backups, and static website assets with unlimited scalability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">S3 Compatible API</h4>
                      <p className="text-sm text-muted-foreground">
                        Use existing tools and SDKs with full S3 API compatibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Versioning & Lifecycle</h4>
                      <p className="text-sm text-muted-foreground">
                        Version control and automated lifecycle policies for cost optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Global Replication</h4>
                      <p className="text-sm text-muted-foreground">
                        Multi-region replication for data durability and availability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tiers */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Block Storage Performance Tiers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the right performance level for your workload
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Standard SSD</h3>
                <p className="text-sm text-muted-foreground mb-4">Cost-effective general purpose storage</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IOPS</span>
                    <span className="font-semibold">Up to 25,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Throughput</span>
                    <span className="font-semibold">250 MB/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Capacity</span>
                    <span className="font-semibold">10 GB - 16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Latency</span>
                    <span className="font-semibold">&lt; 10 ms</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Development environments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Small databases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Boot volumes
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow border-primary">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold mb-2">High-Performance SSD</h3>
                <p className="text-sm text-muted-foreground mb-4">Balanced performance and capacity</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IOPS</span>
                    <span className="font-semibold">Up to 100,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Throughput</span>
                    <span className="font-semibold">1,000 MB/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Capacity</span>
                    <span className="font-semibold">10 GB - 16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Latency</span>
                    <span className="font-semibold">&lt; 5 ms</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Production databases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    E-commerce applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Business applications
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Ultra NVMe</h3>
                <p className="text-sm text-muted-foreground mb-4">Maximum performance for critical workloads</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IOPS</span>
                    <span className="font-semibold">Up to 1M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Throughput</span>
                    <span className="font-semibold">4,000 MB/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Capacity</span>
                    <span className="font-semibold">10 GB - 16 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Latency</span>
                    <span className="font-semibold">&lt; 1 ms</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    High-transaction databases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Real-time analytics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    High-frequency trading
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Features</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Lock className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Encryption at Rest</h3>
                  <p className="text-sm text-muted-foreground">
                    AES-256 encryption for all data with managed or customer-provided keys.
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
                  <h3 className="font-semibold mb-1">Volume Snapshots</h3>
                  <p className="text-sm text-muted-foreground">
                    Point-in-time snapshots with incremental backups for efficiency.
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
                  <h3 className="font-semibold mb-1">Live Volume Resize</h3>
                  <p className="text-sm text-muted-foreground">
                    Expand storage capacity without detaching volumes or downtime.
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
                  <h3 className="font-semibold mb-1">99.999% Durability</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-copy replication ensures your data is protected and available.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Database className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">CDN Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct integration with CDN for fast content delivery worldwide.
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
                  <h3 className="font-semibold mb-1">Usage Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time metrics for capacity, IOPS, and throughput utilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border bg-muted/50 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Storing Your Data</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with block or object storage. Scale seamlessly as your data grows.
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
