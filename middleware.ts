import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const generateNonce = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  let binary = "";
  array.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
};

const buildContentSecurityPolicy = (nonce: string) =>
  [
    "default-src 'self';",
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net https://static.cloudflareinsights.com https://www.googletagmanager.com https://www.google-analytics.com;`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
    "img-src 'self' data: blob: https://ik.imagekit.io https://html.tailus.io https://startupfa.me https://api.producthunt.com https://app.spline.design https://prod.spline.design https://nxgntools.com https://www.google-analytics.com https://www.googletagmanager.com;",
    "font-src 'self' data: https://fonts.gstatic.com;",
    "connect-src 'self' https://prod.spline.design https://unpkg.com https://cdn.jsdelivr.net https://fonts.googleapis.com https://fonts.gstatic.com https://www.gstatic.com https://static.cloudflareinsights.com https://www.google-analytics.com https://www.googletagmanager.com wss: ws:;",
    "worker-src 'self' blob: data: https://prod.spline.design;",
    "frame-src 'self' https://prod.spline.design https://my.spline.design https://unpkg.com https://cdn.jsdelivr.net https://status.usenubis.com;",
    "object-src 'none';",
    "base-uri 'self';",
    "frame-ancestors 'none';",
    "upgrade-insecure-requests;",
  ].join(" ");

export function middleware(request: NextRequest) {
  const nonce = generateNonce();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", buildContentSecurityPolicy(nonce));

  return response;
}

export const config = {
  matcher: "/:path*",
};
