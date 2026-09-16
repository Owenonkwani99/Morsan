import { useState } from "react";

import strategicImage from "../../assets/strategic.jpg";
import operationalImage from "../../assets/operational.jpg";
import growthImage from "../../assets/growth.jpg";

const strategies = [
  {
    id: "strategic",
    title: "Strategic Advisory",
    description: (
      <>
        We help organizations make informed decisions, strengthen their
        <br />
        strategic direction, and position themselves for long-term success.
      </>
    ),
    points: [
      {
        title: "Business Strategy",
        description:
          "Clear strategies aligned with your organization's goals and ambitions.",
      },
      {
        title: "Organizational Advisory",
        description:
          "Practical guidance to strengthen structure, leadership, and decision-making.",
      },
      {
        title: "Governance & Risk",
        description:
          "Frameworks that improve accountability, oversight, and organizational resilience.",
      },
    ],
    image: strategicImage,
  },
  {
    id: "operational",
    title: "Operational Consulting",
    description: (
      <>
        We improve the systems, processes, and structures that keep
        <br />
        organizations running efficiently and effectively.
      </>
    ),
    points: [
      {
        title: "HR Advisory",
        description:
          "Practical HR guidance that strengthens people management, workplace policies, and employee experience.",
      },
      {
        title: "Performance Management",
        description:
          "Systems that create accountability and connect performance to business objectives.",
      },
      {
        title: "Operational Excellence",
        description:
          "Practical improvements that strengthen day-to-day business performance.",
      },
    ],
    image: operationalImage,
  },
  {
    id: "growth",
    title: "Change & Growth Acceleration",
    description: (
      <>
        We help organizations adapt to change, accelerate growth, and build
        <br />
        the capabilities needed to thrive in an evolving business environment.
      </>
    ),
    points: [
      {
        title: "Change Management",
        description:
          "Structured approaches that help teams adapt and successfully implement change.",
      },
      {
        title: "Growth Enablement",
        description:
          "Practical strategies that help organizations identify and pursue new opportunities.",
      },
      {
        title: "Capability Building",
        description:
          "Developing the people, systems, and capabilities needed to scale effectively.",
      },
    ],
    image: growthImage,
  },
];

const StrategySection = () => {
  const [activeStrategy, setActiveStrategy] = useState("strategic");

  const active =
    strategies.find((strategy) => strategy.id === activeStrategy) ??
    strategies[0];

  return (
    <section
      className="overflow-hidden bg-[#02010D] px-6 py-20 text-white md:py-24 lg:px-12 lg:py-28"
      data-navbar-theme="dark"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex justify-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#C9A227]/60
              bg-[#C9A227]/10
              px-4
              py-1.5
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#C9A227]
            "
          >
            Our Strategy
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mx-auto
            mt-6
            max-w-[650px]
            text-center
            text-3xl
            font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            md:text-4xl
            lg:text-[42px]
          "
        >
          End-to-End Consulting
          <br />
          for Sustainable Results
        </h2>

        {/* Strategy tabs */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-[1020px]
            grid-cols-3
            border-b
            border-white/15
          "
        >
          {strategies.map((strategy) => {
            const isActive = activeStrategy === strategy.id;

            return (
              <button
                key={strategy.id}
                type="button"
                onClick={() => setActiveStrategy(strategy.id)}
                className={`
                  relative
                  px-3
                  pb-4
                  text-center
                  text-[12px]
                  font-medium
                  transition-all
                  duration-300
                  md:text-[14px]
                  ${
                    isActive
                      ? "text-[#C9A227]"
                      : "text-white/45 hover:text-white/80"
                  }
                `}
              >
                {strategy.title}

                <span
                  className={`
                    absolute
                    bottom-[-1px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    bg-[#C9A227]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* Main content */}
        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-[980px]
            items-stretch
            gap-8
            lg:grid-cols-[minmax(0,1fr)_400px]
            lg:gap-8
          "
        >
          {/* Left content */}
          <div className="flex min-h-[500px] flex-col justify-center lg:pr-2">
            {/* Description */}
            <div
              key={`${active.id}-description`}
              className="animate-[fadeIn_0.4s_ease-out]"
            >
              <p
                className="
                  max-w-[920px]
                  text-[13px]
                  leading-[1.7]
                  text-white/65
                  md:text-[15px]
                "
              >
                {active.description}
              </p>
            </div>

            {/* Strategy points */}
            <div className="mt-10 space-y-8">
              {active.points.map((point, index) => (
                <div
                  key={point.title}
                  className="relative flex gap-4"
                  style={{
                    animation: `fadeIn 0.4s ease-out ${
                      index * 0.08
                    }s both`,
                  }}
                >
                  {/* Gold check */}
                  <div
                    className="
                      mt-1
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C9A227]/60
                      text-[9px]
                      text-[#C9A227]
                    "
                  >
                    ✓
                  </div>

                  {/* Point content */}
                  <div className="relative flex-1">
                    <div
                      className="
                        absolute
                        -left-[12px]
                        top-7
                        h-[calc(100%+20px)]
                        w-px
                        bg-white/10
                      "
                    />

                    <h3
                      className="
                        text-[16px]
                        font-semibold
                        leading-[1.3]
                        text-white
                        md:text-[17px]
                      "
                    >
                      {point.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[450px]
                        text-[14px]
                        leading-[1.6]
                        text-white/45
                        md:text-[14px]
                      "
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20">
              <a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-[5px]
                  bg-[#C9A227]
                  px-6
                  py-3.5
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:gap-4
                  hover:bg-[#A8831D]
                "
              >
                <span>Let's Work Together</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div
            key={`${active.id}-image`}
            className="
              relative
              mt-8
              h-[440px]
              overflow-hidden
              rounded-[3px]
              lg:mt-0
              lg:h-[500px]
            "
          >
            <img
              src={active.image}
              alt={active.title}
              className="
                h-full
                w-full
                object-cover
                animate-[imageFade_0.5s_ease-out]
              "
            />

            {/* Image overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
              "
            />

            {/* Image CTA */}
            <a
              href="/contact"
              className="
                absolute
                bottom-4
                left-4
                inline-flex
                items-center
                gap-3
                rounded-[5px]
                bg-white
                px-5
                py-3
                text-[14px]
                font-semibold
                text-[#111111]
                transition-all
                duration-300
                hover:gap-4
                hover:bg-[#C9A227]
                hover:text-white
              "
            >
              <span>Book a Consultation</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageFade {
          from {
            opacity: 0;
            transform: scale(1.02);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default StrategySection;