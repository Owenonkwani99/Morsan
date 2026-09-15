const services = [
  {
    title: "HR Strategy & Advisory",
    description:
      "Ongoing and project-based advisory for leadership teams on people matters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3.5V6M20.5 12H18M12 20.5V18M3.5 12H6" />
      </svg>
    ),
  },
  {
    title: "Recruitment & Talent Acquisition",
    description:
      "End-to-end hiring, from role scoping to offer management.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 8h5M18.5 5.5v5" />
      </svg>
    ),
  },
  {
    title: "Compensation & Benefits Design",
    description:
      "Job evaluation, grading, salary structuring, and COLA reviews.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M15 9.5c0-1.1-1.3-2-3-2s-3 .9-3 2 1.3 2 3 2 3 .9 3 2-1.3 2-3 2-3-.9-3-2" />
      </svg>
    ),
  },
  {
    title: "HR Policy & SOP Development",
    description:
      "Policy libraries grounded in the Kenyan Employment Act.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M6 3.5h9l3 3V20.5H6z" />
        <path d="M15 3.5v4h3M9 11h6M9 14h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Performance & Disciplinary Management",
    description:
      "Frameworks and processes that protect employer and employee.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 3.5 19 6v5.5c0 4.5-2.9 7.8-7 9-4.1-1.2-7-4.5-7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Payroll & HR Administration",
    description:
      "Payroll accuracy and statutory compliance support.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <rect x="4" y="5" width="16" height="14" rx="1.5" />
        <path d="M7 9h10M7 13h3M14 13h3M7 16h6" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-[#F4EEEE] px-6 py-28 md:py-32 lg:px-12 lg:py-36" data-navbar-theme="light">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#C9A227] px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
            Services
          </span>

          <h2 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">
            Innovative solutions for
            <br />
            real world challenges
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-[1.65] text-[#666666] md:text-[16px]">
            We deliver end-to-end consulting services across the critical
            functions that drive business performance. Whether you need
            strategic direction, operational improvements, or growth
            acceleration—we have the expertise to help.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                min-h-[260px]
                bg-white
                px-7
                py-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  [&_svg]:h-7
                  [&_svg]:w-7
                  items-center
                  justify-center
                  bg-[#F7F5F2]
                  text-[#1F2933]
                  transition-colors
                  duration-300
                  group-hover:bg-[#C9A227]
                  group-hover:text-white
                "
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-10">

                <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#1F2933]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-[320px] text-[14px] leading-[1.6] text-[#858080]">
                  {service.description}
                </p>

                {/* Learn more */}
                <a
                  href="/#services"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    text-[13px]
                    font-medium
                    text-[#C9A227]
                    transition-all
                    duration-300
                    hover:gap-3
                  "
                >
                  <span className="h-px w-6 bg-[#C9A227]" />
                  Learn more
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;