import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply: DevOps Engineer | Nubis Careers',
  description: 'Apply for the DevOps Engineer position at Nubis. Build CI/CD pipelines and automation for our platform.',
}

export default function ApplyPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Link 
              href="/careers" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Careers
            </Link>

            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">DevOps Engineer</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="size-4" />
                  Operations
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  Remote (US/EU)
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  Full-time
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="size-4" />
                  $130k - $180k
                </span>
              </div>
            </div>

            <div className="rounded-xl border bg-muted/30 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Application Form</h2>
              <div className="bg-background rounded-lg p-6 border">
                <div className="space-y-4 text-center py-12">
                  <p className="text-lg font-medium">Submit Your Application via Notion</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We use Notion to collect applications. Click the button below to fill out our application form with your resume and portfolio.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://nubis-careers.notion.site/Apply-DevOps-Engineer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Open Application Form in Notion
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4">
                    The form will open in a new tab. We'll review your application within 5 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About the Role</h3>
                <p className="text-muted-foreground">
                  Build CI/CD pipelines and automation for our platform. Ensure reliability and scalability of our infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    4+ years of DevOps or SRE experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Strong knowledge of Kubernetes and Docker
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Experience with CI/CD tools (GitHub Actions, GitLab CI)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Proficiency in scripting (Bash, Python)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Understanding of monitoring and observability
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Design and maintain CI/CD pipelines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implement infrastructure as code
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Monitor system health and performance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Automate operational tasks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Improve deployment processes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
