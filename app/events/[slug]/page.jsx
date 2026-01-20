"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";
import CommonForm from "@/components/CommonFormEvents/CommonForm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const slug = params?.slug;
  const pageData = event;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `https://api.viscadia.com/api/v1/events/${slug}`
        );

        if (res.data.success) setEvent(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchEvent();
  }, [slug]);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen py-20">
          <img
            src="/__Iphone-spinner-1.gif"
            alt="Loading..."
            className="w-16 h-16"
          />
        </div>
      )}
      {!loading && (
        <div className="mt-11 md:mt-17 bg-white">
          <div className="h-[400px] w-full relative flex ">
            <div className="EventPagesectionOne w-full  h-[400px] object-cover absolute z-10">
              <img
                className="h-full w-full object-fill"
                src="/events/SectionOneBg.png"
                alt="Background"
              />
            </div>
            <div className="w-[60%] h-full p-4 pt-[40px] flex flex-col gap-4 relative z-20 ps-[70px]">
              <div className="w-[100%]">
                <div className="h-[180px] w-full relative">
                  <div className="absolute aling_evt_text left-0 top-0 h-full w-full flex justify-center items-start flex-col">
                    <img
                      src={pageData?.logo}
                      className="max-w-full max-h-full object-contain"
                      alt="Event Logo"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="h-[40px] w-full aling_evt_text flex items-center">
                  <h1 className="w-full text-[#133D65] text-[30px]">
                    {pageData?.title}
                  </h1>
                </div>

                <div className="mt-8 md:mt-2 mb-3 aling_evt_text flex gap-10">
                  <div className="flex gap-2 min-w-[100px] items-center">
                    <img
                      className="h-[20px]"
                      src="/icons/date.png"
                      alt="Date"
                    />

                    <p className="text-[16px]">{pageData?.date}</p>
                  </div>
                  <div className="flex gap-2 min-w-[60%] items-center">
                    <img
                      className="h-[20px]"
                      src="/icons/location.png"
                      alt="Location"
                    />
                    <p className="text-[16px]">{pageData?.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side main image */}
            <div className="w-[42%] h-full rightSide z-0 flex justify-end relative">
              <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
                <img
                  src={pageData?.image}
                  className="h-full w-full object-cover"
                  alt="Event"
                />
              </div>
            </div>
          </div>

          {/* <div className="sm:h-[300px] w-full sm:relative sm:flex">
            <div className="EventPagesectionOne left-[56%] sm:block hidden w-full h-[300px] object-cover absolute z-10">
              <img
                className="h-[100%] w-[20%]"
                src="/homeAssets/SectionOneBg2.png"
                alt="Background"
              />
            </div>
            <div className="relative sm:hidden block w-full h-[200px]">
              <img
                className="absolute top-0 left-[-40%] w-full !h-[202px] z-10"
                src="/events/SectionOneBg.png"
                alt="Background"
              />

              <img
                src={pageData?.image}
                className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
                alt="Event"
              />
            </div>

            <div className="md:pl-[100px] sm:w-[90%] h-full px-4 flex flex-col sm:relative z-20 sm:ps-[70px]">
              <div className="w-[240px] sm:block hidden">
                <div className="h-[200px] w-full sm:relative">
                  <div className="absolute aling_evt_text left-0 top-0 h-full w-full  flex justify-center items-center flex-col">
                    <img src={pageData?.logo} className="w-[100%]" alt="Event Logo" />
                  </div>
                </div>
              </div>
              <div className="items-start sm:hidden block text-left md:my-0 my-5">
                <img
                  src={pageData.logo}
                  alt="event logo"
                  className="w-[270px] max-[450px]:w-[270px] sm:w-60 sm:h-60 logoeventsmobile"
                />
              </div>

              <div>
                <div className="aling_evt_text sm:h-[40px] w-full flex items-center">
                  <h1 className="text-[#133D66] text-[18px] sm:text-[28px] font-light">
                    {pageData?.title}
                  </h1>
                </div>

                <div className="aling_evt_text mt-4 mb-3 sm:space-y-0 space-y-2 sm:flex gap-10">
                  <div className="flex gap-2  items-center">
                    <img
                      className="h-[20px]"
                      src="/icons/date.png"
                      alt="Date"
                    />

                    <p className="flex font-light text-[14px] text-[#133D66] items-center gap-2">
                      {pageData?.date}
                    </p>
                  </div>
                  <div className="flex md:gap-2 gap-3 items-center">
                    <img
                      className="h-[20px]"
                      src="/icons/location.png"
                      alt="Location"
                    />
                    <p className="flex text-[14px] font-light text-[#133D66] items-center gap-2">
                      {pageData?.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:block hidden  sm:w-[50%] h-full rightSide z-0  justify-end relative">
              <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex-col">
                <img
                  src={pageData?.image}
                  className="h-full w-full object-fit"
                  alt="Event"
                />
              </div>
            </div>
          </div> */}

          <div className="relative  w-full block sm:hidden overflow-hidden">
            <img
              src={pageData?.heading_image}
              className="w-full bg-center h-[200px]"
            />
            <img
              src="/icons/BIO_About.png"
              className="absolute top-0 right-0 !h-[200px] w-auto object-contain"
            />
          </div>

          {pageData?.section_two_status === 1 && (
            <div className="sm:h-[250px] h-full w-full relative sm:flex">

              <div className="w-full sm:w-[39%] h-[220px] sm:h-[250px] relative hidden md:block">
                <img
                  src={pageData?.heading_image}
                  alt="heading"
                  className="w-full h-full object-cover object-bottom"
                />

                <img
                  src="/icons/red-stripecover.png"
                  alt="icon"
                  className="absolute top-0 right-[-4px] h-full w-auto"
                />
              </div>

              <div className="w-full sm:w-[65%] min-h-[250px] sm:h-[250px] bg-[#BD302B] flex items-center">
                <div className="w-full px-5 sm:px-0 flex justify-center event_text_align">
                  <div className="sm:w-[98%] py-6 sm:py-[0px] space-y-3">
                    <h1 className="text-white font-light text-xl sm:text-[22px] lg:text-[32px]">
                      {pageData?.heading}
                    </h1>

                    <p className="text-white font-normal text-base sm:text-[16px] max-w-[100%] md:leading-[21px]">
                      {pageData?.sub_heading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* {pageData?.section_two_status === 1 && (
            <div className="h-[380px] w-full shadow relative flex overflow-hidden">
              <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
                <img
                  className="h-full w-full object-cover"
                  src="/webinars/sectionTwo.png"
                  alt=""
                />
              </div>

              <div className="w-[45%] h-full flex flex-col gap-10 relative">
                <div className="w-[100%] h-full">
                  <div className="h-full w-full bg-amber-200 relative">
                    <div className="absolute left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
                      <img
                        src={pageData?.heading_image}
                        className="h-full w-full object-cover"
                        alt="Event Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[60%] h-full rightSide bg-red-400 flex items-center relative">
                <div className="w-[100%] relative z-10 flex justify-end">
                  <div className="w-[90%] pb-[100px]">
                    <div className="h-[60px] flex items-center">
                      <h1 className="w-full text-white text-[31px] font-light">
                        {pageData?.heading}
                      </h1>
                    </div>
                    <div className="h-[30px] ">
                      <p className="text-[14px] text-white max-w-[80%]">
                        {pageData?.sub_heading}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {pageData?.section_three_status === 1 && (
            <div className="sm:min-h-[350px] sm:py-7 w-full pt-5 mt-5  sm:mb-8 relative">
              <h2 className="text-center mb-5 text-black text-3xl sm:text-4xl font-light ">
                Speaker
              </h2>
              {/* Speakers */}
              <div className="flex mt-8 flex-col md:flex-row min-h-[55%] relative justify-center  md:justify-end px-5 md:px-10 gap-5 items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="sm:flex flex-wrap md:flex-nowrap sm:space-y-0  space-y-5 gap-2 h-full items-center justify-center min-w-[180px] md:min-w-[230px]">
                    {pageData?.speaker?.map(
                      (sp, index) =>
                        sp?.image &&
                        sp.fullName &&
                        (sp?.url ? (
                          <Link key={index} href={`/leadership/${sp?.url}`}>
                            <div className="h-[160px] w-[160px] relative rounded-full overflow-hidden flex justify-center items-center">
                              <img
                                src={sp?.image}
                                className="h-full w-full object-cover"
                                alt={sp?.fullName}
                              />
                            </div>
                          </Link>
                        ) : (
                          <div
                            key={index}
                            className="h-[160px] w-[160px] relative rounded-full overflow-hidden flex justify-center items-center"
                          >
                            <img
                              src={sp?.image}
                              className="h-full w-full object-cover"
                              alt={sp?.fullName}
                            />
                          </div>
                        ))
                    )}
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="flex w-full md:w-[45%] flex-col md:justify-between items-start sm:items-center md:items-start text-left">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-start">
                      <h3 className="text-[18px] md:text-[19px] text-[#BD2F2C]">
                        {pageData?.speaker
                          ?.map((sp) => sp?.fullName)
                          .filter(Boolean)
                          .join(" & ")}
                      </h3>
                    </div>

                    <div className="flex flex-col mt-1 md:flex-row md:items-start">
                      <p className="text-black font-light text-base mb-1">
                        {pageData?.speaker
                          ?.map((de) => de?.designation)
                          .filter(Boolean)
                          .join(" & ")}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row mb-1 text-left sm:items-center md:items-start">
                      <p className="text-black text-sm font-light">
                        Topic: {pageData?.speaker_topic}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-1 text-left sm:items-center md:items-start">
                      <p className="text-black text-sm font-light">
                        Date: {pageData?.speaker_date}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-1 text-left sm:items-center md:items-start">
                      <p className="text-black text-sm font-light">
                        Time: {pageData?.speaker_time}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={
                      pageData?.extra_stuff
                        ? JSON.parse(pageData.extra_stuff)?.agenda || "#"
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#BD302b] hover:bg-[#8b0e0a] font-light cursor-pointer text-white p-2 rounded-none px-7 text-[16px] mt-2 inline-block"
                  >
                    Agenda
                  </Link>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-6xl m-auto flex justify-center items-center mt-10">
                <p className="w-[95%] md:w-[84%] 2xl:max-w-[70%] text-left  text-[14px] md:text-[16px] text-[#63666A] font-light leading-relaxed">
                  {pageData?.description}
                </p>
              </div>
            </div>
          )}

          {/* section three ends */}

          {/* section four  */}
          {/* {pageData?.section_four_status === 1 && (
            <div className="relative">
              <h2 className="text-xl md:text-[29px] lg:text-[38px] my-8 sm:my-8 pt-6 text-center font-light">
                Our Forecasting Specialists at the Event
              </h2>
              <div className="flex border justify-center flex-wrap md:flex-nowrap px-5 sm:px-0 mb-8 sm:mb-10 gap-10 md:gap-5 max-w-6xl mx-auto"
              >
                {pageData?.forecasting_specialists?.map((person) => (
                  <>
                    {person?.image && person.fullName && (
                      <>
                        {person?.slug ? (
                          <Link
                            key={person.id}
                            className="relative"
                            href={`/leadership/${person?.slug}`}
                          >
                            <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                              <div className="relative w-full h-[260px] group overflow-hidden">
                                <img
                                  src={person?.image}
                                  alt={person?.fullName}
                                  className="md:max-w-[280px] 2xl:max-w-[370px] h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                                  <p className="text-[14px] leading-4">
                                    {person?.introduction}
                                  </p>
                                  {person?.click && (
                                    <span className="mt-4 text-[14px]">
                                      {person?.click}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2 text-center">
                                <h2 className="text-[#BD302B] hover:text-[#e91815] font-roboto text-[18px] ">
                                  {person?.fullName}
                                </h2>
                                <p className="text-black font-light text-[14px] px-1 ">
                                  {person?.designation}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div
                            key={person.id}
                            className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center">
                            <div className="relative w-full h-[260px] 2xl:h-[270px] group overflow-hidden">
                              <img
                                src={person?.image}
                                alt={person?.fullName}
                                className="md:max-w-[280px] 2xl:max-w-[400px] h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-[#BD3028]/60 to-[#BD3028]/30 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                                <p className="text-[14px] leading-4">
                                  {person?.introduction}
                                </p>
                                {person?.click && (
                                  <span className="mt-4 font-light text-[14px]">
                                    {person?.click}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="mt-2 text-center">
                              <h2 className="text-[#BD302B] hover:text-[#e91815] font-roboto text-[18px] ">
                                {person?.fullName}
                              </h2>
                              <p className="text-black font-light text-[14px] px-1 ">
                                {person?.designation}
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
          )} */}

          {pageData?.section_four_status === 1 && (
            <div className="relative">
              <h2 className="text-xl md:text-[29px] lg:text-[38px] my-8 sm:my-8 pt-6 text-center font-light">
                Our Forecasting Specialists at the Event
              </h2>
              {/* <div className="flex items-start overflow-x-auto pb-6 md:pb-0 px-5 sm:px-0 mb-8 sm:mb-10 gap-10 md:gap-5 max-w-6xl mx-auto custom-scrollbar */}
              {/* flex items-start pb-6 md:pb-0 px-5 sm:px-0 mb-8 sm:mb-10 gap-10 md:gap-5 max-w-6xl mx-auto */}
              <div className="max-w-6xl mx-auto">
                {/* {pageData?.forecasting_specialists?.map((person) => (
                  <React.Fragment key={person.id}>
                    {person?.image && person.fullName && (
                      <div className="flex-none w-[280px] md:w-[275px] 2xl:w-[370px]">
                        {person?.slug ? (
                          <Link
                            className="relative block"
                            href={`/leadership/${person?.slug}`}
                          >
                            <div className="flex pb-3 md:pb-0 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                              <div className="relative w-full h-[260px] group overflow-hidden">
                                <img
                                  src={person?.image}
                                  alt={person?.fullName}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                                  <p className="text-[14px] leading-4 whitespace-normal">
                                    {person?.introduction}
                                  </p>
                                  {person?.click && (
                                    <span className="mt-4 text-[14px]">
                                      {person?.click}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2 text-center">
                                <h2 className="text-[#BD302B] hover:text-[#e91815] font-roboto text-[18px]">
                                  {person?.fullName}
                                </h2>
                                <p className="text-black font-light text-[14px] px-1">
                                  {person?.designation}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div
                            key={person.id}
                            className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center">
                            <div className="relative w-full h-[260px] 2xl:h-[270px] group overflow-hidden">
                              <img
                                src={person?.image}
                                alt={person?.fullName}
                                className="md:max-w-[280px] 2xl:max-w-[400px] h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-[#BD3028]/60 to-[#BD3028]/30 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                                <p className="text-[14px] leading-4">
                                  {person?.introduction}
                                </p>
                                {person?.click && (
                                  <span className="mt-4 font-light text-[14px]">
                                    {person?.click}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="mt-2 text-center">
                              <h2 className="text-[#BD302B] hover:text-[#e91815] font-roboto text-[18px] ">
                                {person?.fullName}
                              </h2>
                              <p className="text-black font-light text-[14px] px-1 ">
                                {person?.designation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                ))} */}

                <Swiper
                  // modules={[Pagination, Autoplay]}
                  // spaceBetween={20}
                  // slidesPerView={1}
                  // slidesPerGroup={1}
                  // pagination={{
                  //   clickable: true,
                  //   el: ".forecasting-pagination"  
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
                    640: {
                      slidesPerView: 1,
                      slidesPerGroup: 1
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2
                    },
                    1024: {
                      slidesPerView: 4,
                      slidesPerGroup: 4
                    },
                  }}
                  className="pb-12 md:pb-16 forecasting-swiper"
                >

                  {pageData?.forecasting_specialists?.map((person) => {
                    if (!person?.image || !person.fullName) return null;

                    const hasLink = !!person?.slug;

                    const CardContent = (
                      <>
                        <div className="relative w-full h-[260px] 2xl:h-[280px] group overflow-hidden shadow-sm">
                          <img
                            src={person.image}
                            alt={person.fullName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-5 text-white
            ${hasLink 
                              ? 'bg-[#BD302BB3]'
                              : 'bg-[#BD302BB3]'}`}
                          >
                            <p className="text-[14px] leading-5 line-clamp-6">
                              {person?.introduction}
                            </p>
                            {person?.click && (
                              <span className="mt-3 text-[14px] font-light">
                                {person.click}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-3 text-center px-2">
                          <h2 className="text-[#BD302B] group-hover:text-[#e91815] font-roboto text-[18px] md:text-[19px] transition-colors">
                            {person.fullName}
                          </h2>
                          <p className="text-black font-light text-[14px] mt-1">
                            {person.designation}
                          </p>
                        </div>
                      </>
                    );

                    return (
                      <SwiperSlide key={person.id}>
                        {hasLink ? (
                          <Link
                            href={`/leadership/${person.slug}`}
                            className="block h-full"
                          >
                            <div className="h-full md:mb-3 md:pb-3 flex flex-col bg-white  overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                              {CardContent}
                            </div>
                          </Link>
                        ) : (
                            <div className="h-full md:mb-3 md:pb-3 flex flex-col bg-white  overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                            {CardContent}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

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
            </div>
          )}
          <CommonForm />
        </div>
      )}
    </>
  );
};

export default page;











