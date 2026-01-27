import Link from "next/link";
import React from "react";

const RenderSectionsAlternateTwo = ({ data, colorType = 1 }) => {
  return (
    <>
      {data?.map((el, indx) => {
        return (
          <div
            key={indx}
            className={`sm:px-2 px-5 sm:mt-35 w-full ${
              indx % 2 === colorType ? "bg-[#E7E7E7]" : "bg-white"
            }`}
          >
            <div
              className={`md:gap-0 gap-0 flex about_tab_align flex-col sm:grid sm:grid-cols-12 2xl:gap-0 mt-3 sm:mb-9 2xl:mt-14 xl:py-0 py-3 xl:max-w-6xl mx-auto md:flex justify-between flex-wrap md:flex-nowrap ${
                indx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }  2xl:max-w-[1200px] mx-auto`}
            >
              <div
                className={`md:h-full col-span-6 xl:py-0 py-3 md:w-[50%] lg:w-[70%] flex items-center ${
                  indx % 2 === 0 ? "justify-start" : "justify-center"
                }`}
              >
               <div className="md:w-[509px]">
                <img
                  className="lg:w-[100%] object-cover"
                  src={el?.img}
                  alt={el?.img}
                />
              </div>
               </div>
              <div className="md:h-full col-span-6 space-y-5 md:w-[50%] lg:w-[59%] flex flex-col justify-center">
                <h3 className="text-2xl lg:text-[24px] text-black font-light ">
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RenderSectionsAlternateTwo;
