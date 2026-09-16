import aboutusImage from "../../assets/aboutus.jpg";
import aboutImage from "../../assets/about.jpg";
import aboutussImage from "../../assets/aboutuss.jpg";

const AboutUs = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO / INTRODUCTION
      ========================================================== */}
      <section className="px-6 pb-24 pt-16 md:pb-32 md:pt-20 lg:px-12 lg:pb-36 lg:pt-44" data-navbar-theme="light">
        <div className="mx-auto max-w-7xl">

          {/* Main heading */}
          <div className="max-w-[700px]">
            <h1
              className="
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#001C43]
                sm:text-6xl
                md:text-[68px]
                lg:text-[72px]
              "
            >
              Built on expertise.
              <br />
              Driven by results.
            </h1>
          </div>

          {/* Introduction + images */}
          <div
            className="
              mt-16
              grid
              items-center
              gap-12
              md:mt-20
              md:grid-cols-[1fr_1.15fr]
              md:gap-14
              lg:mt-20
              lg:grid-cols-[1fr_1.2fr]
              lg:gap-20
            "
          >

            {/* LEFT - Company introduction */}
            <div className="max-w-[500px]">

              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-[1.55]
                  text-[#001C43]
                  md:text-[18px]
                "
              >
                Morsan Consulting Group is a Nairobi-based consulting firm
                helping organizations build stronger people systems,
                organizational structures, and businesses that are positioned
                for sustainable growth.
              </p>

              <p
                className="
                  mt-6
                  text-[13px]
                  leading-[1.7]
                  text-[#7A7F82]
                  md:text-[15px]
                "
              >
                Founded by Sandra Moraa, a Certified Human Resource
                Practitioner (CHRP), Morsan began as a focused HR consulting
                practice and has grown into a broader consulting partner for
                startups, SMEs, and multi-entity groups.
              </p>

              <p
                className="
                  mt-4
                  text-[13px]
                  leading-[1.7]
                  text-[#7A7F82]
                  md:text-[14px]
                "
              >
                Today, our work brings together Human Resource Consulting and
                Business Consulting, giving leadership teams one partner for
                people strategy, organizational structure, governance, and
                business performance.
              </p>

            </div>

            {/* RIGHT - Images */}
            <div
              className="
                flex
                items-start
                justify-end
                gap-6
                md:gap-7
              "
            >

              {/* Large image */}
              <div
                className="
                  w-[68%]
                  overflow-hidden
                  rounded-[3px]
                "
              >
                <img
                  src={aboutusImage}
                  alt="Morsan Consulting Group"
                  className="
                    h-[430px]
                    w-full
                    object-cover
                    md:h-[500px]
                    lg:h-[560px]
                  "
                />
              </div>

              {/* Small image */}
              <div
                className="
                  mt-0
                  w-[29%]
                  overflow-hidden
                  rounded-[3px]
                "
              >
                <img
                  src={aboutImage}
                  alt="Morsan Consulting Group team"
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    md:h-[270px]
                    lg:h-[300px]
                  "
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          ABOUT / TEAM SECTION
      ========================================================== */}
      <section className="px-6 pb-28 pt-8 md:pb-36 lg:px-12 lg:pt-10" data-navbar-theme="light">
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              items-center
              gap-14
              md:grid-cols-[1.05fr_0.95fr]
              md:gap-14
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-20
            "
          >

            {/* LEFT - Large image */}
            <div className="overflow-hidden rounded-[3px]">
              <img
                src={aboutussImage}
                alt="Morsan Consulting Group"
                className="
                  h-[500px]
                  w-full
                  object-cover
                  md:h-[600px]
                  lg:h-[650px]
                "
              />
            </div>


            {/* RIGHT - Content */}
            <div className="max-w-[560px]">

              {/* Label */}
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
                About Us
              </span>


              {/* Heading */}
              <h2
                className="
                  mt-7
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#001C43]
                  md:text-[44px]
                  lg:text-[46px]
                "
              >
                One Partner for People,
                <br />
                Structure, and Growth
              </h2>


              {/* Description */}
              <p
                className="
                  mt-6
                  text-[14px]
                  leading-[1.75]
                  text-[#73787C]
                  md:text-[15px]
                "
              >
                Morsan brings together strategic HR expertise and business
                consulting to help organizations make better decisions,
                strengthen their structures, and build systems that support
                sustainable performance.
              </p>


              {/* Highlight */}
              <div className="mt-8">

                <p
                  className="
                    text-[14px]
                    font-semibold
                    text-[#001C43]
                    md:text-[15px]
                  "
                >
                  Practical expertise. Stronger organizations.
                </p>


                {/* Points */}
                <div className="mt-5 space-y-3.5">

                  {/* Point 1 */}
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        mt-[2px]
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="h-2.5 w-2.5"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <p className="text-[13px] leading-[1.5] text-[#62676B] md:text-[14px]">
                      HR strategy and advisory grounded in practical business
                      needs.
                    </p>
                  </div>


                  {/* Point 2 */}
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        mt-[2px]
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="h-2.5 w-2.5"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <p className="text-[13px] leading-[1.5] text-[#62676B] md:text-[14px]">
                      Organizational structures and systems designed to scale
                      with the business.
                    </p>
                  </div>


                  {/* Point 3 */}
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        mt-[2px]
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="h-2.5 w-2.5"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <p className="text-[13px] leading-[1.5] text-[#62676B] md:text-[14px]">
                      Governance and business advisory that gives leadership
                      teams greater clarity and confidence.
                    </p>
                  </div>


                  {/* Point 4 */}
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        mt-[2px]
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="h-2.5 w-2.5"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <p className="text-[13px] leading-[1.5] text-[#62676B] md:text-[14px]">
                      Practical deliverables that client teams can implement,
                      operate, and sustain.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          OUR FOUNDATION
      ========================================================== */}
      <section className="bg-[#F0F4F8] px-6 py-24 md:py-28 lg:px-12" data-navbar-theme="light">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-[650px]">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#C9A227]/60
                px-5
                py-1.5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#C9A227]
              "
            >
              Our Foundation
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-semibold
                leading-[1.1]
                tracking-[-0.04em]
                text-[#001C43]
                md:text-[46px]
              "
            >
              Built on principles that
              <br />
              guide how we work.
            </h2>
          </div>


          <div
            className="
              mt-14
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-6
            "
          >

            {[
              {
                title: "Integrity",
                text: "Advice grounded in law, evidence, and honesty.",
              },
              {
                title: "Excellence",
                text: "Every deliverable is built to be used, not shelved.",
              },
              {
                title: "Partnership",
                text: "We work alongside client teams, not at arm's length.",
              },
              {
                title: "Innovation",
                text: "Practical tools suited to how African businesses operate.",
              },
              {
                title: "Impact",
                text: "Success is measured by what changes after we leave.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="
                  border-t
                  border-[#001C43]/15
                  pt-5
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-semibold
                    text-[#001C43]
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.65]
                    text-[#73787C]
                  "
                >
                  {value.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;