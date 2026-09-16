import guideImage from "../../assets/blogs/guide.jpg";
import loveImage from "../../assets/blogs/love.jpg";
import restructureImage from "../../assets/blogs/restructure.jpg";
import recruitmentImage from "../../assets/blogs/recruitment.jpg";

const relatedBlogs = [
  {
    slug: "love",
    image: loveImage,
    title: "Lets talk about love languages ...at work.....",
    description:
      "Okay, hear me out. Your employees have love languages, too. And if you’re not speaking....",
  },
  {
    slug: "restructuring-hr-hero",
    image: restructureImage,
    title: "Company Restructuring: How HR Can Be the Hero (Not the Villain)",
    description:
      "Picture this: It’s 7:30 AM on a Monday. The office WhatsApp group is already exploding....",
  },
  {
    slug: "surviving-njaanuary",
    image: guideImage,
    title:
      "Surviving Njaanuary: The HR Guide to Getting Your Team Back on Track (Without Losing Your Mind)",
    description:
      "Ah, January. The month where your employees’ New Year’s resolutions meet the harsh reality of....",
  },
];

const recruitmentSections = [
  {
    title: "1. Skills Over CVs: The New Hiring Standard",
    paragraphs: [
      "Businesses are shifting from “What school did you attend?” to “What can you actually do?”",
      "This means skills-based hiring is becoming the new normal.",
    ],
    lead: "Why This Matters for SMEs:",
    items: [
      "You can access a wider pool of qualified candidates",
      "Hiring becomes faster and more objective",
      "Reduces bias in the selection process",
      "Helps you find talent that fits real business needs",
    ],
    tip: "Introduce skills assessments, short tasks, or work samples during hiring.",
  },
  {
    title: "2. AI Will Handle the Boring Stuff—Not Replace HR",
    paragraphs: [
      "Artificial Intelligence is transforming recruitment, but not in the way many fear.",
      "AI tools can now filter CVs, rank candidates, automate job posting, schedule interviews, and run first-round screening questions.",
      "This helps SMEs save time and reduce hiring costs, without losing the human touch.",
    ],
    tip: "Use AI to streamline processes, but keep final decisions human-led.",
  },
  {
    title: "3. Remote Work = Bigger Talent Pools",
    paragraphs: [
      "Your next best employee might not live in your city or even your country.",
      "Remote and hybrid work have unlocked access to wider talent pools, especially for tech roles, marketing, customer service, and admin and support.",
      "For SMEs, this means you can hire for quality, not just proximity.",
    ],
    tip: "Create flexible workplace policies that attract a modern workforce.",
  },
  {
    title: "4. Employer Branding Is No Longer Optional",
    paragraphs: [
      "Candidates research companies before they apply.",
      "If your brand is weak, you’ll lose good talent even if your offer is competitive.",
      "SMEs must invest in clear job descriptions, a strong online presence, showcasing culture and values, employee testimonials, and consistent social media content.",
    ],
    tip: "Share your company story online. People want to work where they feel connected.",
  },
  {
    title: "5. Faster Recruitment Wins",
    paragraphs: [
      "Top candidates exit the job market in 10–14 days.",
      "Slow hiring processes = lost talent.",
      "SMEs must simplify interview stages, give faster feedback, use digital tools for scheduling, and set clear hiring timelines.",
    ],
    tip: "Map a recruitment workflow that cuts delays and improves communication.",
  },
  {
    title: "6. Data-Driven Recruitment for Smarter Decisions",
    paragraphs: [
      "Tracking recruitment metrics is becoming essential.",
      "SMEs should monitor time to hire, cost per hire, candidate quality, offer acceptance rate, and turnover rate.",
      "Data removes guesswork and helps you improve hiring with every round.",
    ],
    tip: "Use simple HR dashboards or ATS tools to track performance.",
  },
  {
    title: "7. Outsourcing Recruitment Will Continue Growing",
    paragraphs: [
      "More SMEs are realizing that outsourcing recruitment saves time, money, and stress especially when hiring for hard-to-fill roles.",
      "HR consulting firms now support SMEs with talent sourcing, shortlisting, interviews, background checks, and onboarding support.",
      "This allows business owners to focus on growth—not CVs.",
    ],
    tip: "Partner with an HR consulting firm that understands your industry and business needs.",
  },
];

const FutureRecruitmentBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#001C43] [&_h2]:text-[#001C43] [&_h3]:text-[#001C43] [&_strong]:text-[#001C43]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#001C43] md:text-[42px] lg:text-[42px]">
            The Future of Recruitment: What SMEs Need to Know
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            The job market is evolving at a faster pace than ever. Here’s what
            SMEs need to know about the future of recruitment.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={recruitmentImage}
            alt="The future of recruitment for SMEs"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>November 20, 2025</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Recruitment</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Recruitment Has Changed, And SMEs Must Change With It
            </h2>
            <p className="mb-6">
              The job market is evolving at a faster pace than ever. From AI
              tools to remote hiring to skill-based recruitment, the way
              companies attract and hire talent today is completely different
              from what it was just a few years ago.
            </p>
            <p className="mb-8">
              For SMEs, this presents both significant challenges and
              substantial opportunities.
            </p>
            <p className="mb-8">
              The good news? You don’t need a huge HR department to compete for
              great talent. You just need to understand the future of
              recruitment—and adapt early.
            </p>

            <div className="space-y-8">
              {recruitmentSections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.lead && (
                    <p className="mb-3 font-medium text-[#292929]">{section.lead}</p>
                  )}
                  {section.items && (
                    <ul className="mb-4 list-disc space-y-2 pl-5">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p>
                    <strong>Tip:</strong> {section.tip}
                  </p>
                </section>
              ))}
            </div>

            <h2 className="mb-5 mt-10 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Conclusion: The Future of Recruitment Favors SMEs That Adapt
            </h2>
            <p className="mb-6">
              The recruitment landscape is changing fast—but SMEs that embrace
              new tools, flexible strategies, and smarter hiring methods will
              stay competitive.
            </p>
            <p className="mb-8">
              You don’t need big budgets to win top talent. You just need the
              right approach.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Need Help Hiring the Right People—Fast?
            </h2>
            <p className="mb-4">
              We help SMEs attract, screen, and hire qualified talent without
              the stress.
            </p>
            <p className="mb-4 font-medium text-[#292929]">
              From job posting to onboarding — we handle everything.
            </p>
            <p className="mb-5 font-medium text-[#292929]">
              We help you build systems that support long-term growth.
            </p>
            <p className="font-medium text-[#292929]">Ready to hire smarter? Let’s talk.</p>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F0F4F8] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#001C43] md:text-[42px]">
            You also might like
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog) => (
              <article key={blog.slug} className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#001C43]">
                    {blog.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">
                    {blog.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <a
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#C9A227] transition-colors duration-200 hover:text-[#A8831D]"
                    >
                      Read More
                      <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FutureRecruitmentBlog;
