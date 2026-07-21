import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

import heroBanner from "../../assets/hero-banner.png";
import videoSrc from "../../assets/videos/demo-video.mp4";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col-reverse items-center justify-between gap-16 py-29 lg:flex-row"
      id="home"
    >
      <motion.div className="flex-1">
        <motion.h1
          variants={fadeUp}
          className="text-4xl text-gray-300 font-bold mb-8 lg:text-8xl"
        >
          Generate a website within{" "}
          <span className="text-amber-500">a minute</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm  text-gray-400 lg:text-lg"
        >
          Generate a pixel-perfect, SEO-optimized single-page site in 60
          seconds. Download a clean .zip — ready for Hostinger, Bluehost, or any
          host you choose. Pay once. Own forever.
        </motion.p>
      </motion.div>
      <motion.div variants={fadeUp} className="flex-1 rounded-2xl">
        <video
          src={videoSrc}
          loop
          autoPlay
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
          className="rounded-4xl hidden"
        />

        <img src={heroBanner} alt="Hero banner" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
