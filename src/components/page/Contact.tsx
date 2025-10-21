import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="flex grow-1 flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-2.5 py-5">
      {isLoading && (
        <div className="skeleton w-full md:w-1/2 h-130 rounded-xl shadow-lg overflow-hidden relative bg-black" />
      )}

      <iframe
        className="w-full md:w-1/2 h-130 rounded-xl shadow-lg overflow-hidden relative grayscale-25"
        loading="eager"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }&q=ALEKO+MOTORS,42.2351271,42.6917871`}
      />

      <div className="flex flex-col justify-center items-center text-stone-300 w-full md:w-1/2 mt-4 md:m-0">
        <section className="mb-6 md:mb-12">
          <h2 className="text-yellow-400 text-2xl md:text-4xl tracking-wider md:tracking-wider font-bold font-arial-geo">
            საკონტაქტო ინფორმაცია
          </h2>
        </section>

        <section className="flex flex-col justify-evenly items-start text-zinc-300 text-lg md:text-xl gap-6 md:gap-8">
          <span>
            <FontAwesomeIcon icon={faLocationDot} size="lg" /> 21 G Nikea St,
            Kutaisi
          </span>

          <a href="tel:+995500504169">
            <FontAwesomeIcon icon={faPhone} size="lg" /> (+995) 500-50-41-69
          </a>

          <a href="mailto:car.r3vamp@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" /> car.r3vamp@gmail.com
          </a>

          <span>
            <FontAwesomeIcon icon={faCalendarDays} size="lg" /> ორშაბათი -
            კვირა, 10:00 - 18:00
          </span>
        </section>
      </div>
    </div>
  );
};

export default Contact;
