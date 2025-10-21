import { motion } from "motion/react";
import { NavLink } from "react-router";

const Main = () => {
  return (
    <main className="flex flex-col md:flex-row py-12 px-4 md:py-12 md:px-6 z-1 relative text-center">
      <div className="flex flex-col gap-6 relative z-1">
        <section>
          <motion.h1
            className="text-4xl md:text-6xl font-philosopher font-bold tracking-wider text-stone-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Car Detailing, Reimagined
          </motion.h1>

          <motion.p
            className="mt-4 text-lg font-arial-geo text-stone-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            ჩვენ ვუბრუნებთ თქვენს ავტომობილს ახლებურ იერსახეს
          </motion.p>
        </section>

        <NavLink to="/services">
          <motion.button
            className="btn bg-transparent text-teal-400 font-light border-3 border-double border-teal-500 mt-6 p-4 cursor-pointer rounded-lg transition relative animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            სერვისების ნახვა
          </motion.button>
        </NavLink>
      </div>
    </main>
  );
};

export default Main;
