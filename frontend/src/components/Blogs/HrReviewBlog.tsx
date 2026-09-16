import reviewImage from "../../assets/blogs/review.jpg";
import onboardingImage from "../../assets/blogs/onboarding.jpg";
import hiringImage from "../../assets/blogs/hiring.jpg";
import interviewImage from "../../assets/blogs/interview.jpg";

const relatedBlogs = [
  {
    slug: "onboarding-programs",
    image: onboardingImage,
    title: "Why Most Onboarding Programs Fail (And What to Do Instead)",
    description:
      "Onboarding should do more than process paperwork. Done well, it becomes a powerful tool for retention and productivity.",
  },
  {
    slug: "skills-based-hiring",
    image: hiringImage,
    title:
      "Skills-Based Hiring: Why It’s Time to Hire for What People Can Do (Not Where They’ve Been)",
    description:
      "Hire for capability, not just credentials, and open the door to stronger, more diverse talent.",
  },
  {
    slug: "common-interview-questions",
    image: interviewImage,
    title: "Common Interview Questions & Best Answers",
    description:
      "Practical guidance on the questions HR professionals ask most often.",
  },
];

const HrReviewBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933] [&_h2]:text-[#1F2933] [&_h3]:text-[#1F2933] [&_strong]:text-[#1F2933]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[42px] lg:text-[42px]">
            2024 in Review: What We Learned and What&apos;s Next for HR in 2025
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            A look back at the HR lessons, challenges, and trends that shaped
            2024, plus what businesses should prepare for in 2025.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={reviewImage}
            alt="2024 HR review and lessons for the year ahead"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>December 27th 2024</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>HR Trends</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-8">
              As the year wraps up, we find ourselves reflecting on all the
              highs, the challenges, and everything in between. At <a href="https://morsanhr.africa/about-us/" className="text-[#C9A227] underline underline-offset-2">Morsan HR Consulting</a>, we&apos;re grateful for the incredible opportunities we&apos;ve had to partner with businesses like yours to help shape stronger workplaces. We&apos;ve seen so much change in the HR world over the past year, and we&apos;re ready to dive into 2025 with fresh insights and renewed energy!
            </p>
            <p className="mb-8">
              Before we turn the page to the new year, let&apos;s take a moment
              to look back at what 2024 taught us, what HR trends we embraced,
              and how we can all prepare for the exciting year ahead.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              2024: The Year HR Got Even More Human
            </h2>
            <p className="mb-8">
              2024 felt like a year where HR truly came into its own. We
              witnessed companies not just managing people, but focusing on
              creating experiences that really resonate with their teams. It
              wasn&apos;t just about policies or performance reviews; it was about
              empathy, flexibility, and rethinking what it means to support
              employees. Here are a few trends that took center stage:
            </p>

            <div className="mb-10 space-y-8">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Employee Wellbeing: The Heart of HR</h3>
                <p>
                  This year, wellbeing became the undeniable centerpiece of HR
                  strategies. The focus shifted to mental health, stress
                  management, and creating spaces where employees felt safe,
                  supported, and valued. At <strong>Morsan HR</strong>, we&apos;ve helped
                  clients implement wellbeing initiatives that go beyond
                  employee perks and create meaningful support for people and
                  business outcomes.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Flexibility Everywhere</h3>
                <p>
                  Flexibility went from being a nice-to-have to a must-have.
                  Whether it was hybrid work, flexible hours, or the ability to
                  take time off without feeling guilty, employees wanted more
                  control over their work-life balance. Companies that embraced
                  flexibility found higher engagement, better retention, and
                  happier employees.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. DEI (Still) Matters—and It&apos;s Evolving</h3>
                <p>
                  2024 wasn&apos;t just about making diversity a checkbox. It was
                  about making inclusion a true part of company culture.
                  Organizations went deeper by integrating inclusion into the
                  fabric of their operations. Diversity, equity, and inclusion
                  remain ongoing journeys that require constant attention.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. AI: More Than Just a Buzzword</h3>
                <p>
                  AI became a game-changer for HR, from recruitment bots that
                  filter resumes to predictive analytics that forecast turnover.
                  HR technology is evolving fast, helping businesses make
                  smarter decisions quicker and freeing up time for strategic
                  work and better people management.
                </p>
              </div>
            </div>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              But, Let&apos;s Be Real: The Challenges Were Real Too
            </h2>
            <p className="mb-4">
              It hasn&apos;t all been smooth sailing. Here are some of the HR
              headaches that kept businesses on their toes:
            </p>
            <ul className="mb-10 list-disc space-y-3 pl-5">
              <li><strong>Talent Acquisition Stress:</strong> The war for talent continued, making data-driven strategies, creative recruitment, and a strong employer brand essential.</li>
              <li><strong>Employee Engagement and Retention:</strong> Employees wanted purpose, growth opportunities, and recognition, requiring intentional engagement plans.</li>
              <li><strong>Compliance Complexity:</strong> Changing wage and hour laws, leave policies, and remote work regulations kept HR teams on their toes.</li>
            </ul>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Looking Ahead: HR Trends to Watch in 2025
            </h2>
            <p className="mb-6">
              As we kick off 2025, these emerging trends will help businesses
              stay ahead of the curve:
            </p>
            <div className="mb-10 space-y-8">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Personalized Employee Experience</h3>
                <p>Employees expect a more customized approach to work, from flexible benefits to career development plans designed around their unique goals.</p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Upskilling &amp; Reskilling: Lifelong Learning</h3>
                <p>As technology disrupts industries, businesses will need to invest in development programs that help employees grow with the company.</p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. AI in HR: Now with Even More Smarts</h3>
                <p>Predictive analytics, advanced talent matching, and greater automation of routine HR tasks will help teams work more strategically.</p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. A Holistic Approach to DEI</h3>
                <p>DEI will focus not only on hiring diverse talent, but also on mentorship, inclusive leadership, and helping every employee feel supported.</p>
              </div>
            </div>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Thank You for an Incredible Year
            </h2>
            <p className="mb-6">
              To our clients, thank you for trusting us with your HR needs and
              for inspiring us with your resilience and ambition. Your success
              stories are what drive us to keep pushing boundaries and
              delivering excellence.
            </p>
            <p className="mb-8">
              As we say goodbye to 2024, we look forward to achieving even
              greater things together in 2025. Here&apos;s to a year of growth,
              innovation, and shared success.
            </p>
            <p className="mb-8">
              From all of us at <strong>Morsan HR</strong>, we wish you a
              prosperous and fulfilling New Year!
            </p>

            <div className="mt-14 border-t border-[#D9D5D5] pt-8">
              <h2 className="mb-3 text-[22px] font-semibold leading-[1.3] text-[#292929]">Leave a Reply</h2>
              <p className="mb-8 text-[13px] leading-[1.6] text-[#777171]">Your email address will not be published. Required fields are marked *.</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="comment" className="mb-2 block text-[13px] font-medium text-[#292929]">Comment <span className="text-[#C9A227]">*</span></label>
                  <textarea id="comment" name="comment" rows={7} required className="w-full resize-y rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] leading-[1.6] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]" />
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-[#292929]">Name <span className="text-[#C9A227]">*</span></label>
                  <input id="name" name="name" type="text" required className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[#292929]">Email <span className="text-[#C9A227]">*</span></label>
                  <input id="email" name="email" type="email" required className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]" />
                </div>
                <div>
                  <label htmlFor="website" className="mb-2 block text-[13px] font-medium text-[#292929]">Website</label>
                  <input id="website" name="website" type="url" className="w-full rounded-[2px] border border-[#D9D5D5] bg-white px-4 py-3 text-[13px] text-[#292929] outline-none transition-colors duration-200 focus:border-[#C9A227]" />
                </div>
                <div className="flex items-start gap-3">
                  <input id="save-details" name="save-details" type="checkbox" className="mt-[3px] h-4 w-4 shrink-0 accent-[#C9A227]" />
                  <label htmlFor="save-details" className="cursor-pointer text-[13px] leading-[1.5] text-[#777171]">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="inline-flex items-center justify-center border border-[#C9A227] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A227] transition-all duration-200 hover:bg-[#C9A227] hover:text-white">Submit Comment</button>
              </form>
            </div>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F4EEEE] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933]">You also might like</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog) => (
              <article key={blog.slug} className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white">
                <div className="aspect-[4/3] overflow-hidden"><img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">{blog.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">{blog.description}</p>
                  <div className="mt-auto pt-6"><a href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#C9A227] transition-colors duration-200 hover:text-[#A8831D]">Read More <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span></a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HrReviewBlog;
