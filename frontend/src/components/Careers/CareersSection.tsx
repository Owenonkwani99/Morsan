import { useState } from "react";

interface Job {
  title: string;
  tags: string[];
  description: string;
}

const jobs: Job[] = [
  // --------------------------------------------------
  // EXISTING POSITIONS
  // --------------------------------------------------
  {
    title: "Consultant",
    tags: ["Entry Point", "Hybrid"],
    description:
      "Consultants work on project teams conducting analysis, developing recommendations, and supporting implementation.",
  },
  {
    title: "Senior Consultant",
    tags: ["2-4 Years Consulting Experience", "Remote"],
    description:
      "Senior Consultants lead specific workstreams, manage client relationships, and mentor junior team members.",
  },

  // --------------------------------------------------
  // ADDITIONAL POSITIONS
  // --------------------------------------------------
  {
    title: "HR Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "HR Consultants advise clients on people strategy, policies, employee relations, performance management, and organizational development.",
  },
  {
    title: "Business Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Business Consultants help organizations improve their structures, processes, operating models, and strategic performance.",
  },
  {
    title: "HR Advisory Associate",
    tags: ["Entry Point", "Hybrid"],
    description:
      "Associates support HR advisory engagements through research, documentation, analysis, and preparation of practical client deliverables.",
  },
  {
    title: "Organizational Design Consultant",
    tags: ["Mid-Level", "Remote"],
    description:
      "Organizational Design Consultants develop structures, role architectures, and operating models aligned with an organization's growth stage.",
  },
  {
    title: "Talent Acquisition Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Talent Acquisition Consultants support clients through role scoping, recruitment strategy, candidate assessment, shortlisting, and offer management.",
  },
  {
    title: "Compensation Consultant",
    tags: ["Specialist", "Hybrid"],
    description:
      "Compensation Consultants support job evaluation, grading, salary structuring, salary reviews, and compensation framework development.",
  },
  {
    title: "HR Policy Consultant",
    tags: ["Mid-Level", "Remote"],
    description:
      "HR Policy Consultants develop practical policy libraries, handbooks, and SOPs aligned with organizational requirements and Kenyan employment practice.",
  },
  {
    title: "Business Strategy Associate",
    tags: ["Entry Point", "Hybrid"],
    description:
      "Business Strategy Associates support research, strategic analysis, planning, and preparation of recommendations for leadership teams and boards.",
  },
  {
    title: "Governance Consultant",
    tags: ["Senior Level", "Remote"],
    description:
      "Governance Consultants advise boards and multi-entity organizations on governance frameworks, structures, accountability, and decision-making.",
  },
  {
    title: "Change Management Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Change Management Consultants support organizations through restructuring, transition, rebranding, and other significant organizational changes.",
  },

  // --------------------------------------------------
  // POSITIONS 13 - 24
  // --------------------------------------------------
  {
    title: "HR Audit Consultant",
    tags: ["Specialist", "Hybrid"],
    description:
      "HR Audit Consultants independently review HR practices, identify compliance and operational risks, and develop practical improvement roadmaps.",
  },
  {
    title: "Payroll & HR Administration Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "This role supports clients with payroll processes, HR administration, statutory compliance, and systems that improve operational accuracy.",
  },
  {
    title: "Learning & Development Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Learning & Development Consultants design and facilitate practical training programs for HR teams, managers, and employees.",
  },
  {
    title: "Employee Relations Consultant",
    tags: ["Specialist", "Remote"],
    description:
      "Employee Relations Consultants support organizations with grievance handling, disciplinary processes, workplace relations, and structured employee exits.",
  },
  {
    title: "Workforce Planning Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Workforce Planning Consultants help organizations align headcount, staffing models, manpower budgets, and workforce requirements with business growth.",
  },
  {
    title: "HR Technology Consultant",
    tags: ["Specialist", "Remote"],
    description:
      "HR Technology Consultants help clients evaluate and implement HR systems that fit their organizational size, operating model, and people processes.",
  },
  {
    title: "Process & SOP Consultant",
    tags: ["Mid-Level", "Hybrid"],
    description:
      "Process Consultants map business processes and develop practical SOP libraries and operating manuals that help teams work consistently at scale.",
  },
  {
    title: "Strategic Reporting Consultant",
    tags: ["Mid-Level", "Remote"],
    description:
      "Strategic Reporting Consultants develop reporting systems, performance frameworks, workbooks, and management tools that support better decision-making.",
  },
  {
    title: "Project Consultant",
    tags: ["Entry Point", "Hybrid"],
    description:
      "Project Consultants support consulting engagements from research and analysis through documentation, implementation, and client handover.",
  },
  {
    title: "Research & Insights Associate",
    tags: ["Entry Point", "Remote"],
    description:
      "Research & Insights Associates gather, analyze, and synthesize information to support consulting recommendations and client decision-making.",
  },
  {
    title: "Client Engagement Manager",
    tags: ["Senior Level", "Hybrid"],
    description:
      "Client Engagement Managers coordinate client relationships, consulting workstreams, deliverables, timelines, and communication across engagements.",
  },
  {
    title: "Management Consultant",
    tags: ["3-6 Years Experience", "Hybrid"],
    description:
      "Management Consultants work with leadership teams to diagnose business challenges, develop strategic solutions, and support organizational transformation.",
  },

  // --------------------------------------------------
  // POSITIONS 25 - 26
  // --------------------------------------------------
  {
    title: "Associate Consultant",
    tags: ["Entry Point", "Hybrid"],
    description:
      "Associate Consultants work alongside experienced consultants on research, analysis, client deliverables, and implementation support.",
  },
  {
    title: "Principal Consultant",
    tags: ["Senior Level", "Remote"],
    description:
      "Principal Consultants provide senior-level advisory, lead complex engagements, shape client strategy, and guide consulting teams through delivery.",
  },
];

const CareersSection = () => {
  const [visibleJobs, setVisibleJobs] = useState(12);

  const loadMore = () => {
    setVisibleJobs((current) => Math.min(current + 12, jobs.length));
  };

  const hasMoreJobs = visibleJobs < jobs.length;

  return (
    <section className="overflow-hidden bg-[#F4EEEE] px-6 py-20 md:py-24 lg:px-12 lg:py-37">
      <div className="mx-auto max-w-9xl">

        {/* Section heading */}
        <div className="max-w-[650px]">

          {/* Career label */}
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
            Career
          </span>

          {/* Main heading */}
          <h2
            className="
              mt-7
              text-[42px]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-[#1F2933]
              md:text-[42px]
            "
          >
            You're capable. You
            <br />
            just need the right role.
          </h2>
        </div>

        {/* Job listings */}
        <div
          className="
            mt-14
            grid
            gap-5
            md:grid-cols-2
            md:gap-5
          "
        >
          {jobs.slice(0, visibleJobs).map((job, index) => (
            <div
              key={`${job.title}-${index}`}
              className="
                flex
                min-h-[195px]
                flex-col
                justify-between
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(31,41,51,0.08)]
                md:p-8
              "
            >
              {/* Job top */}
              <div>
                <div className="flex items-start justify-between gap-5">

                  {/* Job title */}
                  <h3
                    className="
                      text-[20px]
                      font-semibold
                      leading-[1.3]
                      tracking-[-0.02em]
                      text-[#1F2933]
                    "
                  >
                    {job.title}
                  </h3>

                  {/* Apply button */}
                  <a
                    href="/contact"
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      gap-4
                      rounded-[4px]
                      bg-[#1F2933]
                      px-5
                      py-3
                      text-[13px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:gap-5
                      hover:bg-[#C9A227]
                    "
                  >
                    <span>Apply</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4.5 w-4.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </a>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-[#F4EEEE]
                        px-4
                        py-2.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.13em]
                        text-[#1F2933]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-[470px]
                    text-[14px]
                    leading-[1.7]
                    text-[#6F6A6A]
                    md:text-[14px]
                  "
                >
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {hasMoreJobs && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={loadMore}
              className="
                inline-flex
                items-center
                gap-4
                rounded-[4px]
                border
                border-[#C9A227]
                bg-transparent
                px-7
                py-3.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#C9A227]
                transition-all
                duration-300
                hover:bg-[#C9A227]
                hover:text-white
              "
            >
              <span>Load More</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path d="M12 5v14" />
                <path d="m6 13 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Jobs count */}
        <div className="mt-5 text-center">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-[#8A8282]
            "
          >
            Showing {Math.min(visibleJobs, jobs.length)} of {jobs.length}{" "}
            opportunities
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;