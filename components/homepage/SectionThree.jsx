"use client";
import React from "react";
import Link from "next/link";

const SectionThree = () => {
  return (
    <div className="bg-[#F6F6F6] md:py-0 py-3 md:mt-0 mt-5 md:min-h-[100%] mb:pb-0 pb-0 flex justify-center items-center">
      <div className="sm:gap-0 2xl:gap-12 px-0 pt-6 md:pt-0 lg:max-w-full md:ml-14 mx-0 justify-center w-full flex lg:flex-row items-center flex-col sm:mb-0">
        <div className="lg:w-[50%] 2xl:space-y-5 h-full md:ml-[90px] ml-0">
          <h3 className="text-[32px] text-center md:text-start 2xl:mt-2 leading-[1.1] md:leading-[34px] xl:leading-[45px] font-light text-[#BD302B] md:text-[48px]">
            Join our growing team
          </h3>

          <div className="flex flex-col items-center md:items-start gap-5 md:gap-0 px-0 mt-3 lg:mt-0">
            <div className="flex flex-col items-center md:items-start order-1 md:order-1">
              <p className="md:w-[93%] w-full leading-snug text-[16px] text-center md:text-start px-6 md:px-0 lg:text-[22px] text-black sm:leading-[25px] lg:leading-[130%] md:mt-5 mt-0 font-light">
                At Viscadia, our team members make us who we are.
                Our commitment to each other, our clients and
                our communities is the foundation of our success.
              </p>
              <Link href="/careers">
                <button className="mainBg text-[12px] m-auto md:mx-0 md:text-[19px] cursor-pointer text-white bg-[#bd302b] py-2 md:py-1.5 w-[110px] md:w-[160px] font-normal mt-5 md:mt-8 flex justify-center items-center">
                  APPLY NOW
                </button>
              </Link>
            </div>

            <div className="w-full px-0 md:px-0 md:w-[25%] flex justify-center md:justify-end order-2 md:order-2">
              <img
                className="block md:hidden lg:w-[90%] sm:w-[50%] w-[100%] max-w-full object-contain"
                src="./homeAssets/Viscadia-Opens-European-Offices-mobile.png"
                alt="Viscadia Opens European Offices"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center hidden sm:flex mt-10 lg:mt-0 sm:mt-0 md:w-[55%]">
          <img className="w-full h-auto" src="./homeAssets/Viscadia-Opens-European-Offices.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
