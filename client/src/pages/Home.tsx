import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import PromptExamples from "../components/home/PromptExamples";
import WebsiteExample from "../components/home/WebsiteExample";
import Pricing from "../components/home/Pricing";
import FAQs from "../components/home/FAQs";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Features />
      <WebsiteExample />
      <PromptExamples />
      <Pricing />
      <FAQs />
      <CTA />
    </>
  );
};

export default Home;