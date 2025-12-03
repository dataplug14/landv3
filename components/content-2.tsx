import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Infrastructure built for production workloads.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Nubis provides <span className="font-medium">reliable infrastructure services</span> — from compute instances to storage and networking.
                        </p>
                        <p>Built for teams that need consistent performance and straightforward management. Deploy applications, manage databases, and scale resources through our web console or API.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Fast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Low-latency networks and solid-state storage for responsive applications.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Scalable</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Add or remove resources as your workload changes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2 overflow-hidden">
                            <Image
                                src="https://ik.imagekit.io/nubis/2150690154.jpg"
                                className="hidden rounded-[12px] dark:block w-full h-auto"
                                alt="Cloud infrastructure dashboard dark"
                                width={1000}
                                height={667}
                            />
                            <Image
                                src="https://ik.imagekit.io/nubis/2150690154.jpg"
                                className="rounded-[12px] shadow dark:hidden w-full h-auto"
                                alt="Cloud infrastructure dashboard light"
                                width={1000}
                                height={667}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
<br />