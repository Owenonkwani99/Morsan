import { useState } from "react";
import sandraImage from "../../assets/sandramoraa.png";
import sandramImage from "../../assets/sandram.png";

const reasons = [
  {
    title: "Strategic Precision",
    description:
      "Our work goes beyond theory — we translate your business goals into focused, achievable action plans. With us, strategy is not a document; it’s a roadmap to measurable impact.",
    points: [
      "HR strategy and organizational advisory",
      "Governance and board support",
      "Policy and SOP development",
      "Compensation and performance systems",
      "Business process improvement",
    ],
  },

  {
    title: "Experienced Leadership",
    description:
      "Our work is guided by experienced professionals who understand the complexity of building and scaling organizations.",
    points: [
      "Executive and leadership advisory",
      "Organizational structure and design",
      "Leadership development and support",
      "Workforce planning and talent strategy",
      "Change management and organizational transformation",
    ],
  },

  {
    title: "Customized Approach",
    description:
      "We tailor every engagement to your organization’s specific needs, priorities, and operating environment.",
    points: [
      "Tailored HR and business solutions",
      "Organization-specific policies and frameworks",
      "Customized performance management systems",
      "Needs-based process and workflow design",
      "Flexible project and advisory engagements",
    ],
  },

  {
    title: "Implementation Focus",
    description:
      "We remain focused on execution, helping turn recommendations into practical systems, decisions, and measurable results.",
    points: [
      "Implementation of HR strategies and policies",
      "Process and system optimization",
      "Performance tracking and accountability",
      "Change implementation and stakeholder support",
      "Ongoing advisory and implementation support",
    ],
  },
];

const WhyItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#ffff] px-6 py-20 md:py-24 lg:px-15 lg:py-20" data-navbar-theme="light">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <span className="inline-flex rounded-full border border-[#C9A227] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A8831D]">
          Why It Works
        </span>

        {/* Introductory content */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16 lg:mt-9 lg:gap-28">
          <h2 className="max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#1F2933] md:text-4xl lg:text-[42px]">
            You don't need more advice. You need a plan that actually works.
          </h2>

          {/* <p className="max-w-sm self-start text-[11px] leading-[1.45] text-[#858080] md:mt-2 lg:ml-auto">
            No fluff. No 200-page reports. Just sharp thinking, clear
            priorities, and execution that moves the needle from week one.
          </p> */}
        </div>

        {/* Main content */}
        <div className="mt-14 grid items-start gap-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:mt-16 lg:grid-cols-[1fr_1.08fr] lg:gap-28">
          {/* Accordion */}
          <div className="max-w-md">
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={reason.title}
                  className="border-b border-[#C9A227] last:border-b"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isActive ? -1 : index)
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={isActive}
                  >
                    <span className="text-xl font-semibold tracking-[-0.02em] text-[#1F2933] md:text-[21px]">
                      {reason.title}
                    </span>

                    <span className="ml-4 text-lg font-normal text-[#111111]">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  {isActive && (
                    <div className="pb-5">
                      <p className="max-w-md text-[15px] leading-[1.6] text-[#858080] md:text-[16px]">
                        {reason.description}
                      </p>

                      {reason.points.length > 0 && (
                        <ul className="mt-4 list-disc space-y-1 pl-5 text-[13px] leading-[1.6] text-[#858080] md:text-[14px]">
                          {reason.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Image and testimonial */}
          <div className="relative mx-auto -mt-8 w-full max-w-[360px] md:mx-0 md:-mt-34 md:translate-x-18 md:max-w-[450px]">
            <div className="overflow-hidden rounded-t-[7px] rounded-b-[3px]">
                <img
                src={sandraImage}
                alt="Sandra Moraa, Founder and CEO of Morsan Africa"
                className="block aspect-[0.78] w-full object-cover object-top"
                />
            </div>

            {/* Testimonial card */}
            <div
            className="
                absolute
                -bottom-6
                left-[-8px]
                w-[340px]
                rounded-[4px]
                bg-white
                px-6
                py-5
                shadow-[0_13px_42px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_22px_52px_rgba(0,0,0,0.28)]
                sm:left-[-24px]
                sm:w-[300px]
              "
            >
            <p className="text-[14px] leading-[1.45] text-[#858080]">
                “Success in business isn’t about having all the answers—it’s
                about asking the right questions, making informed decisions,
                and executing with discipline.”
            </p>

            <div className="mt-4 flex items-center gap-3">
                <img
                src={sandramImage}
                alt="Sandra Moraa"
                className="h-9 w-9 rounded-full object-cover object-top"
                />

                <div>
                <p className="text-[15px] font-semibold leading-tight text-[#1F2933]">
                    Sandra Moraa
                </p>

                <p className="text-[12px] leading-tight text-[#858080]">
                    Founder and CEO Morsan Africa
                </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;