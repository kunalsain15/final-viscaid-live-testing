import React from "react";

const DetailsSectionOne = ({ data }) => {
  return (
    <div>
      <div className="sm:h-[480px] h-[400px] w-full bg-black relative text-white bannerHeight1293">
        <img
          className="h-full w-full opacity-80"
          src="/caseStudiesAssets/detailsBg.png"
        />
        {/* overlay text  */}
        <div className="h-full w-full absolute top-0 left-0 z-10">
          <div className="2xl:max-w-[1400px] sm:mt-0 mt-3 sm:px-0 px-2 banner1296 md:max-w-[85%] flex justify-end  lg:h-[67%] flex-col mx-auto">
            <h2 className="text-[24px] md:text-[30px] font-light leading-14 ">
              Case Studies
            </h2>
            <h2 className="text-[32px] normal-case  md:text-[40px] lg:text-[48px] lg:max-w-[80%] sm:leading-14 font-light">
              {data?.urlTitle}
            </h2>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[85%] lg:px-0 px-4 2xl:max-w-[1400px] mx-auto py-10">
        <div className="min-h-[360px] w-full shadow-lg md:flex gap-10">
          <div className="max-w-[400px] min-h-[100%]">
            <img
              className="h-full lg:max-w-[400px] object-cover"
              src={data?.img}
              alt=""
            />
          </div>
          <div className="lg:max-w-[calc(100%-550px)] md:px-0 md:pb-0 pb-6 px-2 sm:mt-0 mt-5 min-h-[100%] flex flex-col justify-center">
            <h1 className="text-xl sm:text-[38px]  sm:leading-[40px] font-light">
              {data?.title}
            </h1>
            <div className="">
              {data?.texts?.map((el, index) => (
                <p
                  key={index}
                  className="text-base mt-8 font-light text-[#63666A] leading-[20px]"
                >
                  {el}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSectionOne;
