"use client";
import React from "react";
import Link from "next/link";
import "../../app/styles/custom.css";
const leaders = [
  {
    id: 2,
    image: "/casestudies/doug.webp",
    name: "Doug Willson",
    role: "Principal",
    description:
      "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market research experience within the life sciences industry.",
    linkedIn: "https://www.linkedin.com/in/douglas-willson-bb04a616",
    paraone: "Experience",
    paratwo:
      "Doug specializes in early-stage commercial assessments, pre-launch and in-line forecasts, and market sizing studies for pharmaceuticals, biotechnology, medical devices, and diagnostics. Doug also possesses a strong background in business strategy and promotional analytics.",
    parafour: "Prior to Viscadia, Doug held a variety of leadership roles at:",
    parafive: "Ipsos Healthcare",
    parasix: "ZS Associates",
    paraseven: "Bell Falla",
    paraeight: "Cello Health Advantage",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISED",
    imgtwo: "/casestudies/Therapuetic.png",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Cardiovascular/Diabetes",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Demand Studies",
    parafouteen: "Conjoint and Choice Modeling",
    parafifteen: "Sales and Marketing Analytics",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Autoimmune",
    paranineteen: "Women’s Health",
    paratwenty: "BA in Economics",
    paratwentyone: "Ramapo College of New Jersey",
    paratwentytwo: "Ph.D. in Economics (Econometrics, Finance)",

    paratwentyfour: "MBA, Olin Business School",
    paratwentynineteen: "University of Pennsylvania",
    paratwnetyseven: "M.A. in Economics",
    paratwentyeight: "Ramapo College of New Jersey",
    paratwentyeight: "University of Toronto",
    paratwentythiryone: "Rare Diseases",
    parathirtysix: "Product Development and New Product Planning",
    parathiryfive: "Cardiovascular/Diabetes",
    parathirtyfourtyone: "Oncology",
    paratwentythree: "Oncology",
    paratwentyfouty: "B.Comm. in Finance",
    paratwentyone: "University of Toronto",
  },
];
function Leadership() {
  const leader = leaders[0];
  return (
    <section className="bg-white mt-[60px]   md:mt-[80px] text-gray-900  md:py-12">
      <div className="max-w-[1028px] mx-auto">
        <div className=" xl:px-0 pb-15 pt-5 sm:pt-0 sm:pb-6 md:pb-16  px-3 md:px-2">
          <Link href="/leadership" className="inline-block">
            <p className="text-[18px] md:text-base font-light text-[#133D66] hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-12  xl:px-0 px-3 sm:px-5 gap-8 md:gap-12 items-center">
          <div className="space-y-6 satishk pt-8 sm:pt-0 col-span-12 md:col-span-7  order-2 md:order-1">
            <div>
              <h1 className="text-3xl lg:text-6xl font-light text-black mb-2 md:mb-3 leading-snug md:leading-tight">
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
          <h2 className="text-[34px] font-light text-black">
            {leader.paraone}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-22">
            {/* Left */}
            <div className="space-y-4 mt-4">
              <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                {leader.paratwo}
              </p>
              <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                {leader.parathree}
              </p>
            </div>

            {/* Right */}
            <div className="mt-4">
              <p className="font-light text-base text-black">
                {leader.parafour}
              </p>
              <div className="flex gap-20 mt-6 items-center">
                <div className="space-y-2">
                  <p className="text-base font-light text-black">
                    {leader.parafive}
                  </p>
                  <p className="text-base font-light text-black">
                    {leader.parasix}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-base font-light text-black">
                    {leader.paraseven}
                  </p>
                  <p className="text-base font-light text-black">
                    {leader.paraeight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 sm:gap-0 xl:px-0 px-4 md:px-5  leadershipexperience pt-5 pb-5 md:mt-5 md:mb-5  sm:max-w-[1028px] justify-center mx-auto">
        {/* Business Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgone} className="mx-auto rotate-270" />
          <p className="text-xl font-light">{leader.paranine}</p>
          <p className="text-base font-light">{leader.parathirteen}</p>
          <p className="text-base font-light">{leader.parafouteen}</p>
          <p className="text-base font-light">{leader.parafifteen}</p>
          <p className="text-base font-light">{leader.parathirtysix}</p>
        </div>

        {/* Therapeutic Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgtwo} className="mx-auto" />
          <p className="text-xl font-light">{leader.paraten}</p>
          <p className="text-base font-light">{leader.paraeighteen}</p>
          <p className="text-base font-light">{leader.parathiryfive}</p>
          <p className="text-base font-light">{leader.parathirtyfourtyone}</p>
          <p className="text-base font-light">{leader.paratwentythiryone}</p>
        </div>

        {/* Education */}
        <div className="text-center space-y-5">
          <img src={leader.imgthree} className="mx-auto" />
          <p className="text-xl font-light">{leader.paratwnetyfour}</p>
          <p className="text-base text-[#000000] font-light ">
            {leader.paratwentytwo} <br />
            <i className="text-[14px] text-[#63666A] font-light">
              {leader.paratwentynineteen}
            </i>
          </p>
          <p className="text-base text-[#000000] font-light mt-8">
            {leader.paratwnetyseven} <br />
            <i className="text-[14px] text-[#63666A] font-light">
              {leader.paratwentyeight}
            </i>
          </p>
          <p className="text-base text-[#000000] font-light mt-6">
            {leader.paratwentyfouty} <br />
            <i className="text-[14px] text-[#63666A] font-light">
              {leader.paratwentyone}
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
