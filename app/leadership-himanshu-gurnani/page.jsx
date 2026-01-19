"use client";
import React from "react";
import Link from "next/link";

const leaders = [
  {
    id: 10,
    image: "/events/himanshu.webp",
    name: "Himanshu Gurnani",
    role: "Manager, Strategic Forecasting",
    description:
      "Himanshu works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 8 years of consulting experience in the pharmaceutical industry.",
    linkedIn: "https://www.linkedin.com/in/himanshugurnani/",
    paraone: "Experience",
    paratwo:
      "Himanshu has extensive analytical experience working in the pharmaceutical & healthcare space. He has helped clients in Forecasting, Commercial Assessment, Sales Planning & Analytics, and formulating Data driven Sales Strategies. He has experience of leading teams & working on projects with both Big & Specialty pharma and has the experience of working with client teams across the globe.",
    parafour: "Prior to Viscadia, he worked at",
    imgfour: "/casestudies/imgfour.webp",
    paranine: "BUSINESS EXPERTISE",
    paraten: "THERAPEUTIC EXPERTISE",
    imgfive: "/casestudies/imgfive.webp",
    paraeleven: "THERAPEUTIC EXPERTISE",
    paratweleve: "Oncology",
    imgsix: "/casestudies/imgsix.webp",
    paratwnetyfour: "EDUCATION",
    paratwelve: "Great Leaks Institute of Management",
    parathirteen: "Pipeline & In-line Asset Forecasting",
    parafouteen: "Market Research",
    parafifteen: "Sales & Marketing Analytics",
    parasixteen: "Forecasting",
    paraeighteen: "Immunology",
    paranineteen: "Women’s Health",
    paratwentytwo: "BS in Mineral Engineering",
    paratwentynineteen: "Indian School of Mines, Dhanbad",
    parathirtyone: "Trinity Lifesciences",
    paraseven: "KPMG",
    parathiryfive: "Rare Diseases",
    parathirtyfourty: "Client Engagement Strategy",
  },
];

function Leadership() {
  const leader = leaders[0];

  return (
    <section className="bg-white mt-[60px] md:mt-[80px] text-gray-900 md:py-12">
      <div className="max-w-[1028px] mx-auto">
        {/* Back Link */}
        <div className="xl:px-0 pb-15 pt-5 sm:pt-0 sm:pb-6 md:pb-16 px-3 md:px-2">
          <Link href="/leadership" className="inline-block">
            <p className="text-base text-[#13D66] font-light hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>

        {/* Header */}
        <div className="grid grid-cols-12 xl:px-0 px-3 sm:px-5 gap-8 md:gap-12 items-center">
          <div className="space-y-6 pt-8 sm:pt-0 col-span-12 md:col-span-7 order-2 md:order-1">
            <div>
              <h1 className="text-4xl lg:text-6xl font-light text-black mb-3 leading-tight">
                {leader.name}
              </h1>
              <h2 className="text-xl lg:text-2xl font-light text-black mb-6">
                {leader.role}
              </h2>
            </div>
            <p className="text-[#63666A] font-light leading-6 text-base mb-8">
              {leader.description}
            </p>
            {leader.linkedIn && (
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
            )}
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative overflow-hidden shadow-lg">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full max-w-[430px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-[#ECECEC] pt-10 pb-10 px-4 md:px-5 mt-10 md:mt-14">
        <div className="max-w-[1028px] mx-auto">
          <h2 className="text-[34px] font-light text-black">
            {leader.paraone}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-15">
            <div className="space-y-4 mt-4 col-span-7">
              <p className="text-[#63666A] font-light text-[14px] leading-relaxed">
                {leader.paratwo}
              </p>
            </div>

            <div className="mt-4 col-span-5">
              <p className="font-light text-[14px] text-black">
                {leader.parafour}
              </p>
              <div className="space-y-4 mt-6">
                {[leader.parathirtyone, leader.paraseven]
                  .filter(Boolean)
                  .map((company, i) => (
                    <p key={i} className="text-base font-light text-black">
                      {company}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="grid grid-cols-1 sm:gap-0 gap-8 md:grid-cols-3 xl:px-0 px-5 mt-15 mb-9 max-w-[1028px] mx-auto">
        {/* Business Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgfour} className="mx-auto" />
          <p className="text-xl text-black font-light">{leader.paranine}</p>
          {[leader.parathirteen, leader.parafouteen, leader.parafifteen]
            .filter(Boolean)
            .map((item, i) => (
              <p key={i} className="text-base text-black font-light">
                {item}
              </p>
            ))}
        </div>

        {/* Therapeutic Expertise */}
        <div className="text-center space-y-5">
          <img src={leader.imgfive} className="mx-auto" />
          <p className="text-xl text-black font-light">{leader.paraten}</p>
          {[
            leader.paratweleve,
            leader.paraeighteen,
            leader.parathiryfive,
            leader.parathirtyfourtytwo,
          ]
            .filter(Boolean)
            .map((item, i) => (
              <p key={i} className="text-base text-black font-light">
                {item}
              </p>
            ))}
        </div>

        {/* Education */}
        <div className="text-center space-y-5">
          <img src={leader.imgsix} className="mx-auto" />
          <p className="text-xl font-light">{leader.paratwnetyfour}</p>
          {[
            { degree: leader.paratwentytwo, school: leader.paratwentynineteen },
            { degree: leader.parafifty, school: leader.parafiftyone },
          ]
            .filter((item) => item.degree && item.school)
            .map((edu, i) => (
              <p key={i} className="text-base text-[#000000] font-light mt-6">
                {edu.degree} <br />
                <i className="text-[12px] text-[#63666A] font-light">
                  {edu.school}
                </i>
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
