export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Company Statistics</h2>
                    <p>
                        We provide cloud infrastructure that helps organizations deploy, manage, and scale their applications reliably and securely.
                    </p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">2024</div>
                        <p>Founded</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Stealth</div>
                        <p>Currently In</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Open Beta</div>
                        <p>Launching Soon</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
