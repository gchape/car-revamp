import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="flex flex-col grow-1 md:flex-row justify-center items-center gap-12 lg:gap-24 px-1.5 py-12 pb-5">
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

      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 text-stone-300 font-arial-geo tracking-wider">
        <h2 className="text-3xl font-semibold text-yellow-400">საკონტაქტო</h2>
        <p className="text-lg md:text-xl font-medium font-nunito">
          <span className="font-bold font-arial-geo">მისამართი:</span> 21 G
          Nikea St, Kutaisi
        </p>
        <p className="text-lg md:text-xl font-medium font-nunito">
          <span className="font-bold font-arial-geo">ტელეფონი:</span> +995
          500-50-41-69
        </p>
        <p className="text-lg md:text-xl font-medium">
          <span className="font-bold">სამუშაო საათები:</span> ორშ. - კვ. 10:00 -
          18:00
        </p>
      </div>
    </div>
  );
};

export default Contact;
