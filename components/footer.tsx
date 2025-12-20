import Link from 'next/link'

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Documentation', href: 'https://docs.usenubis.com' },
    { title: 'Status', href: 'https://status.usenubis.com' },
    { title: 'Security', href: '/security' },
    { title: 'Contact', href: '/contact' }
]

const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Acceptable Use', href: '/acceptable-use' }
]

const socialLinks = [
    {
        name: "X",
        href: "https://x.com/usenubis",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path d="M14.6009 2H17.0544L11.6943 8.35385L18 17H13.0627L9.19566 11.7562L4.77087 17H2.31595L8.04904 10.2038L2 2H7.06262L10.5581 6.79308L14.6009 2ZM13.7399 15.4769H15.0993L6.32392 3.44308H4.86506L13.7399 15.4769Z"></path></svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/usenubis",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path fillRule="evenodd" clipRule="evenodd" d="M10 0.257812C4.5 0.257812 0 4.75781 0 10.2578C0 14.6328 2.875 18.3828 6.875 19.7578C7.375 19.8828 7.5 19.5078 7.5 19.2578C7.5 19.0078 7.5 18.3828 7.5 17.5078C4.75 18.1328 4.125 16.2578 4.125 16.2578C3.625 15.1328 3 14.7578 3 14.7578C2.125 14.1328 3.125 14.1328 3.125 14.1328C4.125 14.2578 4.625 15.1328 4.625 15.1328C5.5 16.7578 7 16.2578 7.5 16.0078C7.625 15.3828 7.875 14.8828 8.125 14.6328C5.875 14.3828 3.625 13.5078 3.625 9.63281C3.625 8.50781 4 7.63281 4.625 7.00781C4.5 6.75781 4.125 5.75781 4.75 4.38281C4.75 4.38281 5.625 4.13281 7.5 5.38281C8.25 5.13281 9.125 5.00781 10 5.00781C10.875 5.00781 11.75 5.13281 12.5 5.38281C14.375 4.13281 15.25 4.38281 15.25 4.38281C15.75 5.75781 15.5 6.75781 15.375 7.00781C16 7.75781 16.375 8.63281 16.375 9.63281C16.375 13.5078 14 14.2578 11.75 14.5078C12.125 15.0078 12.5 15.6328 12.5 16.5078C12.5 17.8828 12.5 18.8828 12.5 19.2578C12.5 19.5078 12.625 19.8828 13.25 19.7578C17.25 18.3828 20.125 14.6328 20.125 10.2578C20 4.75781 15.5 0.257812 10 0.257812Z"></path></svg>
        ),
    }
]

export default function FooterSection() {
    return (
        <footer className="relative z-10 border-t bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-8">
                <nav className="flex flex-wrap justify-center gap-7 text-sm">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <nav className="flex flex-wrap justify-center gap-6 text-sm border-t pt-8 w-full">
                    {legalLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center justify-center gap-6 mt-2">
                    {socialLinks.map(({ name, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
                    <a href="https://startupfa.me/s/nubis?utm_source=usenubis.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
                        <img src="https://startupfa.me/badges/featured/default-rounded.webp" alt="Nubis - Featured on Startup Fame" width="171" height="54" />
                    </a>
                    <a href="https://www.producthunt.com/products/nubis?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-nubis" target="_blank" rel="noopener noreferrer" className="relative z-10">
                        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1035834&theme=light&t=1762606004933" alt="Nubis - Cloud infrastructure built for developers | Product Hunt" className="w-[250px] h-[54px]" width="250" height="54" />
                    </a>
                    <a
                        href="https://peerpush.net/p/nubis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10"
                        style={{ width: '230px' }}
                    >
                        <img
                            src="https://peerpush.net/p/nubis/badge.png"
                            alt="Nubis badge"
                            style={{ width: '230px' }}
                        />
                    </a>
                </div>
                <div className="w-full mt-8 flex flex-col gap-4">
                    <span className="block text-center text-sm text-muted-foreground">
                        © 2025 Nubis, all rights reserved.
                    </span>
                    <div className="relative z-10">
                        <iframe
                            src="https://status.usenubis.com/badge?theme=dark"
                            width="250"
                            height="30"
                            frameBorder="0"
                            scrolling="no"
                            style={{ colorScheme: 'normal' }}
                            title="Nubis Service Status"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
