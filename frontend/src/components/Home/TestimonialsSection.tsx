import { useState } from "react";

const testimonials = [
  {
    quote:
      "As Broadwalk Residency, we’ve had a great experience with Morsan HR since 2023. Their professionalism, attention to detail, and genuine care for our team have truly stood out. They handle our concerns promptly and efficiently. Highly recommended!",
    name: "Faith Wausi",
    role: "Manager, Broadwalk Residency",
  },
  {
    quote:
      "Great and professional advice. We've enjoyed a strong, ongoing partnership for years, and their consistency and support have been outstanding. Keep it up!",
    name: "Jason Mbari",
    role: "Director, Kapu Digital Limited",
  },
  // {
  //   quote:
  //     "They are true professionals with an excellent executive recruitment team that understands both client needs and candidate potential. Their approach is efficient, thoughtful, and results-driven.",
  //   name: "Samson Oduor",
  //   role: "HR Advisory Client",
  // },
  {
    quote:
      "Morsan HR was incredibly professional and supportive in helping me secure a job that matches my skills and goals. Their team understood my needs and guided me through the process efficiently. I’m truly grateful for their help!",
    name: "Yvonne Nyokabi",
    role: "Recruitment Client",
  },
];

/*
  Repeat the testimonials several times so the carousel
  can continue moving without reaching an end.
*/
const repeatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(5);

  const previousTestimonial = () => {
    setActiveIndex((current) => current - 1);
  };

  const nextTestimonial = () => {
    setActiveIndex((current) => current + 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex >= testimonials.length * 3) {
      setActiveIndex(activeIndex - testimonials.length);
    }

    if (activeIndex < testimonials.length) {
      setActiveIndex(activeIndex + testimonials.length);
    }
  };

  return (
    <section className="overflow-hidden bg-[#F0F4F8] px-6 py-20 md:py-24 lg:px-12 lg:py-28" data-navbar-theme="light">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-[600px] text-center">
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
            Testimonials
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#001C43]
              md:text-[42px]
            "
          >
            What Our Clients Say
            <br />
            About Working With Us
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mt-12 overflow-hidden">
          <div
            className="
              flex
              items-stretch
              gap-5
              transition-transform
              duration-500
              ease-in-out
            "
            style={{
              transform: `translateX(calc(24% - ${activeIndex * 54}%))`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="
                  w-[52%]
                  min-w-[52%]
                  shrink-0
                  bg-white
                  px-6
                  py-7
                  md:px-8
                  md:py-8
                "
              >
                <div className="flex h-full min-h-[230px] flex-col">

                  {/* Opening Quote Mark */}
                  <span
                    className="
                      font-serif
                      text-[55px]
                      font-bold
                      leading-[0.6]
                      text-[#C9A227]
                    "
                  >
                    “
                  </span>

                  {/* Testimonial */}
                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-semibold
                      leading-[1.65]
                      text-[#444444]
                      md:text-[19px]
                      md:leading-[1.7]
                    "
                  >
                    “{testimonial.quote}”
                  </p>

                  {/* Client Information */}
                  <div className="mt-auto pt-7">
                    <div className="mb-4 h-px w-full bg-[#E7E2DE]" />

                    <p className="text-[18px] font-semibold text-[#001C43]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[14px] text-[#858080]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          className="
            mt-8
            flex
            justify-end
            gap-3
            lg:pr-[25.5%]
          "
        >
          {/* Previous */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-[3px]
              bg-[#C9A227]
              text-white
              transition-all
              duration-300
              hover:bg-[#A8831D]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3 w-3"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-[3px]
              bg-[#C9A227]
              text-white
              transition-all
              duration-300
              hover:bg-[#A8831D]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3 w-3"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;