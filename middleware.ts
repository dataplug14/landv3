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
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://*.clerk.com https://*.clerkstage.dev https://*.clerk.services https://*.clerk.accounts.dev;`,
    `style-src 'self' 'nonce-${nonce}' https://*.clerk.com https://*.clerkstage.dev https://*.clerk.services https://*.clerk.accounts.dev;`,
    "img-src 'self' data: https://ik.imagekit.io https://html.tailus.io https://startupfa.me https://api.producthunt.com https://img.clerk.com https://*.clerk.com https://*.clerkstage.dev https://*.clerk.services https://*.clerk.accounts.dev;",
    "font-src 'self' data:;",
    "connect-src 'self' https://prod.spline.design https://*.clerk.com https://*.clerkstage.dev https://*.clerk.services https://*.clerk.accounts.dev;",
    "worker-src 'self' blob: data: https://prod.spline.design;",
    "frame-src 'self' https://prod.spline.design https://my.spline.design https://unpkg.com https://cdn.jsdelivr.net https://*.clerk.com https://*.clerkstage.dev https://*.clerk.services https://*.clerk.accounts.dev;",
    "object-src 'none';",
    "base-uri 'self';",
    "frame-ancestors 'self';",
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
