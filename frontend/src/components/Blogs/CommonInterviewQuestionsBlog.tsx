import interviewImage from "../../assets/blogs/interview.jpg";
import onboardingImage from "../../assets/blogs/onboarding.jpg";
import hiringImage from "../../assets/blogs/hiring.jpg";
import recruitmentImage from "../../assets/blogs/recruitment.jpg";

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
    slug: "future-of-recruitment",
    image: recruitmentImage,
    title: "The Future of Recruitment: What SMEs Need to Know",
    description:
      "What changing hiring practices mean for growing businesses.",
  },
];

const CommonInterviewQuestionsBlog = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] text-[#001C43] [&_h2]:text-[#001C43] [&_h3]:text-[#001C43] [&_strong]:text-[#001C43]" data-navbar-theme="light">
      <section className="px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="max-w-[900px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#001C43] md:text-[42px] lg:text-[42px]">
            Common Interview Questions &amp; Best Answers
          </h1>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.55] text-[#6F6A6A] md:text-[15px]">
            Prepare for interviews with practical guidance on the questions HR
            professionals ask most often.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3px]">
          <img
            src={interviewImage}
            alt="Preparing for common HR interview questions"
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[720px]"
          />
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="text-[12px] uppercase tracking-[0.04em] text-[#555050]">
            <div className="flex items-center gap-3">
              <span>February 24th 2025</span>
              <span className="h-[1px] w-3 bg-[#B8B4B4]" />
              <span>Interviews</span>
            </div>
          </aside>

          <article className="min-w-0 max-w-[680px] text-[15px] leading-[1.65] text-[#555050] md:text-[15px]">
            <h2 className="mb-5 text-[17px] font-bold leading-[1.3] text-[#292929]">
              What Are Common HR Interview Questions?
            </h2>
            <p className="mb-8">
              The hiring process is a crucial step for both <a href="https://morsanhr.africa/services/recruitment-management/" className="text-[#C9A227] underline underline-offset-2">employers</a> and job seekers. Whether you&apos;re preparing for an upcoming interview or conducting one, understanding the common HR interview questions can help you navigate the process smoothly. HR professionals ask these questions to assess candidates&apos; qualifications, skills, and cultural fit within the organization. Below, we explore some of the most frequently asked HR interview questions and how to approach them.
            </p>

            <h2 className="mb-6 text-[17px] font-bold leading-[1.3] text-[#292929]">
              Common HR Interview Questions &amp; Best Answers
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">1. Tell Me About Yourself</h3>
                <p className="mb-4">This classic opening question allows candidates to provide a brief overview of their background, experience, and key strengths. Keep your response professional, structured, and relevant to the HR field.</p>
                <p><strong>Example Response:</strong> &quot;I am an HR professional with over five years of experience in talent acquisition and employee relations. I have successfully led recruitment campaigns that improved workforce diversity and reduced turnover by 20%. My passion lies in fostering a positive workplace culture and implementing policies that enhance employee satisfaction and productivity.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">2. Why Do You Want to Work Here?</h3>
                <p className="mb-4">Employers use this question to determine if you&apos;ve researched the company and align with its values, mission, and goals.</p>
                <p className="mb-3"><strong>Tip:</strong> Highlight what excites you about the company&apos;s HR practices, culture, or strategic goals.</p>
                <p><strong>Example Response:</strong> &quot;I admire your company&apos;s commitment to employee development and inclusivity. Your HR initiatives, such as leadership training and mentorship programs, align perfectly with my passion for talent development. I&apos;m excited about the opportunity to contribute to a workplace that prioritizes employee engagement and growth.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">3. What Are Your Strengths and Weaknesses?</h3>
                <p className="mb-4">This question evaluates self-awareness and honesty. Be confident in discussing your strengths, and when mentioning weaknesses, show how you are working to improve them.</p>
                <p><strong>Example Response:</strong> &quot;My strength lies in conflict resolution and employee engagement. I enjoy mediating workplace disputes and fostering a collaborative work environment. As for weaknesses, I sometimes focus too much on perfection in policy documentation, but I have been working on balancing efficiency with accuracy.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">4. Describe a Challenging Work Situation and How You Handled It</h3>
                <p className="mb-4">Behavioral questions assess problem-solving skills and resilience.</p>
                <p><strong>Example Response:</strong> &quot;In my previous HR role, we faced high employee turnover due to dissatisfaction with internal career growth opportunities. I initiated a career development program, introduced mentorship opportunities, and collaborated with leadership to create clear career pathways. Within a year, turnover rates decreased by 25%, and employee engagement scores improved.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">5. Where Do You See Yourself in Five Years?</h3>
                <p className="mb-4">This question gauges career aspirations and alignment with the company&apos;s long-term HR goals.</p>
                <p><strong>Example Response:</strong> &quot;In five years, I see myself in a senior HR leadership role, developing and implementing strategic initiatives that drive employee engagement and organizational success. I aim to leverage HR analytics to improve talent management and support business growth.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">6. Why Should We Hire You?</h3>
                <p className="mb-4">A strong answer should showcase your HR expertise, relevant skills, and enthusiasm for the role.</p>
                <p><strong>Example Response:</strong> &quot;With my experience in HR policy development, employee engagement, and talent acquisition, I can bring innovative solutions to your HR department. I thrive in dynamic environments, and my ability to analyze workforce trends and implement effective HR strategies makes me a strong fit for your team.&quot;</p>
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-bold text-[#292929]">7. Do You Have Any Questions for Us?</h3>
                <p className="mb-4">Always have at least one thoughtful question prepared to demonstrate interest in the role and company.</p>
                <p className="mb-3"><strong>Example Questions:</strong></p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>How does the HR team contribute to the company&apos;s long-term goals?</li>
                  <li>What are the biggest HR challenges your organization is currently facing?</li>
                  <li>How does the company support HR professional development and growth?</li>
                </ul>
              </div>
            </div>

            <h2 className="mb-4 mt-10 text-[17px] font-bold leading-[1.3] text-[#292929]">Final Thoughts</h2>
            <p className="mb-8">Preparing for HR interview questions is essential for making a strong impression. By practicing your responses and tailoring them to the company and role, you can boost your confidence and increase your chances of success. Remember to remain professional, concise, and genuine during the interview.</p>

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

      <section className="overflow-hidden bg-[#F0F4F8] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#001C43]">You also might like</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {relatedBlogs.map((blog) => (
              <article key={blog.slug} className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white">
                <div className="aspect-[4/3] overflow-hidden"><img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#001C43]">{blog.title}</h3>
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

export default CommonInterviewQuestionsBlog;
