import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import morsanLogo from "../../assets/morsan-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-[#001C43] text-white" data-navbar-theme="dark">
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
                text-[#001C43]
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
                href="https://www.instagram.com/morsan_consulting_group/"
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
                  hover:text-[#001C43]
                "
              >
                <InstagramIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/morsanhr/"
                aria-label="Facebook"
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
                  hover:text-[#001C43]
                "
              >
                <FacebookIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/morsan-consulting-group/home/"
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
                  hover:text-[#001C43]
                "
              >
                <LinkedInIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>

              {/* X */}
              {/* <a
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
              </a> */}
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
                    href="/#services"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/careers"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Careers
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

                <li>
                  <a
                    href="/contact"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    Contact Us
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

                {/* <li>
                  <a
                    href="/404"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    404
                  </a>
                </li> */}
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
                  href="tel:+254796470580"
                  className="
                    flex
                    items-center
                    gap-3
                    transition-colors
                    hover:text-[#C9A227]
                  "
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <PhoneIcon className="h-[17px] w-[17px]" />
                  </span>

                  <span>+254 796 470 580</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@morsan.africa"
                  className="
                    flex
                    items-center
                    gap-3
                    transition-colors
                    hover:text-[#C9A227]
                  "
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <EmailIcon className="h-[17px] w-[17px]" />
                  </span>

                  <span className="break-words">
                    info@morsan.africa
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
                    <LocationOnIcon className="h-[17px] w-[17px]" />
                  </span>

                  <a
                    href="https://www.google.com/maps/place/2129+Office+Suites/@-1.2702237,36.8114399,16z/data=!3m1!4b1!4m6!3m5!1s0x182f173c07089ac0:0xdbaf6fb62dcfef96!8m2!3d-1.2702237!4d36.8114399!16s%2Fg%2F11k3d97_yq?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#C9A227]"
                  >
                    2129 Office Suites, 69 Muthithi Rd, Nairobi, Westlands
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-22 border-b border-white/20 pb-5 text-[14px] font-medium text-white/90">
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