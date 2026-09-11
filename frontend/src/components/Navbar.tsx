import morsanLogo from "../assets/morsan-logo-light.png";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-3 lg:px-2">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={morsanLogo}
            alt="Morsan Africa"
            className="h-20 w-auto"
          />
        </a>

        {/* Divider */}
        <div className="ml-8 hidden h-10 w-px bg-white/40 md:block" />

        {/* Navigation */}
        <div className="ml-8 hidden items-center gap-8 md:flex">
          <a
            href="/about"
            className="text-sm font-light text-white transition-opacity hover:opacity-70"
          >
            About
          </a>

          <a
            href="/services"
            className="text-sm font-light text-white transition-opacity hover:opacity-70"
          >
            Services
          </a>

          <a
            href="/case-studies"
            className="text-sm font-light text-white transition-opacity hover:opacity-70"
          >
            Case Studies
          </a>

          <a
            href="/blogs"
            className="text-sm font-light text-white transition-opacity hover:opacity-70"
          >
            Blogs
          </a>

          <a
            href="/careers"
            className="text-sm  text-white transition-opacity hover:opacity-70"
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
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;