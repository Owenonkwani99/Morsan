import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Home/Hero";
import TrackRecordSection from "../components/Home/TrackRecordSection";
import WhyItWorks from "../components/Home/WhyItWorks";
import IndustriesSection from "../components/Home/IndustriesSection";
import AboutSection from "../components/Home/ServicesSection";
import ImpactSection from "../components/Home/ImpactSection";
import StrategySection from "../components/Home/StrategySection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import ClientPortfolioSection from "../components/Home/ClientPortfolioSection";
import FAQSection from "../components/Home/FAQSection";
import BlogsSection from "../components/Home/BlogsSection";
import Footer from "../components/Layout/Footer";


const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ClientPortfolioSection />

        <TrackRecordSection />

        <WhyItWorks />

        <AboutSection />

        <IndustriesSection />

        <ImpactSection />

        <StrategySection />

        <TestimonialsSection />

        <CaseStudiesSection />

        <FAQSection />

        <BlogsSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;