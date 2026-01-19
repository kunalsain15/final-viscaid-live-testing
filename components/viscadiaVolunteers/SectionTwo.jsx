"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionTwo = () => {
  const awards = [
    {
      img: "./viscadiaVolunteersAssets/sliderimgsone/Frame-57-1.webp",
      title: "SUI DHAAGA",
      text: "Sui Dhaaga is a vocational training center situated in Delhi which helps young girls from weaker section of the society learn stitching – enabling them to be employable and support their families.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgsone/Frame-56-1.webp",
      title: "CHARITY: WATER",
      text: "Clean water changes everything. Viscadia is proud to partner with charity: water to help provide clean and safe drinking water to people in developing nations.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgsone/Frame-59.webp",
      title: "EARTH SAVIOUR FOUNDATION",
      text: "The Earth Saviours Foundation has been dedicated to serving the underprivileged, providing a safe haven for mistreated animals, and making every possible effort to protect the environment. The selfless, dedicated, committed and vigilant team and volunteers of The Earth Saviours Foundation work day and night to uphold community welfare.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgsone/Frame-58-1.webp",
      title: "GYANKUNJ",
      text: "GyanKunj is on a mission to help underprivileged children get access to quality education. With dedicated teachers and smart-classrooms, GyanKunj works at the grassroots to acquaint students with concepts of mathematics, computer science and arts.",
    },
  ];
  return (
    <div className="sm:min-h-[650px] sm:py-0 py-0  md:max-w-6xl mx-auto ">
      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-light text-center">
        Our Charitable Partners
      </h2>
      <div className="flex justify-center">
        <p className="sm:text-[22px] text-[18px] sm:px-0 px-5 sm:leading-[30px] max-w-[1000px] w-full text-center mt-2 font-light">
          Over the years we’ve volunteered our time and resources to help
          organizations that help improve the livelihoods of people in our
          communities.
        </p>
      </div>
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="pb-10 min-h-[430px] mt-0 md:mt-5"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {awards.map((award, index) => (
          <SwiperSlide
            key={index}
            className="flex sm:px-0 px-5 mt-7 flex-col justify-center sm:justify-start items-center"
          >
            <div className="flex sm:justify-start justify-center w-full">
              <img className="h-[120px]" src={award.img} alt={award.title} />
            </div>
            <h3 className="text-[18px] text-center sm:text-left leading-6 text-black font-light mt-5">
              {award.title}
            </h3>
            <p className="text-[14px] text-center sm:text-left leading-6 text-black font-light mt-3">
              {award.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionTwo;
