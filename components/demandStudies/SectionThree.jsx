"use client";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const SectionThree = () => {
  const stats = [
    {
      value: 65,
      suffix: "+",
      label: "Therapy Areas",
      description:
        "Extensive experience across therapy areas including cardiology, oncology, immunology, pain, rare diseases, respiratory conditions, women’s health, and more",
    },
    {
      value: 40,
      suffix: "+",
      label: "Countries",
      description:
        "Partnerships and experience fielding demand studies across all key developed and developing geographies, including North America, Europe, Japan, China, and Latin America",
    },
    {
      value: 14,
      suffix: "",
      label: "of the Top 20 Biopharma Companies",
      description: "Clients for demand research in the past 5 years",
    },
  ];

  return (
    <div className="bg-white pb-7 sm:pb-25">
      <div className="md:max-w-6xl mx-auto px-5 md:px-0">
        <h2 className="text-center text-[38px] mt-5 sm:mt-8 leading-[45px] font-light mb-13">
          Why Viscadia?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col">
              {/* Animated number */}
              <h3 className="sm:text-[60px] text-[40px] font-light mainColor leading-[83px]">
                <CountUp end={item.value} duration={3} />
                {item.suffix}
              </h3>
              <p className=" text-[19px]  font-light text-gray-900">
                {item.label}
              </p>
              <div className="w-20 bg-black h-[1px] my-3"></div>
              <p className="text-[15px] text-gray-600 font-light min-h-[80px] max-w-[90%] text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <Link
          href={"/contact-us"}
          className='className="mt-8 mainBg text-white text-[15px] font-light px-6 py-2 w-fit"'
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default SectionThree;
