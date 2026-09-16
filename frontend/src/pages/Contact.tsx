import { useState } from "react";
import type { FormEvent } from "react";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const officeMapUrl =
  "https://www.google.com/maps/place/2129+Office+Suites/@-1.2702237,36.8114399,16z/data=!3m1!4b1!4m6!3m5!1s0x182f173c07089ac0:0xdbaf6fb62dcfef96!8m2!3d-1.2702237!4d36.8114399!16s%2Fg%2F11k3d97_yq?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#F8F8F8] text-[#001C43]" data-navbar-theme="light">
        <section className="px-6 pb-24 pt-32 md:pb-32 md:pt-40 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-[650px]">
              <span
                    className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#C9A227]/70
                    px-5
                    py-1.5
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#C9A227]
                    "
                >
                    Contact Us
                </span>

              <h1 className="mt-8 max-w-[680px] text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#001C43] md:text-[68px] lg:text-[66px]">
                Let&apos;s build something great together.
              </h1>

              <p className="mt-7 max-w-[540px] text-[15px] leading-[1.7] text-[#62676B] md:text-[17px]">
                Whether you have a project in mind or just want to explore what&apos;s possible, we&apos;re easy to reach and quick to respond.
              </p>
            </div>

            <div className="mt-20 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-start lg:gap-24">
              <div>
                <div className="space-y-5 text-[14px] text-[#62676B] md:text-[15px]">
                  <a className="flex items-center gap-3 transition-colors hover:text-[#C9A227]" href="tel:+254796470580">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE9E7] text-[#001C43]" aria-hidden="true">↗</span>
                    +254 796 470 580
                  </a>
                  <a className="flex items-center gap-3 transition-colors hover:text-[#C9A227]" href="mailto:info@morsan.africa">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE9E7] text-[#001C43]" aria-hidden="true">@</span>
                    info@morsan.africa
                  </a>
                  <a className="flex max-w-[360px] items-start gap-3 transition-colors hover:text-[#C9A227]" href={officeMapUrl} target="_blank" rel="noreferrer">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE9E7] text-[#001C43]" aria-hidden="true">⌖</span>
                    <span>2129 Office Suites, 69 Muthithi Rd, Nairobi, Westlands</span>
                  </a>
                </div>

                <div className="group mt-12 block max-w-[600px] overflow-hidden bg-[#D8E3E5]">
                <div className="relative aspect-[1.85] overflow-hidden">
                    <iframe
                    title="Morsan Africa Office Location"
                    src="https://www.google.com/maps?q=2129+Office+Suites,+69+Muthithi+Rd,+Nairobi&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <a
                    href={officeMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between bg-white px-4 py-3 text-[12px] font-semibold text-[#001C43] transition-colors hover:text-[#C9A227]"
                >
                    <span>2129 Office Suites, 69 Muthithi Rd, Nairobi, Westlands</span>
                    <span>Open in Google Maps ↗</span>
                </a>
                </div>
              </div>

              <div className="lg:pt-8">
                <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#001C43] md:text-[36px]">Let&apos;s talk about your goals</h2>
                <p className="mt-4 text-[14px] text-[#62676B] md:text-[15px]">Free 30-min strategy call · No commitment</p>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <label className="sr-only" htmlFor="contact-name">Your name</label>
                  <input id="contact-name" name="name" required placeholder="Jane Smith" className="w-full border border-transparent bg-white px-4 py-4 text-[14px] text-[#001C43] outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-[#C9A227]" />

                  <label className="sr-only" htmlFor="contact-email">Your email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="jane@company.com" className="w-full border border-transparent bg-white px-4 py-4 text-[14px] text-[#001C43] outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-[#C9A227]" />

                  <label className="sr-only" htmlFor="contact-interest">Area of interest</label>
                  <select id="contact-interest" name="interest" defaultValue="" className="w-full appearance-none border border-transparent bg-white px-4 py-4 text-[14px] text-[#62676B] outline-none transition-colors focus:border-[#C9A227]">
                    <option value="" disabled>Area of interest</option>
                    <option>Human Resource Consulting</option>
                    <option>Business Consulting</option>
                    <option>Organizational Development</option>
                    <option>Other</option>
                  </select>

                  <label className="sr-only" htmlFor="contact-message">Your message</label>
                  <textarea id="contact-message" name="message" required placeholder="Message..." rows={5} className="w-full resize-y border border-transparent bg-white px-4 py-4 text-[14px] text-[#001C43] outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-[#C9A227]" />

                  <button
                    type="submit"
                    className="w-full bg-[#001C43] px-4 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#C9A227]"
                    >
                    {isSubmitted ? "Thank You" : "Book a Free Call"}
                    </button>
                </form>

                <p className="mt-7 text-center text-[12px] text-[#777]">We typically respond within 1 business day.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
