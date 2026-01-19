import Link from "next/link";
import React from "react";

const SectionCycle = () => {
  return (
    <div className="md:max-w-6xl space-y-4 lg:mt-7 md:px-0 px-5 sm:pb-0 pb-9 sm:min-h-[320px] sm:pt-4 w-full mx-auto">
      <h2 className="text-xl text-black sm:px-0 px-3 sm:text-[36px] font-light sm:text-center text-left">
        Empowering You with Confidence
      </h2>
      <p className="sm:text-[19px] sm:px-0 text-[#63666A] px-3 text-base sm:text-center text-left font-light">
        Elevate your strategic planning and resource allocation to new heights
        in the dynamic world of life sciences, powered by the unparalleled
        capabilities of Viscadia’s specialized cycle support. With our
        specialized expertise, you’ll navigate the complexities of the industry
        with clarity and confidence, transforming challenges into opportunities
        for growth and success..{" "}
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

export default SectionCycle;
