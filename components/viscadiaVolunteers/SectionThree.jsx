"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionThree = () => {
  const awards = [
    {
      img: "./viscadiaVolunteersAssets/sliderimgstwo/Frame-59-1.webp",
      title: "NANHE KHWAB",
      text: "Nanhe Khwab is a volunteer driven not-for-profit organization promoting development in field of Child Education for the underprivileged. They currently work from Delhi/NCR/Gurgaon, Pune and Mumbai.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgstwo/Frame-56-1-1.webp",
      title: "LITERACY INDIA",
      text: "Literacy India is a non-profit with the objective of educating under privileged women and children, and empowering them to become self-reliant and employable.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgstwo/Frame-57-1-1.webp",
      title: "AID",
      text: "Association For India's Development is a volunteer movement promoting sustainable, equitable and just development in India.",
    },
    {
      img: "./viscadiaVolunteersAssets/sliderimgstwo/Frame-58-1-1.webp",
      title: "CHRISTOPHER'S HAVEN",
      text: "A non-profit located in Boston, MA that provides temporary, low-cost housing for pediatric cancer patients and their families while receiving treatments away from home.",
    },
  ];
  const volunteersData = [
    {
      text: "“charity: water is extremely grateful for the amazing support of Viscadia – especially for believing that clean water really does change everything. To date, their incredible generosity has supported ten Rainwater Harvesting Tanks to help bring access to clean and safe drinking water to almost fifty people in ten communities India. We are grateful for the entire Viscadia team and excited to see the end of the global water crisis with the incredible support of Viscadia.”",
      name: "charity: water",
    },
    {
      text: "“We are grateful to Viscadia for all the support it has been giving to Nanhe Khwab. The initiatives (automating our processes) Viscadia has taken have made us pretty efficient. The NGO visits by Viscadia representatives had been really fruitful in the past and we hope to have more of such in the future.”",
      name: "Nanhe Khwab",
    },
  ];

  return (
    <div>
      <div className="sm:min-h-[580px] mt-[35px] md:mt-[0px] min-h-full md:max-w-6xl mx-auto px-5 md:px-0 about_tab_align">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-light text-center">
          Employee Supported
        </h2>
        <p className="sm:text-[22px] text-[18px] mt-3 text-center md:max-w-[100%] mx-auto  font-light">
          Our employees go above and beyond to support organizations they care
          about in their local communities.
        </p>
        <div className="mt-5 mx-auto">
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="sm:pb-10 pb-5 sm:min-h-[430px] mt-0 sm:mt-10"
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
            {awards?.map((award, index) => (
              <SwiperSlide
                key={index}
                className="flex sm:px-0 px-0 flex-col justify-center sm:justify-start items-center"
              >
                <div className="flex mb-4 sm:justify-start justify-center w-full">
                  <img className="h-[120px]" src={award.img} alt={award.img} />
                </div>
                <h3 className="sm:text-[18px]  text-center sm:text-left text-xl sm:leading-6 text-black font-light sm:mt-3">
                  {award.title}
                </h3>
                <p className="text-[14px] text-center sm:text-left mb-14 md:mb-0 mt-3 leading-6 text-black font-light ">
                  {award.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-[#EEEEEE] sm:mt-0 mt-10 py-2 sm:px-0 px-4 ">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          // className="pb-10 min-h-[270px] sm:px-0 px-4  viscadiavolunttersgivingback md:max-w-[91%] mx-auto mt-5 sm:mt-10"
          className=" min-h-[270px] sm:px-0 px-4 md:max-w-7xl mx-auto "
        >
          {volunteersData?.map((el, index) => (
            <SwiperSlide
              key={index}
              className="flex py-8  flex-col justify-center text-center "
            >
              <div className="flex  justify-center">
                <p className="sm:text-[24px] text-xl w-full leading-[27px] mainColor font-light  text-center about_tab_align">
                  {el.text}
                </p>
              </div>

              <h3 className="text-[18px] md:text-[26px] font-bold  text-black mt-8">
                {el.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionThree;
