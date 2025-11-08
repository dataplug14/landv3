import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Server, Database, Network, Code, Zap, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Nubis',
  description: 'Learn about Nubis cloud infrastructure services. We provide compute instances, storage, networking, and related services for deploying applications.',
}

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-medium lg:text-5xl">About Nubis</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Nubis provides cloud infrastructure services for deploying and managing applications. We offer compute instances, storage, networking, and related services through a web console and API.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-medium mb-4">What We Do</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nubis operates cloud infrastructure that customers use to run their applications. We provide virtual machines, object storage, block storage, databases, load balancers, and networking components. Customers deploy applications to our infrastructure, manage resources through our console, and interact with services via our API.
                  </p>
                  <p>
                    Our infrastructure runs in data centers with redundant power, cooling, and network connectivity. Compute instances are provisioned on physical servers with shared or dedicated resources. Storage systems provide persistent volumes and object storage buckets. Networks connect resources within private networks and provide internet connectivity.
                  </p>
                  <p>
                    We maintain the underlying hardware, virtualization layer, and control plane software. Customers manage their applications, operating systems, and application-level configurations. We handle infrastructure reliability, monitoring, and maintenance. Customers are responsible for application architecture, scaling decisions, and application-level security.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Services</h2>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Server className="size-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Compute Instances</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Virtual machines with configurable CPU, memory, and storage. Instances run customer-provided operating systems and applications. Multiple instance types are available for different workload requirements.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Database className="size-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Storage</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Block storage volumes for persistent data and object storage for files and backups. Storage volumes can be attached to instances and scaled independently. Object storage provides HTTP-accessible buckets for static assets and data.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Network className="size-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Networking</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Virtual private networks, load balancers, and firewall rules for network configuration. Resources can be isolated in private networks or exposed to the internet. Load balancers distribute traffic across multiple instances.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Code className="size-5 text-primary" />
                      </div>
                      <h3 className="font-medium">API & Console</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      RESTful API for programmatic resource management and web console for manual operations. API calls are authenticated with API keys. Console provides graphical interface for common tasks and monitoring.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Infrastructure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our infrastructure consists of physical servers, storage arrays, network switches, and supporting systems. Servers run virtualization software to provision and manage virtual machines. Storage systems provide block storage via network-attached storage protocols and object storage via HTTP-based APIs.
                  </p>
                  <p>
                    Network infrastructure includes routers, switches, load balancers, and firewalls. Internet connectivity is provided through multiple upstream providers with redundant paths. Internal networks use high-bandwidth links between components. DNS services resolve domain names for customer resources.
                  </p>
                  <p>
                    Data centers include redundant power distribution, uninterruptible power supplies, backup generators, and cooling systems. Physical security includes access controls, surveillance, and environmental monitoring. Facilities are designed to maintain operations during power outages and equipment failures.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Operations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We monitor infrastructure health, apply security updates, perform maintenance, and respond to incidents. Monitoring systems track server performance, network utilization, storage capacity, and service availability. Alerts notify operations staff of issues requiring attention.
                  </p>
                  <p>
                    Security updates are applied to host systems, hypervisors, and control plane software. Maintenance windows are scheduled for planned updates and hardware replacements. Incident response procedures address outages, security issues, and performance problems. Post-incident reviews identify improvements to prevent recurrence.
                  </p>
                  <p>
                    Capacity planning ensures adequate resources are available for customer deployments. We add servers, storage, and network capacity as demand grows. Resource usage is monitored to predict when additional capacity will be needed. Expansion projects are planned and executed to maintain service availability.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement security controls at multiple levels. Physical security protects data center facilities. Network security includes firewalls, DDoS protection, and intrusion detection. Host security involves hardening operating systems, applying patches, and monitoring for vulnerabilities.
                  </p>
                  <p>
                    Data encryption protects data in transit and at rest. TLS encrypts network traffic between customers and our services. Storage encryption protects data on disk. Key management systems securely store and rotate encryption keys. Access controls limit who can manage infrastructure and access customer data.
                  </p>
                  <p>
                    Compliance programs verify that security controls are implemented and effective. Security audits assess infrastructure, processes, and procedures. Vulnerability assessments identify security weaknesses. Penetration testing validates security controls from an attacker's perspective.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Company</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nubis was founded in 2024 to provide cloud infrastructure services. We are currently in closed beta testing with selected customers. Our team includes engineers, operators, and support staff working to build and maintain infrastructure services.
                  </p>
                  <p>
                    We are building infrastructure that developers and organizations can use to deploy applications without managing physical hardware. Our focus is on providing reliable services with straightforward interfaces and clear documentation. We aim to make cloud infrastructure accessible while maintaining high standards for security and reliability.
                  </p>
                  <p>
                    Our roadmap includes additional services, improved performance, expanded regions, and enhanced features based on customer feedback. We prioritize stability, security, and usability in our development decisions. Customer needs guide our product development and operational improvements.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Technology</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our infrastructure uses standard technologies for virtualization, storage, and networking. Compute instances run on hypervisors that partition physical servers into virtual machines. Storage systems use network-attached storage protocols and object storage software. Network virtualization creates isolated networks on shared physical infrastructure.
                  </p>
                  <p>
                    Control plane software manages resource provisioning, monitoring, and automation. APIs expose functionality for programmatic access. Web console provides user interface for common operations. Authentication and authorization systems control access to resources. Billing systems track usage and generate invoices.
                  </p>
                  <p>
                    We use open source and commercial software where appropriate. Operating systems, hypervisors, and management tools are selected based on functionality, reliability, and support. We contribute to open source projects and follow industry best practices for infrastructure management.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/50 p-6 md:p-8">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Status</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Nubis is currently in closed beta. We are working with selected customers to test our services and refine our operations. General availability is planned for the near future.
                  </p>
                  <p>
                    For updates on availability and new features, check our{' '}
                    <a 
                      href="https://status.usenubis.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      status page
                    </a>
                    {' '}or{' '}
                    <a 
                      href="https://accounts.usenubis.com/waitlist" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      join the waitlist
                    </a>
                    .
                  </p>
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

