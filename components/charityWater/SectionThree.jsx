import React from "react";

const SectionThree = () => {
  const data = [
    {
      img: "./charityWater/Health-1.png",
      title: "HEALTH",
      text: "Access to clean water and basic sanitation can save around 16,000 lives every week.",
    },
    {
      img: "./charityWater/Time-1.png",
      title: "TIME",
      text: "In Africa alone, women spend 40 billion hours a year walking for water.",
    },
    {
      img: "./charityWater/Education-2.png",
      title: "EDUCATION",
      text: "Less time collecting water and better sanitation helps keep kids in school, especially girls.",
    },
    {
      img: "./charityWater/Empowering-Women-1.png",
      title: "EMPOWERING WOMEN",
      text: "When women and girls get their time back, they improve their lives, start businesses, and take charge of their own futures.",
    },
  ];
  return (
    <div className="">
      <div className="sm:py-5 min-h-[250px]  mt-10 sm:mb-0 mb-6 md:max-w-[85%] charitywatereducation mx-auto">
        <div className="mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {data?.map((award, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center"
              >
                <img className="h-[40px]" src={award.img} alt={award.img} />
                <h4 className="text-xl sm:text-[18px] max-w-[300px] text-center flex justify-center font-light uppercase mt-3">
                  {award.title}
                </h4>
                <p className="text-[12px] sm:leading-5 text-[#4E4E4E] font-light mt-2">
                  {award.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F8F8F8]">
        <div className="md:px-7 max-w-7xl py-6 sm:py-8 2xl:py-16 mx-auto">
          <h3 className="text-xl sm:leading-7 sm:px-0  px-5 text-[#BE302C] sm:text-[24px] font-light text-center mainColor">
            “Clean drinking water is something many of us take for granted, but
            over half a billion people spend hours every day collecting unsafe
            water for themselves and their families. We work with charity: water
            to build wells that improve communities and save lives.”
          </h3>

          <h5 className="text-[24px] sm:text-[26px] mt-10 text-center font-bold">
            Satish K. Kauta
          </h5>
          <p className="md:text-[18px] text-[16px] font-normal text-center text-[#4E4E4E] mt-0 md:mt-1">
            Founder & CEO
          </p>
        </div>
      </div>

      <div className="md:max-w-6xl mt-[32px] sm:mt-17 mx-auto px-5 lg:px-0 grid md:grid-cols-2 gap-0 sm:gap-9">
        <div className="md:h-full xl:px-0 md:px-5 px-0 sm:px-0 flex  items-center">
          <img
            className="w-full h-auto object-contain"
            src={"./charityWater/Charity-Water-Funded-Projects.webp"}
            alt={"Charity-Water-Funded-Projects.webp"}
          />
        </div>
        <div className="md:h-full xl:px-0 md:px-4 px-0 space-y-3 sm:space-y-5 2xl:space-y-3 sm:mt-0 mt-4 flex flex-col">
          <h3 className="text-[24px] mt-1 font-light">Funded Projects</h3>
          <p className="text-[16px] md:text-[20px] font-extralight text-[#4E4E4E]">
            BANTEAY KRANG, CAMBODIA
          </p>
          <p className="text-[16px] text-[#4E4E4E] font-light">
            Clean water changes everything. Viscadia is proud to partner with
            charity: water to help provide clean and safe drinking water to
            people in developing nations.
          </p>
          <a
            href="https://www.charitywater.org/projects/104-20"
            target="_blank"
            className="text-white mainBg mt-3 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
            VIEW PROJECT
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-20 md:h-[300px] md:max-w-full sm:px-0 px-5  grid grid-cols-1 lg:grid-cols-2 lg:flex justify-between  mx-auto">
        <div className="lg:w-[50%] lg:py-0 py-7 h-[350px] sm:h-full bg-[#C2C2C2] flex flex-col justify-center items-center">
          <p className="text-2xl sm:text-[26px] font-light text-center">
            Dirty Water Impacts <br />
            Millions <br />
            of People Around the <br />
            World
          </p>
          <a
            href="https://vimeo.com/157474326"
            target="_blank"
            className="text-white mainBg mt-6 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 px-5 md:px-0 md:w-[150px] h-[48px] md:h-[40px] flex justify-center items-center">
            WATCH THE VIDEO
          </a>
        </div>
        <div className="lg:w-[50%] lg:py-0 py-7 h-[350px] sm:h-full bg-[#EEEEEE] flex flex-col justify-center items-center">
          <img
            className="w-[200px]"
            src="./charityWater/charity_water-1.webp"
            alt="charity_water"
          />
          <p className="text-2xl sm:text-[26px] md:pt-0 pt-2 font-light text-center">
            Make a Difference <br /> Today
          </p>
          <a
            href="https://www.charitywater.org/donate"
            target="_blank"
            className="text-white mainBg md:mt-15 mt-6 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[150px] h-[48px] md:h-[40px] flex justify-center items-center">
            GET INVOLVED
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
