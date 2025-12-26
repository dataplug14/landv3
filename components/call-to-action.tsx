import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building on Nubis Cloud</h2>
                    <p className="mt-4 max-w-2xl mx-auto">
                        Deploy your first application on our cloud infrastructure platform. Access compute, storage, databases, and networking services through our API or web console. Join our closed beta program for early access.
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="https://accounts.usenubis.com/waitlist">
                                <span>Join the waitlist</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/contact">
                                <span>Contact us</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
