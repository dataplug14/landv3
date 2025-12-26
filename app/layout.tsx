import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ZohoSalesIQ } from "@/components/zoho-salesiq";


const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://usenubis.com"),
  title: "Nubis - Enterprise Cloud Infrastructure Platform",
  description: "Nubis is an enterprise-grade cloud computing platform providing on-demand infrastructure services. Deploy and manage virtual machines, storage, databases, networking, and container orchestration through our API and web console. Features include elastic compute, block storage, load balancing, auto-scaling, and 99.95% uptime SLA. Secure, scalable cloud infrastructure for development teams and organizations.",
  keywords: [
    "cloud computing",
    "cloud infrastructure",
    "cloud platform",
    "virtual machines",
    "cloud management",
    "IaaS",
    "infrastructure as a service",
    "cloud storage",
    "cloud networking",
    "cloud database",
    "elastic compute",
    "load balancing",
    "auto-scaling",
    "enterprise cloud",
    "multi-cloud",
    "cloud API",
    "VM hosting",
    "cloud services",
    "cloud security",
    "cloud monitoring",
    "DevOps",
    "cloud deployment",
    "cloud automation",
    "cloud orchestration",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: "Nubis - Enterprise Cloud Infrastructure Platform",
    description: "Enterprise-grade cloud computing platform providing on-demand infrastructure services. Deploy virtual machines, storage, databases, and networking with 99.95% uptime SLA. Secure, scalable cloud infrastructure accessible through API and web console.",
    url: "https://usenubis.com",
    images: "/image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubis - Enterprise Cloud Infrastructure Platform",
    description: "Enterprise-grade cloud computing platform providing on-demand infrastructure services. Deploy virtual machines, storage, databases, and networking with 99.95% uptime SLA. Secure, scalable cloud infrastructure accessible through API and web console.",
    images: "/image.png",
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://usenubis.com/feed.xml',
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans antialiased dark:bg-background dark:text-foreground overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleAnalytics nonce={nonce} />
        <ZohoSalesIQ />
      </body>
    </html>
  );
}

