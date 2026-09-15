import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <section
      className="overflow-hidden bg-[#F4EEEE] px-6 pb-24 pt-32 md:pb-32 md:pt-40 lg:px-12"
      data-navbar-theme="light"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[760px]">

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
            Case Studies
          </span>

          <h2
            className="
              mt-7
              text-[52px]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-[#1F2933]
              md:text-[62px]
            "
          >
            Real problems.
            <br />
            Real clients. Real results.
          </h2>

          <p className="mt-8 max-w-[650px] text-[15px] leading-[1.7] text-[#31506A] md:text-[17px]">
            We&apos;ve worked across industries, company sizes, and challenge
            types. Here&apos;s a look at what we&apos;ve helped our clients achieve,
            and how we did it.
          </p>
        </div>

        <div className="mt-16 space-y-6 md:mt-24 md:space-y-8">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.title}
              className="group relative h-[500px] overflow-hidden bg-[#171817] md:h-[560px]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="absolute bottom-8 left-8 top-8 flex w-[min(340px,calc(100%-4rem))] flex-col bg-black/65 p-7 text-white backdrop-blur-[2px] md:bottom-8 md:left-8 md:top-8 md:w-[340px] md:p-8">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#D6B77A] md:text-[13px]">
                    {caseStudy.category}
                  </p>
                  <h2 className="mt-5 max-w-[285px] text-[29px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[32px]">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-5 max-w-[285px] text-[14px] leading-[1.65] text-white/70 md:text-[15px]">
                    {caseStudy.description}
                  </p>
                </div>

                <a
                  href={`/case-studies/${caseStudy.slug}`}
                  className="mt-auto inline-flex w-fit items-center gap-4 text-[10px] font-semibold text-[#D6B77A] transition-colors duration-200 hover:text-white md:text-[11px]"
                >
                  Read Full Story
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;