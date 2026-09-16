import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F8F8] px-6 pb-28 pt-28 text-[#1F2933] md:px-10 md:pt-32 lg:px-12" data-navbar-theme="light">
        <article className="mx-auto max-w-[760px]">
          <header className="text-center">
            <h1 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933]">
              Privacy Policy
            </h1>
            <p className="mt-3 text-[12px] text-[#62676B]">Feb, 2026</p>
          </header>

          <div className="mt-12 space-y-5 text-[13px] leading-[1.55] text-[#555B60] md:text-[14px]">
            <p>
              <strong className="text-[#1F2933]">1. Introduction</strong> Morsan Consulting Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
            </p>

            <p>
              <strong className="text-[#1F2933]">2. Information We Collect</strong> We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong className="text-[#1F2933]">Contact Information:</strong> Name, email address, phone number, when you fill out a contact form or schedule a call.</li>
              <li><strong className="text-[#1F2933]">Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site, collected via analytics tools.</li>
              <li><strong className="text-[#1F2933]">Communications:</strong> Messages or inquiries you send us directly.</li>
            </ul>

            <p>
              <strong className="text-[#1F2933]">3. How We Use Your Information</strong> We use your information to:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Respond to inquiries and schedule consultations</li>
              <li>Deliver and improve our consulting services</li>
              <li>Send relevant updates, newsletters, or follow-ups (with your consent)</li>
              <li>Analyze website traffic and improve user experience</li>
            </ul>

            <p>
              <strong className="text-[#1F2933]">4. Data Sharing</strong> We do not sell your personal information. We may share data with trusted third-party service providers (e.g., scheduling tools, email platforms) solely to operate our business. All third parties are required to handle your data securely.
            </p>

            <p>
              <strong className="text-[#1F2933]">5. Cookies</strong> Our website may use cookies to enhance your browsing experience and track analytics. You can disable cookies through your browser settings, though some features may not function properly.
            </p>

            <p>
              <strong className="text-[#1F2933]">6. Data Retention</strong> We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>

            <p>
              <strong className="text-[#1F2933]">7. Your Rights</strong> Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>To exercise these rights, email us at: <a className="text-[#C9A227] underline underline-offset-2" href="mailto:info@morsan.africa">info@morsan.africa</a></p>

            <p>
              <strong className="text-[#1F2933]">8. Data Security</strong> We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>

            <p>
              <strong className="text-[#1F2933]">9. Children&apos;s Privacy</strong> Our services are not directed to individuals under 18. We do not knowingly collect data from minors.
            </p>

            <p>
              <strong className="text-[#1F2933]">10. Updates to This Policy</strong> We may update this Privacy Policy periodically. We will post the revised version on this page with an updated effective date.
            </p>

            <p>
              <strong className="text-[#1F2933]">11. Contact Us</strong> If you have any questions about this Privacy Policy, please reach out:
              <br />
              <a className="text-[#C9A227] underline underline-offset-2" href="mailto:info@morsan.africa">info@morsan.africa</a>
              <span className="mx-2 text-[#B0B0B0]">|</span>
              +254 796 470 580
              <span className="mx-2 text-[#B0B0B0]">|</span>
              2129 Office Suites, 69 Muthithi Rd, Nairobi, Westlands
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
