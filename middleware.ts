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
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic';`,
    `style-src 'self' 'nonce-${nonce}';`,
    "img-src 'self' data: https://ik.imagekit.io https://html.tailus.io https://startupfa.me https://api.producthunt.com;",
    "font-src 'self' data:;",
    "connect-src 'self' https://prod.spline.design;",
    "object-src 'none';",
    "base-uri 'self';",
    "frame-ancestors 'none';",
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
