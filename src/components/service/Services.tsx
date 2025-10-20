import { services } from "../../ts/data";
import Service from "./Service";

function Services() {
  return (
    <div className="grid grow-1 grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-8 sm:p-6 md:p-8">
      {services.map((service, index) => (
        <Service key={index} {...service} />
      ))}
    </div>
  );
}

export default Services;
