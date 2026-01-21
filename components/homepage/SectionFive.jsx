"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const SectionFive = () => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="bg-white lg:pt-5 lg:pb-10 pt-0 md:pt-9 pb-12 sm:pt-8 sm:pb-18">
      <div className="forecastinghome md:max-w-6xl mx-auto sm:px-0 px-5">
        <h2 className="sm:text-center section_home_third leading-snug text-start text-black text-[22px] sm:text-[24px] sm:leading-[45px] font-light mb-10 sm:mb-[20px]">
          Viscadia forecasting delivers value throughout each stage of the life
          sciences product journey
        </h2>

        <div ref={ref}
          className="grid grid-cols-1 mx-auto md:max-w-6xl md:grid-cols-3 gap-7 md:gap-14 section_home_fourth">
          <div className="flex flex-col h-full justify-between">
            <h3 className="text-[100px] mb-2 md:mb-0 md:text-[80px] font-thin text-[#BE302C] text-start md:text-center leading-[83px]">
              {startCount ? <CountUp end={25} duration={3} /> : 0}
            </h3>
            <p className="md:px-0 uppercase mb-3 text-start md:text-center text-[24px] font-light text-black">
              DAYS
            </p>
            <div className="w-full md:bg-gray-200 bg-gray-300 h-[3px] md:h-[2px] my-1 sm:my-0"></div>
            <p className="md:px-0 text-[16px] section_home_fourth_text font-normal text-start md:text-[18px] tracking-wide md:leading-6 leading-snug mt-4 text-[#4E4E4E] md:font-light min-h-[auto] mb-3.5 md:mb-0 sm:min-h-[90px] max-w-[95%] md:max-w-[100%] md:text-center">
              Rapidly delivered an in-depth commercial assessment
            </p>
            <Link
              href="/case-studies"
              className="md:mx-auto mainBg text-white bg-[#bd302b] section_home_fourth_button text-[16px] md:text-[14px] font-normal px-3 md:px-5 py-2.5 w-[36%] text-center md:w-[36.5%] md:text-center md:m-auto">
              READ MORE
            </Link>
          </div>

          <div className="flex flex-col h-full justify-between">
            <h3 className="text-[100px] mb-2 md:mb-0 md:text-[80px] font-thin text-[#BE302C] text-start md:text-center leading-[83px]">
              {startCount ? <CountUp end={15} duration={3} /> : 0}
            </h3>
            <p className="md:px-0 uppercase mb-3 text-start md:text-center text-[24px] font-light text-black">
              REGIONS
            </p>
            <div className="w-full md:bg-gray-200 bg-gray-300 h-[3px] md:h-[2px] my-1 sm:my-0"></div>
            <p className="md:px-0 text-[16px] font-normal text-start section_home_fourth_text md:text-[18px] tracking-wide md:leading-6 leading-snug mt-4 text-[#4E4E4E] md:font-light min-h-[auto] mb-3.5 md:mb-0 sm:min-h-[90px] max-w-[95%] md:max-w-[100%] md:text-center">
              Designed and built a global forecasting model for a complex
              oncology condition, cutting costs and timelines
            </p>
            <Link
              href="/case-studies"
              className="md:mx-auto section_home_fourth_button mainBg text-white bg-[#bd302b] text-[16px] md:text-[14px] font-normal px-3 md:px-5 py-2.5 w-[30%] text-center md:w-[31.5%] md:text-center md:m-auto">
              SEE HOW
            </Link>
          </div>

          <div className="flex flex-col h-full justify-between">
            <h3 className="text-[100px] mb-2 md:mb-0 md:text-[80px] font-thin text-[#BE302C] text-start md:text-center leading-[83px]">
              {startCount ? <CountUp end={50} duration={3} /> : 0}%
            </h3>
            <p className="md:px-0 uppercase mb-3 text-start md:text-center text-[24px] font-light text-black">
              IMPROVEMENT
            </p>
            <div className="w-full md:bg-gray-200 bg-gray-300 h-[3px] md:h-[2px] my-1 sm:my-0"></div>
            <p className="md:px-0 text-[16px] section_home_fourth_text font-normal text-start md:text-[18px] tracking-wide md:leading-6 leading-snug mt-4 text-[#4E4E4E] md:font-light min-h-[auto] mb-3.5 md:mb-0 sm:min-h-[90px] max-w-[95%] md:max-w-[100%] md:text-center">
              Innovative forecasting models for an on-market product cut MAPE
              (Mean Absolute Percentage Error) in half
            </p>
            <Link
              href="/case-studies"
              className="md:mx-auto section_home_fourth_button mainBg text-white bg-[#bd302b] text-[16px] md:text-[14px] font-normal px-3 md:px-5 py-2.5 w-[39%] text-center md:w-[39.5%] md:text-center md:m-auto">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
