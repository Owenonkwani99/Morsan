import { useParams } from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import restructure from "../assets/blogs/restructure.jpg";
import guide from "../assets/blogs/guide.jpg";
import recruitment from "../assets/blogs/recruitment.jpg";
import onboarding from "../assets/blogs/onboarding.jpg";
import hiring from "../assets/blogs/hiring.jpg";
import interview from "../assets/blogs/interview.jpg";
import review from "../assets/blogs/review.jpg";
import employee from "../assets/blogs/employee.jpg";
import hr from "../assets/blogs/hr.jpg";
import virtual from "../assets/blogs/virtual.jpg";
import instant from "../assets/blogs/instant.jpg";

const articles = {
  "restructuring-hr-hero": {
    image: restructure,
    title: "Company Restructuring: How HR Can Be the Hero (Not the Villain)",
    description: "Here's how HR can help organizations navigate restructuring.",
  },
  "surviving-njaanuary": {
    image: guide,
    title: "Surviving Njaanuary: The HR Guide to Getting Your Team Back on Track",
    description: "Practical ways to help your team return to work with focus and momentum.",
  },
  "future-of-recruitment": {
    image: recruitment,
    title: "The Future of Recruitment: What SMEs Need to Know",
    description: "What changing hiring practices mean for growing businesses.",
  },
  "onboarding-programs": {
    image: onboarding,
    title: "Why Most Onboarding Programs Fail (And What to Do Instead)",
    description: "New employees need more than paperwork and introductions.",
  },
  "skills-based-hiring": {
    image: hiring,
    title: "Skills-Based Hiring: Why It’s Time to Hire for What People Can Do",
    description: "A practical look at hiring for capability, not just credentials.",
  },
  "common-interview-questions": {
    image: interview,
    title: "Common Interview Questions & Best Answers",
    description: "How to approach common interview questions with confidence.",
  },
  "2024-hr-review": {
    image: review,
    title: "2024 in Review: What We Learned and What’s Next for HR in 2025",
    description: "Lessons that shaped the year for HR and businesses.",
  },
  "first-30-days-new-employee": {
    image: employee,
    title: "How to Nail the First 30 Days as a New Employee",
    description: "A step-by-step roadmap for starting a new role well.",
  },
  "workplace-culture": {
    image: hr,
    title: "Is Your Culture Working For or Against You?",
    description: "How culture can become a strength that drives performance.",
  },
  "virtual-high-performing-teams": {
    image: virtual,
    title: "Leading Virtual High-Performing Teams",
    description: "How leaders can build strong remote teams and collaboration.",
  },
  "instant-coffee-mentality": {
    image: instant,
    title: "The Illusion of Instant Coffee Mentality",
    description: "A journey beyond the expectation of one-year growth.",
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#F0F4F8] px-6 py-40 text-center text-[#001C43]">
          <h1 className="text-4xl font-semibold">Blog not found</h1>
          <a className="mt-6 inline-block text-[#C9A227]" href="/blogs">
            Back to blogs
          </a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F8F8] px-6 pb-28 pt-36 text-[#001C43] md:px-10 lg:px-12" data-navbar-theme="light">
        <article className="mx-auto max-w-[940px]">
          <h1 className="max-w-[760px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#001C43] md:text-[42px] lg:text-[42px]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-[720px] text-[15px] leading-[1.55] text-[#6F6A6A]">
            {article.description}
          </p>
          <img
            src={article.image}
            alt={article.title}
            className="mt-10 h-[280px] w-full rounded-[3px] object-cover sm:h-[360px] md:h-[460px] lg:h-[520px]"
          />
          <p className="mt-10 max-w-[680px] text-[15px] leading-[1.7] text-[#555050]">
            This article is coming soon. Check back for practical insights from
            Morsan Consulting Group.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticle;
