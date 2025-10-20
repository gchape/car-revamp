function Service({ title, src, description }: {} & Service) {
  return (
    <div className="card from-[#010101] to-[#1e1c1a] bg-linear-to-br w-max-96 shadow-sm">
      <figure>
        <img src={src} alt={title} />
      </figure>
      <div className="card-body text-[#d9d9d9]">
        <h2 className="card-title block w-full border-b-2 border-b-neutral-700 mb-4.5 text-xl first-letter:text-yellow-400 first-letter:text-2xl">
          {title}
        </h2>
        <ul>
          {description.map((item, index) => (
            <li
              key={index}
              className="mb-2 list-disc tracking-wide leading-5.5 text-base font-glaho"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end mt-4.5 font-arial-geo tracking-wider">
          <button className="btn bg-transparent text-yellow-400 border-1 rounded-xl font-bold">
            მოგვწერეთ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
