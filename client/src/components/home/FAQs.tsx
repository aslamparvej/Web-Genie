import { useState } from "react";
import {
  Sparkles,
  Code2,
  Globe,
  CircleHelp,
  FileText,
  CreditCard,
} from "lucide-react";
import { motion } from "motion/react";

import Accordion from "../ui/Accordion";
import { fade, staggerContainer } from "../../animations/motionVariants";

const faqs = [
  {
    icon: CircleHelp,
    question: "Do I need coding experience?",
    answer:
      "No. Simply describe your idea, and Web Genie generates a professional website for you.",
  },
  {
    icon: FileText,
    question: "Can I customize the generated website?",
    answer:
      "Yes. You can edit layouts, content, colors, fonts, and other design elements before publishing.",
  },
  {
    icon: Globe,
    question: "Are the websites responsive?",
    answer:
      "Yes. Every website is optimized for desktop, tablet, and mobile devices by default.",
  },
  {
    icon: Code2,
    question: "Can I export my website?",
    answer:
      "Yes. Depending on your plan, you can download the generated source code or deploy it directly.",
  },
  {
    icon: Sparkles,
    question: "How long does it take to generate a website?",
    answer:
      "Most websites are generated in under a minute, depending on the complexity of your prompt.",
  },
  {
    icon: CreditCard,
    question: "Is there a free plan?",
    answer:
      "Yes. Start with our free plan and upgrade anytime for more generations and premium features.",
  },
];

const FAQs = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleActiveToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
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
      id="faqs"
    >
      <motion.h2
        variants={fade}
        className="text-4xl font-bold text-center mb-20"
      >
        Frequently asked questions (FAQs)
      </motion.h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <Accordion
            id={index}
            key={index}
            question={faq.question}
            answer={faq.answer}
            icon={<faq.icon size={20} />}
            isActive={index === activeId}
            setActive={() => handleActiveToggle(index)}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FAQs;
