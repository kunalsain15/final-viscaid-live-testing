"use client";
import React from "react";

const CharityWaterSection = () => {
  return (
    <section className="bg-white">
      <div class="bg-[#F8F8F8] py-6 md:py-10 px-5 md:px-0">
        <h3 class="text-center text-[#BE302C] text-[18px] md:text-[20px] font-light">
          Forecasting is complex, but sometimes the answer is clear right from
          the start:
        </h3>
        <h3 class="text-[20px] md:text-[26px] font-normal text-[#BE302C] text-center">
          Our communities need our support.
        </h3>
      </div>
      <div className="md:max-w-6xl mt-[32px] sm:mt-17 mx-auto px-5 lg:px-0 grid md:grid-cols-2 gap-0 sm:gap-9 ">
        {/* Left: Image */}
        <div className="w-full my-2">
          <img
            src="./charityWater/Charity-Water-Family-on-Road-1.webp"
            alt="charity: water"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl mt-1 2xl:mt-0 sm:text-[24px] font-light">
            charity: water
          </h3>
          <p className="sm:text-[20px] md:text-2xl md:max-w-[90%] font-light">
            663 million people around the world live without clean water.
          </p>
          <p className="text-[16px] font-light mt-4 2xl:mt-0 text-[#4E4E4E]">
            Clean water changes everything. Viscadia is proud to partner with
            charity: water to help provide clean and safe drinking water to
            people in developing nations.
          </p>
          <p className="text-[16px] font-light mt-2 2xl:mt-0 text-[#4E4E4E]">
            Nearly 1 in 10 people worldwide, or twice the population of the
            United States, don’t have access to clean water. The majority live
            in isolated rural areas and spend hours every day walking to collect
            water for their families. This keeps children from attending school,
            parents from earning a living, and communities from thriving.
          </p>
          <p className="text-[16px] font-light mt-2 text-[#4E4E4E]">
            Giving a community access to clean water can change just about
            everything. It can improve health, increase access to food, grow
            local economies, and help kids spend more time in school.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharityWaterSection;
