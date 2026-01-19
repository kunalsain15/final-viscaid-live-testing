import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="bg-[#d3f5ff67]  ">
        <div className="bg-[#F0F6FB] sm:mt-0 mt-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full py-6  sm:py-8 lg:py-12 px-5 md:px-0 md:max-w-6xl mx-auto">
            <div className="w-full  xl:min-h-[460px] flex flex-col justify-center">
              <h2 className="text-[18px] sm:text-[38px] font-light sm:leading-[38px]">
                Research That Asks the Right Questions, Drives the Best
                Forecasts
              </h2>
              <p className="sm:mt-8 mt-4 text-[16px]  text-[#63666A] sm:text-[18px] font-light">
                Predicting demand for pipeline assets and in-market brands is a
                core focus at Viscadia. As forecasting specialists you can be
                sure our demand studies are designed with the forecast in mind.
                Viscadia combines decades of experience designing and building
                custom forecast models with market-leading demand study
                methodologies to accurately predict future performance. Our
                demand research asks the right questions to frame the business
                case and drive the forecast, empowering you with clarity and
                confidence in forecasting to support your critical strategic
                decisions.
              </p>
            </div>

            <div className="flex items-center justify-center order-2 lg:order-2">
              <img
                src="./homePageSubPagesImg/Section-2-Vector-384x384.png"
                alt="Forecasting illustration"
                // className="w-full max-w-[550px] sm:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-6xl sm:px-0 px-5 md:min-h-[100px] mx-auto py-7 sm:py-12">
        <p className="text-base sm:text-xl lg:text-[24px] font-light">
          With a deep understanding of 65+ therapy areas and extensive
          experience across 40+ global markets, we provide custom solutions that
          navigate regional complexities and optimize demand research for
          success.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
