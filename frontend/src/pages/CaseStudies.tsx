import Navbar from "../components/Layout/Navbar";
import CaseStudiesContent from "../components/CaseStudies/CaseStudies";
import Footer from "../components/Layout/Footer";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesContent />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;