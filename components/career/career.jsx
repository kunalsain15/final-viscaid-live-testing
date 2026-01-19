// career.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Career = ({
  slides,
  title,
  description,
  description2,
  reverse = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 mt-8 md:grid-cols-1 2xl:max-w-[1400px] mx-auto  justify-center px-6  sm:px-0  items-center`}
    >
      <div
        className={`relative w-full flex justify-center ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
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
              <img
                src={s.img}
                alt={`Slide ${index}`}
                className=" object-cover w-full 2xl:max-w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`flex flex-col max-w-[490px] mx-auto  justify-center ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <h2 className="text-[28px] md:text-[38px] font-light text-black mb-4">
          {title}
        </h2>
        <p className="text-base text-[#63666A] font-light leading-7.5">
          {description}
        </p>
        <p className="text-base mt-6 text-[#63666A] font-light leading-7.5">
          {description2}
        </p>
      </div>
      <style jsx>{`
        .common-swiper-container {
          padding-bottom: 0px; /* extra bottom padding hata diya */
        }

        .common-swiper-container :global(.swiper-pagination) {
          position: relative !important;
          bottom: 0 !important;
          left: 0 !important;
          transform: none !important;
          margin-top: 16px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          width: auto !important;
        }

        .common-swiper-container :global(.swiper-pagination-bullet) {
          background: #d1d5db !important;
          opacity: 1 !important;
          height: 10px !important;
          width: 10px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }

        .common-swiper-container :global(.swiper-pagination-bullet-active) {
          background: #bd302b !important;
          opacity: 1 !important;
          width: 14px !important;
          height: 14px !important;
        }
      `}</style>
      <style jsx>{`
        .common-swiper-container {
          padding-bottom: 0px;
        }

        .common-swiper-container :global(.swiper-pagination) {
          position: relative !important;
          bottom: 0 !important;
          left: 0 !important;
          transform: none !important;
          margin-top: 16px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          width: auto !important;
        }

        .common-swiper-container :global(.swiper-pagination-bullet) {
          background: #d1d5db !important;
          opacity: 1 !important;
          height: 10px !important;
          width: 10px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }

        .common-swiper-container :global(.swiper-pagination-bullet-active) {
          background: #bd302b !important;
          opacity: 1 !important;
          width: 14px !important;
          height: 14px !important;
        }
      `}</style>
    </div>
  );
};

export default Career;
