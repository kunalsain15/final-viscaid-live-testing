import Link from "next/link";
import React from "react";

const SectionOne = () => {
  return (
    <div>
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
        <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
          <div className="w-full max-w-6xl mx-auto md:px-0 px-5 flex justify-start items-center">
            <div className="leading-[35px] md:leading-tight">
              <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
                Forecasting Solutions
              </h2>
              <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                Well designed and built <br></br>custom models and platforms
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white sm:h-[50px] flex sm:py-0 sm:mt-0 sm:mb-0 mt-3 mb-3 flex-wrap justify-center items-center gap-3">
        <Link href={"market-research"} className="text-sm mainColor font-light">
          Market Research
        </Link>
        <Link href={"demand-studies"} className="text-sm mainColor font-light">
          Demand Studies
        </Link>
        <Link
          href={"models-and-platforms"}
          className="text-sm text-stone-500 font-light"
        >
          Models and Platforms
        </Link>
        <Link href={"cycle-support"} className="text-sm mainColor font-light">
          Cycle Support
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
