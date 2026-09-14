const industries = [
  {
    title: "Fintech",
    description:
      "Strategic HR and business support for fast-moving financial technology businesses.",
  },
  {
    title: "Lending",
    description:
      "People, compensation, governance, and organizational solutions for lending businesses.",
  },
  {
    title: "Real Estate",
    description:
      "Practical structures and people systems that support growing property businesses.",
  },
  {
    title: "Retail",
    description:
      "Scalable HR and operational frameworks for customer-facing businesses.",
  },
  {
    title: "Education",
    description:
      "People and organizational solutions designed around the needs of education-focused organizations.",
  },
  {
    title: "Holdings",
    description:
      "Governance, compensation, and organizational frameworks for multi-entity groups.",
  },
  {
    title: "Startups",
    description:
      "Flexible consulting support for businesses building their foundations and preparing to scale.",
  },
  {
    title: "Multi-Entity Groups",
    description:
      "Connected HR and business consulting across multiple companies and operating structures.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-[#F4EEEE] px-6 pb-28 pt-20 md:pb-32 md:pt-24 lg:px-12 lg:pb-36 lg:pt-28" data-navbar-theme="light">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left content */}
          <div>

            {/* Section label */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#C9A227]
                px-6
                py-2
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#C9A227]
              "
            >
              Industries To Serve
            </span>

            {/* Heading */}
            <h2
              className="
                mt-8
                max-w-[430px]
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#1F2933]
                md:text-[42px]
              "
            >
              Deep expertise across
              <br />
              the sectors that matter
            </h2>

            {/* Description */}
            <p
            className="
                mt-24
                max-w-[490px]
                text-[14px]
                leading-[1.65]
                text-[#858080]
                md:text-[16px]
            "
            >
            We don't believe in one-size-fits-all consulting. Our teams
            bring sector-specific knowledge that translates directly into
            faster results and fewer mistakes.
            </p>

            {/* Explore our work button */}
            <a
            href="/case-studies"
            className="
                mt-20
                inline-flex
                items-center
                gap-5
                rounded-[2px]
                bg-[#C9A227]
                px-7
                py-4
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#A8831D]
                hover:gap-5
            "
            >
            <span>Explore Our Work</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
            >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
            </svg>
            </a>

          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="
                  group
                  min-h-[150px]
                  bg-white
                  px-7
                  py-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                "
              >

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.3]
                    tracking-[-0.015em]
                    text-[#1F2933]
                  "
                >
                  {industry.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.6]
                    text-[#858080]
                    md:text-[14px]
                  "
                >
                  {industry.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;