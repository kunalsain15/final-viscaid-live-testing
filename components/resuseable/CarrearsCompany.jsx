import Link from "next/link";
import React from "react";

const CarrearsComapny = ({ data, colorType = 1 }) => {
  return (
    <>
      {data?.map((el, indx) => {
        return (
          <div
            key={indx}
            className={`sm:px-2 px-5 w-full ${
              indx % 2 === colorType ? "bg-[#F8F8F8]" : "bg-[#F8F8F8]"
            }`}
          >
            <div
              className={`lg:h-[450px] about_tab_align flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap sm:grid sm:grid-cols-12 md:gap-0 gap-0 2xl:gap-18  mt-3 sm:mt-0 2xl:mt-14 lg:py-10 py-3 xl:max-w-6xl  md:flex justify-between mx-auto`}
            >
              {/* CONTENT LEFT */}
              <div className="md:h-full pb-3 md:pb-0 col-span-6 space-y-5 md:w-[50%] lg:w-[59%] 2xl:w-[76%] flex flex-col justify-center">
                <h3 className="text-2xl lg:text-[24px] text-black font-light">
                  {el?.title}
                </h3>
                <p className="text-[20px] leading-7 font-light">
                  {el?.subTitle}
                </p>
                <p className="text-[16px] font-light text-[#4E4E4E]">
                  {el?.description}
                </p>
                <Link
                  href={el?.link}
                  className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                  Learn More
                </Link>
              </div>

              {/* IMAGE RIGHT */}
              <div
                className={`md:h-full col-span-6 sm:mt-0 mt-0 xl:py-0 py-3 md:w-[50%] lg:w-[70%] flex items-center justify-end`}
              >
                <div className="md:w-[526px]">
                <img
                  className="lg:w-[100%] object-cover"
                  src={el?.img}
                  alt={el?.img}
                />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CarrearsComapny;
