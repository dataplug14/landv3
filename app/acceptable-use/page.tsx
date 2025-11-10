import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy - Nubis',
  description: 'Acceptable Use Policy for Nubis cloud platform',
}

export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-primary duration-150"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Acceptable Use Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 10, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              This Acceptable Use Policy (&quot;Policy&quot;) governs your use of Nubis services. Violations of this Policy may result in suspension or termination of your account without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Prohibited Activities</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You may not use our services to engage in or facilitate any of the following activities:
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.1 Illegal Activities</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing intellectual property rights of others</li>
              <li>Accessing or attempting to access systems or data without authorization</li>
              <li>Distributing illegal content or materials</li>
              <li>Engaging in fraud, identity theft, or financial crimes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.2 Security Violations</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Attempting to breach or circumvent security measures</li>
              <li>Scanning, probing, or testing vulnerabilities of our systems without authorization</li>
              <li>Interfering with service delivery to any user or network</li>
              <li>Overloading or attempting to overload our infrastructure</li>
              <li>Distributing malware, viruses, trojans, or other harmful code</li>
              <li>Using our services to launch attacks on third parties</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.3 Abusive Behavior</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Harassing, threatening, or intimidating others</li>
              <li>Stalking or violating privacy rights</li>
              <li>Transmitting hate speech or content promoting violence</li>
              <li>Distributing content that exploits or harms minors</li>
              <li>Impersonating others or misrepresenting your identity or affiliation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.4 Spam and Unsolicited Communications</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Sending unsolicited bulk email or messages</li>
              <li>Operating email lists without proper consent mechanisms</li>
              <li>Selling or distributing email addresses without consent</li>
              <li>Hosting or distributing spam content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.5 Network Abuse</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Consuming excessive bandwidth or resources</li>
              <li>Running cryptocurrency mining operations without proper resource allocation</li>
              <li>Operating proxy or VPN services for malicious purposes</li>
              <li>Hosting content used for phishing or fraud</li>
              <li>Running services that facilitate unauthorized access to systems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-medium mb-3">2.6 Prohibited Content</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Content depicting child exploitation or abuse</li>
              <li>Content promoting terrorism or violent extremism</li>
              <li>Content facilitating human trafficking or exploitation</li>
              <li>Non-consensual intimate imagery</li>
              <li>Content that violates export control regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Acceptable Cryptocurrency Mining</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Cryptocurrency mining is permitted only under the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>You have allocated sufficient resources for your mining operations</li>
              <li>Your mining activities do not interfere with other services or customers</li>
              <li>You comply with all applicable laws and regulations</li>
              <li>You pay for all resources consumed by your mining operations</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We reserve the right to monitor resource usage and may limit or suspend mining activities that impact service quality or infrastructure performance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Resource Usage</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You must use resources responsibly and in accordance with your service plan. Excessive or abusive resource consumption may result in:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Throttling of services</li>
              <li>Additional charges for excess usage</li>
              <li>Account suspension if usage violates this Policy</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We will make reasonable efforts to notify you before taking action, except in cases where immediate action is necessary to protect our infrastructure or other customers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Reporting Violations</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              If you become aware of any violations of this Policy, please report them to us immediately at:
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Email: <a href="mailto:abuse@usenubis.com" className="text-primary hover:underline">abuse@usenubis.com</a>
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Include as much detail as possible, including account information, dates, times, and any supporting documentation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Enforcement</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We reserve the right to investigate potential violations of this Policy. Enforcement actions may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Issuing warnings</li>
              <li>Removing or disabling access to content</li>
              <li>Suspending or limiting account functionality</li>
              <li>Terminating accounts</li>
              <li>Reporting violations to law enforcement</li>
              <li>Pursuing legal action</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              The severity of the enforcement action will depend on the nature and frequency of the violation. We may take immediate action without notice when necessary to protect our infrastructure, other customers, or to comply with legal requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Appeals</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              If you believe an enforcement action was taken in error, you may appeal by contacting us at:
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Email: <a href="mailto:appeals@usenubis.com" className="text-primary hover:underline">appeals@usenubis.com</a>
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Include your account information and a detailed explanation of why you believe the action was incorrect. We will review appeals promptly and respond within a reasonable timeframe.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Cooperation with Law Enforcement</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We cooperate with law enforcement agencies and may disclose information about your account or usage when required by law, legal process, or when we believe disclosure is necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Comply with legal obligations</li>
              <li>Protect our rights or property</li>
              <li>Prevent fraud or abuse</li>
              <li>Protect the safety of users or the public</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We may update this Policy at any time. Material changes will be communicated through our website or by email. Continued use of our services after changes become effective constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              For questions about this Policy, contact us at:
            </p>
            <p className="mb-2 leading-relaxed text-foreground/90">
              Email: <a href="mailto:legal@usenubis.com" className="text-primary hover:underline">legal@usenubis.com</a>
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Website: <a href="https://usenubis.com/contact" className="text-primary hover:underline">https://usenubis.com/contact</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

