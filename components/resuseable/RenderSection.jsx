import Link from "next/link";
import React from "react";

const RenderSectionsAlternate = () => {
  return (
    <>
      <div className="bg-white max-w-6xl mx-auto sm:mt-0 mt-8 mb-8 lg:px-0 px-5">
        <div className="my-5 md:my-20 2xl:min-h-auto gap-16 lg:gap-20 2xl:gap-10 md:flex">
          <div className="md:h-full md:w-[50%] 2xl:w-[80%] flex items-center justify-start">
            <img
              className="w-full h-auto object-contain"
              src="./charityWater/charitywater.png"
              alt="charity-water"
            />
          </div>
          <div className="md:h-full space-y-2 sm:mt-0 mt-4 md:w-[58%]  flex flex-col justify-center">
            <h3 className="text-2xl sm:text-[28px] font-light">
              charity: water
            </h3>
            <p className="text-[20px] mt-0 font-light sm:leading-[30px] leading-[28px]">
              663 million people around the world live without clean water.
            </p>
            <p className="text-[16px]  text-[#4E4E4E] font-light mt-0">
              Clean water changes everything. Viscadia is proud to partner with
              charity: water to help provide clean and safe drinking water to
              people in developing nations.
            </p>
            <Link
              href="/charity-water"
              className="mainBg text-white mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto sm:mt-0 mt-8 lg:px-0 px-4">
        <div className="py-3 md:py-20 2xl:min-h-auto gap-16 lg:gap-20 2xl:gap-10 md:flex flex-row-reverse">
            <div className="md:h-full sm:mt-0 2xl:ml-40 mt-4 md:w-[50%] xl:w-[80%] 2xl:w-[100%] flex items-center justify-center">
              <img
                  className="w-full h-auto object-contain"
                src="./homeAssets/viscadia-impact.png"
                alt="viscadia-volunteers"
              />
            </div>
            <div className="md:h-full  pb-7 sm:pb-0  sm:space-y-4 space-y-4 sm:mt-0 mt-4 md:w-[79%] 2xl:w-[99%] flex flex-col justify-center">
              <h3 className="text-2xl sm:text-[28px] font-light">
                Viscadia Volunteers
              </h3>
              <p className="text-[20px] mt-0 font-light sm:leading-[30px] leading-[28px]">
                Our colleagues donate their time and energy to a number of
                worthwhile causes.
              </p>
              <p className="text-[16px]  text-[#4E4E4E] font-light mt-0">
                Our commitment to excellence includes being a servant-leader in
                our communities.
              </p>
              <Link
                href="/viscadia-volunteers"
                className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                LEARN MORE
              </Link>
            </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default RenderSectionsAlternate;
