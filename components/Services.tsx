import Image from "next/image";
import { servicesItems } from "@/data";

const Services = () => {
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Services
        </h2>
        <h4 className="subtitle text-gray-50" data-aos="fade-down">
          WHAT I OFFER
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {servicesItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-yellow-600 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={index * 500}
            >
              <Image src={item.logo} alt={item.title} className="mx-auto" />
              <h6 className="my-3 text-gray-50">{item.title}</h6>
              <p className="leading-7 text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
