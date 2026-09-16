import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import LoveBlogPage from "./pages/LoveBlog";
import RestructuringBlogPage from "./pages/RestructuringBlog";
import NjaanuaryBlogPage from "./pages/NjaanuaryBlog";
import FutureRecruitmentBlogPage from "./pages/FutureRecruitmentBlog";
import OnboardingBlogPage from "./pages/OnboardingBlog";
import First30DaysBlogPage from "./pages/First30DaysBlog";
import WorkplaceCultureBlogPage from "./pages/WorkplaceCultureBlog";
import VirtualTeamsBlogPage from "./pages/VirtualTeamsBlog";
import InstantCoffeeBlogPage from "./pages/InstantCoffeeBlog";
import SkillsBasedHiringBlogPage from "./pages/SkillsBasedHiringBlog";
import CommonInterviewQuestionsBlogPage from "./pages/CommonInterviewQuestionsBlog";
import HrReviewBlogPage from "./pages/HrReviewBlog";
import BlogArticle from "./pages/BlogArticle";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/love" element={<LoveBlogPage />} />
        <Route
          path="/blogs/restructuring-hr-hero"
          element={<RestructuringBlogPage />}
        />
        <Route
          path="/blogs/surviving-njaanuary"
          element={<NjaanuaryBlogPage />}
        />
        <Route
          path="/blogs/future-of-recruitment"
          element={<FutureRecruitmentBlogPage />}
        />
        <Route
          path="/blogs/onboarding-programs"
          element={<OnboardingBlogPage />}
        />
        <Route
          path="/blogs/first-30-days-new-employee"
          element={<First30DaysBlogPage />}
        />
        <Route
          path="/blogs/workplace-culture"
          element={<WorkplaceCultureBlogPage />}
        />
        <Route
          path="/blogs/virtual-high-performing-teams"
          element={<VirtualTeamsBlogPage />}
        />
        <Route
          path="/blogs/instant-coffee-mentality"
          element={<InstantCoffeeBlogPage />}
        />
        <Route
          path="/blogs/skills-based-hiring"
          element={<SkillsBasedHiringBlogPage />}
        />
        <Route
          path="/blogs/common-interview-questions"
          element={<CommonInterviewQuestionsBlogPage />}
        />
        <Route
          path="/blogs/2024-hr-review"
          element={<HrReviewBlogPage />}
        />
        <Route path="/blogs/:slug" element={<BlogArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;