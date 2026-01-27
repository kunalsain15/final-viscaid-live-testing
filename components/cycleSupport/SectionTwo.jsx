import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="bg-[#F0F6FB]  sm:py-0 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full py-6 sm:py-8 lg:py-12 md:px-0 px-5 md:max-w-6xl mx-auto about_tab_align">
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-[18px] sm:text-[36px] font-light sm:leading-[35px]">
              Your Trusted Partner Every Step of the Way
            </h2>
            <p className="sm:mt-5 mt-4 text-[15px] text-[#63666A] sm:text-[19px] font-light">
              As your trusted partner throughout your forecasting journey,
              Viscadia excels in identifying assets, predicting market shifts,
              and facilitating swift decision-making in M&A scenarios. With our
              cross-functional collaboration and support, you can maneuver
              effortlessly through unforgiving timelines, staying one step ahead
              of your competition with unwavering confidence.
            </p>
          </div>
          <div className="w-full flex justify-center order-2 lg:order-2">
            <img
              src="./homePageSubPagesImg/CycleSupport0724-681x363.png"
              alt=""
              // className="w-full max-w-[600px] sm:h-[410px]"
            />
          </div>
        </div>
      </div>
      <div className="md:max-w-6xl sm:px-0 px-5 md:min-h-[100px] mx-auto py-7 sm:py-12 about_tab_align">
        <p className="text-base sm:text-xl lg:text-[24px] font-light">
          At Viscadia, our team of specialists goes above and beyond to help you
          create and fulfill a seamless forecasting process that aligns with
          your global objectives. We understand the challenges of integrating
          global forecasts and leading a forecast process across the enterprise,
          and that’s why our dynamic cycle support is designed to empower you
          with adaptability as a non-negotiable asset.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
