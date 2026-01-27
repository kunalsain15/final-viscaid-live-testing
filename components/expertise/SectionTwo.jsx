import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="md:max-w-6xl md:px-0 px-5 pt-10 md:pt-0 mx-auto md:flex my-7 sm:my-18 about_tab_align">
        <div className="aboutanxityone min-h-[100px] md:min-h-0 sm:px-0">
          <h3 className="text-[#BD302B] sm:leading-8 md:mt-15 analytical text-xl lg:text-[30px] font-light ">
            We help reduce the analytical burden and anxiety of developing,
            presenting and explaining forecasts to cross-disciplinary groups of
            key stakeholders.
          </h3>
        </div>
        <div className="aboutanxitytwo sm:mt-0 mt-5 sm:px-0">
          <p className="text-[16px] text-[#4E4E4E] font-light md:mt-15">
            We work collaboratively with your teams to identify and incorporate
            the most important drivers in your forecast. Once your custom model
            is designed and built, we provide ongoing technical, analytical, and
            strategic support. Each custom forecast platform is designed with
            scalable commercial and financial outputs to ensure seamless
            integration into internal planning and processes.
          </p>
        </div>
      </div>
      <div className="bg-white ">
        <div className="bg-[#F1F1F1] mx-auto px-5">
          <div className="  bg-[#F1F1F1]  py-10 lg:py-28  mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:max-w-6xl sm:space-y-0 space-y-4  mx-auto">
              <div className="md:px-3 px-0 items-center flex flex-col justify-between">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="h-[80px] object-cover"
                    src="./expertiesPageImag/Forecasting-1.png"
                    alt=""
                  />
                  <p className="text-center text-[23px] font-light mt-2">
                    Forecasting Solutions
                  </p>
                  <p className="text-center text-[16px] font-light mt-2">
                    Accurate forecasting for critical business needs
                  </p>
                </div>
                <Link
                  href={"/forecasting-solutions"}
                  className="mainBg border-0 font-light text-[14px] lg:mt-0 mt-4  w-[134px] h-[38px] flex justify-center items-center"
                >
                  LEARN MORE
                </Link>
              </div>
              <div className="h-[235px] lg:mt-0 mt-6 sm:h-[220px] px-3 items-center flex flex-col justify-between">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="h-[80px]  object-cover"
                    src="./expertiesPageImag/Therapuetic-2.png"
                    alt=""
                  />
                  <p className="text-center text-[23px] font-light mt-2">
                    Therapeutic Areas
                  </p>
                  <p className="text-center text-[16px] font-light mt-2">
                    Expertise in a wide variety of complex conditions
                  </p>
                </div>
                <Link
                  href={"/therapeutic-areas"}
                  className="mainBg border-0 font-light text-[14px]   w-[134px] h-[38px] flex justify-center items-center"
                >
                  LEARN MORE
                </Link>
              </div>
              <div className="h-[220px] lg:mt-0 mt-6 sm:h-[220px] px-3 items-center flex flex-col justify-between">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="h-[80px]  object-cover"
                    src="./expertiesPageImag/Who-we-serve-1.png"
                    alt=""
                  />
                  <p className="text-center text-[23px] font-light mt-2">
                    Who We Serve
                  </p>
                  <p className="text-center text-[16px] font-light mt-2">
                    Our partners' success always comes first
                  </p>
                </div>
                <Link
                  href={"/who-we-serve"}
                  className="mainBg border-0 font-light text-[14px] lg:mt-0 mt-4 w-[134px] h-[38px] flex justify-center items-center"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:min-h-[350px] sm:py-0 py-7 sm:px-0 px-5 min-h-[250px] md:max-w-[85%] mx-auto 2xl:max-w-[1400px] flex flex-col justify-center items-center">
        <h3 className="text-[20px] sm:text-[28px] lg:text-[34px] font-light text-center leading-[22px] md:leading-[38px]">
          Ensure your forecasts are comprehensive, dynamic, and clear.
          <br className="hidden md:block md:mt-2 mt-0" />
          Driving decisions one forecast at a time™.
        </h3>

        <Link
          href={"/contact-us"}
          className="mainBg border-0 text-sm w-[150px] h-[40px] flex justify-center items-center uppercase mt-8 font-light "
        >
          Contact us
        </Link>
      </div>
    </>
  );
};

export default SectionTwo;
