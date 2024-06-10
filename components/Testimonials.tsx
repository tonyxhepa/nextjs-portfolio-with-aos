"use client";
import Image from "next/image";
import { testimonialsItems } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="px-5 pt-14 md:container">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Testimonials
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          MY CLIENT REVIEWS
        </h4>
        <br />
        <div id="containerForBullets"></div>
        <Swiper
          direction={"vertical"}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination]}
          className="h-[40rem] max-w-3xl md:h-96"
          data-aos="fade-up"
        >
          {testimonialsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`mx-8 flex h-full flex-col items-center gap-6 rounded-2xl border-2 border-yellow-800 bg-gray-800 p-8 duration-500 md:flex-row ${
                  activeIndex !== i && "scale-75 blur-sm"
                }`}
              >
                <Image src={item.image} alt={item.name} className="h-24 w-24" />
                <div>
                  <p className="text-sm text-gray-400 sm:text-base">
                    {item.review}
                  </p>
                  <br />
                  <h6 className="text-gray-300">{item.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
