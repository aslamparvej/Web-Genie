import { motion } from "motion/react";

import Button from "../ui/Button";
import toast from "react-hot-toast";
import { fade, fadeUp, staggerContainer } from "../../animations/motionVariants";

const promptExamples = [
  {
    title: "SaaS Landing Page",
    prompt:
      "Create a modern SaaS landing page for an AI productivity tool with pricing and testimonials.",
  },
  {
    title: "Portfolio",
    prompt:
      "Build a minimalist portfolio website for a frontend developer with projects and contact section.",
  },
  {
    title: "Restaurant",
    prompt:
      "Generate a premium restaurant website with menu, gallery, online reservation, and contact page.",
  },
  {
    title: "Agency",
    prompt:
      "Create a digital marketing agency website with services, case studies, team, and pricing.",
  },
  {
    title: "E-commerce",
    prompt:
      "Design a fashion store homepage with featured products, categories, and shopping cart.",
  },
  {
    title: "Personal Blog",
    prompt:
      "Build a clean personal blog for a travel writer with featured articles and newsletter signup.",
  },
];

const PromptExamples = () => {
  const handleOnCopy = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Copy prompt successfully!");
  };
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
      id="prompt_examples"
    >
      <motion.h2
        variants={fade}
        className="text-4xl font-bold text-center mb-20"
      >
        Prompt Examples
      </motion.h2>
      <div className="grid gap-8 grid-cols-1  lg:grid-cols-3">
        {promptExamples.map((prompt, index) => (
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
            className="flex flex-col justify-between border border-gray-800 p-6 rounded-2xl"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">{prompt.title}</h3>
              <p className="mb-8 text-gray-400">{prompt.prompt}</p>
            </div>
            <div className="flex items-center justify-end">
              <Button
                label="Use this Prompt"
                size="sm"
                onClick={() => handleOnCopy(prompt.prompt)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PromptExamples;
