import { MessageSquareText, Sparkles, Rocket } from "lucide-react";
import { motion } from "motion/react";
import {
  fade,
  fadeUp,
  staggerContainer,
} from "../../animations/motionVariants";

const howItWorks = [
  {
    icon: MessageSquareText,
    title: "Describe Your Idea",
    description:
      "Tell Web Genie what you want to build using a simple text prompt.",
  },
  {
    icon: Sparkles,
    title: "AI Builds Your Website",
    description:
      "Our AI generates a modern, responsive website tailored to your requirements.",
  },
  {
    icon: Rocket,
    title: "Customize & Publish",
    description:
      "Fine-tune your website and publish it online with a single click.",
  },
];

const HowItWorks = () => {
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
      id="how_it_works"
    >
      <motion.h2 variants={fade} className="text-4xl font-bold text-center mb-20">How It Works</motion.h2>
      <div className="grid  gap-16 grid-cols-1  lg:grid-cols-3 lg:gap-8">
        {howItWorks.map((item, index) => (
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
            className="flex flex-col justify-between border border-gray-800 p-6 pt-16 rounded-2xl relative text-center"
          >
            <span className="w-16 h-16 p-3 flex items-center justify-center bg-black border border-gray-800 rounded-full absolute -top-8 left-1/2 -translate-x-1/2">
              <span className="absolute inset-0 rounded-full bg-amber-500 blur-md opacity-25 -z-10"></span>
              <span className="w-full h-full flex items-center justify-center rounded-full bg-amber-500 shadow text-gray-900 text-2xl font-bold">
                {index + 1}
              </span>
            </span>

            <div className="flex items-center justify-center">
              {<item.icon size={50} color="#fe9a00" />}
            </div>
            <h2 className="text-xl font-semibold my-4">{item.title}</h2>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
