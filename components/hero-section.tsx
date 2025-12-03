'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import type { AnimatedGroupProps } from '@/components/ui/animated-group'
import type { Transition } from 'motion/react'
import { HeroHeader } from './header'
import { SplineViewer } from './spline-viewer'

const createSpringTransition = (duration: number): Transition => ({
    type: 'spring',
    bounce: 0.3,
    duration,
})

const transitionVariants: NonNullable<AnimatedGroupProps['variants']> = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: createSpringTransition(1.5),
        },
    },
}

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [showControls, setShowControls] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play()
                    setIsPlaying(true)
                }
            },
            { threshold: 0.3 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                videoRef.current.requestFullscreen()
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video min-h-[250px] xs:min-h-[280px] sm:min-h-[350px] md:aspect-[16/9] md:min-h-[450px] lg:aspect-[15/8] lg:min-h-[500px] overflow-hidden rounded-[8px] sm:rounded-[12px] group cursor-pointer"
            onMouseEnter={() => !isMobile && setShowControls(true)}
            onMouseLeave={() => !isMobile && setShowControls(false)}
            onTouchStart={() => setShowControls(!showControls)}
            onClick={togglePlay}>

            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                loop
                muted={isMuted}
                playsInline
                preload="metadata">
                <source src="/nubis demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls || isMobile ? 'opacity-100' : 'opacity-0'}`} />

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${!isPlaying ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-4 sm:p-6 md:p-8 transition-transform duration-300 hover:scale-110 hover:bg-white/20 active:scale-95">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white" />
                </div>
            </div>

            {/* Epic Glow Effect */}
            <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </div>

            {/* Controls Bar */}
            <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 flex items-center justify-between transition-all duration-300 ${showControls || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

                {/* Left Controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            togglePlay()
                        }}
                        className="bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-xl border border-white/20 rounded-full p-2.5 sm:p-3 md:p-3.5 transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                        {isPlaying ? (
                            <Pause className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white" />
                        ) : (
                            <Play className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white" />
                        )}
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            toggleMute()
                        }}
                        className="bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-xl border border-white/20 rounded-full p-2.5 sm:p-3 md:p-3.5 transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
                        {isMuted ? (
                            <VolumeX className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        ) : (
                            <Volume2 className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            toggleFullscreen()
                        }}
                        className="bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-xl border border-white/20 rounded-full p-2.5 sm:p-3 md:p-3.5 transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                        aria-label="Fullscreen">
                        <Maximize className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Epic Corner Shine Effect */}
            <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
        </div>
    )
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden w-full">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: createSpringTransition(2),
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        {/* Spline 3D Animation */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
                            <div className="relative w-full h-[500px] sm:h-[600px] md:h-full max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-2 sm:px-4">
                                <SplineViewer
                                    url="https://prod.spline.design/n2ArOnqmbUvCzhSc/scene.splinecode"
                                    className="w-full h-full min-h-[300px] max-h-[500px] opacity-40 sm:opacity-45 md:opacity-50 lg:opacity-60 scale-[0.7] sm:scale-75 md:scale-90 lg:scale-100 -translate-y-6 sm:-translate-y-10 md:-translate-y-5 lg:translate-y-0"
                                />
                            </div>
                        </div>

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="https://accounts.usenubis.com/waitlist"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Available for Closed Beta Testing</span>

                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Accelerate Cloud Innovation with Nubis
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Nubis allows anyone to deploy their website, app, or workflow to the cloud.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="https://console.usenubis.com/dashboard">
                                                <span className="text-nowrap">Start Building</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="https://accounts.usenubis.com/waitlist">
                                            <span className="text-nowrap">Join the waitlist</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-3 sm:px-4 md:px-6 lg:px-2">

                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto mt-4 sm:mt-6 max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl border p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <VideoPlayer />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href=""
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )

}
