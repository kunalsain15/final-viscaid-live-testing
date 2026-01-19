// "use client";
// import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import CommonSwiperSection from "@/components/lifeAtViscadia/CommonSwiperSection";
// import Link from "next/link";
// const PeopleFirstSection = () => {
//   return (
//     <div>
//       <div className="sm:h-[480px] h-[370px]  w-full bg-black relative text-white">
//         <img
//           className="h-full w-full opacity-40"
//           src="/lifeAtViscadia/vis_hero_interior_JOIN.gif"
//         />
//         {/* overlay text  */}
//         <div className="h-full w-full md:px-0 px-4 absolute top-0 left-0 z-10">
//           <div className="2xl:max-w-[1400px] lg:space-y-0 space-y-3  md:max-w-[85%] flex justify-end h-[70%] lg:h-[74%] xl:h-[70%] flex-col mx-auto">
//             <h2 className="sm:text-[33px] text-[22px] font-extralight">
//               Life at Viscadia
//             </h2>
//             <h3 className=" sm:text-[52px] text-[29px] sm:leading-14 leading-9 font-[300]">
//               Working together towards shared success
//             </h3>
//           </div>
//         </div>
//       </div>
//       {/* Section 1 → Image Left */}
//       <CommonSwiperSection
//         slides={[
//           {
//             img: "/lifeAtViscadia/our-people-first-philosophy-outwards-four.webp",
//           },
//           { img: "/lifeAtViscadia/our-people-first-philosophy-outwards.webp" },
//           { img: "/lifeAtViscadia/our-people-first-philosophy.webp" },
//           { img: "/lifeAtViscadia/people-img2.webp" },
//         ]}
//         title="Our People First Philosophy"
//         description="Viscadia embraces a People First philosophy for all its processes and policies. This entails three core principals: empathy, genuine care and shared success. We believe that a positive employee experience spreads outwards."
//       />

//       <CommonSwiperSection
//         slides={[
//           { img: "/community-img1.webp" },
//           { img: "/lifeAtViscadia/serving_communities/serving_community.webp" },
//           { img: "/lifeAtViscadia/serving_communities/community-img3.webp" },
//           { img: "/lifeAtViscadia/serving_communities/community-img4.webp" },
//         ]}
//         title="Serving our Communities"
//         description="We understand the power of having a strong vision for a brighter future. We invest our time, energy, and resources in supporting the right causes and making our world a better place."
//         reverse
//         bg="bg-[#E7E7E7]"
//       />

//       <CommonSwiperSection
//         slides={[
//           { img: "/lifeAtViscadia/team-img.webp" },
//           { img: "/team-img4.webp" },
//           { img: "/team-img.webp" },
//           { img: "/team-img3.webp" },
//         ]}
//         title="Team Building & Events"
//         description="Quality of life is incredibly important - especially when you work in a highly competitive growth industry. We are dedicated to promoting positive and supportive work environments and inculcating healthy work-life balance. Our team-building initiatives foster collaboration and open communication."
//       />

//       <div className="bg-[#E7E7E7] py-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-center">
//           <div className="flex flex-col items-center">
//             {/* Icon */}
//             <div className="text-[#BD302B] text-4xl mb-4">
//               <img src="/lifeAtViscadia/logo/learn_about.png" />
//             </div>
//             <h2 className="text-[24px] font-light mb-4">
//               Learn more about our core values
//             </h2>
//             {/* <button className=" font-light tracking-wider text-white rounded-none px-6 py-3 bg-[#BD302B]">
//                             Learn More
//                         </button>
//                       */}
//             <Link href="/core-values">
//               <button className="font-light cursor-pointer hover:bg-[#a71d18] tracking-wider text-white rounded-none px-6 py-3 bg-[#BD302B]">
//                 Learn More
//               </button>
//             </Link>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="text-[#BD302B] text-4xl mb-4">
//               <img src="/lifeAtViscadia/logo/Viscadia-Volunteers.png" />
//             </div>
//             <h2 className="text-[24px] font-light mb-4">
//               Learn more about Viscadia Volunteers
//             </h2>

//             <Link href="/viscadia-volunteers">
//               <button className="font-light cursor-pointer hover:bg-[#a71d18] tracking-wider text-white rounded-none px-6 py-3 bg-[#BD302B]">
//                 Learn More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* Bottom Section */}
//       <div className="text-center mt-14 mb-14">
//         <h2 className="text-[38px] font-light text-black mb-4">
//           Do you fit in?
//         </h2>
//         <Link href="/careers">
//           <button className="font-light  hover:bg-[#a71d18] cursor-pointer tracking-wide text-white rounded-none px-6 py-3 bg-[#BD302B]">
//             Apply Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PeopleFirstSection;

"use client";
import React from "react";
import Link from "next/link";

const PeopleFirstSection = () => {
  return (
    <div>
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 relative top-[45px] md:top-[65] text-white">
        <img src="./homeAssets/corevalue_homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
        <img src="./homeAssets/mobile_homebanner.png" className="h-[100%] w-[100%] block md:hidden" />
        <div className="h-full w-full absolute top-[-50] md:top-[0] px-5 md:right-53 z-10 flex justify-center items-center flex-col">
          <div className="leading-snug md:leading-tight">
            <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
              Life at Viscadia
            </h2>
            <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
              Working together towards shared success
            </h3>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 sm:gap-14 items-center py-6 sm:py-14 md:max-w-6xl mx-auto md:px-0 px-5">
        <img
          src="/homeAssets/people-img2.png"
          alt="People First"
          className="w-full "
        />
        <div>
          <h2 className="text-[23px] md:text-[24px] font-light text-black mb-4">
            Our People First Philosophy
          </h2>
          <p className="text-[18px] md:text-[20px] text-black font-light leading-7.5">
            Viscadia embraces a People First philosophy for all its processes
            and policies. This entails three core principles: empathy, genuine
            care, and shared success. We believe that a positive employee
            experience spreads outwards.
          </p>
        </div>
      </div>

      {/* Section 2 - Reverse Layout */}
      <div className="bg-[#EEEEEE] py-6 sm:py-14">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 sm:gap-14 items-center md:max-w-6xl mx-auto md:px-0 px-5">
          <div className="order-2 md:order-1">
            <h2 className="text-[28px] md:text-[24px] font-light text-black mb-4">
              Serving our Communities
            </h2>
            <p className="text-[18px] md:text-[20px] text-black font-light leading-7.5">
              We understand the power of having a strong vision for a brighter
              future. We invest our time, energy, and resources in supporting
              the right causes and making our world a better place.
            </p>
          </div>
          <img
            src="/homeAssets/community-img1.png"
            alt="Serving Communities"
            className="order-1 md:order-2 w-full "
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 sm:gap-14 items-center py-10 sm:py-14 md:max-w-6xl mx-auto md:px-0 px-5">
        <img
          src="/homeAssets//team-img.png"
          alt="Team Building"
          className="w-full "
        />
        <div>
          <h2 className="text-[28px] md:text-[24px] font-light text-black mb-4">
            Team Building & Events
          </h2>
          <p className="text-[18px] md:text-[20px] text-black font-light leading-7.5">
            Quality of life is incredibly important — especially when you work
            in a highly competitive growth industry. We are dedicated to
            promoting positive and supportive work environments and fostering a
            healthy work-life balance. Our team-building initiatives encourage
            collaboration and open communication.
          </p>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="bg-[#EEEEEE] py-6 sm:py-14">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-5xl 2xl:max-w-[1390px] mx-auto text-center">
          <div className="flex flex-col items-center">
            <img
              src="/lifeAtViscadia/logo/learn_about.png"
              alt="Core Values"
              className="mb-4 w-16"
            />
            <h2 className="text-[20px] font-light mb-4">
              Learn more about our core values
            </h2>
            <Link href="/core-values">
              <button className="mainBg text-white/80 mt-3 md:mt-0 bg-[#bd302b] cursor-pointer font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                Learn More
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/lifeAtViscadia/logo/Viscadia-Volunteers.png"
              alt="Volunteers"
              className="mb-4 w-16"
            />
            <h2 className="text-[20px] font-light mb-4">
              Learn more about Viscadia Volunteers
            </h2>
            <Link href="/viscadia-volunteers">
              <button className="mainBg text-white/80 mt-3 md:mt-0 bg-[#bd302b] cursor-pointer font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center sm:mt-10 sm:mb-14 mt-10 mb-10">
        <h2 className="text-2xl sm:text-[32px] font-light text-black mb-2">
          Add to our growing culture
        </h2>
        <Link href="/careers" className="flex justify-center">
          <button className="mainBg text-white/80 mt-3 md:mt-0 bg-[#bd302b] cursor-pointer font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PeopleFirstSection;
