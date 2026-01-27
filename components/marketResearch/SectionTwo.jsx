import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="bg-[#F0F6FB]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full py-6 sm:py-8 lg:py-12 px-5 md:px-0 md:max-w-6xl mx-auto about_tab_align">
          {/* LEFT (Text) */}
          <div className="flex flex-col justify-center sm:pt-4 sm:pb-4 xl:min-h-[50px]">
            <h2 className="text-[18px] sm:text-[38px] font-light sm:leading-[35px]">
              Research that Asks the Optimal Questions
            </h2>
            <p className="sm:mt-5 mt-4 text-[16px] text-[#63666A] sm:text-[19px] font-light">
              Too often, forecasting-related market research is undertaken as a
              stand-alone endeavor without full consideration of forecast needs.
              Results from the conventional approach are predictable –
              misalignment between market research and forecasting contributes
              to inaccuracies and limits results. As forecasting specialists our
              market research solutions are designed with the end in mind – we
              ask the right questions to frame the business case and use those
              findings to drive the design of the forecast model.
            </p>
          </div>

          {/* RIGHT (Image) */}
          <div className="flex items-center justify-center">
            <img
              src="./homePageSubPagesImg/Section-2-Vector-384x384.png"
              alt="Forecasting illustration"
              // className="w-full max-w-[550px] sm:h-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="md:max-w-6xl sm:px-0 px-5 md:min-h-[100px] mx-auto py-9 about_tab_align">
        <p className="text-base sm:text-xl lg:text-[24px] font-light">
          Viscadia has decades of experience conducting qualitative and
          quantitative market research across key global geographies (North
          America, Europe, Japan, China, Latin America) in over 65 therapeutic
          areas. With Viscadia, you can be sure market research will empower you
          with the insights to provide clarity and inspire confidence in your
          forecast.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;