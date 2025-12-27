import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Network, Shield, Zap, Globe, Lock, Router, Activity, Cloud } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Networking - VPC, Load Balancers & Firewalls | Nubis',
  description: 'Virtual Private Cloud (VPC), load balancers, firewalls, DDoS protection, and private networking for secure and scalable infrastructure.',
}

export default function NetworkingPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Network className="size-4" />
                Networking Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Secure, Scalable Network Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Build isolated virtual networks, distribute traffic with load balancers, and protect 
                your infrastructure with enterprise-grade firewalls and DDoS protection.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link 
                  href="https://console.usenubis.com/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Create Network
                </Link>
                <Link 
                  href="https://docs.usenubis.com/networking"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Networking Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build secure and scalable network architectures
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Cloud className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Virtual Private Cloud</h3>
                <p className="text-muted-foreground">
                  Isolated virtual networks with full control over IP addressing, subnets, and routing tables.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Router className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Load Balancers</h3>
                <p className="text-muted-foreground">
                  Distribute traffic across multiple instances with health checks and SSL termination.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Shield className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Firewalls</h3>
                <p className="text-muted-foreground">
                  Stateful firewall rules and security groups to control inbound and outbound traffic.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                  <Globe className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Floating IPs</h3>
                <p className="text-muted-foreground">
                  Static public IP addresses that can be reassigned between instances instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VPC Details */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Virtual Private Cloud (VPC)</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Create isolated virtual networks with complete control over your network environment. 
                  Define IP address ranges, create subnets, configure route tables, and set up network gateways.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                        <Network className="size-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Custom IP Ranges</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose your own CIDR blocks and subnet configurations for complete network control.
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
                      <h3 className="font-semibold mb-1">Network Isolation</h3>
                      <p className="text-sm text-muted-foreground">
                        Isolate resources in private subnets with no internet access for maximum security.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                        <Router className="size-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">VPC Peering</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect multiple VPCs privately without using public internet or VPN.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-2xl p-8 border">
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                    <h4 className="font-semibold mb-2">Public Subnet</h4>
                    <p className="text-sm text-muted-foreground mb-3">Resources with internet access</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">CIDR Block</span>
                        <span className="font-mono">10.0.1.0/24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Gateway</span>
                        <span className="font-mono">Internet Gateway</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg p-6 border-l-4 border-muted">
                    <h4 className="font-semibold mb-2">Private Subnet</h4>
                    <p className="text-sm text-muted-foreground mb-3">Internal resources only</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">CIDR Block</span>
                        <span className="font-mono">10.0.2.0/24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Gateway</span>
                        <span className="font-mono">NAT Gateway</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Load Balancers */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Load Balancing Options</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Distribute traffic efficiently across your infrastructure
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-background rounded-xl p-8 border">
                <h3 className="text-2xl font-bold mb-3">Application Load Balancer</h3>
                <p className="text-muted-foreground mb-6">
                  Layer 7 load balancing with content-based routing, SSL/TLS termination, and WebSocket support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Path-Based Routing</h4>
                      <p className="text-sm text-muted-foreground">
                        Route requests to different targets based on URL paths
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">SSL Termination</h4>
                      <p className="text-sm text-muted-foreground">
                        Offload SSL/TLS encryption to the load balancer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Health Checks</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatic health monitoring with configurable intervals
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    HTTP/HTTPS traffic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Host-based routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    WebSocket support
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-8 border">
                <h3 className="text-2xl font-bold mb-3">Network Load Balancer</h3>
                <p className="text-muted-foreground mb-6">
                  Layer 4 load balancing for ultra-low latency and high-throughput TCP/UDP traffic.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Ultra-Low Latency</h4>
                      <p className="text-sm text-muted-foreground">
                        Sub-millisecond latency for performance-critical applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Network className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Static IP Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Assign static IP addresses for DNS and firewall rules
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Connection Draining</h4>
                      <p className="text-sm text-muted-foreground">
                        Gracefully handle instance removal with connection draining
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    TCP/UDP traffic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Millions of requests per second
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Source IP preservation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Network Security</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Shield className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">DDoS Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic DDoS mitigation at network edge protects against volumetric attacks.
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
                    Stateful firewall rules at the instance level with allow/deny policies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Network className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Network ACLs</h3>
                  <p className="text-sm text-muted-foreground">
                    Subnet-level firewall rules for additional network security layers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Globe className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">VPN Gateway</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure site-to-site VPN connections with IPsec encryption.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                    <Router className="size-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Private DNS</h3>
                  <p className="text-sm text-muted-foreground">
                    Internal DNS resolution for resources within your VPC.
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
                  <h3 className="font-semibold mb-1">Flow Logs</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture network traffic metadata for security analysis and troubleshooting.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Network Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create secure, scalable networks with enterprise-grade features and performance.
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
