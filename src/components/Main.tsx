import { motion } from "motion/react";
import { NavLink } from "react-router";
import { services } from "../ts/data";

const Main = () => {
  return (
    <main className="flex flex-col md:flex-row py-12 px-4 md:py-12 md:px-6 z-1 relative text-center">
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-stone-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Car Detailing, Reimagined
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-stone-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          ჩვენ ვუბრუნებთ თქვენს ავტომობილს ახლებურ იერსახეს.
        </motion.p>

        <NavLink to="/services">
          <motion.button
            className="btn bg-transparent text-emerald-500 font-light border-3 border-double border-emerald-500 mt-6 p-4 cursor-pointer rounded-lg transition relative animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            ნახე დეტალურად აქ!
          </motion.button>
        </NavLink>

        <div className="carousel mt-20 flex flex-wrap justify-center gap-8">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              className="w-64 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2 + index * 0.2,
              }}
            >
              <img
                src={service.srcSmall}
                alt={service.title}
                fetchPriority="high"
                className="w-full h-40 object-cover opacity-80 rounded-2xl"
              />
              <div className="p-4 font-arial-geo">
                <h3 className="font-bold text-xl border-b-1 border-b-neutral-400 margin-b-2.5 border-dotted first-letter:text-yellow-400 first-letter:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {service.description[0]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
