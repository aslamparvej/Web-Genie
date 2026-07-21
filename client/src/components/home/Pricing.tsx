import { motion } from "motion/react";
import { fade, fadeUp, staggerContainer } from "../../animations/motionVariants";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out Web Genie.",
    featured: false,
    features: [
      "5 AI website generations",
      "Basic templates",
      "Responsive websites",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for freelancers and creators.",
    featured: true,
    features: [
      "Unlimited AI generations",
      "Premium templates",
      "Export source code",
      "Custom domain support",
      "Priority AI generation",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "Built for agencies and growing teams.",
    featured: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Multiple projects",
      "API access",
      "White-label option",
      "Dedicated support",
    ],
  },
];

const Pricing = () => {
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
      id="pricing"
    >
      <motion.h2
        variants={fade}
        className="text-4xl font-bold text-center mb-20"
      >
        Pricing
      </motion.h2>
      <div className="grid gap-8 grid-cols-1  lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
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
            className="flex flex-col justify-between border border-gray-800 p-6 rounded-2xl relative overflow-hidden"
          >
            {plan.featured && (
              <span className="py-2 px-20 absolute top-4 -right-17.5 rotate-45 text-gray-900 font-bold bg-amber-500">
                Featured
              </span>
            )}
            <div className="mb-20">
              <h2 className="text-[16px] text-gray-300 font-bold">
                {plan.name}
              </h2>
              <div className="my-8">
                <div className="flex items-end gap-2 mb-1">
                  <h3 className="text-4xl font-bold">{plan.price}</h3>
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border border-amber-500 ">
                      <span className="w-2 h-2 block rounded-full bg-amber-600"></span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-3 px-8 rounded-xl bg-amber-500 cursor-pointer text-gray-900 text-[16px] font-bold hover:bg-amber-500/75">
              Get started with {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;
