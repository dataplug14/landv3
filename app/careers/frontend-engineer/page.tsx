import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply: Frontend Engineer | Nubis Careers',
  description: 'Apply for the Frontend Engineer position at Nubis. Build intuitive user interfaces for our cloud management console.',
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
              <h1 className="text-4xl font-bold mb-4">Frontend Engineer</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="size-4" />
                  Engineering
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
                  $120k - $170k
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
                      href="https://nubis-careers.notion.site/Apply-Frontend-Engineer"
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
                  Build intuitive user interfaces for our cloud management console. Work with React, TypeScript, and modern web technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    3+ years of frontend development experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Expert in React and TypeScript
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Strong CSS and responsive design skills
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Experience with Next.js or similar frameworks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Understanding of API integration and state management
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Develop new features for the web console
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Improve user experience and interface design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Optimize frontend performance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Work closely with backend team on API design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Write tests and maintain code quality
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
