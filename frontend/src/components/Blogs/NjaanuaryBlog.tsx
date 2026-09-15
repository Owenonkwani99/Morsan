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
    slug: "future-of-recruitment",
    image: recruitmentImage,
    title: "The Future of Recruitment: What SMEs Need to Know",
    description:
      "The job market is evolving at a rapid pace, and SMEs need to understand what these changes mean....",
  },
];

const NjaanuaryBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933] [&_h2]:text-[#1F2933] [&_h3]:text-[#1F2933] [&_strong]:text-[#1F2933]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[42px] lg:text-[42px]">
            Surviving Njaanuary: The HR Guide to Getting Your Team Back on Track (Without Losing Your Mind)
          </h1>

          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            January is long for employees, but it is long for everyone. Here are practical strategies to keep your team motivated, engaged, and showing up.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={guideImage}
            alt="A guide to supporting teams through Njaanuary"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>Jan 9th 2026</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Employee Wellness</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-6">
              Ah, January. The month where your employees&apos; New Year&apos;s resolutions meet the harsh reality of their December bank statements. Welcome to Njaanuary, where team morale feels like a distant memory and your inbox is full of salary advance requests before the 10th.
            </p>

            <p className="mb-8">
              As HR professionals and business leaders, we know that January isn&apos;t just long for employees, it&apos;s long for everyone. But here&apos;s the thing: how you navigate this month can set the tone for your entire year. So let&apos;s talk about practical strategies to keep your team motivated, engaged, and, most importantly, showing up, even when their wallets are crying.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The January Reality Check
            </h2>
            <p className="mb-4">Let&apos;s be honest. Right now, half your team is:</p>
            <ul className="mb-8 list-disc space-y-2 pl-5">
              <li>Googling &quot;how to make 500 bob last two weeks.&quot;</li>
              <li>Regretting the iPhone they bought their niece in December.</li>
              <li>Contemplating a side hustle selling smokies during lunch break.</li>
              <li>Showing up early because there&apos;s no money for fuel, so they&apos;re taking the earliest mat.</li>
            </ul>
            <p className="mb-8">
              This is the perfect time to remember that your employees are human beings first, workers second. And human beings need support, especially when Njaanuary is hitting different.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Why January Matters More Than You Think
            </h2>
            <p className="mb-8">
              January is your opportunity to build loyalty that lasts the entire year. When employees are struggling, and you show up for them with real, practical support instead of empty motivational quotes, they remember.
            </p>
            <p className="mb-8">
              Research shows that employee engagement in Q1 directly correlates with retention rates throughout the year. Translation? Take care of your people in January, and they&apos;ll take care of your business in July.
            </p>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Smart HR Strategies for January (That Actually Work)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Address the Elephant in the Room</h3>
                <p className="mb-4">
                  Don&apos;t pretend Njaanuary isn&apos;t real. Acknowledge it. Send that company-wide email that says, &quot;We know January is tough.&quot; Your employees will respect you more for recognizing their reality instead of pretending everyone&apos;s pockets are full.
                </p>
                <p><strong>Action Step:</strong> Host a brief town hall or send a heartfelt message from leadership. Transparency builds trust.</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Financial Wellness Support (Beyond Just Salary)</h3>
                <p className="mb-4">This is the time to roll out those financial literacy workshops you&apos;ve been planning. Partner with financial institutions to offer:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Budget planning sessions.</li>
                  <li>Debt management advice.</li>
                  <li>Information about salary advances with clear, fair terms.</li>
                  <li>Savings challenges with small incentives.</li>
                </ul>
                <p className="mt-4"><strong>Pro Tip:</strong> Time these workshops for the first two weeks of January when the pain is freshest. People show up when support is relevant to their current struggle.</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. Flexible Benefits That Actually Help</h3>
                <p className="mb-4">Consider offering:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Transport advances.</li>
                  <li>Subsidized lunches, even just twice a week.</li>
                  <li>Work-from-home options to save on transport.</li>
                  <li>Flexible working hours to accommodate matatu schedules.</li>
                </ul>
                <p className="mt-4">A 500 bob lunch subsidy means more to someone in January than a fancy end-of-year party.</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. Keep Morale High Without Breaking the Bank</h3>
                <p className="mb-4">You don&apos;t need a huge budget to boost morale. Try:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Wellness Wednesdays:</strong> Free fruit, stretching sessions, or mental health check-ins.</li>
                  <li><strong>Team challenges:</strong> Fitness goals, reading clubs, or skill-sharing sessions.</li>
                  <li><strong>Recognition programs:</strong> Highlight achievements. Recognition costs nothing but means everything.</li>
                  <li><strong>Casual Fridays all month:</strong> Let people save on dry cleaning costs.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">5. Reset Goals Realistically</h3>
                <p>
                  January is when those aggressive targets you set in December start looking like jokes. Be realistic. Have honest conversations with your team about what&apos;s achievable. Breaking large goals into smaller wins keeps momentum without causing burnout.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">6. Mental Health Matters</h3>
                <p className="mb-4">
                  January blues are real. The post-holiday slump, combined with financial stress, creates the perfect storm for anxiety and depression.
                </p>
                <p className="mb-3 font-medium text-[#292929]">What you can do:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Make your EAP visible and accessible.</li>
                  <li>Train managers to spot signs of distress.</li>
                  <li>Create safe spaces for people to talk.</li>
                  <li>Normalize taking mental health days.</li>
                </ul>
              </div>
            </div>

            <h2 className="mb-5 mt-10 text-[17px] font-bold leading-[1.3] text-[#292929]">
              For the Managers: How to Lead When Times Are Tough
            </h2>
            <p className="mb-4">Your middle managers are also feeling the pinch. Here&apos;s how to support them:</p>
            <div className="mb-8 space-y-4">
              <p><strong>Check-ins:</strong> Regular one-on-ones aren&apos;t about micromanaging, they&apos;re about support. Ask, &quot;How are you doing?&quot; and actually listen.</p>
              <p><strong>Flexibility:</strong> That team member who&apos;s been late three times this week? Maybe they&apos;re taking the earliest mat because it&apos;s cheaper. Have a conversation before assuming the worst.</p>
              <p><strong>Empathy:</strong> Everyone&apos;s fighting a battle you know nothing about. Lead with kindness.</p>
            </div>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The Long Game: Building Resilience Beyond January
            </h2>
            <p className="mb-4">January teaches us important lessons about financial planning for individuals and organizations. Use this time to:</p>
            <ul className="mb-8 list-disc space-y-2 pl-5">
              <li>Review your compensation structure. Is it competitive and fair?</li>
              <li>Plan quarterly bonuses instead of just end-year payouts.</li>
              <li>Build emergency funds for organizational challenges.</li>
              <li>Create year-round financial wellness programs.</li>
            </ul>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">What Success Looks Like</h2>
            <p className="mb-4">By mid-February, you should see:</p>
            <ul className="mb-8 list-disc space-y-2 pl-5">
              <li>Improved attendance and punctuality.</li>
              <li>Higher engagement in meetings and projects.</li>
              <li>Reduced stress-related complaints.</li>
              <li>Stronger team cohesion.</li>
              <li>Better feedback from employee surveys.</li>
            </ul>

            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">The Bottom Line</h2>
            <p className="mb-5">
              Njaanuary is real, but it&apos;s also temporary. Your role as HR isn&apos;t to pretend the struggle doesn&apos;t exist; it&apos;s to walk through it with your team. Support them now, and you&apos;ll build the kind of organizational culture that weathers any storm.
            </p>
            <p className="mb-8">
              Remember: employees don&apos;t leave companies. They leave managers and cultures that don&apos;t see them, support them, or value them. This January, be the organization that does all three.
            </p>

            <p className="mb-5 font-medium text-[#292929]">
              Need help implementing employee wellness programs or want to discuss retention strategies for 2026? That&apos;s literally what we do. Let&apos;s chat about how we can help your organization thrive, not just survive, through every season.
            </p>
            <p className="font-medium text-[#292929]">
              Because at the end of the day, your people are your greatest asset. Even in Njaanuary.
            </p>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F4EEEE] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">You also might like</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog) => (
              <article key={blog.slug} className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">{blog.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">{blog.description}</p>
                  <div className="mt-auto pt-6">
                    <a href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#C9A227] transition-colors duration-200 hover:text-[#A8831D]">
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

export default NjaanuaryBlog;