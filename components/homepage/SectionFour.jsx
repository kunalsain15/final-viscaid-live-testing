"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionFour = () => {
  return (
    <div className="mb-2 md:mb-0 mt-10 md:mt-10 sm:pt-4 sm:px-0 px-6">
      <div className="container max-w-6xl px-0 mx-auto items-center justify-center">
        <Swiper
          // modules={[Pagination, Autoplay]}
          // spaceBetween={30}
          // slidesPerView={1}
          // pagination={{ clickable: true, el: ".section-four-pagination" }}
          // breakpoints={{
          //   640: { slidesPerView: 1 },
          //   768: { slidesPerView: 2 },
          //   1024: { slidesPerView: 3 },
          // }}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            el: ".section-four-pagination"
          }}
          breakpoints={{
            // Mobile: Show 1, Move 1
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            // Tablet: Show 2, Move 2 (Dot 1 = 1-2, Dot 2 = 3-4)
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            // Desktop: Show 3, Move 3 (Dot 1 = 1-2-3, Dot 2 = 4-5-6)
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
          }}
          className="pb-10">
          <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
            <div>
              <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
              <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                Across multiple projects, Viscadia has listened to our needs and
                prioritized delivery of key insights that help us gain alignment
                with the broader team. Their specialization in oncology
                forecasting has made each forecast creation a breeze, and
                expanding and updating our models has been seamless. In rapidly
                changing therapeutic areas, Viscadia's forecasts have withstood
                the test of time!
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 w-full mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src="./homeAssets/sectionFourSlider/Sarah-Yue-.webp"
                alt="Sarah Yue"
              />
              <div className="text-start w-full">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  Sarah Yue
                </h2>
                <p className="text-[#4E4E4E] font-light text-[12px]">
                  Director, Oncology HCP Marketing, Pfizer
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
          </SwiperSlide>

          <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
            <div>
              <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
              <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                I have worked with Viscadia across many companies and clients. I
                keep returning to them because they stay on point, grasp and
                incorporate changes quickly, and their team can provide a
                different view on market dynamics, rendering the overall output
                much more robust. The realism in Viscadia’s approach made it
                extremely easy to communicate to internal stakeholders and
                ultimately get traction on my projects. I cannot wait to work with
                them again.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 w-full mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src="./homeAssets/sectionFourSlider/Irina-B.webp"
                alt="Irina Baramova"
              />
              <div className="text-start w-full">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  Irina Baramova
                </h2>
                <p className="text-[#4E4E4E] font-light text-[12px]">
                  Chief Business Officer, CleanSite Medical
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
          </SwiperSlide>

          <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
            <div>
              <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
              <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                Viscaida brought additional dimensions to the existing forecast, which aided buy-in from our stakeholders. I needed someone to work alongside me, and they were the ideal partner.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 w-full mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src="./homeAssets/sectionFourSlider/Rob-Hernandez.webp"
                alt="Rob Hernandez"
              />
              <div className="text-start w-full">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  Rob Hernandez
                </h2>
                <p className="text-[#4E4E4E] font-light text-[12px]">
                  Senior Director, Forecasting & Financial Planning, Daiichi Sankyo, Inc.
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
          </SwiperSlide>

          <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
            <div>
              <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
              <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                Viscadia has been a long-term strategic partner to Milestone on
                the forecasting front. In addition to their responsiveness and
                innovative modeling techniques, they have deep therapeutic
                expertise which enables us to expand our own thinking and
                ultimately make more informed decisions.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 w-full mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src="./homeAssets/sectionFourSlider/Lorenz-Web.webp"
                alt="Lorenz Muller"
              />
              <div className="text-start w-full">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  Lorenz Muller
                </h2>
                <p className="text-[#4E4E4E] font-light text-[12px]">
                  Chief Commercial Officer, Milestones Pharmaceuticals, Inc.
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
          </SwiperSlide>

          <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
            <div>
              <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
              <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                Our forecast was accurate... that was a critical piece of allowing
                us to complete a successful and valuable acquisition.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 w-full mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src="./homeAssets/sectionFourSlider/Josh-Franklin.webp"
                alt="Josh Franklin"
              />
              <div className="text-start w-full">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  Josh Franklin
                </h2>
                <p className="text-[#4E4E4E] font-light text-[12px]">
                  President, Pharmacosmos Therapeutics Inc.
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="section-four-pagination"></div>

      <style jsx>{`
        .section-four-pagination {
          position: relative !important;
          margin-top: 30px !important;
          margin-bottom: 30px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 6px !important;
        }

        .section-four-pagination .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 0.7 !important;
          height: 10px !important;
          width: 10px !important;
        }

        /* Mobile fix – dots aur arrows overlap na karein */
        @media (max-width: 640px) {
          .section-four-pagination {
            margin-top: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionFour;