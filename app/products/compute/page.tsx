import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Server, Zap, Shield, Database, Cpu, HardDrive, Activity, Lock } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compute - Virtual Machines | Nubis',
  description: 'Scalable virtual machines with AMD EPYC processors, configurable CPU, memory, and storage. Deploy Linux and Windows instances with automatic provisioning.',
}

export default function ComputePage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Server className="size-4" />
                Compute Instances
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Scalable Virtual Machines for Every Workload
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Deploy virtual machines with AMD EPYC processors, configurable CPU, memory, and storage. 
                Run Linux and Windows instances with enterprise-grade performance and reliability.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link 
                  href="https://console.usenubis.com/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Launch Instance
                </Link>
                <Link 
                  href="https://docs.usenubis.com/compute"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Performance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-performance compute instances built for demanding workloads
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Cpu className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AMD EPYC Processors</h3>
                <p className="text-muted-foreground">
                  Latest generation AMD EPYC processors with up to 64 cores per instance for compute-intensive applications.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <HardDrive className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">NVMe SSD Storage</h3>
                <p className="text-muted-foreground">
                  High-speed NVMe SSD storage with up to 1TB per instance. Additional block storage available.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Auto-Scaling</h3>
                <p className="text-muted-foreground">
                  Automatically scale compute resources based on demand. Vertical and horizontal scaling supported.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Shield className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">99.95% Uptime SLA</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade reliability with automatic failover and redundant infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instance Types */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Instance Types</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the right configuration for your workload
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">General Purpose</h3>
                <p className="text-sm text-muted-foreground mb-4">Balanced CPU, memory, and networking</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU Cores</span>
                    <span className="font-semibold">2-16 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">4-64 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">50-500 GB SSD</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Web applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Development environments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Small to medium databases
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow border-primary">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Compute Optimized</h3>
                <p className="text-sm text-muted-foreground mb-4">High-performance processors</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU Cores</span>
                    <span className="font-semibold">8-64 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">16-256 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">100-1000 GB NVMe</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Batch processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    High-traffic web servers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Scientific computing
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Memory Optimized</h3>
                <p className="text-sm text-muted-foreground mb-4">Large memory for data-intensive workloads</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU Cores</span>
                    <span className="font-semibold">4-32 vCPUs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="font-semibold">32-512 GB RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="font-semibold">100-1000 GB SSD</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Large databases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    In-memory caching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Real-time analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Feature Set</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Activity className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instance Snapshots</h3>
                  <p className="text-sm text-muted-foreground">
                    Create point-in-time snapshots of instances for backup and disaster recovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Lock className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Security Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Control inbound and outbound traffic with stateful firewall rules.
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
                  <h3 className="font-semibold mb-1">Persistent Volumes</h3>
                  <p className="text-sm text-muted-foreground">
                    Attach additional block storage volumes that persist independently.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Server className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Multiple OS Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Ubuntu, Debian, CentOS, Rocky Linux, Windows Server, and custom images.
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
                  <h3 className="font-semibold mb-1">API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Full API for automation with Terraform, Ansible, and custom scripts.
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
                  <h3 className="font-semibold mb-1">Real-time Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Track CPU, memory, disk, and network metrics with customizable alerts.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Deploy your first virtual machine in minutes. Scale on demand with enterprise reliability.
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
