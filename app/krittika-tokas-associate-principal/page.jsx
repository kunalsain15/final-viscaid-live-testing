"use client";
import React from "react";
import Link from "next/link";

const leaders = [
  {
    id: 9,
    image: "/casestudies/KT-Headshot.png",
    name: "Krittika Tokas",
    role: "Associate Principal", // Fixed typo
    description:
      "Krittika serves as the Associate Principal in our India office.  She has 9+ years of consulting experience, specializing in forecasting for the pharmaceutical industry. ",
    linkedIn: "https://www.linkedin.com/in/krittika-tokas/",
    paraone: "Experience",
    paratwo:
      "Krittika has been responsible for delivering forecasts and impactful insights across multiple therapeutic areas for a global portfolio.  She has led and mentored teams specializing in forecasting tool design and build, including online platform deployment.  In addition, her work in vaccine forecasting and modelling make her a value asset to the Viscadia team.",
    parafour: "Prior to Viscadia:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiology",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Pipeline Portfolio Management",
    parafouteen: "Opportunity Assessment",
    parafifteen: "BD Analysis",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Vaccines",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "BE in Electronics and Communication",
    paratwentythree: "Women’s Health",
    paratwentyfour: "BS in Mechanical Engineering",
    paratwentynineteen: "Netaji Subhas Institude of Technology, Delhi",
    parathirtyone: "ZS Associates",
    parathiryfive: "Epidemiology",
  },
];

function Leadership() {
  const leader = leaders[0]; // pick first leader

  return (
    <section className="bg-white mt-[60px]   md:mt-[80px] text-gray-900  md:py-12">
      <div className="max-w-[1028px] mx-auto">
        <div className=" xl:px-0 pb-15 pt-5 sm:pt-0 sm:pb-6 md:pb-16  px-3 md:px-2">
          <Link href="/leadership" className="inline-block">
            <p className="text-base text-[#13D66] font-light hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-12  xl:px-0 px-3 md:px-5 gap-8 md:gap-12 items-center">
          <div className="space-y-6 satishk pt-8 sm:pt-0 col-span-12 md:col-span-7  order-2 md:order-1">
            <div>
              <h1 className="text-4xl lg:text-6xl font-light text-black mb-3 leading-tight">
                {leader.name}
              </h1>
              <h2 className="text-xl lg:text-2xl font-light text-black mb-6">
                {leader.role}
              </h2>
            </div>
            <p className="text-[#63666A] font-light leading-6 text-base lg:text-base mb-8">
              {leader.description}
            </p>
            <div className="flex items-center">
              <a
                href={leader.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/casestudies/linkedin.png"
                  alt="LinkedIn Profile"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative overflow-hidden shadow-lg">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full max-w-full sm:px-0 px-2 sm:max-w-[430px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-[#ECECEC] pt-10 pb-10 experienceleaderhsip  px-4 md:px-5 mt-10 md:mt-14">
        <div className="max-w-[1028px] mx-auto">
          {/* Heading */}
          <h2 className="text-[34px] font-light text-black">
            {leader.paraone}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-15">
            {/* Left Section */}
            <div className="space-y-4 mt-4 col-span-7">
              <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                {leader.paratwo}
              </p>
              <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                {leader.parathree}
              </p>
            </div>

            {/* Right Section */}
            <div className="mt-4 col-span-5">
              <p className="font-light text-base text-black">
                {leader.parafour}
              </p>
              <div className="space-y-4 justify-between flex mt-6">
                <p className="text-base font-light text-black">
                  {leader.parathirtyone}
                </p>

                <p className="text-base font-light text-black">
                  {leader.paraseven}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="grid grid-cols-1 sm:gap-0 gap-8 md:grid-cols-3 xl:px-0 px-5 mt-15 mb-9 max-w-[1028px] justify-center mx-auto">
        {/* Business Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgone} className="mx-auto rotate-270" />
          <p className="text-xl font-light">{leader.paranine}</p>
          <p className="text-base font-light">{leader.parathirteen}</p>
          <p className="text-base font-light">{leader.parafive}</p>
          <p className="text-base font-light">{leader.parafifteen}</p>
          <p className="text-base font-light">{leader.parafouteen}</p>
          <p className="text-base font-light">{leader.parathirtysix}</p>
          <p className="text-base font-light">{leader.parathirtyseven}</p>
          <p className="text-base font-light">{leader.parathirtyeight}</p>
          <p className="text-base font-light">{leader.parathirtyfourty}</p>
        </div>

        {/* Therapeutic Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgtwo} className="mx-auto" />
          <p className="text-xl font-light">{leader.paraten}</p>
          <p className="text-base font-light">{leader.paraeighteen}</p>
          <p className="text-base font-light">{leader.parathiryfive}</p>
          <p className="text-base font-light">{leader.parathirtyfourtyone}</p>
        </div>

        {/* Education */}
        <div className="text-center space-y-5">
          <img src={leader.imgthree} className="mx-auto" />
          <p className="text-xl font-light">{leader.paratwnetyfour}</p>
          <p className="text-base text-[#000000] font-light ">
            {leader.paratwentytwo} <br />
            <i className="text-[12px] text-[#63666A] font-light">
              {leader.paratwentynineteen}
            </i>
          </p>
          <p className="text-base text-[#000000] font-light mt-6">
            {leader.paratwnetyseven} <br />
            <i className="text-[12px] text-[#63666A] font-light">
              {leader.paratwentyeight}
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
