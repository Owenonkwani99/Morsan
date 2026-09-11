import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrackRecordSection from "../components/TrackRecordSection";
import WhyItWorks from "../components/WhyItWorks";
import IndustriesSection from "../components/IndustriesSection";
import AboutSection from "../components/ServicesSection";
import ImpactSection from "../components/ImpactSection";
import StrategySection from "../components/StrategySection";
import TestimonialsSection from "../components/TestimonialsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ClientPortfolioSection from "../components/ClientPortfolioSection";
import FAQSection from "../components/FAQSection";
import BlogsSection from "../components/BlogsSection";
import Footer from "../components/Footer";


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