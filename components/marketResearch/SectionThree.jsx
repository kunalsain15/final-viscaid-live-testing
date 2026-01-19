import Link from "next/link";
import React from "react";

const SectionThree = () => {
  return (
    <div className="md:max-w-6xl space-y-4 lg:mt-7 sm:pb-0 pb-9 sm:min-h-[320px] sm:pt-4 w-full mx-auto px-5 md:px-0">
      <h2 className="text-xl text-black sm:px-0 px-3 sm:text-[36px] font-light sm:text-center text-left">
        Empowering You with Confidence
      </h2>
      <p className="sm:text-[19px] sm:px-0 text-[#63666A] px-3 text-base sm:text-center text-left font-light">
        Through our integrated approach, we seamlessly combine our specialized
        forecasting capabilities with extensive market research experience to
        provide comprehensive end-to-end solutions. This powerful combination
        allows us to identify the key insights that drive your forecast.{" "}
      </p>
      <div className="w-full flex sm:mx-0 mx-3 justify-start sm:justify-center mt-10">
        <Link
          href={"/contact-us"}
          className='className="mt-8 mainBg text-white text-[16px] font-light px-6 py-2 w-fit"'
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default SectionThree;
