import virtualImage from "../../assets/blogs/virtual.jpg";
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

const VirtualTeamsBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#1F2933] [&_h2]:text-[#1F2933] [&_h3]:text-[#1F2933] [&_strong]:text-[#1F2933]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2933] md:text-[42px] lg:text-[42px]">
            Leading Virtual High-Performing Teams: What CEOs, Directors, Managers and Team Leaders Need to Know
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            The challenge? How do you build a high-performing team when everyone is remote?
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={virtualImage}
            alt="Virtual team collaboration and remote leadership"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>October 25, 2024</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Leadership</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-8">
              Gone are the days when you could simply drop by someone&apos;s desk or hold an impromptu meeting in the conference room. Now, you&apos;re navigating Zoom meetings, Slack messages, and endless email threads, all while trying to keep everyone aligned, motivated, and on track.
            </p>
            <p className="mb-8">
              But here&apos;s the truth: <strong>high-performing virtual teams aren&apos;t just possible—they can be game-changing.</strong> The secret lies in how you approach leadership in this virtual landscape.
            </p>
            <p className="mb-8">
              When one of our clients—let&apos;s call him John, a CEO of a fast-growing tech company—first transitioned to leading a virtual team, he thought, <em>“We&apos;ll just move our operations online, and everything will flow just fine.”</em> It didn&apos;t. Productivity dropped, communication became disjointed, and the quality and team morale plummeted. John wasn&apos;t alone. The reality is, <strong>what works in an office doesn&apos;t always translate to a virtual environment.</strong>
            </p>
            <p className="mb-8">
              The problem? Many leaders underestimate the fundamental shifts required to make virtual teams thrive.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              So, What&apos;s the Secret Sauce?
            </h2>

            <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Trust, Trust, Trust</h3>
            <p className="mb-8">
              Imagine leading without seeing your team every day. It&apos;s hard, right? That&apos;s where trust comes in. One of our clients in the service industry saw a complete turnaround when they stopped micromanaging and started empowering their virtual team to take ownership.
            </p>

            <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Clear Expectations = Better Outcomes</h3>
            <p className="mb-4">
              In the office, you could casually remind your team about upcoming deadlines. In a virtual setting, that&apos;s not so easy. Clear, documented expectations become your best friend.
            </p>
            <p className="mb-8">
              <strong>Do you have KPIs in place?</strong>
            </p>

            <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. Human Connection, Even From Afar</h3>
            <p className="mb-8">
              Remote teams can feel isolated, especially when spread across different regions. One of our clients learned that quick, casual chats—outside of formal meetings—kept their virtual team connected. People need human connection to stay motivated, even if it&apos;s through a screen.
            </p>

            <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. Equip Your Team to Succeed</h3>
            <p className="mb-4">
              A good team can&apos;t perform if they&apos;re fighting with technology or unclear processes. From experience, one of our biggest success stories came from a retail company that upgraded not just their tools but how those tools were being used. They didn&apos;t just throw software at the problem—they implemented tools designed for collaboration and success.
            </p>
            <p className="mb-8">
              <strong>What tools and systems do you have in place?</strong>
            </p>

            <p className="mb-8">
              As a leader, think of yourself as the bridge between your company&apos;s vision and the team working to achieve it. In a virtual world, that bridge has to be stronger, clearer, and more intentional. You&apos;re not just managing tasks—you&apos;re managing the pulse of your team&apos;s productivity, creativity, and engagement.
            </p>
            <p className="mb-8">
              When our clients adopted this mindset shift, their teams didn&apos;t just perform—they excelled. We&apos;ve seen virtual teams go from struggling to meet targets to crushing them. And the common thread? <strong>Strong leadership that prioritises communication, trust, and structure.</strong>
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              So, Are You Ready to Lead Differently?
            </h2>
            <p className="mb-4">
              At <a href="https://www.linkedin.com/company/morsan-hr-consulting/" className="text-[#C9A227] underline underline-offset-2">Morsan HR Consulting</a>, we&apos;ve helped CEOs, Directors, Managers and Team leaders like you transform their virtual teams into high-performing units. From aligning goals to fostering connection, we offer tailored strategies that ensure your remote workforce not only survives but thrives.
            </p>
            <p className="mb-8">
              Ready to elevate your virtual team&apos;s performance? Let&apos;s talk.
            </p>

            <p className="mb-8 text-[13px] leading-[1.6] text-[#292929]">
              <strong>Sandra Moraa</strong><br />
              CEO and Principal Lead HR Consultant, Morsan HR Consulting
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

export default VirtualTeamsBlog;
