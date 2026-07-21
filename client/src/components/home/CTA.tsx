import { motion } from "motion/react";
import { Sparkles, Rocket, Play } from "lucide-react";

import Button from "../ui/Button";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

const CTA = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={staggerContainer}
      className="relative rounded-3xl bg-linear-to-br from-amber-500 via-amber-600 to-amber-700 px-8 py-20 mb-20 text-center shadow-2xl"
    >
      <motion.div variants={fadeUp}>
        <span className="inline-flex gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
          <Rocket size={20} /> Launch Your Idea Today
        </span>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
          Ready to Build Your
          <br />
          Dream Website?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Turn your ideas into beautiful, responsive websites in seconds. No
          coding required—just describe your vision and let AI do the rest.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            label="Start for Free"
            variant="secondary"
            icon={<Sparkles />}
            onClick={() => {}}
          />

          <Button
            label="Watch Demo"
            variant="primary"
            icon={<Play />}
            onClick={() => {}}
          />
        </div>

        <p className="mt-8 text-sm text-white/80 text-center">
          Free forever • No credit card required
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
