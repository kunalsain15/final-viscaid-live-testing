"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionOne = () => {
  const data = [
    "./homeAssets/imageone.png",
    "./viscadiaVolunteersAssets/Pulkit-Group.webp",
    "./viscadiaVolunteersAssets/IMG-20200705-WA0040.webp",
    "./viscadiaVolunteersAssets/WhatsApp-Image.webp",
  ];

  return (
    <div>
      {/* <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 relative top-[45px] md:top-[65] text-white">
        <img src="./homeAssets/corevalue_homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
        <img src="./homeAssets/mobile_homebanner.png" className="h-[100%] w-[100%] block md:hidden" /> */}
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 flex justify-start items-center relative top-[45px] md:top-[65px] text-white">
        <img
          src="../homeAssets/corevalue_homebanner.png"
          className="h-full w-full hidden md:block"
          alt="Banner"
        />
        <img
          src="../homeAssets/mobile_homebanner.png"
          className="h-full w-full block md:hidden"
          alt="Mobile Banner"
        />
        {/* <div className="h-full w-full absolute top-[-50] md:top-[0] px-5 md:right-101 right-5 z-10 flex justify-center items-center flex-col">
          <div className="leading-snug md:leading-tight">
            <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14"> */}
                         <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
          <div className="w-full max-w-6xl mx-auto md:px-0 px-5 flex justify-start items-center">
            <div className="leading-[35px] md:leading-tight">
              <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
                Social Impact
              </h2>
              <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                Viscadia Volunteers
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-0 flex justify-center flex-col py-6 px-5 md:px-0 bg-[#F8F8F8] text-center mx-auto md:h-[148px]">
        <h3 className="text-[18px] md:text-[20px] lg:px-0 px-0 sm:leading-[30px] mainColor font-light text-center">
          Forecasting is complex, but sometimes the answer is clear right from
          the start:
        </h3>
        <h3 className="text-[20px] md:text-[26px] font-normal text-[#BE302C] text-center">
          Our communities need our support.
        </h3>
      </div>

      <div className="mx-auto md:max-w-6xl py-9 px-5 md:px-0 sm:py-14 mb-9">
        <div className=" lg:flex justify-between">
          <div className="lg:w-[50%] w-full sm:px-0 px-0">
            {/* <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".volunteer-pagination" }}
              className="pb-10 givingbackimage"
            >
              {data.map((el) => (
                <SwiperSlide key={el}>
                  <img
                    className="object-cover "
                    src={el}
                    alt="Viscadia Volunteers"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
            <img src="./homeAssets/imageone.png" />

            <div className="volunteer-pagination"></div>
          </div>

          <div className="md:h-full lg:w-[46%] space-y-4 sm:space-y-2 flex flex-col justify-center pt-5 md:pt-10">
            <h3 className="text-2xl sm:text-left text-center  lg:text-[26px] font-light">
              Giving Back
            </h3>
            <p className="text-center sm:leading-8 sm:text-left sm:text-[22px] font-light w-full">
              Our colleagues donate their time and energy to a
              <span className="block md:hidden"></span>
              <span className="hidden md:inline"> </span>
              number of worthwhile causes.
            </p>

            <p className="text-[18px] sm:px-0 text-[#4E4E4E] px-0 md:px-0 sm:text-left text-center font-light mt-0 sm:mt-5 ">
              Viscadia team members are committed to helping our communities.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Swiper styles */}
      <style jsx>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex;
          justify-content: center;
          gap: 4px;
        }
        .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 0.5;
          height: 10px !important;
          width: 10px !important;
        }
      `}</style>
      <style jsx>{`
        .volunteer-pagination {
          position: relative !important;
          bottom: -10px !important;
          margin-top: 10px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 2px !important;
        }
        .volunteer-pagination .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 0.7;
          height: 10px !important;
          width: 10px !important;
        }
      `}</style>
    </div>
  );
};

export default SectionOne;
