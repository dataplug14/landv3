import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">Complete Cloud Platform for Modern Applications</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Nubis provides <span className="font-medium">comprehensive cloud infrastructure services</span> — virtual machines, block and object storage, managed databases, load balancers, virtual private networks, and container orchestration.
                        </p>
                        <p>Built for development teams, enterprises, and organizations requiring reliable infrastructure. Access resources through our RESTful API, command-line interface, or web-based management console. Integrate with CI/CD pipelines, infrastructure-as-code tools, and monitoring systems.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">High Performance</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">NVMe SSD storage, high-bandwidth networking, and AMD EPYC processors for compute-intensive workloads.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Auto-Scaling</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Automatically adjust resources based on traffic and load. Pay only for what you use.</p>
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