import React from "react";

const SectionOne = () => {
  return (
    <div>

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
                  About Us
                </h2>
                <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                  Forecasting specialists for <br></br> the life sciences industry
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[320px] gap-10 py-[32px] sm:py-[50px] bg-white sm:flex lg:items-center md:max-w-6xl mx-auto md:px-0 px-0">
        <div className="h-full md:w-[53%] md:px-0 px-5">
          <h3 className="text-[20px] font-normal sm:text-[28px] md:font-light leading-[28px] md:leading-[35px] text-[#BD2F2C]">
            Our comprehensive, dynamic and clear forecasts drive optimized
            business planning and execution around the globe.
          </h3>
        </div>
        <div className="h-full sm:mt-0 mt-3 md:w-[50%] sm:px-0 px-5">
          <p className="text-[16px] text-[#4E4E4E] font-normal leading-6">
            We leverage decades of experience to deliver custom forecast models
            that establish a solid foundation for accurately projecting product
            performance and they are agile, allowing for real-time scenario
            planning as the market landscape changes.{" "}
          </p>
          <p className="text-[16px] text-[#4E4E4E] font-normal leading-6 mt-8">
            With teams in the United States, Switzerland, and India, we are
            well-equipped to provide the support global pharmaceutical and
            biotechnology companies need to make decisions quickly and with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
