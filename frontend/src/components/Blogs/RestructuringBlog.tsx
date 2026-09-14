import restructureImage from "../../assets/blogs/restructure.jpg";
import loveImage from "../../assets/blogs/love.jpg";
import guideImage from "../../assets/blogs/guide.jpg";
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
    slug: "surviving-njaanuary",
    image: guideImage,
    title:
      "Surviving Njaanuary: The HR Guide to Getting Your Team Back on Track (Without Losing Your Mind)",
    description:
      "Ah, January. The month where your employees’ New Year’s resolutions meet the harsh reality of....",
  },
  {
    slug: "future-of-recruitment",
    image: recruitmentImage,
    title: "The Future of Recruitment: What SMEs Need to Know",
    description:
      "The job market is evolving at a rapid pace, and SMEs need to understand what these changes mean....",
  },
];

const RestructuringBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933]">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[38px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[52px] lg:text-[58px]">
            Company Restructuring: How HR Can Be the Hero (Not the Villain)
          </h1>

          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Restructuring is tough. But with the right HR support, it does not
            have to be traumatic.
          </p>

          <p className="mt-1 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Here is how professional HR consulting can turn organizational
            change from a disaster movie into a manageable transition.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={restructureImage}
            alt="Company restructuring and HR support"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>Feb 2nd 2026</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Restructuring</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-6">
              Picture this: It is 7:30 AM on a Monday. The office WhatsApp
              group is already exploding with rumors. Someone saw the CEO&apos;s
              car in the parking lot over the weekend. Mercy from Finance
              swears she heard the word restructuring from behind a closed
              door. By 9 AM, half the staff have updated their CVs, and the
              other half is planning a protest that no one told them to
              organize yet.
            </p>

            <p className="mb-8 font-medium text-[#292929]">
              Welcome to restructuring season, where HR can either be the
              villain everyone blames or the hero who actually helps people
              through the chaos.
            </p>

            <p className="mb-8">
              Here&apos;s the truth: restructuring is tough. But with the right
              HR support, it doesn&apos;t have to be traumatic. Let&apos;s talk about
              how professional HR consulting can turn organizational change
              from a disaster movie into a manageable transition.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Why Restructuring Needs HR Expertise (Not Just Management
              Decisions)
            </h2>

            <p className="mb-5">
              Too many Kenyan companies approach restructuring like this: the
              board decides, management announces, and HR is left to handle
              the fallout. This is like planning a wedding without inviting the
              bride. Technically possible, but why would you?
            </p>

            <p className="mb-4 font-medium text-[#292929]">
              Professional HR brings critical expertise that protects both the
              company and employees:
            </p>

            <div className="mb-8 space-y-6">
              <div>
                <h3 className="mb-2 text-[15px] font-bold text-[#292929]">
                  Legal Compliance
                </h3>
                <p>
                  The Employment Act, Labour Relations Act, and various
                  regulations are not suggestions. One wrong move and your
                  restructuring becomes a court case. HR professionals know
                  the consultation requirements, notice periods, severance
                  calculations, and documentation needed to keep you
                  compliant. They can tell you that firing someone via
                  WhatsApp is, shockingly, not legal, even if it seems
                  efficient.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[15px] font-bold text-[#292929]">
                  Change Management Strategy
                </h3>
                <p>
                  HR professionals understand that restructuring is not just
                  moving boxes on an org chart. It is about people, culture,
                  morale, and productivity. They can design communication
                  plans, identify risks, and create transition strategies that
                  work in real life, not just in PowerPoint.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[15px] font-bold text-[#292929]">
                  Objective Assessment
                </h3>
                <p>
                  Sometimes emotions run high. The MD wants to fire everyone
                  who disagreed with him at the last meeting. The CFO wants to
                  cut costs by eliminating the entire marketing team because
                  we have social media now. HR can provide objective,
                  data-driven recommendations about what actually makes
                  business sense versus what is just expensive revenge.
                </p>
              </div>
            </div>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              How HR Consultants Help: The Complete Toolkit
            </h2>

            <p className="mb-6">
              When you bring in professional HR support for restructuring,
              here is the value you get:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  1. Pre-Restructuring Assessment and Planning
                </h3>
                <p>
                  Before you announce anything, HR helps you think it through.
                  What are your actual goals? Cost reduction? Improved
                  efficiency? Strategic realignment? How will you measure
                  success? What are the legal landmines? Who will be affected
                  and how?
                </p>
                <p className="mt-4">
                  Good HR consultants will map out your current structure,
                  identify redundancies, analyze skills gaps, and design a new
                  structure that actually achieves your business objectives.
                  They will also prepare a realistic budget because, surprise,
                  restructuring costs money upfront, even if it saves money
                  long-term.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  2. Legal and Compliance Guidance
                </h3>
                <p className="mb-4">This is where HR earns its fee. Consultants ensure you:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Conduct proper consultation with affected employees.</li>
                  <li>Follow fair selection criteria when making redundancies.</li>
                  <li>Calculate accurate severance packages.</li>
                  <li>Provide proper notice periods or payment in lieu.</li>
                  <li>Document everything properly.</li>
                  <li>Handle union negotiations if applicable.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  3. Communication Strategy and Execution
                </h3>
                <p className="mb-4">
                  HR professionals design communication plans that answer:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>When to announce, so people have room to ask questions.</li>
                  <li>How to announce, including face-to-face support for those directly affected.</li>
                  <li>What to say through clear, honest, empathetic messaging.</li>
                  <li>Who says it, with trained managers leading the conversation.</li>
                </ul>
                <p className="mt-4">
                  They also prepare FAQs, talking points for managers, and
                  scripts for difficult conversations. Saying, &quot;it&apos;s not
                  personal, it&apos;s just business&quot; to someone losing their
                  livelihood is exactly the wrong energy.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  4. Employee Support
                </h3>
                <p className="mb-4">
                  Professional consultants do not just help you let people go
                  efficiently; they help you do it humanely.
                </p>
                <p className="mb-3 font-medium text-[#292929]">For remaining employees:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Clarity on their new roles and expectations.</li>
                  <li>Training for new responsibilities they are inheriting.</li>
                  <li>Team rebuilding activities to restore morale.</li>
                  <li>Open forums to address concerns and rebuild trust.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  5. Manager Training and Support
                </h3>
                <p className="mb-4">
                  Most managers have never had to tell someone they are being
                  let go. HR consultants train managers on:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Having difficult conversations with empathy and professionalism.</li>
                  <li>What to say and what not to say.</li>
                  <li>Supporting remaining team members who are anxious and overworked.</li>
                  <li>Managing their own stress.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">
                  6. Post-Restructuring Monitoring and Support
                </h3>
                <p className="mb-4">
                  The restructuring is not over when the announcements are
                  done. HR consultants help you:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Monitor productivity and morale in the new structure.</li>
                  <li>Identify and address issues before they become crises.</li>
                  <li>Make adjustments if the new structure is not working.</li>
                  <li>Rebuild company culture and employee engagement.</li>
                </ul>
              </div>
            </div>

            <h2 className="mb-5 mt-10 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The Bottom Line
            </h2>

            <p className="mb-4">Company restructuring is never easy. But it does not have to be a disaster. With professional HR support, you can:</p>
            <ul className="mb-8 list-disc space-y-2 pl-5">
              <li>Stay legally compliant and avoid expensive lawsuits.</li>
              <li>Treat people with dignity, even in difficult circumstances.</li>
              <li>Maintain morale and productivity among remaining staff.</li>
              <li>Actually achieve your business objectives.</li>
              <li>Protect your company&apos;s reputation and employer brand.</li>
            </ul>

            <p className="mb-6 font-medium text-[#292929]">
              Restructuring will happen. The economy changes. Technology
              evolves. Strategies shift. The question is not whether to
              restructure, it is how to restructure in a way that is fair,
              legal, and effective.
            </p>

            <p className="mb-5">
              That&apos;s where HR expertise makes all the difference. Because at
              the end of the day, restructuring is not just about org charts
              and cost savings. It is about people. And people deserve better
              than panicked WhatsApp groups and Friday evening bombshells.
            </p>

            <p className="mb-8">
              They deserve professional HR support that helps them through
              change with clarity, dignity, and real assistance for their next
              chapter.
            </p>

            <h2 className="mb-5 text-[16px] font-bold leading-[1.3] text-[#292929]">
              Don&apos;t Let Restructuring Become a Crisis
            </h2>

            <p className="mb-5">
              Our HR consulting team has guided dozens of Kenyan companies
              through successful restructuring: legally compliant,
              strategically sound, and genuinely humane. We understand Kenyan
              employment law, workplace culture, and what it takes to lead
              change that actually works. Whether you are planning a major
              organizational overhaul or just need expert guidance on doing it
              right, we are here to help. Get in touch for a confidential
              consultation.
            </p>

            <p className="font-medium text-[#292929]">Because good HR is not a luxury. It is a necessity.</p>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F4EEEE] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">
            You also might like
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">
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
                      <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
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

export default RestructuringBlog;