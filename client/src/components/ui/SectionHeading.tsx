import React from "react";
import { motion } from "motion/react";
import { fade } from "../../animations/motionVariants";

const SectionHeading: React.FC<{ title: string, customClasses: string }> = ({ title, customClasses }) => {
  return (
    <motion.h2
      variants={fade}
      className={`text-gray-300 text-5xl font-bold text-center ${customClasses}`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeading;
