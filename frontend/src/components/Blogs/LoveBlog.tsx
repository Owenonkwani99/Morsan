import loveImage from "../../assets/blogs/love.jpg";
import restructureImage from "../../assets/blogs/restructure.jpg";
import guideImage from "../../assets/blogs/guide.jpg";
import hrImage from "../../assets/blogs/hr.jpg"

const relatedBlogs = [
  {
    slug: "workplace-culture",
    image: hrImage,
    title: "HR’s Role in Shaping Company Culture",
    description:
      "Culture is never accidental. It is shaped by the habits, values, and leadership choices HR helps define every day.",
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

const LoveBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933]">
      {/* =========================
          BLOG HEADER
      ========================== */}
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[760px] text-[38px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[52px] lg:text-[58px]">
            Let&apos;s talk about love languages... at work.....
          </h1>

          <p className="mt-6 max-w-[720px] text-[15px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Your employees have love languages, too. And if you&apos;re not
            speaking their language, they&apos;re going to find someone who
            does.
          </p>

          <p className="mt-1 max-w-[720px] text-[15px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            And by &quot;someone,&quot; I mean your competitor&apos;s recruiter.
          </p>
        </div>
      </section>

      {/* =========================
          HERO IMAGE
      ========================== */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={loveImage}
            alt="Love languages at work"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      {/* =========================
          ARTICLE
      ========================== */}
      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          {/* META */}
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>Feb 23rd 2026</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Love</span>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <h2 className="mb-5 text-[16px] font-bold leading-[1.3] text-[#292929]">
              Okay, hear me out.
            </h2>

            <p className="mb-6">
              Your employees have love languages, too. And if you&apos;re not
              speaking their language, they&apos;re going to find someone who
              does.
            </p>

            <p className="mb-8">
              (And by &quot;someone,&quot; I mean your competitor&apos;s
              recruiter.)
            </p>

            {/* =========================
                SECTION 1
            ========================== */}
            <h2 className="mb-6 text-[17px] font-bold leading-[1.3] text-[#292929]">
              The 5 Workplace Love Languages
            </h2>

            {/* 1 */}
            <div className="mb-8">
              <h3 className="mb-3 text-[15px] font-bold leading-[1.35] text-[#292929]">
                1. Words of Affirmation = Recognition
              </h3>

              <p className="mb-4">
                Some people need to HEAR that they&apos;re doing well. Not once
                a year at the annual review — regularly.
              </p>

              <ul className="mb-5 list-disc space-y-2 pl-5">
                <li>&quot;Great work on that project.&quot;</li>
                <li>
                  &quot;I noticed you handled that difficult situation really
                  well.&quot;
                </li>
                <li>
                  &quot;Your contribution in the meeting was valuable.&quot;
                </li>
              </ul>

              <p>
                If this is your employee&apos;s language, and you&apos;re
                silent? They&apos;ll find someone who talks.
              </p>
            </div>

            {/* 2 */}
            <div className="mb-8">
              <h3 className="mb-3 text-[15px] font-bold leading-[1.35] text-[#292929]">
                2. Receiving Gifts = Compensation &amp; Benefits
              </h3>

              <p className="mb-4">
                Let&apos;s be real: some people are motivated by the paycheck.
                And that&apos;s okay!
              </p>

              <ul className="mb-5 list-disc space-y-2 pl-5">
                <li>Money talks.</li>
                <li>Benefits matter.</li>
                <li>Fair pay = Feeling valued.</li>
              </ul>

              <p>
                If you&apos;re paying below market and wondering why
                they&apos;re not &quot;passionate&quot;… passion doesn&apos;t
                pay rent.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-8">
              <h3 className="mb-3 text-[15px] font-bold leading-[1.35] text-[#292929]">
                3. Quality Time = Development &amp; Mentorship
              </h3>

              <p className="mb-4">
                These employees want your attention, your guidance, and
                one-on-one time. They don&apos;t want to be just another
                employee.
              </p>

              <p className="mb-3">They want:</p>

              <ul className="mb-5 list-disc space-y-2 pl-5">
                <li>Regular career conversations</li>
                <li>Mentorship</li>
                <li>Your investment in their growth</li>
              </ul>

              <p>
                Ignore them? They&apos;ll leave for someone who invests time in
                them.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-8">
              <h3 className="mb-3 text-[15px] font-bold leading-[1.35] text-[#292929]">
                4. Acts of Service = Support &amp; Resources
              </h3>

              <p className="mb-4">
                These people value action over words. &quot;I&apos;ve got your
                back&quot; means:
              </p>

              <ul className="mb-5 list-disc space-y-2 pl-5">
                <li>Defending them in meetings</li>
                <li>Removing obstacles</li>
                <li>Giving them the tools to succeed</li>
                <li>Covering for them when life happens</li>
              </ul>

              <p>
                Empty promises frustrate them. Actual support retains them.
              </p>
            </div>

            {/* 5 */}
            <div className="mb-10">
              <h3 className="mb-3 text-[15px] font-bold leading-[1.35] text-[#292929]">
                5. Physical Touch = Autonomy &amp; Trust
              </h3>

              <p className="mb-4">
                Okay — not ACTUAL physical touch (relax). But these employees
                need to feel trusted.
              </p>

              <p className="mb-3">They want:</p>

              <ul className="mb-5 list-disc space-y-2 pl-5">
                <li>Freedom to make decisions</li>
                <li>Trust to work their way</li>
                <li>Flexibility in how they get things done</li>
              </ul>

              <p>
                Micromanage them? They&apos;ll leave. Give them autonomy?
                They&apos;ll thrive.
              </p>
            </div>

            {/* =========================
                QUESTION
            ========================== */}
            <h2 className="mb-4 text-[16px] font-bold leading-[1.3] text-[#292929]">
              Question
            </h2>

            <p className="mb-5">
              Are you speaking your employee&apos;s language?
            </p>

            <p className="mb-5">
              Because here&apos;s the thing: just like relationships, work
              relationships fail when needs aren&apos;t met.
            </p>

            <p className="mb-3">
              You might be giving recognition (Words of Affirmation) — but
              they need autonomy (Trust).
            </p>

            <p className="mb-3">
              You might be offering flexibility, but they need better pay.
            </p>

            <p className="mb-8">Mismatch = Exit interview.</p>

            {/* =========================
                RETENTION STRATEGY
            ========================== */}
            <h2 className="mb-5 text-[16px] font-bold leading-[1.3] text-[#292929]">
              The Retention Strategy
            </h2>

            <ol className="mb-8 list-decimal space-y-3 pl-5">
              <li>ASK your employees what matters most to them.</li>
              <li>LISTEN to what they say.</li>
              <li>DELIVER on what they need.</li>
              <li>CHECK IN regularly.</li>
            </ol>

            <p className="mb-8">
              Don&apos;t assume everyone wants the same thing. Some want
              money. Some want growth. Some want work-life balance. Some want
              all three.
            </p>

            {/* =========================
                CHALLENGE
            ========================== */}
            <h2 className="mb-5 text-[16px] font-bold leading-[1.3] text-[#292929]">
              The Challenge
            </h2>

            <p className="mb-5">
              This week, ask ONE employee:
            </p>

            <blockquote className="mb-6 border-l-2 border-[#C9A227] pl-5 text-[15px] font-medium italic leading-[1.55] text-[#292929]">
              &quot;What makes you feel most valued at work?&quot;
            </blockquote>

            <p className="mb-5">
              Then actually do that thing.
            </p>

            <p>
              And remember: your competitor is out there dating your employees
              and sending them LinkedIn messages. Promising them everything
              you&apos;re not giving them. Make sure your people choose you.
            </p>
          </article>
        </div>
      </section>

      {/* =========================
          RELATED BLOGS
      ========================== */}
      <section className="overflow-hidden bg-[#F4EEEE] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          {/* Section heading */}
          <div className="max-w-[650px] text-left">
            <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">
              You also might like
            </h2>
          </div>

          {/* Blog cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog, index) => (
              <article
                key={index}
                className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">
                    {blog.description}
                  </p>

                  {/* Read More */}
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

          {/* View all blogs */}
          {/* <div className="mt-12 text-center">
            <a
              href="/blogs"
              className="inline-flex items-center justify-center border border-[#C9A227] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A227] transition-all duration-200 hover:bg-[#C9A227] hover:text-white"
            >
              View All Blogs
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default LoveBlog;