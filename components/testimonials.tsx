"use client";

import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "Nubis allowed us to streamline our infrastructure deployment. The platform makes routine tasks straightforward, and the documentation is clear and helpful.",
        name: "Maria Fischer",
        role: "VP of Engineering, Column",
        logo: "https://html.tailus.io/blocks/customers/column.svg",
        logoAlt: "Column Logo",
    },
    {
        quote:
            "The reliability and transparency Nubis offers have made a noticeable difference in our day-to-day operations. We spend less time managing servers and more time building features.",
        name: "Rahul Patel",
        role: "CTO, Lemon Squeezy",
        logo: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
        logoAlt: "Lemon Squeezy Logo",
    },
    {
        quote:
            "We value how predictable and accessible Nubis has been for our team. The service performs as advertised, and support requests are handled promptly.",
        name: "Sara Kim",
        role: "Lead Cloud Architect, Nvidia",
        logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
        logoAlt: "Nvidia Logo",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl relative min-h-[260px]">
                    {testimonials.map((testimonial, idx) => (
                        <blockquote
                            key={testimonial.name}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                            }`}
                            aria-hidden={idx !== current}
                        >
                            <p className="text-lg font-normal sm:text-xl md:text-2xl">{testimonial.quote}</p>
                            <div className="mt-12 flex items-center gap-6">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src={testimonial.logo}
                                    alt={testimonial.logoAlt}
                                    height="20"
                                    width="auto"
                                />
                                <div className="space-y-1 border-l pl-6">
                                    <cite className="font-medium not-italic">{testimonial.name}</cite>
                                    <span className="text-muted-foreground block text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
