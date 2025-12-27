import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { JobApplicationForm } from '@/components/job-application-form'
import { NotionBlocksRenderer } from '@/components/notion-blocks-renderer'
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getJobListing, getAllJobSlugs } from '@/lib/notion'

type Props = {
    params: Promise<{ slug: string }>
}

// Revalidate every 60 seconds
export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const job = await getJobListing(slug)

    if (!job) {
        return {
            title: 'Job Not Found | Nubis Careers',
        }
    }

    return {
        title: `Apply: ${job.title} | Nubis Careers`,
        description: job.description || `Apply for the ${job.title} position at Nubis.`,
    }
}

export default async function JobPage({ params }: Props) {
    const { slug } = await params
    const job = await getJobListing(slug)

    if (!job) {
        notFound()
    }

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
                            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Briefcase className="size-4" />
                                    {job.department}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="size-4" />
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="size-4" />
                                    {job.type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <DollarSign className="size-4" />
                                    {job.salary}
                                </span>
                            </div>
                        </div>

                        <JobApplicationForm jobId={job.id} jobTitle={job.title} />

                        <div className="mt-12 space-y-8">
                            {job.description && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">About the Role</h3>
                                    <p className="text-muted-foreground">{job.description}</p>
                                </div>
                            )}

                            {job.content && job.content.length > 0 && (
                                <div>
                                    <NotionBlocksRenderer blocks={job.content} />
                                </div>
                            )}

                            {job.requirements.length > 0 && job.requirements[0] !== 'Requirements listed in job description' && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {job.requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {job.responsibilities.length > 0 && job.responsibilities[0] !== 'Responsibilities listed in job description' && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    )
}

export async function generateStaticParams() {
    const slugs = await getAllJobSlugs()
    return slugs.map((slug) => ({
        slug,
    }))
}
