import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Shield, Lock, Server, Eye, Key, FileCheck, AlertTriangle, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | Nubis',
  description: 'Security practices and controls at Nubis. Learn about data encryption, access control, network security, compliance, and incident response.',
}

export default function SecurityPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-medium lg:text-5xl">Security</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Security is fundamental to everything we build at Nubis. We maintain strict controls, regular audits, and transparent practices to protect your infrastructure and data.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="size-6 text-primary" />
                  </div>
                  <CardTitle>Data Encryption</CardTitle>
                  <CardDescription>
                    All data in transit and at rest is encrypted using industry-standard protocols.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• TLS 1.3 for data in transit</li>
                    <li>• AES-256 encryption at rest</li>
                    <li>• Encrypted backups and snapshots</li>
                    <li>• Key management with secure rotation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="size-6 text-primary" />
                  </div>
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>
                    Multi-factor authentication and role-based access controls protect your accounts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-factor authentication (MFA)</li>
                    <li>• Role-based access control (RBAC)</li>
                    <li>• API key management and rotation</li>
                    <li>• SSH key pair authentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Server className="size-6 text-primary" />
                  </div>
                  <CardTitle>Network Security</CardTitle>
                  <CardDescription>
                    Isolated networks, firewalls, and DDoS protection secure your infrastructure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Virtual private networks (VPC)</li>
                    <li>• Firewall rules and security groups</li>
                    <li>• DDoS mitigation and protection</li>
                    <li>• Private networking between resources</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="size-6 text-primary" />
                  </div>
                  <CardTitle>Monitoring & Logging</CardTitle>
                  <CardDescription>
                    Comprehensive logging and monitoring for security events and system activity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Audit logs for all API calls</li>
                    <li>• Real-time security monitoring</li>
                    <li>• Intrusion detection systems</li>
                    <li>• Security event alerts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Key className="size-6 text-primary" />
                  </div>
                  <CardTitle>Compliance</CardTitle>
                  <CardDescription>
                    We maintain compliance with industry standards and regulations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SOC 2 Type II compliance</li>
                    <li>• GDPR compliant data handling</li>
                    <li>• Regular security assessments</li>
                    <li>• Third-party security audits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileCheck className="size-6 text-primary" />
                  </div>
                  <CardTitle>Incident Response</CardTitle>
                  <CardDescription>
                    Defined procedures and rapid response capabilities for security incidents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 24/7 security operations center</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular security drills</li>
                    <li>• Post-incident reviews</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 pt-8">
              <div>
                <h2 className="text-2xl font-medium mb-4">Infrastructure Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our infrastructure is built on enterprise-grade hardware and software. All data centers meet strict physical security requirements, including biometric access controls, 24/7 monitoring, and redundant power and cooling systems.
                  </p>
                  <p>
                    Compute instances run on isolated hardware with hypervisor-level security. Storage systems use redundant arrays with automatic failover. Network infrastructure includes redundant routers, switches, and load balancers to ensure availability.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Data Protection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Customer data is stored in encrypted volumes with keys managed through secure key management services. Backups are encrypted and stored in geographically distributed locations. We maintain data retention policies that align with customer requirements and regulatory obligations.
                  </p>
                  <p>
                    Database instances use encrypted connections and support encryption at rest. Object storage buckets can be configured with additional encryption layers. All data transfers between regions are encrypted using secure protocols.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Security Updates</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We regularly apply security patches to our infrastructure and systems. Critical security updates are applied immediately, while standard updates follow a scheduled maintenance window. Customers receive advance notice of maintenance that may affect their services.
                  </p>
                  <p>
                    Operating system images are updated regularly with the latest security patches. Managed services automatically receive security updates. For unmanaged instances, customers are responsible for applying updates, though we provide tools and documentation to assist.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Vulnerability Management</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We conduct regular vulnerability scans and penetration testing of our infrastructure. External security researchers can report vulnerabilities through our responsible disclosure program. All reported vulnerabilities are evaluated and addressed according to severity.
                  </p>
                  <p>
                    Security advisories are published for significant vulnerabilities that may affect customers. We work with customers to coordinate patching and mitigation strategies. Historical security advisories are maintained in our documentation for reference.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Business Continuity</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We maintain redundant systems across multiple availability zones to ensure service continuity. Regular backups are tested to verify restoration procedures. Disaster recovery plans are documented and updated based on lessons learned from drills and actual incidents.
                  </p>
                  <p>
                    Service level agreements define availability targets and procedures for handling outages. Status updates are provided through our status page during incidents. Post-incident reports are published for significant outages to provide transparency and demonstrate improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="size-5 text-primary mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-medium">Reporting Security Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    If you discover a security vulnerability, please report it to{' '}
                    <a href="mailto:security@usenubis.com" className="text-primary hover:underline">
                      security@usenubis.com
                    </a>
                    . We appreciate responsible disclosure and will work with you to address any issues promptly.
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

