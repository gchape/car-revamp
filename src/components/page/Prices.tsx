import { services } from "../../ts/data";

const Prices = () => (
  <div className="flex grow-1 flex-col justify-around gap-y-8 p-5">
    {services.map((service, index) => (
      <div
        key={service.title}
        className={`collapse md:w-1/2 border-l-4 border-double border-l-neutral-500 rounded-none ${
          index % 2 == 0 ? "self-start" : "self-end"
        }`}
      >
        <input type="checkbox" defaultChecked />
        <div className="collapse-title text-[#6b8e23] flex justify-start gap-5 items-center text-lg md:text-xl first-letter:text-xl md:first-letter:text-2xl first-letter:text-yellow-400 font-semibold">
          <div className="text-4xl font-thin opacity-50 tabular-nums h-fit">
            0{index + 1}
          </div>
          {service.title}
        </div>

        <div className="collapse-content">
          <ul className="list text-lg pb-4">
            {service.prices.map((price) => (
              <li
                key={price.car}
                className="list-row px-0 mx-2.5 border-b-1 border-b-neutral-600 rounded-none"
              >
                <div className="uppercase font-nunito font-bold text-stone-400">
                  {price.car}
                </div>
                <div className="font-arial-geo font-bold text-neutral-400 justify-self-end">
                  ₾{price.price}-დან
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Prices;
