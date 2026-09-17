import onboarding from "../../assets/blogs/onboarding.jpg";
import hr from "../../assets/blogs/hr.jpg";
import guide from "../../assets/blogs/guide.jpg";

const blogs = [
   {
    slug: "surviving-njaanuary",
    image: guide,
    title:
      "Surviving Njaanuary: The HR Guide to Getting Your Team Back on Track",
    description:
      "Ah, January. The month where your employees' New Year's resolutions meet the harsh reality of returning to work.",
  },
  {
    slug: "onboarding-programs",
    image: onboarding,
    title: "Why Most Onboarding Programs Fail (And What to Do Instead)",
    description:
      "Introduction: Let’s face it—many onboarding programs look good on paper but flop in practice. New employees need more than paperwork and introductions.",
  },
  {
    slug: "workplace-culture",
    image: hr,
    title: "Is Your Culture Working For or Against You?",
    description:
      "Company culture can be a double-edged sword. HR’s role in shaping company culture can determine whether it becomes a strength that drives performance or a barrier to growth.",
  },
];

const BlogsSection = () => {
  return (
    <section className="overflow-hidden bg-[#F0F4F8] px-6 py-20 md:py-24 lg:px-12 lg:py-28" data-navbar-theme="light">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <span className="inline-block rounded-full border border-[#C9A227] px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#C9A227]">
            Our Blog
          </span>

          <h2 className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#001C43] sm:text-[34px] md:text-[42px]">
            Insights that help your
            <br className="hidden sm:block" />
            business move forward.
          </h2>

          <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.7] text-[#777171]">
            Practical insights, ideas, and perspectives on people, leadership,
            and building better businesses.
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
          {blogs.map((blog, index) => (
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
                <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#001C43]">
                  {blog.title}
                </h3>

                <p className="mt-4 text-[13px] leading-[1.7] text-[#777171]">
                  {blog.description}
                </p>

                {/* Read more */}
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
        <div className="mt-12 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center justify-center border border-[#C9A227] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A227] transition-all duration-200 hover:bg-[#C9A227] hover:text-white"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;