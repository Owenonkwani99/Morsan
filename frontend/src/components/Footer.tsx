import morsanLogo from "../assets/morsan-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-[#02010D] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-5 pt-12 lg:px-12 lg:pt-11">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-[1fr_1.7fr] md:gap-16 lg:gap-20">

          {/* LEFT - Logo / CTA / Socials */}
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src={morsanLogo}
                alt="Morsan Consulting Group"
                className="h-[75px] w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-[290px] text-[15px] leading-[1.35] text-white/90">
              Partner with us to turn strategic ambition into measurable
              business results.
            </p>

            <a
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-[5px]
                bg-[#C9A227]
                px-4
                py-3
                text-[13px]
                font-medium
                text-[#111111]
                transition-all
                duration-300
                hover:gap-4
                hover:bg-[#dfbb35]
              "
            >
              <span>Get In Touch</span>

            </a>

            {/* Social icons */}
            <div className="mt-11 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C9A227]
                  bg-transparent
                  text-[#C9A227]
                  transition-all
                  duration-300
                  hover:bg-[#C9A227]
                  hover:text-[#02010D]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C9A227]
                  bg-transparent
                  text-[#C9A227]
                  transition-all
                  duration-300
                  hover:bg-[#C9A227]
                  hover:text-[#02010D]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M6.2 8.2H3.1V21h3.1V8.2ZM4.65 3A1.85 1.85 0 1 0 4.65 6.7 1.85 1.85 0 0 0 4.65 3ZM21 13.66c0-3.86-2.06-5.66-4.8-5.66-2.2 0-3.18 1.2-3.73 2.04V8.2H9.36V21h3.1v-6.34c0-1.67.32-3.28 2.38-3.28 2.02 0 2.05 1.9 2.05 3.4V21H20v-7.34Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/"
                aria-label="X"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C9A227]
                  bg-transparent
                  text-[#C9A227]
                  transition-all
                  duration-300
                  hover:bg-[#C9A227]
                  hover:text-[#02010D]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M5.2 4h3.65l3.45 4.7L16.3 4h2.5l-5.35 6.05L19.2 20h-3.65l-3.9-5.3L6.7 20H4.2l5.65-6.65L5.2 4Zm3.02 1.9H8.1l6.55 12.2h.12L8.22 5.9Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT - Three equal columns */}
          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-3
              sm:gap-8
              lg:gap-12
            "
          >
            {/* Company */}
            <div>
              <h3 className="text-[15px] font-medium text-white/70">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-[15px] text-white/90">
                <li>
                  <a
                    href="/"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/careers"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Careers &amp; Culture
                  </a>
                </li>

                <li>
                  <a
                    href="/case-studies"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Case Studies
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-[15px] font-medium text-white/70">
                Policies
              </h3>

              <ul className="mt-5 space-y-3 text-[15px] text-white/90">
                <li>
                  <a
                    href="/terms"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="/privacy"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/404"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[15px] font-medium text-white/70">
                Contact
              </h3>

              <div className="mt-5 space-y-4 text-[14px] text-white/90">
                {/* Phone */}
                <a
                  href="tel:+254729562107"
                  className="
                    flex
                    items-center
                    gap-3
                    transition-colors
                    hover:text-[#C9A227]
                  "
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-[17px] w-[17px]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>

                  <span>+254 729 562 107</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@morsan.africa.co.ke"
                  className="
                    flex
                    items-center
                    gap-3
                    transition-colors
                    hover:text-[#C9A227]
                  "
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-[17px] w-[17px]"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <span className="break-words">
                    info@morsan.africa.co.ke
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-[17px] w-[17px]"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span>Nairobi garage, Westlands.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-32 border-b border-white/20 pb-5 text-[14px] font-medium text-white/90">
          Copyright © Morsan.Africa, {new Date().getFullYear()}
        </div>

        {/* Bottom links */}
        <div className="flex flex-col gap-2 pt-4 text-[12px] text-white/80 sm:flex-row sm:gap-8">
          <a
            href="/terms"
            className="transition-colors hover:text-[#C9A227]"
          >
            Terms &amp; Support
          </a>

          <a
            href="/privacy"
            className="transition-colors hover:text-[#C9A227]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;