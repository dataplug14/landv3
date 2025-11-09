import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://usenubis.com';
  const currentDate = new Date().toUTCString();

  // Define your pages with their metadata
  const pages = [
    {
      title: 'Nubis - Cloud Platform for Building and Deploying Applications',
      link: baseUrl,
      description: 'Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Choose our managed or self-hosted solutions to cut cloud costs by 3–10x.',
      pubDate: currentDate,
    },
    {
      title: 'About Nubis - Cloud Infrastructure Solutions',
      link: `${baseUrl}/about`,
      description: 'Learn more about Nubis cloud platform, our mission to provide affordable and efficient cloud infrastructure solutions for businesses of all sizes.',
      pubDate: currentDate,
    },
    {
      title: 'Contact Nubis - Get in Touch',
      link: `${baseUrl}/contact`,
      description: 'Contact Nubis for inquiries about our cloud platform, managed services, or self-hosted solutions. We\'re here to help you cut cloud costs.',
      pubDate: currentDate,
    },
    {
      title: 'Security - Nubis Cloud Platform',
      link: `${baseUrl}/security`,
      description: 'Security features and protocols of Nubis cloud platform. Learn how we keep your infrastructure secure and protected.',
      pubDate: currentDate,
    },
  ];

  // Build RSS feed
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Nubis - Cloud Computing Platform</title>
    <link>${baseUrl}</link>
    <description>Nubis is a cloud platform for building and deploying applications. Features include elastic compute, block storage, load balancing and firewall, and GitHub Actions runners. Cut cloud costs by 3–10x.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js</generator>
    <webMaster>contact@usenubis.com (Nubis Team)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Nubis. All rights reserved.</copyright>
    <category>Technology</category>
    <category>Cloud Computing</category>
    <category>Infrastructure</category>
    <ttl>3600</ttl>
${pages.map(page => `    <item>
      <title><![CDATA[${page.title}]]></title>
      <link>${page.link}</link>
      <guid isPermaLink="true">${page.link}</guid>
      <description><![CDATA[${page.description}]]></description>
      <pubDate>${page.pubDate}</pubDate>
      <dc:creator>Nubis Team</dc:creator>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

