import love from "../../assets/blogs/love.jpg";
import restructure from "../../assets/blogs/restructure.jpg";
import guide from "../../assets/blogs/guide.jpg";
import recruitment from "../../assets/blogs/recruitment.jpg";
import onboarding from "../../assets/blogs/onboarding.jpg";
import hiring from "../../assets/blogs/hiring.jpg";
import interview from "../../assets/blogs/interview.jpg";
import review from "../../assets/blogs/review.jpg";
import employee from "../../assets/blogs/employee.jpg";
import hr from "../../assets/blogs/hr.jpg";
import virtual from "../../assets/blogs/virtual.jpg";
import instant from "../../assets/blogs/instant.jpg";

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
  {
    slug: "love",
    image: love,
    title: "Let's Talk About Love Languages... At Work",
    description:
      "Okay, hear me out. Your employees have love languages, too. And if you're not speaking theirs, you might be missing what really drives engagement.",
  },
  {
    slug: "restructuring-hr-hero",
    image: restructure,
    title:
      "Company Restructuring: How HR Can Be the Hero (Not the Villain)",
    description:
      "Picture this: it's 7:30 AM on a Monday. The office WhatsApp group is already exploding. Here's how HR can help organizations navigate restructuring.",
  },
  {
    slug: "future-of-recruitment",
    image: recruitment,
    title: "The Future of Recruitment: What SMEs Need to Know",
    description:
      "The job market is evolving at a rapid pace, and SMEs need to understand what these changes mean for how they attract, assess, and hire talent.",
  },
  {
    slug: "skills-based-hiring",
    image: hiring,
    title:
      "Skills-Based Hiring: Why It’s Time to Hire for What People Can Do (Not Where They’ve Been)",
    description:
      "Let’s be honest. How many times have you looked at a job posting and thought about the experience requirements before considering what someone can actually do?",
  },
  {
    slug: "common-interview-questions",
    image: interview,
    title:
      "Common Interview Questions & Best Answers (Not Where They’ve Been)",
    description:
      "What Are Common HR Interview Questions? The hiring process is a crucial step for both employers and candidates, and knowing how to approach common interview questions can make all the difference.",
  },
  {
    slug: "2024-hr-review",
    image: review,
    title:
      "2024 in Review: What We Learned and What’s Next for HR in 2025",
    description:
      "As the year wraps up, we find ourselves reflecting on all the highs, the challenges, and the lessons that shaped the year for HR and businesses.",
  },
  {
    slug: "first-30-days-new-employee",
    image: employee,
    title:
      "How to Nail the First 30 Days as a New Employee: A Step-by-Step Roadmap",
    description:
      "How to Nail the First 30 Days as a New Employee A Step-by-Step Roadmap starting with the right mindset, relationships, priorities, and habits.",
  },
  {
    slug: "virtual-high-performing-teams",
    image: virtual,
    title:
      "Leading Virtual High-Performing Teams: What CEOs, Directors, Managers and Team Leaders Need to Know",
    description:
      "The challenge? How do you build a high-performing team when everyone is remote? Gone are the days when teams had to share the same physical workspace to collaborate effectively.",
  },
  {
    slug: "instant-coffee-mentality",
    image: instant,
    title:
      "The Illusion of Instant Coffee Mentality: A Journey Beyond the One-Year Growth",
    description:
      "Picture this: You’re sitting in a job interview, and the dreaded question is thrown your way. What are your expectations for growth, and how quickly do you expect to progress?",
  },
];

const Blogs = () => {
  return (
    <section className="overflow-hidden bg-[#F4EEEE] px-6 py-20 md:py-24 lg:px-12 lg:py-40" data-navbar-theme="light">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <span className="inline-block rounded-full border border-[#C9A227] px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#C9A227]">
            Our Blog
          </span>

          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:text-[42px]">
            Insights that help your
            <br />
            business move forward.
          </h2>

          <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.7] text-[#777171]">
            Practical insights, ideas, and perspectives on people, leadership, processes, organizational structure, and building <br />better businesses.
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
                <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1F2933]">
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
      </div>
    </section>
  );
};

export default Blogs;