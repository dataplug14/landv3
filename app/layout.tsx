import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


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
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Nubis",
    description: "Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x. (Nubis is not yet open source.)",
    url: "https://usenubis.com",
    images: "https://ik.imagekit.io/nubis/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubis",
    description: "Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x. (Nubis is not yet open source.)",
    images: "https://ik.imagekit.io/nubis/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans antialiased dark:bg-background dark:text-foreground overflow-x-hidden`} suppressHydrationWarning>
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js"
          strategy="afterInteractive"
          type="module"
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

