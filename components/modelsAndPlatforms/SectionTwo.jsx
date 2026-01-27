import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="bg-[#F0F6FB]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full py-6 sm:py-8 lg:pt-10 lg:pb-20 xl:px-0 px-5 md:max-w-6xl mx-auto">
          {/* LEFT (Text) */}
          <div className="flex flex-col justify-center sm:pt-4 sm:pb-4 xl:min-h-[50px]">
            <h2 className="text-[18px] sm:text-[38px] font-light sm:leading-[35px]">
              Transcending the Boundaries of Forecasting with Clarity
            </h2>
            <p className="sm:mt-8 mt-4 text-[15px] text-[#63666A] sm:text-[19px] font-light">
              Embark on a global journey with Viscadia, where we excel in
              providing specialized life sciences forecasting solutions across
              diverse regions and markets. Our extensive reach and understanding
              of the global landscape enable us to deliver tailored insights
              that transcend borders and drive success on an international
              scale.
            </p>
          </div>

          <div className="flex items-center justify-center order-2 lg:order-2">
            <img
              src="./homePageSubPagesImg/ModelsPlatforms0724-681x363.png"
              alt="Forecasting illustration"
              // className="w-full max-w-[550px] sm:h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="md:max-w-6xl sm:px-0 px-5 md:min-h-[100px] mx-auto py-7 sm:py-12 about_tab_align">
        <p className="text-base sm:text-xl lg:text-[24px] font-light">
          At Viscadia, our expertise extends beyond general forecasting as we
          also possess deep-rooted knowledge in several therapeutic areas. Our
          team of seasoned specialists, with an average of 20 years of
          experience, bring unmatched therapeutic expertise to the table. This
          enables us to offer refined and customized forecasting solutions that
          cater specifically to your unique therapeutic needs.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
