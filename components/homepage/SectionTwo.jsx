import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="bg-white py-[32px] sm:py-[35px] md:max-w-6xl mx-auto">
        <h3 className="text-[20px] section_home_first md:text-[36px] px-5 sm:px-0 font-light text-center homeservice leading-snug sm:leading-[45px] mx-auto text-black">
          Viscadia forecasting services empower life sciences companies with
          invaluable insight, revenue guidance, and confidence to make
          decisions
        </h3>
        <div className="flex sm:px-0 flex-wrap sm:space-y-0 2xl:max-w-[1403px] md:max-w-[98%] space-y-3 justify-center gap-3 md:mt-12 mt-3 mx-auto">
          <div className="sm:h-[193px] w-full sm:w-[45%] md:w-[30%] items-center flex flex-col">
            <div className="flex justify-center items-center flex-col">
              <img
                className="h-[65px] w-[65px] object-cover"
                src="./homeAssets/homeicon.png"
                alt=""
              />
              <p className="text-center text-[16px] font-normal text-[#4E4E4E] md:text-[21px] md:text-black md:font-light mt-5 md:mt-3">
                Market Research
              </p>
            </div>
            <Link
              href={"/market-research"}
              className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="mt-5 md:mt-0 sm:h-[193px] w-full sm:w-[45%] md:w-[30%] items-center flex flex-col">
            <div className="flex justify-center items-center flex-col">
              <img
                className="h-[65px] w-[65px] object-cover"
                src="./homeAssets/forcastingtwo.png"
                alt=""
              />
              <p className="text-center text-[16px] font-normal text-[#4E4E4E] md:text-[21px] md:text-black md:font-light mt-5 md:mt-3">
                Models & Platforms
              </p>
            </div>
            <Link
              href={"/models-and-platforms"}
              className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="mt-5 md:mt-0 sm:h-[193px] w-full sm:w-[45%] md:w-[30%] items-center flex flex-col">
            <div className="flex   justify-center items-center flex-col">
              <img
                className="h-[65px] w-[65px] object-cover"
                src="./homeAssets/strategic-partner.png"
                alt=""
              />
              <p className="text-center text-[16px] font-normal text-[#4E4E4E] md:text-[21px] md:text-black md:font-light mt-5 md:mt-3">
                Cycle Support
              </p>
            </div>
            <Link
              href={"/cycle-support"}
              className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
