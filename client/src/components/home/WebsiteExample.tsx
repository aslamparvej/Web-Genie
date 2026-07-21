import { motion } from "motion/react";
import { Bot, ArrowRight } from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import {
  fade,
  fadeUp,
  staggerContainer,
} from "../../animations/motionVariants";

import mathMasterImage from "../../assets/example/math-master.png";
import ironForgeImage from "../../assets/example/iron-forge.png";
import pixelForgeImage from "../../assets/example/pixel-forge.png";
import savorImage from "../../assets/example/savor.png";

const websiteExampleData = [
  {
    title: "Math Master",
    category: "Portfolio",
    deployLink: "https://purple-lemur-514356.hostingersite.com/",
    imageSrc: mathMasterImage,
  },
  {
    title: "Iron Forge",
    category: "Shop",
    deployLink: "https://purple-lemur-514356.hostingersite.com/",
    imageSrc: ironForgeImage,
  },
  {
    title: "Pixel Forge",
    category: "Agency",
    deployLink: "https://purple-lemur-514356.hostingersite.com/",
    imageSrc: pixelForgeImage,
  },
  {
    title: "Savor",
    category: "Restaurant",
    deployLink: "https://purple-lemur-514356.hostingersite.com/",
    imageSrc: savorImage,
  },
];

const WebsiteExample = () => {
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
      id="website_examples"
    >
      <motion.span
        variants={fade}
        className="w-fit mx-auto px-3 py-1.5 flex gap-2 justify-center items-center text-sm text-amber-500 font-medium rounded-full bg-amber-500/15"
      >
        <Bot />
        AI Generated Website
      </motion.span>
      <SectionHeading title="Inspiration Gallery" customClasses="my-4" />
      <motion.p
        variants={fade}
        className="text-gray-500 text-[16px] font-medium text-center mb-20"
      >
        See what others built with Web Genie in seconds
      </motion.p>

      <div className="grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {websiteExampleData.map((item, indx) => (
          <motion.div
            variants={fadeUp}
            key={indx}
            className="min-h-65 group border border-gray-800 rounded-xl relative overflow-hidden"
          >
            <div>
              <div className="flex gap-2 px-3 py-2">
                <span className="w-3 h-3 block rounded-full bg-[#FF5F57]"></span>
                <span className="w-3 h-3 block rounded-full bg-[#FEBC2E]"></span>
                <span className="w-3 h-3 block rounded-full bg-[#28C840]"></span>
              </div>
            </div>
            <div className="h-[calc(100%-28px)]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={item.imageSrc}
              />
            </div>
            <div className="p-4 absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl bg-secondary-400/90 flex justify-between items-center">
              <div>
                <p className="w-fit px-3 py-0.5 text-xs text-amber-500 bg-amber-500/10 rounded-full text-center">
                  {item.category}
                </p>
                <h2 className="mt-1 text-gray-200 text-[1rem] font-semibold">
                  {item.title}
                </h2>
              </div>
              <a
                className="px-3 py-2 flex gap-1 items-center justify-center rounded-lg border border-gray-800 bg-secondary-400 text-sm"
                href={item.deployLink}
                target="_blank"
              >
                Preview
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WebsiteExample;
