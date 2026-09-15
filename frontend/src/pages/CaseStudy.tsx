import { useParams } from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import CaseStudyArticle from "../components/CaseStudies/CaseStudyArticle";
import { getCaseStudy } from "../data/caseStudies";

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = slug ? getCaseStudy(slug) : undefined;

  return (
    <>
      <Navbar />
      {caseStudy ? (
        <CaseStudyArticle caseStudy={caseStudy} />
      ) : (
        <main className="min-h-screen bg-[#F4EEEE] px-6 py-40 text-center text-[#1F2933]">
          <h1 className="text-4xl font-semibold">Case study not found</h1>
          <a className="mt-6 inline-block text-[#C9A227]" href="/case-studies">Back to case studies</a>
        </main>
      )}
      <Footer />
    </>
  );
};

export default CaseStudy;