import { useState } from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GavelIcon from "@mui/icons-material/Gavel";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const services = [
  {
    title: "HR Strategy & Advisory",
    description:
      "Practical HR guidance aligned with your business goals and workforce needs.",
    details:
      "We help leadership teams shape people strategies, strengthen workforce planning, improve employee structures, and make informed decisions that support long-term organizational performance and growth.",
    icon: <TrackChangesIcon />,
  },

  {
    title: "Business Strategy & Growth",
    description:
      "Strategic support to clarify priorities and turn growth goals into action.",
    details:
      "We work with organizations to assess opportunities, clarify strategic priorities, strengthen their market position, and develop practical growth plans that connect business objectives with measurable action and sustainable results.",
    icon: <TrendingUpIcon />,
  },

  {
    title: "Accounting & Financial Advisory",
    description:
      "Financial support that improves visibility and strengthens business decisions.",
    details:
      "Our support covers accounting, financial reporting, budgeting, analysis, and planning, helping leadership teams understand financial performance, manage resources effectively, and make better-informed business decisions.",
    icon: <AttachMoneyIcon />,
  },

  {
    title: "Operations & Process Improvement",
    description:
      "Smarter processes and workflows that improve efficiency and accountability.",
    details:
      "We review how work gets done across the organization, identify bottlenecks and inefficiencies, and improve processes, workflows, and operating structures to create more consistent, efficient, and accountable day-to-day operations.",
    icon: <AccountTreeIcon />,
  },

  {
    title: "Organizational Design & Structure",
    description:
      "Clearer roles, reporting lines, and decision-making across the organization.",
    details:
      "We design practical organizational structures that clarify roles, responsibilities, reporting lines, and decision-making, helping leadership teams improve coordination, reduce overlaps, and create stronger accountability across the business.",
    icon: <CorporateFareIcon />,
  },

  {
    title: "Corporate Governance & Compliance",
    description:
      "Governance frameworks that strengthen oversight and manage organizational risk.",
    details:
      "We help organizations establish practical governance and compliance frameworks that clarify accountability, strengthen oversight, improve internal controls, manage organizational risk, and support responsible and sustainable business operations.",
    icon: <GavelIcon />,
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);

  return (
    <section id="services" className="scroll-mt-24 bg-[#F0F4F8] px-6 py-28 md:py-32 lg:px-12 lg:py-36" data-navbar-theme="light">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#C9A227] px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
            Services
          </span>

          <h2 className="mt-7 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#001C43] sm:text-4xl md:text-[42px]">
            Innovative solutions for 
            <br className="hidden sm:block" />
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
                  text-[#001C43]
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

                <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#001C43]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-[320px] text-[14px] leading-[1.6] text-[#858080]">
                  {service.description}
                </p>

                {/* Learn more */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
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
                    hover:gap-4
                  "
                >
                  <span className="h-px w-6 bg-[#C9A227]" />
                  Learn More
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#001C43]/55 px-6 py-8"
          role="presentation"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.2)] sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-5 top-5 text-2xl leading-none text-[#666666] transition-colors hover:text-[#001C43]"
              aria-label="Close service details"
            >
              &times;
            </button>

            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
              Service Details
            </span>
            <h3 id="service-modal-title" className="mt-4 pr-8 text-2xl font-semibold leading-tight text-[#001C43]">
              {selectedService.title}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#666666]">
              {selectedService.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;