import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of organizations do you work with?",
    answer:
      "Morsan Consulting Group works with startups, SMEs, and multi-entity groups across sectors including fintech, lending, real estate, retail, education, and holding groups.",
  },
  {
    question: "What services does Morsan Consulting Group provide?",
    answer:
      "Morsan delivers through two connected practices: Human Resource Consulting and Business Consulting. Services include HR strategy, recruitment, compensation and benefits, policy and SOP development, performance management, payroll, HR audits, outsourcing, organizational design, growth strategy, change management, corporate governance, business processes, and strategic reporting.",
  },
  {
    question: "How does your consulting approach work?",
    answer:
      "Our engagements follow a four-stage approach: Diagnose, Design, Deploy, and Sustain. We first understand the organization's current state, build the required frameworks and structures, hand over practical working tools with training, and remain engaged where ongoing advisory or reviews are needed.",
  },
  {
    question: "Do you only provide HR consulting?",
    answer:
      "No. Morsan has expanded from its founding HR practice into a full-spectrum consulting firm. Alongside Human Resource Consulting, we provide Business Consulting covering organizational design, growth strategy, change management, governance, business processes, strategic reporting, and workplace culture.",
  },
  {
    question: "What makes Morsan different from a traditional consulting firm?",
    answer:
      "We focus on practical solutions that can actually be implemented. Every engagement is shaped around the client's sector, size, and stage, with deliverables such as policies, structures, templates, reports, workbooks, and operating tools that the client's own team can use.",
  },
  {
    question: "Do you work with organizations outside Kenya?",
    answer:
      "Yes. Morsan has extended its consulting work beyond Kenya, including delivering compensation and workforce frameworks for organizations expanding into Uganda. Our approach is designed to adapt to the operating context of organizations across Africa.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="overflow-hidden bg-[#F4EEEE] px-6 py-20 md:py-24 lg:px-12 lg:py-28" data-navbar-theme="light">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">

          {/* Heading */}
          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C9A227]/60
                bg-[#C9A227]/5
                px-4
                py-1.5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#C9A227]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
              FAQ
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#1F2933]
                md:text-[42px]
                lg:text-[48px]
              "
            >
              You have questions.
              <br />
              <span className="text-[#C9A227]">
                We have answers.
              </span>
            </h2>
          </div>
        </div>

        {/* FAQ content */}
        <div
          className="
            mt-10
            grid
            gap-12
            md:mt-20
            md:grid-cols-[250px_1fr]
            md:gap-14
            lg:grid-cols-[410px_1fr]
            lg:gap-16
          "
        >

          {/* Left content */}
          <div>
            <p
              className="
                max-w-[250px]
                text-[11px]
                leading-[1.7]
                text-[#4F4A4A]
                md:text-[15px]
              "
            >
              Not sure where to start? Talk to our team about your
              organization's people, structure, governance, or growth
              needs and let's find the right approach together.
            </p>

            <a
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-[4px]
                bg-[#C9A227]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:gap-4
                hover:bg-[#A8831D]
              "
            >
              <span>Talk to Us</span>

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

          {/* FAQ list */}
          <div >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    border-t
                    border-[#C9A227]/20
                    last:border-b
                  "
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                    "
                    aria-expanded={isOpen}
                  >
                    <span
                      className="
                        text-[12px]
                        font-semibold
                        leading-[1.5]
                        text-[#222222]
                        transition-colors
                        duration-300
                        hover:text-[#C9A227]
                        md:text-[18px]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Plus / minus icon */}
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C9A227]/30
                        text-[15px]
                        font-normal
                        text-[#C9A227]
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      overflow-hidden
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0">
                      <p
                        className="
                          max-w-[700px]
                          pb-6
                          pr-8
                          text-[10px]
                          leading-[1.75]
                          text-[#6F6A6A]
                          md:text-[14px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;