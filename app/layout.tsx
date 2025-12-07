import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";


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
  title: "Nubis",
  description: "Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x. (Nubis is not yet open source.)",
  keywords: [
    "cloud computing",
    "virtual machines",
    "cloud management",
    "multi-cloud",
    "infrastructure",
    "VM hosting",
    "cloud platform",
    "Africa cloud",
    "cloud hosting",
    "cloud infrastructure",
    "cloud services",
    "cloud storage",
    "cloud networking",
    "cloud security",
    "cloud monitoring",
    "cloud backup",
    "cloud migration",
    "cloud automation",
    "cloud orchestration",
    "cloud scheduling",
    "cloud scheduling",
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
    title: "Nubis",
    description: "Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x. (Nubis is not yet open source.)",
    url: "https://usenubis.com",
    images: "/image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubis",
    description: "Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x. (Nubis is not yet open source.)",
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
      </body>
    </html>
  );
}

