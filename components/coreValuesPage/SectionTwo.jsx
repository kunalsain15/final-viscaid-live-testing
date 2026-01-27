import React from "react";

const SectionTwo = () => {
  return (
    <div className="mx-auto">
      <div className="md:max-w-[85%] 2xl:max-w-[1400px] justify-center pt-7 pb-11 sm:pb-15 sm:pt-[40px] mx-auto">
        <h2 className="text-center sm:px-0 px-5 text-[24px] font-light leading-[30px] md:leading-[50px] sm:text-[32px] md:text-[#4E4E4E] md:font-normal">
          Our "R.I.S.E." core values drive our vision and success
        </h2>

        {/* <div className="mx-auto mt-10 md:max-w-[60%] flex flex-col gap-16">
          {[
            {
              img: "Resilience.svg",
              title: "Resilience",
              text: "We work as a team and rise to the challenge, whether it’s for a client, a colleague, or our communities.",
            },
            {
              img: "Innovation.svg",
              title: "Innovation",
              text: "We push ourselves to deliver new and innovative methodologies to provide the best solutions for our clients and for communities fighting health and educational disparities around the world.",
            },
            {
              img: "shared-success.svg",
              title: "Shared Success",
              text: "Driving success for our clients is the most important benchmark of performance. We celebrate our colleagues’ success and share our time, talents and financial resources with charitable organizations that serve our communities.",
            },
            {
              img: "Excellence.svg",
              title: "Excellence",
              text: "We are servant leaders at our core. We raise the bar for excellence in all that we do for our clients, our colleagues and our communities.",
            },
          ]?.map((item, i) => (
            <div key={i} className="flex items-start gap-8 sm:gap-16 w-full">
              <img
                src={`./coreValuesAssets/${item.img}`}
                alt={item.title}
                className="w-[120px] h-[120px] object-contain flex-shrink-0"
              />

              <div className="flex flex-col w-full">
                <h3 className="text-xl lg:text-[26px] font-light mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4E4E4E] text-[16px] leading-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mx-auto mt-6 md:mt-10 md:max-w-2xl flex flex-col gap-8 md:gap-16">
          {[
            {
              img: "Resilience.svg",
              title: "Resilience",
              text: "We work as a team and rise to the challenge, whether it’s for a client, a colleague, or our communities.",
            },
            {
              img: "Innovation.svg",
              title: "Innovation",
              text: "We push ourselves to deliver new and innovative methodologies to provide the best solutions for our clients and for communities fighting health and educational disparities around the world.",
            },
            {
              img: "shared-success.svg",
              title: "Shared Success",
              text: "Driving success for our clients is the most important benchmark of performance. We celebrate our colleagues’ success and share our time, talents and financial resources with charitable organizations that serve our communities.",
            },
            {
              img: "Excellence.svg",
              title: "Excellence",
              text: "We are servant leaders at our core. We raise the bar for excellence in all that we do for our clients, our colleagues and our communities.",
            },
          ]?.map((item, i) => (
            <div
              key={i}
              className="flex px-5 md:px-0 flex-col sm:flex-row items-center gap-5 sm:gap-16 w-full text-center sm:text-left">
              <img
                src={`./coreValuesAssets/${item.img}`}
                alt={item.title}
                className="w-[120px] h-[120px] flex justify-center items-center object-contain flex-shrink-0 order-2 sm:order-1 mr-[10%] md:mr-[0%]" />

              <div className="flex flex-col order-2 sm:order-2 w-full">
                <h3 className="text-[22px] lg:text-[26px] font-light mb-4 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4E4E4E] text-[16px] text-start leading-[23px] md:leading-normal md:w-[90%]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#EEEEEE] md:bg-[#F8F8F8] py-7 sm:py-8 md:px-0 px-5">
        <div className="md:max-w-7xl mx-auto px-0 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12 items-center about_tab_align">
            <div className="col-span-full md:col-span-3 flex justify-center md:justify-end">
              <img
                src="./homeAssets/Satishimage.png"
                alt="Satish K. Kauta"
                className="w-[68%] h-[68%] sm:w-40 sm:h-40 md:w-45 md:h-50 hidden md:block"
              />
            </div>

            <div className="col-span-full md:col-span-9 text-center md:text-left">
              <h3 className="text-[20px] sm:text-[24px] leading-6.5 md:leading-[150%] md:w-[80%] font-light text-center md:text-start text-[#BE302C] core_value_tab_text">
                “At Viscadia our core values drive the success of our clients, colleagues, and community. This integrated and overarching approach ensures that we are always aligned in our shared vision of success.”
              </h3>
              <div className="block md:hidden flex justify-center items-center pt-15 pb-2">
                <img
                  src="./homeAssets/Satishimage.png"
                  alt="Satish K. Kauta"
                  className="w-[68%] h-[68%] sm:w-40 sm:h-40 md:w-45 md:h-50"
                />
              </div>

              <h5 className="text-[24px] md:text-[26px] mt-3 text-center md:text-start font-medium">
                Satish K. Kauta
              </h5>
              <p className="text-[16px] md:text-[18px] font-normal text-center md:text-start text-[#4E4E4E]">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
