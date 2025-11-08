import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Mail, MessageSquare, Clock, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Nubis',
  description: 'Contact Nubis for support, sales inquiries, or general questions. Email us at hello@usenubis.com',
}

export default function ContactPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-medium lg:text-5xl">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Have questions about Nubis? We're here to help. Reach out to our team for support, sales inquiries, or general questions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-6 text-primary" />
                  </div>
                  <CardTitle>General Inquiries</CardTitle>
                  <CardDescription>
                    For general questions, support, or information about our services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Email</p>
                      <a 
                        href="mailto:hello@usenubis.com" 
                        className="text-primary hover:underline text-lg"
                      >
                        hello@usenubis.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="size-6 text-primary" />
                  </div>
                  <CardTitle>Sales & Partnerships</CardTitle>
                  <CardDescription>
                    Interested in enterprise plans, partnerships, or custom solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Email</p>
                      <a 
                        href="mailto:hello@usenubis.com" 
                        className="text-primary hover:underline text-lg"
                      >
                        hello@usenubis.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Subject Line</p>
                      <p className="text-sm text-muted-foreground">
                        Please include "Sales Inquiry" or "Partnership" in your subject line for faster routing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>
                    For technical issues, documentation questions, or API support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Email</p>
                      <a 
                        href="mailto:hello@usenubis.com" 
                        className="text-primary hover:underline text-lg"
                      >
                        hello@usenubis.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Documentation</p>
                      <a 
                        href="https://docs.usenubis.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        docs.usenubis.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>
                    Our team is available to assist you during these hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM UTC</p>
                    </div>
                    <div>
                      <p className="font-medium">Weekends</p>
                      <p className="text-muted-foreground">Limited support available</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-muted-foreground">
                        For urgent issues outside business hours, please include "URGENT" in your subject line.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 pt-8">
              <div>
                <h2 className="text-2xl font-medium mb-4">Getting Help</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For the fastest response, please include relevant details in your email:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your account email or username</li>
                    <li>Description of the issue or question</li>
                    <li>Steps to reproduce (for technical issues)</li>
                    <li>Error messages or logs (if applicable)</li>
                    <li>Expected behavior vs. actual behavior</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Documentation & Resources</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Before contacting support, check our documentation for answers to common questions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <a 
                        href="https://docs.usenubis.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Documentation
                      </a>
                      {' '}— API reference, guides, and tutorials
                    </li>
                    <li>
                      <a 
                        href="https://status.usenubis.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Status Page
                      </a>
                      {' '}— Current system status and incident history
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4">Privacy & Data Protection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When contacting us, please do not include sensitive information such as passwords, API keys, or personal data that should be handled securely. Our support team will never ask for your password.
                  </p>
                  <p>
                    All communications are handled in accordance with our privacy policy and data protection practices. For security-related concerns, please contact{' '}
                    <a 
                      href="mailto:security@usenubis.com" 
                      className="text-primary hover:underline"
                    >
                      security@usenubis.com
                    </a>
                    {' '}directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/50 p-6 md:p-8">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Primary Contact</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    For all inquiries, please email us at:
                  </p>
                  <p className="text-xl">
                    <a 
                      href="mailto:hello@usenubis.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      hello@usenubis.com
                    </a>
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

