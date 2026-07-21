import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "../../animations/motionVariants";

interface AccordionProps {
  id: number;
  question: string;
  answer: string;
  icon?: React.ReactNode;
  isActive: boolean;
  setActive: (id: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  icon,
  isActive,
  setActive,
  id,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-gray-800 rounded-xl overflow-hidden"
    >
      {/* Header */}
      <button
        className="w-full px-4 py-3 flex items-center justify-between cursor-pointer"
        onClick={() => setActive(id)}
      >
        <div className="flex gap-2 items-center text-gray-300">
          {icon && <span>{icon}</span>}
          <h2>{question}</h2>
        </div>
        <ChevronDown
          className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm text-gray-400">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordion;
