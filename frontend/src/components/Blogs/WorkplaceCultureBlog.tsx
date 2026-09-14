import hrImage from "../../assets/blogs/hr.jpg";
import loveImage from "../../assets/blogs/love.jpg";
import restructureImage from "../../assets/blogs/restructure.jpg";
import guideImage from "../../assets/blogs/guide.jpg";

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

const WorkplaceCultureBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933]">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[38px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[52px] lg:text-[58px]">
            Is Your Culture Working For or Against You?
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            HR&apos;s Role in Shaping Company Culture
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={hrImage}
            alt="Workplace culture and HR shaping employee engagement"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>November 6, 2024</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Culture</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-8">
              Company culture can be a double-edged sword. It has the power to inspire,
              motivate, and engage employees, but it can also create barriers, foster
              disengagement, and lead to high turnover if not managed effectively. So,
              how do you know if your culture is working for you or against you? Let&apos;s
              explore the signs and discover how HR can help you cultivate a thriving workplace.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The Good: Signs Your Culture is Thriving
            </h2>

            <ol className="mb-8 list-decimal space-y-4 pl-5">
              <li>
                <strong>High Employee Engagement:</strong> When employees are excited
                about their work and feel connected to the organization&apos;s mission,
                that&apos;s a strong indicator of a positive culture. Engaged employees are
                more productive, creative, and willing to go the extra mile.
              </li>
              <li>
                <strong>Low Turnover Rates:</strong> If your company is retaining talent,
                it&apos;s a sign that your culture is resonating with employees. A supportive
                environment where individuals feel valued and recognized leads to loyalty and longevity.
              </li>
              <li>
                <strong>Open Communication:</strong> A culture of transparency encourages
                open dialogue between employees and management. When team members feel safe
                sharing their ideas and concerns, it fosters trust and collaboration.
              </li>
              <li>
                <strong>Diversity and Inclusion:</strong> A thriving culture embraces diversity in
                all its forms. When employees from different backgrounds feel included and respected,
                it enriches the workplace and drives innovation.
              </li>
            </ol>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The Bad: Signs Your Culture Might Be Failing
            </h2>

            <ol className="mb-8 list-decimal space-y-4 pl-5">
              <li>
                <strong>High Employee Turnover:</strong> If you&apos;re constantly losing talent,
                it&apos;s time to take a hard look at your culture. Frequent departures can indicate
                dissatisfaction with workplace dynamics or a lack of alignment with company values.
              </li>
              <li>
                <strong>Poor Communication:</strong> If information is siloed or if employees feel unheard,
                it can lead to frustration and disengagement. A culture that stifles communication creates
                barriers rather than bridges.
              </li>
              <li>
                <strong>Lack of Recognition:</strong> When achievements go unnoticed, morale can plummet.
                A culture that fails to celebrate successes can leave employees feeling undervalued and demotivated.
              </li>
              <li>
                <strong>Resistance to Change:</strong> In today&apos;s fast-paced world, adaptability is key.
                If your organization struggles with change or innovation due to cultural resistance, it could hinder growth and progress.
              </li>
            </ol>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              How HR Can Help Turn the Tide
            </h2>
            <p className="mb-8">
              So, what can HR do to ensure your culture works for you? Here are some actionable steps:
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              1. Conduct Regular Culture Assessments
            </h2>
            <p className="mb-8">
              HR can implement surveys or focus groups to gauge employee sentiment about the current culture.
              Understanding what works and what doesn&apos;t is crucial for making informed changes.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              2. Foster Open Communication
            </h2>
            <p className="mb-8">
              Encouraging an open-door policy where employees feel comfortable sharing their thoughts can break down communication barriers.
              Regular check-ins and feedback sessions can also promote transparency.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              3. Recognize and Reward Contributions
            </h2>
            <p className="mb-8">
              Implementing recognition programs that celebrate individual and team achievements can boost morale significantly.
              Whether through shout-outs in meetings or formal awards, appreciation goes a long way!
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              4. Embrace Diversity and Inclusion Initiatives
            </h2>
            <p className="mb-8">
              HR should prioritize diversity in hiring practices and create programs that promote inclusivity within the workplace.
              This not only enhances creativity but also helps build a sense of belonging among all employees.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              5. Lead by Example
            </h2>
            <p className="mb-8">
              Leadership plays a crucial role in shaping company culture. HR should work with leaders to model the behaviors that reflect the desired culture—whether it&apos;s collaboration, innovation, or respect.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Conclusion: Make Culture Your Competitive Advantage
            </h2>
            <p className="mb-8">
              In conclusion, understanding whether your company culture is working for or against you is essential for long-term success.
              By recognizing the signs of a thriving or failing culture and taking proactive steps with HR&apos;s guidance, you can create an environment where everyone feels valued and inspired to contribute their best work.
            </p>
            <p className="mb-8">
              Remember, a positive culture isn&apos;t just nice to have; it&apos;s a competitive advantage in attracting and retaining top talent!
              So let&apos;s team up and roll up our sleeves and make sure your culture is working hard for you!
            </p>
            <p className="mb-8">
              <strong>Get in touch today!</strong>
            </p>

            <div className="mt-14 border-t border-[#D9D5D5] pt-8">
              <h2 className="mb-3 text-[22px] font-semibold leading-[1.3] text-[#292929]">
                Leave a Reply
              </h2>

              <p className="mb-8 text-[13px] leading-[1.6] text-[#777171]">
                Your email address will not be published. Required fields are marked *.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="comment" className="mb-2 block text-[13px] font-medium text-[#292929]">
                    Comment <span className="text-[#C9A227]">*</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={7}
                    required
                    className="w-full resize-y rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] leading-[1.6] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-[#292929]">
                    Name <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[#292929]">
                    Email <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="mb-2 block text-[13px] font-medium text-[#292929]">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="save-details"
                    name="save-details"
                    type="checkbox"
                    className="mt-[3px] h-4 w-4 shrink-0 accent-[#C9A227]"
                  />
                  <label htmlFor="save-details" className="cursor-pointer text-[13px] leading-[1.5] text-[#777171]">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#C9A227] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A227] transition-all duration-200 hover:bg-[#C9A227] hover:text-white"
                >
                  Submit Comment
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F4EEEE] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[650px] text-left">
            <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">
              You also might like
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog, index) => (
              <article
                key={index}
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

export default WorkplaceCultureBlog;
