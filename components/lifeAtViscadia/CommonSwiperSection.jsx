"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/styles/custom.css";

const CommonSwiperSection = ({
  slides,
  title,
  description,
  reverse = false,
  bg = "bg-white",
}) => {
  return (
    <div className={`${bg}`}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1130px] mx-auto py-16 px-6 items-center`}
      >
        {/* Image Swiper */}
        <div
          className={`relative w-full ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            }}
            className="common-swiper-container"
          >
            {slides.map((s, index) => (
              <SwiperSlide key={index}>
                <div className="slide-wrapper">
                  <img
                    src={s.img}
                    alt={`Slide ${index}`}
                    className="w-[510px] h-[370px] object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div
          className={`flex flex-col max-w-[490px] mx-auto justify-center ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <h2 className="text-[28px] md:text-[38px] font-light text-black mb-4">
            {title}
          </h2>
          <p className="text-[18px] md:text-[24px] text-black font-light leading-7.5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonSwiperSection;
