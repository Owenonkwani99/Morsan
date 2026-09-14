import hiringImage from "../../assets/blogs/hiring.jpg";
import loveImage from "../../assets/blogs/love.jpg";
import restructureImage from "../../assets/blogs/restructure.jpg";
import onboardingImage from "../../assets/blogs/onboarding.jpg";

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
    slug: "onboarding-programs",
    image: onboardingImage,
    title: "Why Most Onboarding Programs Fail (And What to Do Instead)",
    description:
      "Onboarding should do more than process paperwork. Done well, it becomes a powerful tool for retention and productivity.",
  },
];

const SkillsBasedHiringBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933]">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[1000px] text-[38px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[52px] lg:text-[58px]">
            Skills-Based Hiring: Why It&apos;s Time to Hire for What People Can Do (Not Where They&apos;ve Been)
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Hire for capability, not just credentials. Skills-based hiring helps
            businesses find stronger, more diverse talent.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={hiringImage}
            alt="Skills-based hiring and evaluating candidate capability"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>May 27th 2025</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Hiring</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Let&apos;s be honest.
            </h2>
            <p className="mb-6">
              How many times have you looked at a job posting and thought,
              &quot;Bachelor&apos;s degree and 5 years of experience… for an entry-level
              role?&quot; Whether you&apos;re the job seeker shaking your head or the
              hiring manager swimming in resumes and still unable to find the
              right fit, one thing is clear:
            </p>
            <p className="mb-8 font-medium text-[#292929]">
              Traditional hiring is broken.
            </p>
            <p className="mb-8">
              Enter: <strong>Skills-Based Hiring</strong>—the refreshingly logical
              approach where you hire people for what they can do, not just
              where they&apos;ve been.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              What Is Skills-Based Hiring Anyway?
            </h2>
            <p className="mb-4">
              In simple terms, it&apos;s hiring based on abilities, not degrees or
              job titles. Instead of asking whether someone went to the right
              school or had the exact same job before, you ask: can they do the
              work—and do it well?
            </p>
            <p className="mb-8">Novel, isn&apos;t it?</p>
            <p className="mb-8">
              Whether someone learned to code at JKUAT, in a bootcamp, or from
              YouTube at 3 AM—it shouldn&apos;t matter if they&apos;re crushing the task
              at hand.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Why This Matters (Right Now More Than Ever)
            </h2>
            <p className="mb-3">We&apos;re in a new era where:</p>
            <ul className="mb-8 list-disc space-y-2 pl-5">
              <li><strong>Degrees are optional</strong>, but skills are not.</li>
              <li>The best candidates don&apos;t always have a traditional resume.</li>
              <li>AI is rewriting job roles faster than you can say &quot;ChatGPT&quot;.</li>
            </ul>
            <p className="mb-6">Here&apos;s why <strong>skills-based hiring</strong> is catching fire:</p>

            <div className="mb-8 space-y-7">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">You Get Access to Way More Talent</h3>
                <p>
                  Good talent is everywhere—if you know where to look. By
                  ditching rigid requirements, you open the door to career
                  switchers, self-taught professionals, and people overlooked
                  because they didn&apos;t fit a traditional mold.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">It Boosts Diversity &amp; Inclusion</h3>
                <p>
                  When you prioritize skills, you reduce biases tied to alma
                  maters, socioeconomic background, and age. You&apos;re not just
                  checking boxes—you&apos;re leveling the playing field.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">You Hire Faster</h3>
                <p>
                  Cut through the noise and get straight to candidates who can
                  actually do the job. Less back-and-forth and fewer interviews
                  that go nowhere.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">Better Job Fit Means Better Performance</h3>
                <p>
                  Skills-based hires tend to ramp up faster and stick around
                  longer because they&apos;re doing work they&apos;re good at and enjoy.
                </p>
              </div>
            </div>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              How Do You Make the Shift (Without Breaking Everything)?
            </h2>
            <p className="mb-6">
              You don&apos;t need to overhaul your entire system in one go. Here&apos;s
              how to get started:
            </p>
            <div className="mb-8 space-y-7">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Rethink Your Job Descriptions</h3>
                <p>
                  Focus on what the person needs to do, not what they need to
                  have done. For example, &quot;Proficient in JavaScript and building
                  responsive front-end experiences&quot; is more useful than a degree
                  requirement from a top university.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Use Skills Assessments (Real Ones)</h3>
                <p>
                  Give candidates a task that mirrors the actual job. It filters
                  out people who talk a good game but cannot back it up.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. Train Your Hiring Managers</h3>
                <p>
                  Help them shift from pedigree-first thinking to performance-
                  first thinking. This is a mindset change, not just an HR trend.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. Leverage Tech That Doesn&apos;t Suck</h3>
                <p>
                  Gamified assessments, AI-based screeners, and simple work
                  trials can tell you more than a cover letter ever could.
                </p>
              </div>
            </div>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Real Talk: Is It Worth It?
            </h2>
            <p className="mb-4 font-medium text-[#292929]">Absolutely. Yes. One hundred percent.</p>
            <p className="mb-8">
              Companies like Google, IBM, and Tesla have already leaned into
              skills-first hiring—and it&apos;s working. A diploma does not equal
              capability. If someone has the skills, drive, and results to prove
              it, does it really matter where they got their start?
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Final Thoughts (And a Friendly Nudge)
            </h2>
            <p className="mb-6">
              The workplace has changed. Roles are evolving. The smartest
              companies aren&apos;t just filling seats—they&apos;re building teams that
              can win.
            </p>
            <p className="mb-8">
              The next time you&apos;re tempted to auto-reject someone for not
              checking every traditional box, ask yourself: <em>&quot;Can they do the
              job?&quot;</em> If the answer is yes, you might have just found your next
              rockstar. And if you don&apos;t hire them, your competitor probably will.
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
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933]">
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
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">{blog.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">{blog.description}</p>
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

export default SkillsBasedHiringBlog;
