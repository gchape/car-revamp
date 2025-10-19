import { motion, type Variants } from "motion/react";
import { aboutCompany } from "../../ts/data";
import Rating from "../review/Rating";
import Review from "../review/Review";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

function About() {
  return (
    <div className="font-arial-geo flex flex-col lg:flex-row mx-5 lg:mx-10 my-10 mb-0 md:mb-15">
      <div className="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0">
        <section className="mb-5">
          <h1 className="font-dancing-script text-stone-300 text-3xl md:text-4xl lg:text-5xl uppercase">
            Car Revamp
          </h1>
          <h2 className="text-stone-400 text-lg md:text-2xl mb-5">
            ჩვენ ვუბრუნებთ თქვენს ავტომობილს ახლებურ იერსახეს.
          </h2>

          <hr className="text-neutral-700" />
        </section>

        <section>
          {aboutCompany.map((line, index) => (
            <motion.p
              key={index}
              className="text-neutral-400 text-lg md:text-xl tracking-wide pb-5 lg:pb-10"
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              {line}
            </motion.p>
          ))}
        </section>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 mb-10 items-end gap-y-8 justify-center">
        <div className="self-baseline-last">
          <Rating />
        </div>

        <div>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default About;
