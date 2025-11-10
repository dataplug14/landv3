import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Nubis',
  description: 'Terms of Service for Nubis cloud platform',
}

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 10, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              By accessing or using Nubis services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use our Services.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              These Terms constitute a legally binding agreement between you and Nubis. We reserve the right to modify these Terms at any time. Continued use of the Services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You must be at least 18 years old and capable of forming a binding contract to use our Services. By using the Services, you represent that you meet these requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              To use our Services, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Use of Services</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">4.1 License</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your business purposes.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Restrictions</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Use the Services for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to our systems or other user accounts</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Remove or modify any proprietary notices or labels</li>
              <li>Use the Services to transmit malware, viruses, or harmful code</li>
              <li>Resell or redistribute the Services without authorization</li>
              <li>Use automated systems to access the Services in a manner that sends more requests than a human could reasonably produce</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You must comply with our Acceptable Use Policy, which is incorporated into these Terms by reference. Violations may result in immediate suspension or termination of your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">6.1 Fees</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You agree to pay all fees associated with your use of the Services. Fees are charged according to our published pricing, which may change with notice. All fees are non-refundable unless otherwise specified.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 Billing</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You authorize us to charge your payment method for all applicable fees. If payment fails, we may suspend your Services until payment is received. You are responsible for all charges incurred under your account.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">6.3 Taxes</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              All fees are exclusive of applicable taxes. You are responsible for paying all taxes associated with your use of the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Your Content</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">7.1 Ownership</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You retain ownership of all data, content, and materials you upload or create using the Services (&quot;Your Content&quot;). You are solely responsible for Your Content and the consequences of posting or publishing it.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">7.2 License to Us</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You grant us a limited license to store, process, and transmit Your Content solely as necessary to provide the Services. This license terminates when you delete Your Content or close your account, except for content that has been shared with others or as required for legal compliance.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">7.3 Responsibility</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You represent that you have all necessary rights to Your Content and that it does not violate any laws or third-party rights. We have no obligation to monitor Your Content but reserve the right to remove content that violates these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              The Services and all associated intellectual property rights are owned by Nubis or our licensors. These Terms do not grant you any rights to our trademarks, logos, or branding. All rights not expressly granted are reserved.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Service Availability</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We strive to maintain high availability but do not guarantee uninterrupted access to the Services. We may modify, suspend, or discontinue any aspect of the Services at any time. We are not liable for any interruption, modification, or discontinuation of the Services.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              We may perform scheduled maintenance with advance notice when possible. Emergency maintenance may occur without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Data Backup</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You are responsible for maintaining backups of Your Content. While we implement backup procedures, we do not guarantee that Your Content can be recovered in all circumstances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You may terminate your account at any time by following the account closure process. We may suspend or terminate your account if you violate these Terms or for any other reason with or without notice.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Upon termination, your right to use the Services immediately ceases. We will delete Your Content within a reasonable time after termination, subject to our data retention policies and legal obligations. You remain responsible for all fees incurred prior to termination.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Disclaimers</h2>
            <p className="mb-4 leading-relaxed text-foreground/90 uppercase">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90 uppercase">
              WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOU USE THE SERVICES AT YOUR OWN RISK.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Limitation of Liability</h2>
            <p className="mb-4 leading-relaxed text-foreground/90 uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUBIS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM YOUR USE OF THE SERVICES.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90 uppercase">
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">14. Indemnification</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You agree to indemnify and hold harmless Nubis and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including legal fees) arising from your use of the Services, Your Content, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">15. Dispute Resolution</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nubis operates, without regard to conflict of law provisions.
            </p>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Any disputes arising from these Terms or the Services shall be resolved through binding arbitration, except that either party may seek injunctive relief in court. You waive any right to participate in class action lawsuits or class-wide arbitration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">16. General Provisions</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">16.1 Entire Agreement</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              These Terms, along with our Privacy Policy and Acceptable Use Policy, constitute the entire agreement between you and Nubis regarding the Services.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">16.2 Severability</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">16.3 Waiver</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">16.4 Assignment</h3>
            <p className="mb-4 leading-relaxed text-foreground/90">
              You may not assign these Terms without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">17. Contact Information</h2>
            <p className="mb-4 leading-relaxed text-foreground/90">
              If you have questions about these Terms, please contact us at:
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

