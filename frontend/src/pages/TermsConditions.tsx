import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const TermsConditions = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F8F8] px-6 pb-28 pt-28 text-[#001C43] md:px-10 md:pt-32 lg:px-12" data-navbar-theme="light">
        <article className="mx-auto max-w-[760px]">
          <header className="text-center">
            <h1 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#001C43]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-[12px] text-[#62676B]">September, 2025</p>
          </header>

          <div className="mt-12 space-y-5 text-[13px] leading-[1.55] text-[#555B60] md:text-[14px]">
            <p>
              <strong className="text-[#001C43]">1. Acceptance of Terms</strong> By accessing the Morsan Consulting Group website or engaging our services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our website or services.
            </p>

            <p>
              <strong className="text-[#001C43]">2. Our Services</strong> Morsan Consulting Group provides business consulting services, including strategic advisory, operational consulting, people and organizational advisory, and change and growth acceleration. The specific scope, deliverables, timelines, and fees for each engagement will be set out in a separate proposal, agreement, or statement of work.
            </p>

            <p>
              <strong className="text-[#001C43]">3. Consultations and Engagements</strong> Information shared during an initial consultation is used to understand your needs and determine how we may assist. A client relationship begins only after both parties have agreed to the relevant engagement terms in writing. We may decline or reschedule a consultation where reasonably necessary.
            </p>

            <p>
              <strong className="text-[#001C43]">4. Client Responsibilities</strong> Clients agree to provide accurate, complete, and timely information required for an engagement. You are responsible for reviewing our recommendations and making decisions based on your organization&apos;s circumstances. Delays caused by missing information or approvals may affect agreed timelines.
            </p>

            <p>
              <strong className="text-[#001C43]">5. Fees and Payment</strong> Fees, payment schedules, taxes, and any reimbursable expenses will be agreed before work begins. Unless otherwise stated in writing, invoices are due within the period specified on the invoice. We may pause work on overdue accounts after giving reasonable notice.
            </p>

            <p>
              <strong className="text-[#001C43]">6. Confidentiality</strong> Each party will keep confidential information received from the other party secure and will use it only for the agreed engagement. This obligation does not apply to information that is publicly available, already known without a confidentiality obligation, independently developed, or required to be disclosed by law.
            </p>

            <p>
              <strong className="text-[#001C43]">7. Intellectual Property</strong> Morsan retains ownership of its pre-existing methods, frameworks, templates, tools, and know-how. Subject to payment of all agreed fees, the client may use final deliverables created specifically for the engagement for its internal business purposes. Neither party may use the other&apos;s name or branding without prior written consent.
            </p>

            <p>
              <strong className="text-[#001C43]">8. No Guarantee of Results</strong> Our advice is based on the information available and our professional judgment at the time it is provided. While we work toward practical and measurable outcomes, we do not guarantee any particular business, financial, recruitment, or organizational result.
            </p>

            <p>
              <strong className="text-[#001C43]">9. Limitation of Liability</strong> To the fullest extent permitted by law, Morsan Consulting Group will not be liable for indirect, incidental, special, or consequential loss arising from the use of our website or services. Nothing in these Terms limits liability that cannot legally be limited.
            </p>

            <p>
              <strong className="text-[#001C43]">10. Third-Party Links</strong> Our website may include links to third-party websites or services. These links are provided for convenience, and Morsan does not control or endorse their content, availability, or privacy practices.
            </p>

            <p>
              <strong className="text-[#001C43]">11. Changes to These Terms</strong> We may update these Terms &amp; Conditions from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the website after an update means you accept the revised Terms.
            </p>

            <p>
              <strong className="text-[#001C43]">12. Governing Law</strong> These Terms are governed by the laws applicable in Kenya. Any disputes will be handled by the courts or other appropriate dispute resolution mechanisms with jurisdiction in Kenya, unless the parties agree otherwise in writing.
            </p>

            <p>
              <strong className="text-[#001C43]">13. Contact Us</strong> If you have questions about these Terms &amp; Conditions, please contact Morsan Consulting Group:
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

export default TermsConditions;
