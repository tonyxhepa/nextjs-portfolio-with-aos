"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { projectsItems } from "@/data";

import ProjectsSVG from "@/public/svg/projects.svg";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="bg-gray-800 pb-4" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
        <div>
          <h2 className="title text-yellow-500" data-aos="fade-down">
            Projects
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            MY CREATION
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Image
            src={ProjectsSVG}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] bg-gray-950 rounded-3xl text-yellow-800"
          />
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs shadow-lg shadow-yellow-700 self-start"
          >
            {projectsItems.map((item, index) => (
              <SwiperSlide
                key={index}
                className="bg-gray-950 rounded-3xl p-5 border-b-8 border-yellow-800 h-fit"
              >
                <Image src={item.image} alt={item.title} />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-gray-100">
                    {item.title}
                  </h5>
                  <button className="font-bold text-gray-500 self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
