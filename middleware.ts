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

const clerkDomainPatterns = ["https://*.clerk.com"];

if (process.env.NODE_ENV !== "production") {
  clerkDomainPatterns.push(
    "https://*.clerkstage.dev",
    "https://*.clerk.services",
    "https://*.clerk.accounts.dev",
  );
}

const joinSources = (sources: string[]) => sources.join(" ");

const buildContentSecurityPolicy = (nonce: string) => {
  const clerkDomains = joinSources(clerkDomainPatterns);
  const clerkScriptSources = joinSources([
    ...clerkDomainPatterns,
    "https://challenges.cloudflare.com",
  ]);

  return [
    "default-src 'self';",
    `script-src 'self' 'nonce-${nonce}' ${clerkScriptSources};`,
    `style-src 'self' 'nonce-${nonce}' ${clerkDomains};`,
    `img-src 'self' data: https://ik.imagekit.io https://html.tailus.io https://startupfa.me https://api.producthunt.com ${clerkDomains};`,
    "font-src 'self' data:;",
    `connect-src 'self' https://prod.spline.design ${clerkDomains};`,
    "worker-src 'self' blob: data: https://prod.spline.design;",
    `frame-src 'self' https://prod.spline.design https://my.spline.design https://unpkg.com https://cdn.jsdelivr.net ${clerkDomains} https://challenges.cloudflare.com;`,
    "object-src 'none';",
    "base-uri 'self';",
    "frame-ancestors 'none';",
  ].join(" ");
};

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
