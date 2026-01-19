"use client";
import React from "react";
import Link from "next/link";

const leaders = [
  {
    id: 1,
    image: "/casestudies/SKK-LinkedIn-1-1.webp",
    name: "Satish K. Kauta",
    role: "Founder & CEO",
    description:
      "Satish is the Founder and CEO of Viscadia, with a career spanning more than 25 years in the life sciences industry. Having held forecasting leadership roles in global life science companies such as Pfizer and AbbVie, Satish also has deep experience in market research, new product planning, and business development. As a career-long forecaster, Satish was inspired to build a company with a focused mission to empower the life sciences industry with clarity and confidence through forecasting.",
    linkedIn: "https://www.linkedin.com/in/satishkauta",
    paraone: "Experience",
    paratwo:
      "Satish has provided ongoing forecasting support for multibillion-dollar portfolios and also has extensive experience delivering strategic and analytical support for product launches in a wide variety of therapeutic areas",
    parathree:
      "Satish's commitment to delivering clear, focused forecasts is the driving force behind Viscadia. He believes that the only way to achieve continuous growth is to design detailed, flexible plans built on a solid foundation of data.",
    parafour: "Prior to founding Viscadia, Satish held a variety of roles at:",
    parafive: "AbbVie",
    parasix: "Ther-Rx Corporation",
    paraseven: "Pfizer",
    paraeight: "Organon",
    imgone: "/casestudies/Expertise.png",
    imgtwo: "/casestudies/Therapuetic.png",
    imgthree: "/casestudies/Education.png",
    paranine: "BUSINESS EXPERTISE",
    parathirteen: "Business Development & Licensing",
    parafouteen: "Forecasting",
    parafifteen: "Market Research",
    paraeighteen: "Cardiology",
    paraten: "THERAPEUTIC EXPERTISE",
    parathirtyfourtyone: "Women’s Health",
    parathiryfive: "Oncology",
    paratwnetyfour: "EDUCATION",
    paratwentytwo: "MBA, Olin Business School",
    paratwentynineteen: "Washington University in St. Louis",
    paratwnetyseven: "BA in Economics",
    paratwentyeight: "Ramapo College of New Jersey",
  },
];

function Leadership() {
  const leader = leaders[0];

  return (
    <section className="bg-white mt-[60px]   md:mt-[80px] text-gray-900  md:py-12">
      <div className="max-w-[1028px] mx-auto">
        <div className=" xl:px-0 pb-15 pt-5 sm:pt-0 sm:pb-6 md:pb-16  px-3 md:px-2">
          <Link href="/leadership" className="inline-block ">
            <p className="text-[18px] md:text-base font-light text-[#676767] hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-12  xl:px-0 px-3 md:px-5 gap-8 md:gap-12 items-center">
          <div className="space-y-6 satishk pt-8 sm:pt-0 col-span-12 md:col-span-7  order-2 md:order-1">
            <div>
              <h1 className="text-3xl lg:text-6xl font-light text-black mb-2 md:mb-3 leading-snug md:leading-tight">
                {leader.name}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-black mb-4 md:mb-6">
                {leader.role}
              </h2>
            </div>
            <p className="text-[#63666A] font-light leading-relaxed text-sm sm:text-base mb-6 md:mb-8">
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
                  className="h-6 w-auto md:h-8"
                />
              </a>
            </div>
          </div>

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
          <h2 className="text-2xl sm:text-[34px] font-light text-black">
            {leader.paraone}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 md:gap-22">
            {/* Left */}
            <div className="space-y-3 md:space-y-4 mt-4">
              <p className="text-[#63666A] font-light text-sm sm:text-[14px] leading-relaxed">
                {leader.paratwo}
              </p>
              <p className="text-[#63666A] font-light text-sm sm:text-[14px] leading-relaxed">
                {leader.parathree}
              </p>
            </div>

            {/* Right */}
            <div className="mt-4">
              <p className="font-light text-sm sm:text-base text-black">
                {leader.parafour}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 mt-6 items-start sm:items-center">
                <div className="space-y-2">
                  <p className="text-sm sm:text-base font-light text-black">
                    {leader.parafive}
                  </p>
                  <p className="text-sm sm:text-base font-light text-black">
                    {leader.parasix}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base font-light text-black">
                    {leader.paraseven}
                  </p>
                  <p className="text-sm sm:text-base font-light text-black">
                    {leader.paraeight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-0 xl:px-0 px-4 md:px-5 mt-12 md:mt-15 mb-9 sm:max-w-[1028px] justify-center mx-auto">
        <div className="text-center space-y-3 md:space-y-5">
          <img
            src={leader.imgone}
            className="mx-auto rotate-270 w-12 md:w-auto"
          />
          <p className="text-lg sm:text-xl font-light">{leader.paranine}</p>
          <p className="text-sm sm:text-base font-light">
            {leader.parathirteen}
          </p>
          <p className="text-sm sm:text-base font-light">
            {leader.parafouteen}
          </p>
          <p className="text-sm sm:text-base font-light">
            {leader.parafifteen}
          </p>
        </div>

        {/* Therapeutic Expertise */}
        <div className="text-center space-y-3 md:space-y-5">
          <img src={leader.imgtwo} className="mx-auto w-12 md:w-auto" />
          <p className="text-lg sm:text-xl font-light">{leader.paraten}</p>
          <p className="text-sm sm:text-base font-light">
            {leader.paraeighteen}
          </p>
          <p className="text-sm sm:text-base font-light">
            {leader.parathiryfive}
          </p>
          <p className="text-sm sm:text-base font-light">
            {leader.parathirtyfourtyone}
          </p>
        </div>

        {/* Education */}
        <div className="text-center space-y-3 md:space-y-5">
          <img src={leader.imgthree} className="mx-auto w-12 md:w-auto" />
          <p className="text-lg sm:text-xl font-light">
            {leader.paratwnetyfour}
          </p>
          <p className="text-sm sm:text-base text-[#000000] font-light ">
            {leader.paratwentytwo} <br />
            <i className="text-[11px] sm:text-[12px] font-light">
              {leader.paratwentynineteen}
            </i>
          </p>
          <p className="text-sm sm:text-base text-[#000000] font-light mt-6 md:mt-10">
            {leader.paratwnetyseven} <br />
            <i className="text-[11px] sm:text-[12px] font-light">
              {leader.paratwentyeight}
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
