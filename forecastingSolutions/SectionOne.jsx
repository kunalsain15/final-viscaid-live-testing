import Link from "next/link";
import React from "react";

const SectionOne = () => {
  const forecastingData = [
    {
      img: "/forecastingSolutions/focastingone.png",
      title: "Market Research",
      desc: "Explore how customized and cross-functional market research drives confidence with stakeholders",
      link: "/market-research",
    },
    {
      img: "/forecastingSolutions/forecastingtwo.png",
      title: "Models and Platforms",
      desc: "Leverage precision forecast models and platforms to make critical decisions quickly and effectively, to meet and exceed your growth objectives",
      link: "/models-and-platforms",
    },
    {
      img: "/forecastingSolutions/forecastingthree.png",
      title: "Cycle Support",
      desc: "Optimize your decision-making with comprehensive cycle support - ensuring effective actions and clarity throughout the forecasting journey",
      link: "/cycle-support",
    },
  ];

  return (
    <div>
      {/* <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 relative top-[45px] md:top-[65] text-white">
        <img src="./homeAssets/corevalue_homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
        <img src="./homeAssets/mobile_homebanner.png" className="h-[100%] w-[100%] block md:hidden" /> */}
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
            <div className="leading-[35px] md:leading-tight about_tab_align">
              <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
                Forecasting Solutions
              </h2>
              <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                Accurate forecasting for <br></br>critical business needs{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F1F1]">
        <div className="lg:min-h-[395px] px-5 xl:px-1 h-full xl:py-0 sm:py-6 py-7 md:max-w-6xl mx-auto flex flex-col justify-center items-center">
          <h3 className="lg:text-[38px] text-[20px] text-[#BD2F2C] font-light sm:px-0 px-0 mainColor  lg:leading-[39px] text-center">
            Decades of pharmaceutical and biotechnology experience have taught
            us that forecasting models expose risks and opportunities.
          </h3>
          <p className=" lg:text-[30px] text-xl text-[#BE302C] sm:px-0 px-0 lg:leading-[34px] text-center mainColor font-light mt-5">
            Our forecasting platforms are carefully calibrated to support
            real-time scenario planning and "what-if" analyses by allowing
            cross-functional stakeholders to confidently characterize, compare
            and contrast scenarios based on variable inputs.
          </p>
        </div>
      </div>
      <div className=" mt-7 sm:mt-6 lg:mt-20 lg:mb-20 px-5 md:px-0">
        <h3 className="text-xl sm:text-[24px] lg:text-[38px] text-black font-light text-center">
          Forecasting specialists for the life sciences industry
        </h3>
        <p className="text-[14px] sm:text-[16px]  sm:px-0 px-2 text-[#474748] font-light text-center mt-3 sm:mt-1">
          Providing critical overarching expertise across your cross-functional
          areas of need:
        </p>

        <div className="min-h-[400px] sm:min-h-[380px] flex items-center sm:mb-0 mb-5 py-3 lg:py-0 md:max-w-6xl mx-auto">
          <div className="grid w-full lg:space-y-0 space-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mx-auto">
            {forecastingData.map((item, index) => (
              <div
                key={index}
                className="md:px-3 items-center flex flex-col justify-center"
              >
                <div className="flex space-y-2 justify-center items-center flex-col">
                  <img
                    className="h-[80px] w-[80px] object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  <p className="text-center text-[26px] font-light">
                    {item.title}
                  </p>
                  <p className="text-center text-[16px] text-black font-light">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="mainBg border-0 mt-8 lg:mt-9 font-light text-[14px] w-[145px] h-[40px] flex justify-center items-center"
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
