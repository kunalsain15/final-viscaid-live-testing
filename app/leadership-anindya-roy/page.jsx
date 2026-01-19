"use client";
import React from "react";
import Link from "next/link";

const leaders = [
  {
    id: 6,
    image: "/casestudies/anindya.webp",
    name: "Anindya Roy",
    role: "Principal",
    description:
      "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
    linkedIn: "https://www.linkedin.com/in/anindyaaroy",
    paraone: "Experience",
    paratwo:
      "For over eight years at Viscadia, Anindya has led, designed and implemented forecasting solutions and best practices for clients with multibillion-dollar portfolios, as well as for emerging drug-classes in previously underserved oncologies. Anindya has deep expertise in business strategy, promotional analytics and sales force design.",
    parafour:
      "Prior to Viscadia, Anindya held a variety of sales and marketing analytics roles at:",
    imgone: "/casestudies/Expertise.png",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISE",
    imgtwo: "/casestudies/Therapuetic.png",
    imgthree: "/casestudies/Education.png",
    paratwnetyfour: "EDUCATION",
    parathirteen: "Global Asset Forecasting",
    parafouteen: "Specialty Distribution Networks",
    parafifteen: "Sales and Marketing Analytics",
    parasixteen: "Forecasting",
    paraseventteen: "Market Research",
    paraeighteen: "Immunology",
    parathiryfive: "Oncology",
    parathirtysix: "Segmentation and Targeting",
    parathirtyfourtyone: "Rare and Orphan Diseases",
    paratwentytwo: "MS in Mathematics & Computing",
    paratwentynineteen: "Indian Institute of Technology, Kharagpur",
    paratwnetyseven: "BS in Mathematics & Computing",
    paratwentyeight: "Indian Institute of Technology, Kharagpur",
    parathirtyone: "ZS Associates",
    paraseven: "Deloitte Consulting",
  },
];

function Leadership() {
  const leader = leaders[0];

  return (
    <section className="bg-white mt-[60px]  md:mt-[80px] text-gray-900">
      {/* Header Section with Back Button */}
      <div className="max-w-[1028px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 pt-5 sm:pt-8 md:pb-8">
          <Link href="/leadership" className="inline-block group">
            <p className="text-base text-gray-600 font-light hover:text-gray-900 cursor-pointer transition-colors flex items-center">
              <svg
                className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </p>
          </Link>
        </div>

        {/* Hero Section - Profile */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-16 pb-16 md:pb-20">
          {/* Left - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-3 leading-tight">
                {leader.name}
              </h1>
              <h2 className="text-xl lg:text-2xl font-light text-gray-700 mb-6">
                {leader.role}
              </h2>
            </div>
            <p className="text-gray-600 font-light leading-relaxed text-base lg:text-lg">
              {leader.description}
            </p>
            <div class="flex items-center">
              <a
                href="https://www.linkedin.com/in/anindyaaroy"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/casestudies/linkedin.png"
                  alt="LinkedIn Profile"
                  class="h-8 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[430px] overflow-hidden rounded-lg shadow-xl">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1028px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            {leader.paraone}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Section - Main Experience */}
            <div className="lg:col-span-7">
              <p className="text-gray-600 font-light text-base leading-relaxed">
                {leader.paratwo}
              </p>
            </div>

            {/* Right Section - Previous Companies */}
            <div className="lg:col-span-5">
              <p className="font-light text-base text-gray-900 mb-4">
                {leader.parafour}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <p className="text-base font-light text-gray-700">
                    {leader.parathirtyone}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <p className="text-base font-light text-gray-700">
                    {leader.paraseven}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise & Education Section */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Business Expertise */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src={leader.imgone}
                  alt="Business Expertise"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
                {leader.paranine}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-base font-light">{leader.parathirteen}</p>
                <p className="text-base font-light">{leader.parafouteen}</p>
                <p className="text-base font-light">{leader.parafifteen}</p>
                <p className="text-base font-light">{leader.parasixteen}</p>
                <p className="text-base font-light">{leader.paraseventteen}</p>
                <p className="text-base font-light">{leader.parathirtysix}</p>
              </div>
            </div>

            {/* Therapeutic Expertise */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src={leader.imgtwo}
                  alt="Therapeutic Expertise"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
                {leader.paraten}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-base font-light">{leader.paraeighteen}</p>
                <p className="text-base font-light">{leader.parathiryfive}</p>
                <p className="text-base font-light">
                  {leader.parathirtyfourtyone}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src={leader.imgthree}
                  alt="Education"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
                {leader.paratwnetyfour}
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-base font-light text-gray-900">
                    {leader.paratwentytwo}
                  </p>
                  <p className="text-sm font-light text-gray-500 italic mt-1">
                    {leader.paratwentynineteen}
                  </p>
                </div>
                <div>
                  <p className="text-base font-light text-gray-900">
                    {leader.paratwnetyseven}
                  </p>
                  <p className="text-sm font-light text-gray-500 italic mt-1">
                    {leader.paratwentyeight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
