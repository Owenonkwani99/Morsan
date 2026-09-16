import instantImage from "../../assets/blogs/instant.jpg";
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

const InstantCoffeeBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#001C43] [&_h2]:text-[#001C43] [&_h3]:text-[#001C43] [&_strong]:text-[#001C43]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#001C43] md:text-[42px] lg:text-[42px]">
            The Illusion of Instant Coffee Mentality: A Journey Beyond the One-Year Growth
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Picture this: You’re sitting in a job interview, and the dreaded question is thrown your way
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={instantImage}
            alt="The illusion of instant growth and development in career progression"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>July 28, 2023</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Growth</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <p className="mb-8">
              Picture this: You’re sitting in a job interview, and the dreaded question is thrown your way, “Why do you want to leave your current role/company?” Like a seasoned pro, you respond, “I’m looking for growth.” Ah, the magic word that everyone seems to know. But here’s the thing that tickles my funny bone: the incredible speed at which some people expect this growth to happen. It’s as if they want to sprout into the next CEO overnight. So, let’s dive into the comical quest for lightning-fast growth and explore the underlying questions that need to be asked.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              1. The Need for Speed
            </h2>
            <p className="mb-8">
              In this fast-paced world, we’ve become obsessed with instant gratification. We want our food delivered in minutes, our movies streamed with a click, and yes, our careers to skyrocket in record time. But really, how fast are you looking to grow? Are we talking “blink-and-you’re-a-manager” speed? It’s worth questioning the logic behind craving rapid growth within months. What can one truly achieve in such a short span that warrants a hunger for even more growth within a year?
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              2. The Fallacy of Overnight Success
            </h2>
            <p className="mb-8">
              Here’s a reality check: true growth takes time. It’s not a magical potion you can gulp down and wake up the next day with a promotion and a corner office. Growth is a journey riddled with discomfort, broken relationships, sacrifices, and countless lessons learned. It’s not the shiny, perfectly curated highlight reel we often see on social media. It’s messy, unpredictable, and requires patience.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              3. Introspection and Evaluation
            </h2>
            <p className="mb-8">
              If growth is what you seek, it’s essential to ask yourself the tough questions. What does growth mean to you? Is it climbing the corporate ladder or mastering new skills? Are you willing to put in the hard work and invest the time required for substantial growth? Evaluating your own motivations and expectations can help set realistic goals and provide a clearer perspective on the path ahead.
            </p>

            <h2 className="mb-4 text-[17px] font-bold leading-[1.3] text-[#292929]">
              4. Embracing the Journey
            </h2>
            <p className="mb-8">
              Growth is not a destination; it’s an ongoing process. It’s about constantly pushing your boundaries, learning from failures, and embracing discomfort. True growth requires dedication, resilience, and a willingness to step outside your comfort zone. It’s in those moments of challenge and uncertainty that the most significant personal and professional transformations occur.
            </p>

            <p className="mb-8">
              So, dear seekers of growth, as you embark on your journey, remember that it takes time, effort, and a willingness to embrace the unknown. Growth is not a race to be won in the shortest time possible; it’s a gradual unfolding of your potential. Be patient, be open to learning, and be ready to invest in yourself. Let go of the illusion of instant growth and instead revel in the joys and surprises that come from the genuine, transformative growth that only time can offer.
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

      <section className="overflow-hidden bg-[#F0F4F8] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[650px] text-left">
            <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#001C43] md:text-[42px]">
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

export default InstantCoffeeBlog;
