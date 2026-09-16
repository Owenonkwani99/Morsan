import operationalCase from "../../assets/casestudies/operationalcase.jpg";
import homeabout from "../../assets/homeabout.jpg";
import owenImage from "../../assets/owen.jpeg";
import giftImage from "../../assets/gift.jpeg";

const CaseStudiesSection = () => {
  return (
    <section className="overflow-hidden bg-[#F0F4F8] px-6 pb-28 pt-20 md:pb-32 md:pt-24 lg:px-12 lg:pb-36 lg:pt-28" data-navbar-theme="light">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-[560px] text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#C9A227]/60
              px-4
              py-1.5
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#C9A227]
            "
          >
            Case Studies
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#001C43]
              md:text-[42px]
            "
          >
            Real problems. Real
            <br />
            clients. Real results.
          </h2>
        </div>

        {/* Featured case study */}
        <div className="mt-16">

          {/* Case study image */}
          <div className="relative overflow-hidden rounded-[2px]">
            <img
              src={operationalCase}
              alt="Operational consulting case study"
              className="
                h-[500px]
                w-full
                object-cover
                md:h-[600px]
                lg:h-[680px]
              "
            />

            {/* Overall image overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/45
                via-black/10
                to-transparent
              "
            />

            {/* Dark transparent content container */}
            <div
              className="
                absolute
                bottom-8
                left-8
                flex
                h-[430px]
                w-[340px]
                flex-col
                bg-black/55
                p-8
                text-white
                backdrop-blur-[2px]
                md:bottom-10
                md:left-10
                md:h-[600px]
                md:w-[440px]
                md:p-9
              "
            >
              {/* Category */}
              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#D6B77A]
                "
              >
                Operational Excellence
              </p>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-white
                  md:text-3xl
                "
              >
                Building systems that
                <br />
                improve performance
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  text-[13px]
                  leading-[1.65]
                  text-white/70
                  md:text-[14px]
                "
              >
                Practical operational improvements designed to strengthen
                processes, improve accountability, and create sustainable
                business performance.
              </p>

              {/* Read full story */}
              <a
                href="/case-studies/operational-excellence"
                className="
                  mt-auto
                  inline-flex
                  items-center
                  gap-4
                  text-[12px]
                  font-semibold
                  text-[#D6B77A]
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                <span>Read Full Story</span>

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
          </div>

          {/* Gap between case study and result strip */}
          <div className="h-6" />

          {/* Result strip */}
          <div
            className="
              flex
              flex-col
              gap-6
              bg-[#E8E0DF]
              px-7
              py-6
              md:flex-row
              md:items-center
              md:justify-between
              md:px-9
            "
          >
            {/* Client / result information */}
            <div className="flex items-center gap-4">

              <div className="flex -space-x-2">
                {/* Owen - outer avatar */}
                <div className="relative z-10 h-15 w-15 overflow-hidden rounded-full border-2 border-[#E8E0DF]">
                  <img
                    src={owenImage}
                    alt="Owen"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Gift - inner avatar */}
                <div className="relative h-15 w-15 overflow-hidden rounded-full border-2 border-[#E8E0DF]">
                  <img
                    src={giftImage}
                    alt="Gift"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p
                  className="
                    text-[14px]
                    font-semibold
                    text-[#001C43]
                    md:text-[20px]
                  "
                >
                  Trusted by 100+ businesses across industries
                </p>

                <p
                  className="
                    mt-0.5
                    text-[11px]
                    text-[#777777]
                    md:text-[14px]
                  "
                >
                  "From mid-market firms to global enterprises, we've helped leaders solve what matters most."
                </p>
              </div>
            </div>

            {/* Result button */}
            <a
              href="/case-studies"
              className="
                inline-flex
                w-fit
                items-center
                gap-4
                rounded-[4px]
                bg-[#C9A227]
                px-6
                py-3.5
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:gap-4
                hover:bg-[#A8831D]
              "
            >
              <span>View Case Study</span>

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
        </div>

        {/* About Us section */}
        <div
          className="
            mt-24
            grid
            items-center
            gap-14
            md:grid-cols-2
            md:gap-14
            lg:mt-28
            lg:gap-24
          "
        >

          {/* About Us image */}
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={homeabout}
              alt="About Morsan Africa"
              className="
                h-[430px]
                w-full
                object-cover
                md:h-[500px]
              "
            />
          </div>

          {/* About Us content */}
          <div className="max-w-[540px]">

            {/* Label */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#C9A227]/60
                px-6
                py-2
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#C9A227]
              "
            >
              About Us
            </span>

            {/* Heading */}
            <h3
              className="
                mt-7
                text-4xl
                font-semibold
                leading-[1.12]
                tracking-[-0.035em]
                text-[#001C43]
                md:text-[42px]
              "
            >
              Partner With Experts Who
              <br />
              Understand Your Business
            </h3>

            {/* Description */}
            <p
              className="
                mt-6
                text-[14px]
                leading-[1.75]
                text-[#6F6A6A]
                md:text-[16px]
              "
            >
              Morsan Consulting Group is a business advisory firm helping organizations
              strengthen their people, operations, and business performance.
              We work alongside leadership teams to understand the real
              challenges behind the numbers, then develop practical solutions
              that can be implemented and sustained.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="
                mt-9
                inline-flex
                items-center
                gap-4
                rounded-[4px]
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
              <span>Learn More About Us</span>

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
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;