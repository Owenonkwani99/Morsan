import employeeImage from "../../assets/blogs/employee.jpg";
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

const First30DaysBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933] [&_h2]:text-[#1F2933] [&_h3]:text-[#1F2933] [&_strong]:text-[#1F2933]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[42px] lg:text-[42px]">
            How to Nail the First 30 Days as a New Employee
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            A Step-by-Step Roadmap
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={employeeImage}
            alt="A new employee navigating the first 30 days at work"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>November 12, 2024</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Onboarding</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-6">
              Starting a new job is like stepping into a thrilling adventure—full of
              new opportunities, challenges, and ways to grow.
            </p>
            <p className="mb-8">
              Your first 30 days are crucial for setting the tone for your career and
              making a lasting impression. In this step-by-step roadmap, we&apos;ll show
              you how to navigate those early days and set yourself up for long-term
              success, all while mastering key job skills, building relationships, and
              aligning with the company culture. Whether you&apos;re aiming for
              <strong> career growth</strong>, navigating <strong>employee onboarding</strong>,
              or just looking to make a positive impact from day one, this guide will
              give you the tools you need to succeed. Ready to jump in? Let&apos;s get
              started!
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 1: Get to Know the Company Culture
            </h2>
            <p className="mb-4">
              Before diving into your job responsibilities, it&apos;s important to
              <strong> understand the company culture</strong>. Every organization has
              its own unique set of values, norms, and expectations that shape how
              employees work and collaborate. Take the time to observe how people
              communicate, whether it&apos;s formal or informal, and what
              <strong> workplace culture</strong> norms are in place. Do employees work
              in teams or are they more independent? Is the office
              <strong> remote-friendly</strong>, or do they prefer in-office
              collaboration?
            </p>
            <p className="mb-8">
              This understanding will help you navigate internal relationships,
              perform effectively, and align with the company&apos;s
              <strong> mission and values</strong>. Read up on any available
              <strong> employee handbooks</strong> or company materials and don&apos;t be
              afraid to ask your colleagues about their experiences. Whether it&apos;s
              through informal chats or reviewing the company&apos;s
              <strong> HR policies</strong>, this early exploration will give you the
              context you need to succeed.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 2: Meet Your Colleagues
            </h2>
            <p className="mb-4">
              One of the best ways to <strong>boost employee engagement</strong> from
              day one is to start building strong relationships. Aim to introduce
              yourself to as many people as you can—both within your department and
              across other teams. The sooner you start networking and creating
              connections, the easier it will be to <strong>collaborate</strong> on
              projects down the line.
            </p>
            <p className="mb-8">
              Don&apos;t just focus on your immediate team—expand your connections across
              the organization. Understanding how different teams work and how you fit
              into the bigger picture will not only make you more effective but will
              also help you establish a reputation as a <strong>team player</strong>.
              This kind of networking can pay off in the long run, whether you&apos;re
              seeking advice or working on cross-departmental projects.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 3: Set Up Meetings with Key Stakeholders
            </h2>
            <p className="mb-4">
              To make a meaningful contribution, you need to understand the
              <strong> expectations</strong> of those you&apos;ll be working closely with.
              Set up one-on-one meetings with key stakeholders—your manager, team
              leaders, or anyone whose work will impact your role. In these meetings,
              ask questions to get a sense of their priorities and how your position
              fits within the larger team.
            </p>
            <p className="mb-8">
              Be sure to discuss <strong>performance expectations</strong>, key
              projects, and any potential challenges. This is also a good opportunity
              to ask for any <strong>resources</strong> or tools you may need to
              succeed. If you&apos;re unsure of how your success will be measured, this is
              the time to clarify those <strong>performance goals</strong> so you can
              align your efforts accordingly.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 4: Learn the Tools of the Trade
            </h2>
            <p className="mb-4">
              Whether you&apos;re managing a project or just trying to stay organized,
              <strong> learning the tools of your trade</strong> is essential. Every
              job has a set of systems or software that employees use to communicate,
              track progress, and share information. Getting familiar with these tools
              early on will help you feel more confident and <strong>increase your productivity</strong>.
            </p>
            <p className="mb-8">
              Don&apos;t shy away from asking for training or a quick tutorial. Many
              companies offer onboarding programs that introduce new hires to their
              software stack and <strong>project management tools</strong>.
              Understanding the tools you&apos;ll be using on a daily basis will help you
              stay organized and <strong>increase your efficiency</strong> as you take
              on new tasks.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 5: Start Contributing with Small Wins
            </h2>
            <p className="mb-4">
              A great way to build <strong>job satisfaction</strong> early on is to
              look for small, manageable tasks where you can demonstrate your skills.
              Whether it&apos;s tackling an easy project, organizing a meeting, or helping
              your team with a quick deliverable, small wins show that you&apos;re capable
              and ready to contribute.
            </p>
            <p className="mb-8">
              These small victories will also help you build momentum and confidence as
              you take on more complex projects down the road. Plus, when you
              contribute early, it gives you a chance to receive feedback and make
              improvements, which is key to <strong>career development</strong>.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 6: Seek Regular Feedback
            </h2>
            <p className="mb-4">
              If you want to grow quickly in your new role, one of the most effective
              strategies is to <strong>seek regular feedback</strong>. In your first few
              weeks, ask your manager and teammates for constructive feedback on your
              performance. How are you doing so far? Are there areas for improvement?
            </p>
            <p className="mb-8">
              Feedback is essential for understanding how well you&apos;re meeting
              <strong> performance expectations</strong> and adjusting your approach if
              needed. It also shows that you&apos;re committed to
              <strong> professional growth</strong> and willing to learn. Even if the
              feedback isn&apos;t all positive, take it in stride—it&apos;s an opportunity to
              improve and refine your skills.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Step 7: Set Goals for the Next 90 Days
            </h2>
            <p className="mb-4">
              As your first month comes to a close, it&apos;s time to think about the next
              phase of your journey. What do you want to accomplish in the next 60 or
              90 days? Setting clear <strong>career goals</strong> will help you stay
              focused and motivated as you continue to grow in your role.
            </p>
            <p className="mb-8">
              Talk with your manager about setting <strong>measurable goals</strong>
              that align with the team&apos;s objectives. These could include mastering a
              new tool, taking on a bigger project, or improving your
              <strong> workplace skills</strong>. By creating a roadmap for success,
              you&apos;ll not only stay on track but also show your commitment to
              contributing to the company&apos;s long-term success.
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

export default First30DaysBlog;
