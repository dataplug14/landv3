import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nubis',
  description: 'Privacy Policy for Nubis cloud platform',
}

export default function PrivacyPolicy() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl font-medium lg:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: November 10, {new Date().getFullYear()}</p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Nubis (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a cloud infrastructure platform. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">2.1 Information You Provide</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We collect information you provide directly, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Account information (name, email address, billing details)</li>
              <li>Payment information processed by third-party payment processors</li>
              <li>Communications you send to us</li>
              <li>Configuration data and settings for your infrastructure</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              When you use our services, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Usage data (features used, actions taken, time and frequency of use)</li>
              <li>Technical data (IP addresses, browser type, operating system)</li>
              <li>Performance and diagnostic data</li>
              <li>Log data from your infrastructure for operational purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, data analysis, hosting)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. We may also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction. We take appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-2 leading-relaxed text-foreground/90">
              Email: <a href="mailto:privacy@usenubis.com" className="text-primary hover:underline">privacy@usenubis.com</a>
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Website: <a href="https://usenubis.com/contact" className="text-primary hover:underline">https://usenubis.com/contact</a>
            </p>
          </section>
            </div>
          </div>
        </section>
    </main>
    <FooterSection />
  </>
  )
}

