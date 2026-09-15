import { useEffect, useState } from "react";

import lightLogo from "../../assets/morsan-logo-light.png";
import darkLogo from "../../assets/morsan-logo-dark.png";

const Navbar = () => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const navbarOffset = 104;
    const themedSections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]");

    const updateNavbarTheme = () => {
      const sectionUnderNavbar = [...themedSections]
        .reverse()
        .find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= navbarOffset && bounds.bottom > navbarOffset;
        });

      setIsLightBackground(
        sectionUnderNavbar?.getAttribute("data-navbar-theme") === "light",
      );
    };

    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);
    updateNavbarTheme();

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  const navTextClass = isLightBackground ? "text-[#1F2933]" : "text-white";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-3 lg:px-2">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <span className="relative block h-20 w-[132px]">
            <img
              src={lightLogo}
              alt="Morsan Africa"
              className={`absolute inset-0 h-20 w-auto transition-opacity duration-200 ${
                isLightBackground ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={darkLogo}
              alt=""
              aria-hidden="true"
              className={`absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-200 ${
                isLightBackground ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </a>

        {/* Divider */}
        <div
          className={`ml-8 hidden h-10 w-px transition-colors duration-200 md:block ${
            isLightBackground ? "bg-[#1F2933]/40" : "bg-white/40"
          }`}
        />

        {/* Navigation */}
        <div className="ml-8 hidden items-center gap-8 md:flex">
          <a
            href="/about"
            className={`text-sm font-light transition-colors duration-200 hover:opacity-70 ${navTextClass}`}
          >
            About
          </a>

          <a
            href="/#services"
            className={`text-sm font-light transition-colors duration-200 hover:opacity-70 ${navTextClass}`}
          >
            Services
          </a>

          <a
            href="/case-studies"
            className={`text-sm font-light transition-colors duration-200 hover:opacity-70 ${navTextClass}`}
          >
            Case Studies
          </a>

          <a
            href="/blogs"
            className={`text-sm font-light transition-colors duration-200 hover:opacity-70 ${navTextClass}`}
          >
            Blogs
          </a>

          <a
            href="/careers"
            className={`text-sm transition-colors duration-200 hover:opacity-70 ${navTextClass}`}
          >
            Careers
          </a>
        </div>

        {/* CTA */}
        <div className="ml-auto hidden md:block">
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              rounded-[5px]
              bg-[#C9A227]
              px-6
              py-3
              text-[13px]
              text-white
              transition-all
              duration-300
              hover:gap-4
              hover:bg-[#A8831D]
            "
          >
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Open menu"
          className="ml-auto flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 transition-colors duration-200 ${
              isLightBackground ? "bg-[#1F2933]" : "bg-white"
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-colors duration-200 ${
              isLightBackground ? "bg-[#1F2933]" : "bg-white"
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-colors duration-200 ${
              isLightBackground ? "bg-[#1F2933]" : "bg-white"
            }`}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;