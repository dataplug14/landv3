import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://usenubis.com';
  
  const robotsTxt = `# *
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/feed.xml

# Crawl-delay (optional, adjust as needed)
Crawl-delay: 1
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

