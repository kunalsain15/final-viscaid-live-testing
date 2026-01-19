// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import SectionOne from "@/components/whoWeServe/SectionOne";
// import Head from "next/head";

// const expertise = () => {
//   const clients = [
//     [
//       {
//         src: "./whoweserve/gileda.webp",
//         alt: "Gilead",
//         title: "Gilead",
//       },
//       {
//         src: "./whoweserve/apteve.webp",
//         alt: "Aptevo",
//         title: "Aptevo",
//       },
//       {
//         src: "./whoweserve/mallinckrodt.webp",
//         alt: "Mallinckrodt",
//         title: "Mallinckrodt",
//       },
//       {
//         src: "./whoweserve/melinta.webp",
//         alt: "Melinta",
//         title: "Melinta",
//       },
//     ],
//     [
//       {
//         src: "./whoweserve/Takeda.webp",
//         alt: "Takeda",
//         title: "Takeda",
//       },
//       {
//         src: "./whoweserve/chiesi.webp",
//         alt: "Chiesi",
//         title: "Chiesi",
//       },
//       {
//         src: "./whoweserve/helsinn.webp",
//         alt: "Helsinn",
//         title: "Helsinn",
//       },
//       {
//         src: "./whoweserve/acasti.webp",
//         alt: "AcastiPharma",
//         title: "AcastiPharma",
//       },
//     ],
//     [
//       {
//         src: "./whoweserve/avion.webp",
//         alt: "Ipsen",
//         title: "Ipsen",
//       },
//       {
//         src: "./whoweserve/seagen.webp",
//         alt: "astellas",
//         title: "astellas",
//       },
//       {
//         src: "./whoweserve/Horizon.webp",
//         alt: "Pharmacosmos",
//         title: "Pharmacosmos",
//       },
//       {
//         src: "./whoweserve/avadel.webp",
//         alt: "Zogenix",
//         title: "Zogenix",
//       },
//     ],
//     [
//       {
//         src: "./whoweserve/collegium.webp",
//         alt: "collegium",
//         title: "collegium",
//       },
//       {
//         src: "./whoweserve/taro.webp",
//         alt: "taro",
//         title: "taro",
//       },
//       {
//         src: "./whoweserve/lupin.webp",
//         alt: "Horizon",
//         title: "Horizon",
//       },
//       {
//         src: "./whoweserve/Daiichi.webp",
//         alt: "Whoweserve",
//         title: "whoweserve",
//       },
//     ],
//     [
//       {
//         src: "./whoweserve/geron.webp",
//         alt: "CollegiumPharmaceuticals",
//         title: "CollegiumPharmaceuticals",
//       },
//       {
//         src: "./whoweserve/dexcom.webp",
//         alt: "dexcom",
//         title: "desxcom",
//       },
//       {
//         src: "./whoweserve/genmap.webp",
//         alt: "genmap",
//         title: "genmap",
//       },
//       {
//         src: "./whoweserve/medexus.webp",
//         alt: "medexus",
//         title: "medexus",
//       },
//     ],
//   ];

//   const testimonials = [
//     {
//       text: "Across multiple projects, Viscadia has listened to our needs and prioritized delivery of key insights that help us gain alignment with the broader team. Their specialization in oncology forecasting has made each forecast creation a breeze, and expanding and updating our models has been seamless. In rapidly changing therapeutic areas, Viscadia's forecasts have withstood the test of time!",
//       image: "./whoweserve/Sarah-Yue-1-1.webp",
//       name: "Sarah Yue",
//       title: "Associate Director<br>Global Insights",
//       alt: "Sarah Yue",
//     },
//     {
//       text: "Viscadia brought additional dimensions to the existing forecast, which aided buy-in from our stakeholders. I needed someone to work alongside me, and they were the ideal partner.",
//       image: "./whoweserve/Rob-Hernandez-1.webp",
//       name: "Rob Hernandez",
//       title: "Director, Forecasting & Financial Planning<br>Daiichi Sankyo",
//       alt: "Rob Hernandez",
//     },
//     {
//       text: "I have worked with Viscadia across many companies and clients. I keep returning to them because they stay on point, grasp and incorporate changes quickly, and their team can provide a different view on market dynamics, rendering the overall output much more robust. The realism in Viscadia’s approach made it extremely easy to communicate to internal stakeholders and ultimately get traction on my projects. I cannot wait to work with them again.",
//       image: "./whoweserve/Irina-B-1.webp",
//       name: "Irina Baramova",
//       title: "Corporate Development<br>and Strategy",
//       alt: "Irina Baramova",
//     },
//     {
//       text: "Viscadia has been a long-term strategic partner to Milestone on the forecasting front. In addition to their responsiveness and innovative modeling techniques, they have deep therapeutic expertise which enables us to expand our own thinking and ultimately make more informed decisions.",
//       image: "./whoweserve/Lorenz-Web-1.webp",
//       name: "Lorenz Muller",
//       title: "Chief Commercial Officer<br>Milestone Pharmaceuticals",
//       alt: "Lorenz Muller",
//     },
//     {
//       text: '"Our forecast was accurate... that was a critical piece of allowing us to complete a successful and valuable acquisition."',
//       image: "./whoweserve/Josh-Franklin-1.webp",
//       name: "Josh Franklin",
//       title: "President<br>Pharmacosmos Therapeutics, Inc.",
//       alt: "Josh Franklin",
//       videoLink: "https://www.youtube.com/watch?v=q-GmpC-7Ds0",
//     },
//   ];

//   return (
//     <div className="font-arial">
//       <SectionOne />
//       {/* Top Section */}
//       <div className="bg-[#F1F1F1] sm:pt-2 sm:pb-0 pt-6 pb-6 sm:h-[222px]  flex    justify-center items-center">
//         <div className=" mx-auto px-4 md:max-w-[95%] 2xl:max-w-[1500px] sm:my-10 my-6 sm:px-6 lg:px-8 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="text-white p-0 text-center">
//               <h2 className="text-xl sm:leading-[32px] text-[#BD302B]  analytical sm:text-2xl md:text-[28px] font-normal  mb-4 text-start">
//                 We work with large and mid-sized pharmaceutical and
//                 biotechnology companies as well as emerging specialty firms.
//               </h2>
//             </div>

//             <div className="text-white p-0 text-center">
//               <p className="text-base font-light md:text-md text-start text-[#63666A]">
//                 Our team can also support financial and investment firms,
//                 including private equity and venture capital, as they build
//                 portfolios in the pharmaceutical and biotechnology sectors. Our
//                 experienced principals and consultants can support
//                 decision-makers across all levels of your organization,
//                 including Sales and Marketing, Decision Sciences, Finance,
//                 Corporate Development, and C-Suite executives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Forecasting Solutions, Therapeutic Areas, Who We Serve */}
//       <div className="max-w-[1110px]  mx-auto sm:px-6 mt-6 sm:mt-20 lg:px-8 pb-6 sm:pb-15 container">
//         <section className="bg-white">
//           <h2 className="text-center text-black  text-2xl sm:text-[38px] font-light mb-10">
//             Select Clients
//           </h2>
//           <div className="space-y-2">
//             {clients.map((row, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className="flex flex-row flex-wrap sm:px-0 px-3 justify-center  sm:justify-between items-center space-y-3 sm:space-y-5 gap-2 sm:gap-10  py-2.5"
//               >
//                 {row.map((client, index) => (
//                   <div
//                     key={index}
//                     className="w-[48%] sm:w-auto max-w-[45%] sm:max-w-none flex-shrink flex-grow-0"
//                   >
//                     <img
//                       src={client.src}
//                       alt={client.alt}
//                       title={client.title}
//                       className="w-full max-w-[200px] h-auto object-contain"
//                       loading="lazy"
//                       decoding="async"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//       <div className="bg-[#F1F1F1] sm:h-[500px]  py-5 flex justify-center items-center">
//         <section className="max-w-6xl mt-4 mx-auto px-4 sm:px-6 lg:px-8  overflow-hidden">
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             slidesPerView={1}
//             spaceBetween={8}
//             pagination={{
//               clickable: true,
//               bulletClass: "custom-bullet swiper-pagination-bullet",
//               bulletActiveClass:
//                 "custom-bullet-active swiper-pagination-bullet-active",
//             }}
//             autoplay={{
//               delay: 15000,
//               pauseOnMouseEnter: true,
//               disableOnInteraction: true,
//             }}
//             loop={true}
//             speed={500}
//             className="w-full [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!top-1"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index} className="flex justify-center">
//                 <div className="flex flex-col items-center text-center max-w-[1071px] w-full px-4">
//                   <div
//                     className="text-[#BD302B] text-[24px] sm:text-[24px] font-light mb-4"
//                     style={{ lineHeight: "28px" }}
//                     dangerouslySetInnerHTML={{ __html: testimonial.text }}
//                   />
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.alt}
//                     className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mb-4"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                   <div className="flex flex-col items-center">
//                     <span className="text-black font-['Open_Sans'] text-xl font-semibold">
//                       {testimonial.name}
//                     </span>
//                     <span
//                       className="text-black text-sm sm:text-lg font-light"
//                       dangerouslySetInnerHTML={{ __html: testimonial.title }}
//                     />
//                     {testimonial.videoLink && (
//                       <a
//                         href={testimonial.videoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-4 mainBg text-[#163D66] text-sm font-medium uppercase border border-[#163D66] px-4 py-2 hover:bg-[#163D66] hover:text-white transition"
//                       >
//                         Watch the Video
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default expertise;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionOne from "@/components/whoWeServe/SectionOne";
import Head from "next/head";

const expertise = () => {
  const clients = [
    [
      {
        src: "./whoweserve/gileda.webp",
        alt: "Gilead",
        title: "Gilead",
      },
      {
        src: "./whoweserve/apteve.webp",
        alt: "Aptevo",
        title: "Aptevo",
      },
      {
        src: "./whoweserve/mallinckrodt.webp",
        alt: "Mallinckrodt",
        title: "Mallinckrodt",
      },
      {
        src: "./whoweserve/melinta.webp",
        alt: "Melinta",
        title: "Melinta",
      },
    ],
    [
      {
        src: "./whoweserve/Takeda.webp",
        alt: "Takeda",
        title: "Takeda",
      },
      {
        src: "./whoweserve/chiesi.webp",
        alt: "Chiesi",
        title: "Chiesi",
      },
      {
        src: "./whoweserve/helsinn.webp",
        alt: "Helsinn",
        title: "Helsinn",
      },
      {
        src: "./whoweserve/acasti.webp",
        alt: "AcastiPharma",
        title: "AcastiPharma",
      },
    ],
    [
      {
        src: "./whoweserve/avion.webp",
        alt: "Ipsen",
        title: "Ipsen",
      },
      {
        src: "./whoweserve/seagen.webp",
        alt: "astellas",
        title: "astellas",
      },
      {
        src: "./whoweserve/Horizon.webp",
        alt: "Pharmacosmos",
        title: "Pharmacosmos",
      },
      {
        src: "./whoweserve/avadel.webp",
        alt: "Zogenix",
        title: "Zogenix",
      },
    ],
    [
      {
        src: "./whoweserve/collegium.webp",
        alt: "collegium",
        title: "collegium",
      },
      {
        src: "./whoweserve/taro.webp",
        alt: "taro",
        title: "taro",
      },
      {
        src: "./whoweserve/lupin.webp",
        alt: "Horizon",
        title: "Horizon",
      },
      {
        src: "./whoweserve/Daiichi.webp",
        alt: "Whoweserve",
        title: "whoweserve",
      },
    ],
    [
      {
        src: "./whoweserve/geron.webp",
        alt: "CollegiumPharmaceuticals",
        title: "CollegiumPharmaceuticals",
      },
      {
        src: "./whoweserve/dexcom.webp",
        alt: "dexcom",
        title: "desxcom",
      },
      {
        src: "./whoweserve/genmap.webp",
        alt: "genmap",
        title: "genmap",
      },
      {
        src: "./whoweserve/medexus.webp",
        alt: "medexus",
        title: "medexus",
      },
    ],
  ];

  const testimonials = [
    {
      text: "Across multiple projects, Viscadia has listened to our needs and prioritized delivery of key insights that help us gain alignment with the broader team. Their specialization in oncology forecasting has made each forecast creation a breeze, and expanding and updating our models has been seamless. In rapidly changing therapeutic areas, Viscadia's forecasts have withstood the test of time!",
      image: "./whoweserve/Sarah-Yue-1-1.webp",
      name: "Sarah Yue",
      title: "Associate Director<br>Global Insights",
      alt: "Sarah Yue",
    },
    {
      text: "Viscadia brought additional dimensions to the existing forecast, which aided buy-in from our stakeholders. I needed someone to work alongside me, and they were the ideal partner.",
      image: "./whoweserve/Rob-Hernandez-1.webp",
      name: "Rob Hernandez",
      title: "Director, Forecasting & Financial Planning<br>Daiichi Sankyo",
      alt: "Rob Hernandez",
    },
    {
      text: "I have worked with Viscadia across many companies and clients. I keep returning to them because they stay on point, grasp and incorporate changes quickly, and their team can provide a different view on market dynamics, rendering the overall output much more robust. The realism in Viscadia’s approach made it extremely easy to communicate to internal stakeholders and ultimately get traction on my projects. I cannot wait to work with them again.",
      image: "./whoweserve/Irina-B-1.webp",
      name: "Irina Baramova",
      title: "Corporate Development<br>and Strategy",
      alt: "Irina Baramova",
    },
    {
      text: "Viscadia has been a long-term strategic partner to Milestone on the forecasting front. In addition to their responsiveness and innovative modeling techniques, they have deep therapeutic expertise which enables us to expand our own thinking and ultimately make more informed decisions.",
      image: "./whoweserve/Lorenz-Web-1.webp",
      name: "Lorenz Muller",
      title: "Chief Commercial Officer<br>Milestone Pharmaceuticals",
      alt: "Lorenz Muller",
    },
    {
      text: '"Our forecast was accurate... that was a critical piece of allowing us to complete a successful and valuable acquisition."',
      image: "./whoweserve/Josh-Franklin-1.webp",
      name: "Josh Franklin",
      title: "President<br>Pharmacosmos Therapeutics, Inc.",
      alt: "Josh Franklin",
      videoLink: "https://www.youtube.com/watch?v=q-GmpC-7Ds0",
    },
  ];

  return (
    <div className="font-arial">
      <SectionOne />
      {/* Top Section */}
      <div className="bg-[#F1F1F1] sm:pt-2 sm:pb-0 pt-2 pb-2 sm:px-0 px-5 sm:h-[320px] flex justify-center items-center">
        <div className="md:max-w-6xl md:px-0 px-0 mx-auto md:flex my-7 sm:my-18 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-white p-0 text-center">
              <h2 className="text-xl sm:leading-[32px] text-[#BD302B]   lg:w-[86%] 2xl:w-[100%] sm:text-2xl md:text-[30px]  font-light  mb-4 text-start">
                We work with large and mid-sized pharmaceutical and
                biotechnology companies as well as emerging specialty firms.
              </h2>
            </div>

            <div className="text-white  p-0 text-center">
              <p className="text-base font-light md:text-md text-start text-[#63666A]">
                Our team can also support financial and investment firms,
                including private equity and venture capital, as they build
                portfolios in the pharmaceutical and biotechnology sectors.
              </p>

              <p className="text-base font-light md:text-md text-start text-[#63666A] mt-4">
                Our experienced principals and consultants can support
                decision-makers across all levels of your organization,
                including Sales and Marketing, Decision Sciences, Finance,
                Corporate Development, and C-Suite executives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Forecasting Solutions, Therapeutic Areas, Who We Serve */}
      <div className="max-w-[800px] xl:max-w-6xl mx-auto sm:px-6 mt-6 sm:mt-20 lg:px-0 pb-6 sm:pb-15 container">
        <section className="bg-white">
          <h2 className="text-center text-black  text-2xl sm:text-[38px] font-light mb-10">
            Select Clients
          </h2>
          <div className="space-y-2">
            {clients.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-row flex-wrap sm:px-0 px-5 justify-center  sm:justify-between items-center space-y-3 sm:space-y-5 gap-2 sm:gap-10  py-2.5"
              >
                {row.map((client, index) => (
                  <div
                    key={index}
                    className="w-[48%] sm:w-auto max-w-[45%] sm:max-w-none flex-shrink flex-grow-0"
                  >
                    <img
                      src={client.src}
                      alt={client.alt}
                      title={client.title}
                      className="w-full max-w-[220px] h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

       <div className="mb-2 md:mb-0 mt-5 md:mt-10 sm:pt-4 sm:px-0 px-5">
            <div className="container max-w-6xl px-0 mx-auto items-center justify-center">
              <Swiper
                // modules={[Pagination, Autoplay]}
                // spaceBetween={30}
                // slidesPerView={1}
                // pagination={{ clickable: true, el: ".section-four-pagination" }}
                // breakpoints={{
                //   640: { slidesPerView: 1 },
                //   768: { slidesPerView: 2 },
                //   1024: { slidesPerView: 3 },
                // }}
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                  clickable: true,
                  el: ".section-four-pagination"
                }}
                breakpoints={{
                  // Mobile: Show 1, Move 1
                  640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                  },
                  // Tablet: Show 2, Move 2 (Dot 1 = 1-2, Dot 2 = 3-4)
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                  },
                  // Desktop: Show 3, Move 3 (Dot 1 = 1-2-3, Dot 2 = 4-5-6)
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                  },
                }}
                className="pb-10">
                <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
                  <div>
                    <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
                    <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                      Across multiple projects, Viscadia has listened to our needs and
                      prioritized delivery of key insights that help us gain alignment
                      with the broader team. Their specialization in oncology
                      forecasting has made each forecast creation a breeze, and
                      expanding and updating our models has been seamless. In rapidly
                      changing therapeutic areas, Viscadia's forecasts have withstood
                      the test of time!
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3 w-full mb-3">
                    <img
                      className="h-[45px] w-[45px] rounded-full object-cover"
                      src="./homeAssets/sectionFourSlider/Sarah-Yue-.webp"
                      alt="Sarah Yue"
                    />
                    <div className="text-start w-full">
                      <h2 className="text-[14px] md:text-[16px] font-medium">
                        Sarah Yue
                      </h2>
                      <p className="text-[#4E4E4E] font-light text-[12px]">
                        Director, Oncology HCP Marketing, Pfizer
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
                </SwiperSlide>
      
                <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
                  <div>
                    <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
                    <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                      I have worked with Viscadia across many companies and clients. I
                      keep returning to them because they stay on point, grasp and
                      incorporate changes quickly, and their team can provide a
                      different view on market dynamics, rendering the overall output
                      much more robust. The realism in Viscadia’s approach made it
                      extremely easy to communicate to internal stakeholders and
                      ultimately get traction on my projects. I cannot wait to work with
                      them again.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3 w-full mb-3">
                    <img
                      className="h-[45px] w-[45px] rounded-full object-cover"
                      src="./homeAssets/sectionFourSlider/Irina-B.webp"
                      alt="Irina Baramova"
                    />
                    <div className="text-start w-full">
                      <h2 className="text-[14px] md:text-[16px] font-medium">
                        Irina Baramova
                      </h2>
                      <p className="text-[#4E4E4E] font-light text-[12px]">
                        Chief Business Officer, CleanSite Medical
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
                </SwiperSlide>
      
                <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
                  <div>
                    <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
                    <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                      Viscaida brought additional dimensions to the existing forecast, which aided buy-in from our stakeholders. I needed someone to work alongside me, and they were the ideal partner.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3 w-full mb-3">
                    <img
                      className="h-[45px] w-[45px] rounded-full object-cover"
                      src="./homeAssets/sectionFourSlider/Rob-Hernandez.webp"
                      alt="Rob Hernandez"
                    />
                    <div className="text-start w-full">
                      <h2 className="text-[14px] md:text-[16px] font-medium">
                        Rob Hernandez
                      </h2>
                      <p className="text-[#4E4E4E] font-light text-[12px]">
                        Senior Director, Forecasting & Financial Planning, Daiichi Sankyo, Inc.
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
                </SwiperSlide>
      
                <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
                  <div>
                    <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
                    <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                      Viscadia has been a long-term strategic partner to Milestone on
                      the forecasting front. In addition to their responsiveness and
                      innovative modeling techniques, they have deep therapeutic
                      expertise which enables us to expand our own thinking and
                      ultimately make more informed decisions.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3 w-full mb-3">
                    <img
                      className="h-[45px] w-[45px] rounded-full object-cover"
                      src="./homeAssets/sectionFourSlider/Lorenz-Web.webp"
                      alt="Lorenz Muller"
                    />
                    <div className="text-start w-full">
                      <h2 className="text-[14px] md:text-[16px] font-medium">
                        Lorenz Muller
                      </h2>
                      <p className="text-[#4E4E4E] font-light text-[12px]">
                        Chief Commercial Officer, Milestones Pharmaceuticals, Inc.
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
                </SwiperSlide>
      
                <SwiperSlide className="relative min-h-[435px] lg:min-h-[460px] p-5 w-full bg-[#FAFAFA] dflex flex-col gap-4 justify-between items-center">
                  <div>
                    <img src="./homeAssets/quote.png" className="w-8 mb-4 mt-1" />
                    <p className="text-[14px] md:text-[16px] font-light text-black leading-[22px] md:leading-6 text-start">
                      Our forecast was accurate... that was a critical piece of allowing
                      us to complete a successful and valuable acquisition.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3 w-full mb-3">
                    <img
                      className="h-[45px] w-[45px] rounded-full object-cover"
                      src="./homeAssets/sectionFourSlider/Josh-Franklin.webp"
                      alt="Josh Franklin"
                    />
                    <div className="text-start w-full">
                      <h2 className="text-[14px] md:text-[16px] font-medium">
                        Josh Franklin
                      </h2>
                      <p className="text-[#4E4E4E] font-light text-[12px]">
                        President, Pharmacosmos Therapeutics Inc.
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#BD302B]" />
                </SwiperSlide>
      
              </Swiper>
            </div>
            <div className="section-four-pagination"></div>
      
            <style jsx>{`
              .section-four-pagination {
                position: relative !important;
                margin-top: 30px !important;
                margin-bottom: 30px !important;
                display: flex !important;
                justify-content: center !important;
                gap: 6px !important;
              }
      
              .section-four-pagination .swiper-pagination-bullet {
                background: #333 !important;
                opacity: 0.7 !important;
                height: 10px !important;
                width: 10px !important;
              }
      
              /* Mobile fix – dots aur arrows overlap na karein */
              @media (max-width: 640px) {
                .section-four-pagination {
                  margin-top: 30px !important;
                }
              }
            `}</style>
          </div>

      {/* <div className="bg-[#F1F1F1] sm:h-[550px]  py-5 flex justify-center items-center">
        <section className="max-w-[1460px] analytical mt-4 mx-auto px-4 sm:px-6 2xl:px-0 lg:px-0  overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={8}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet swiper-pagination-bullet",
              bulletActiveClass:
                "custom-bullet-active swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 15000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            loop={true}
            speed={500}
            className="w-full [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!top-1"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col items-center text-center w-full px-4 2xl:px-0">
                  <div
                    className="text-[#BD302B] italic text-[24px] sm:text-[24px] font-light mb-4"
                    style={{ lineHeight: "28px" }}
                    dangerouslySetInnerHTML={{ __html: testimonial.text }}
                  />
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-[100px] h-[100px] mt-4 sm:w-[150px] sm:h-[150px] object-cover rounded-full mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-col mt-3 items-center">
                    <span className="text-black  font-['Open_Sans'] sm:text-[26px] font-semibold">
                      {testimonial.name}
                    </span>
                    <span
                      className="text-black text-sm sm:text-lg font-light"
                      dangerouslySetInnerHTML={{ __html: testimonial.title }}
                    />
                    {testimonial.videoLink && (
                      <a
                        href={testimonial.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 mainBg text-[#163D66] text-sm font-light uppercase border  px-4 py-2 hover:bg-[#163D66] hover:text-white transition"
                      >
                        Watch the Video
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      <style jsx>{`
        .custom-bullet-active {
          background-color: gray !important;
        }
      `}</style> */}
    </div>
  );
};

export default expertise;
