import type { NextConfig } from "next";

const ContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' data: https:;",
  "font-src 'self' data:;",
  "connect-src 'self' https:;",
  "object-src 'none';",
  "base-uri 'self';",
  "frame-ancestors 'none';",
  "frame-src 'none';",
].join(' ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => [
    {
      source: '/(.*)',
      headers: securityHeaders,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
