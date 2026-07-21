import {
  Zap,
  Sparkles,
  Palette,
  Smartphone,
  Code2,
  SlidersHorizontal,
  WandSparkles,
  Rocket,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { fade, fadeUp, staggerContainer } from "../../animations/motionVariants";

const whyChooseUs = [
  {
    icon: Zap,
    title: "Build Websites in Seconds",
    description:
      "Turn a simple prompt into a beautiful, fully responsive website instantly.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description:
      "Our advanced AI understands your ideas and transforms them into professional designs.",
  },
  {
    icon: Palette,
    title: "Modern & Stunning Designs",
    description:
      "Generate clean, responsive websites with contemporary layouts and polished UI.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First by Default",
    description:
      "Every website is optimized for desktop, tablet, and mobile devices.",
  },
  {
    icon: Code2,
    title: "No Coding Required",
    description:
      "Create production-ready websites without writing a single line of code.",
  },
  {
    icon: WandSparkles,
    title: "Lightning Fast",
    description: "Go from idea to live website in minutes, not days.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fully Customizable",
    description:
      "Edit layouts, colors, typography, and content whenever you want.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Generate websites built with clean code and search engine best practices.",
  },
  {
    icon: Rocket,
    title: "One-Click Deployment",
    description: "Publish your website effortlessly with a single click.",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={staggerContainer}
      className="py-20"
      id="why_choose_us"
    >
      <motion.h2 variants={fade} className="text-4xl font-bold text-center mb-20">
        Why Choose Web Genie?
      </motion.h2>
      <div className="grid gap-8 grid-cols-1  sm:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
            variants={fadeUp}
            key={index}
            className="border border-gray-800 p-6 rounded-2xl"
          >
            <item.icon size={50} color="#fe9a00" />
            <h3 className="text-xl font-semibold my-3">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
