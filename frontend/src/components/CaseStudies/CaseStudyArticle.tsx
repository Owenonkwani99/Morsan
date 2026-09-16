import { caseStudies, type CaseStudy } from "../../data/caseStudies";

type CaseStudyArticleProps = {
  caseStudy: CaseStudy;
};

const CaseStudyArticle = ({ caseStudy }: CaseStudyArticleProps) => {
  const currentStudyIndex = caseStudies.findIndex((study) => study.slug === caseStudy.slug);
  const relatedCaseStudy = caseStudies[(currentStudyIndex + 1) % caseStudies.length];
  const relatedStudy = relatedCaseStudy.slug;

  return (
    <main className="bg-[#F8F8F8] px-6 pb-24 pt-32 text-[#171717] md:px-10 md:pt-40 lg:px-12" data-navbar-theme="light">
      <article className="mx-auto max-w-[1500px]">
        <div className="text-[11px] text-[#777] md:text-[14px]">
          <a href="/case-studies" className="hover:text-[#C9A227]">Case Studies</a>
          <span className="mx-2">›</span>
          <span>{caseStudy.title}</span>
        </div>

        <header className="mt-8 max-w-[760px]">
          <h1 className="text-[48px] font-medium leading-[0.98] tracking-[-0.055em] text-[#001C43] md:text-[42px]">
            {caseStudy.slug === "food-4-education" ? (
              <>More Meals. Lower Costs.<br />Greater Impact.</>
            ) : (
              caseStudy.title
            )}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#555] md:text-[14px]">
            <span>{caseStudy.date}</span>
            <span className="text-[#B0B0B0]">|</span>
            <span>{caseStudy.category}</span>
          </div>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-start">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="h-[300px] w-full rounded-[2px] object-cover sm:h-[420px] lg:h-[500px]"
          />
          <aside className="bg-[#171615] p-7 text-white lg:min-h-[145px]">
            <h2 className="text-[16px] font-medium tracking-[-0.02em]">Ready to get started?</h2>
            <p className="mt-5 text-[14px] leading-[1.55] text-white/75">
              Whether you have a project in mind or just want to explore what is possible, let&apos;s have a conversation.
            </p>
            <a href="/contact" className="mt-5 inline-flex items-center gap-4 rounded-[3px] bg-white px-4 py-3 text-[13px] text-[#171615] hover:bg-[#D6B77A]">
              Get In Touch <span className="text-sm">→</span>
            </a>
          </aside>
        </div>

        <div className="mt-10 max-w-[730px] space-y-5 text-[15px] leading-[1.7] text-[#555] md:text-[16px]">
          {caseStudy.intro.map((paragraph) => {
            const [label, ...rest] = paragraph.split(" - ");
            return (
              <p key={paragraph}>
                {rest.length > 0 ? <strong className="text-[#001C43]">{label} - </strong> : null}
                {rest.length > 0 ? rest.join(" - ") : paragraph}
              </p>
            );
          })}
        </div>

        <blockquote className="mt-12 max-w-[730px] bg-white px-7 py-7 md:px-9 md:py-8">
          <p className="text-[21px] font-medium leading-[1.25] tracking-[-0.025em] text-[#001C43] md:text-[24px]">
            &quot;{caseStudy.quote}&quot;
          </p>
          <footer className="mt-7 flex items-center gap-3 text-[12px] text-[#666] md:text-[13px]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D6B77A] font-semibold text-[#001C43]">
              {caseStudy.quoteName.split(" ").map((part) => part[0]).join("")}
            </span>
            <span><strong className="block text-[#001C43]">{caseStudy.quoteName}</strong>{caseStudy.quoteRole}</span>
          </footer>
        </blockquote>

        <section className="mt-28">
          <h2 className="text-[32px] font-medium leading-none tracking-[-0.05em] md:text-[40px]">You also might like</h2>
          <a href={`/case-studies/${relatedStudy}`} className="group mt-10 block max-w-[940px] overflow-hidden bg-[#171615]">
            <div className="relative h-[360px] md:h-[470px]">
              <img src={relatedCaseStudy?.image} alt={relatedCaseStudy?.title} className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex w-[300px] flex-col p-7 text-white md:w-[390px] md:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D6B77A]">{relatedCaseStudy?.category}</p>
                <h3 className="mt-5 text-[25px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[30px]">{relatedCaseStudy?.title}</h3>
                <span className="mt-auto text-[13px] font-semibold text-[#D6B77A]">Read Full Story <span className="ml-2 text-base">→</span></span>
              </div>
            </div>
          </a>
        </section>
      </article>
    </main>
  );
};

export default CaseStudyArticle;