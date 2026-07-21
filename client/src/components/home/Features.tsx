import { motion } from "motion/react";
import {
  LayoutTemplate,
  Paintbrush,
  Smartphone,
  Code2,
  Search,
  Globe,
} from "lucide-react";

import { fade, fadeUp, staggerContainer } from "../../animations/motionVariants";

const features = [
  {
    icon: LayoutTemplate,
    title: "AI Website Generation",
    description:
      "Generate complete websites from natural language prompts in seconds.",
  },
  {
    icon: Paintbrush,
    title: "Modern UI Designs",
    description:
      "Beautiful, professional layouts inspired by the latest design trends.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description:
      "Every website automatically adapts to desktop, tablet, and mobile devices.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Generate well-structured, production-ready code that's easy to maintain.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description:
      "Built with semantic HTML and SEO best practices for better visibility.",
  },
  {
    icon: Globe,
    title: "One-Click Deployment",
    description: "Publish your website instantly and share it with the world.",
  },
];

const Features = () => {
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
      id="features"
    >
      <motion.h2
        variants={fade}
        className="text-4xl font-bold text-center mb-20"
      >
        Features
      </motion.h2>
      <div className="grid gap-8 grid-cols-1  lg:grid-cols-3">
        {features.map((item, index) => (
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

export default Features;
