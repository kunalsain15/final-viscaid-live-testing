// "use client";
// import React, { useState, useEffect } from "react";
// import Career from "@/components/career/career";
// import Link from "next/link";
// import axios from "axios";

// const page = () => {
//   const [joblist, setJobList] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.viscadia.com/api/v1/career?limit=1000`
//         );
//         setJobList(response.data.data);
//         console.log("Fetched jobs:", response.data.data);
//       } catch (err) {
//         console.log("Error fetching job list:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="sm:h-[480px] h-[390px] w-full bg-black relative text-white">
//           <img
//             className="h-full bg-cover bg-center w-full opacity-40"
//             src="/lifeAtViscadia/vis_hero_interior_JOIN.gif"
//           />
//           <div className="h-full w-full absolute top-0 left-0 z-10">
//             <div className="2xl:max-w-[1350px]  banner1295demandstudy  md:max-w-[80%] flex justify-end  lg:h-[69%]  2xl:h-[75%] flex-col mx-auto">
//               <h2 className="text-[24px] md:text-[32px] font-normal leading-14  ">
//                 Careers
//               </h2>
//               <h3 className="text-[29px] md:text-[40px] lg:text-[40px] font-light md:max-w-[99%] sm:leading-12 ">
//                 At Viscadia, our people are our brand
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="absolute  sm:block hidden top-22 right-16">
//           <img
//             src="/careers/GPTW-25-1.png"
//             alt="Great Place to Work Certified"
//             className="w-24 h-auto sm:w-32"
//           />
//         </div>
//       </div>
//       <div className="bg-[#DfDfDf]">
//         <div className="md:max-w-[81%] 2xl:max-w-[1350px] w-full mx-auto px-4 sm:px-0">
//           <div className="grid md:grid-cols-2 grid-cols-1 gap-0 sm:gap-14 items-center sm:py-14  mx-auto ">
//             <div className="space-y-6 md:pb-0 pb-7 order-2 lg:order-1">
//               <h2 className="text-2xl lg:text-[48px] text-black font-light leading-tight">
//                 Who We Are
//               </h2>
//               <div className="space-y-4">
//                 <p className="text-[#4E4E4E] text-[20px] font-light leading-[28px]">
//                   At Viscadia, we are passionate about delivering excellence at
//                   whatever we do. We are resolute to work through challenges and
//                   create opportunities to learn and grow. As visionary leaders,
//                   we celebrate our past, embrace present, and are fueled by
//                   future.
//                 </p>
//               </div>
//             </div>
//             <div className="order-1 lg:order-2">
//               <Career
//                 className="w-full h-full rounded-lg"
//                 slides={[
//                   { img: "/careers/HRC09366.webp" },
//                   { img: "/careers/HRC09187.webp" },
//                   { img: "/careers/HRC09366.webp" },
//                 ]}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="bg-white">
//           <div className="md:max-w-[81%] 2xl:max-w-[1350px] w-full mx-auto px-4 sm:px-0">
//             <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center mx-auto">
//               <div className="flex text-left justify-center mb-0 xl:mb-30">
//                 <Career
//                   className="w-full h-full  rounded-lg"
//                   reverse={true}
//                   slides={[
//                     { img: "/careers/Sathish_1800x.webp" },
//                     { img: "/careers/HRC09260.webp" },
//                     { img: "/careers/HRC09011.webp" },
//                   ]}
//                 />
//               </div>

//               <div className="space-y-3 md:pb-0 pb-7 px-6 sm:px-0 xl:pl-14 text-left">
//                 <h2 className="text-2xl lg:text-[48px] text-black font-light">
//                   What Drives Us
//                 </h2>

//                 <p className="text-[#63666A] text-base font-light">
//                   At Viscadia, our effectiveness is driven by a clear vision,
//                   results-oriented management, and highly self-driven employees.
//                   We are committed to building long-lasting relationships with
//                   our clients by delivering unique solutions to their most
//                   complex challenges. With our worldwide presence, Viscadia is
//                   adept at combining state-of-the-art forecasting advances with
//                   deep market insights to produce consistently superior
//                   outcomes.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#EEEEEE] pt-10 xl:px-0 px-3 sm:px-0 pb-7">
//             <div className=" md:max-w-[81%] 2xl:max-w-[1350px]  w-full mx-auto">
//               <h2 className="text-[32px] text-black font-light">
//                 Career Opportunities
//               </h2>
//               <p className="text-[#63666A] text-[18px] font-light">
//                 We are looking for smart team workers with go-getter attitude to
//                 work in an intellectually stimulating <br /> ecosystem. Up for a
//                 challenge?
//               </p>
//             </div>

//             <div className="bg-[#EEEEEE]  md:max-w-[81%] 2xl:max-w-[1350px] w-full  mx-auto py-7">
//               {loading ? (
//                 <div className="flex justify-center items-center  h-[300px]">
//                   <img
//                     src="/careers/1488_careeare.gif"
//                     alt="Loading..."
//                     className="w-16 h-16 bg-transparent"
//                   />
//                 </div>
//               ) : joblist && joblist.length > 0 ? (
//                 <div className="mt-8 space-y-4">
//                   {joblist.map((job) => (
//                     <div
//                       key={job.id}
//                       className="flex items-center justify-between border-b pb-6 border-gray-300"
//                     >
//                       <div className="sm:flex">
//                         <div className="text-[#BD302B] text-[14px] sm:text-[18px] font-light">
//                           {job.sub_heading},
//                         </div>
//                         <span className="text-[#BD302B] ml-1 text-[14px] sm:text-[18px] font-light">
//                           {job.country}
//                         </span>
//                       </div>

//                       <Link href={`/job/${job.slug}`}>
//                         <button className="bg-[#BD302B] hover:bg-red-800 cursor-pointer text-white text-[10px] sm:text-[12px] font-light px-7 py-2 sm:py-[10px]">
//                           APPLY NOW
//                         </button>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-600 mt-10">
//                   No job openings available at the moment.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import Career from "@/components/career/career";
import Link from "next/link";
import axios from "axios";

const page = () => {
  const [joblist, setJobList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://api.viscadia.com/api/v1/career?limit=1000`
        );
        setJobList(response.data.data);
        console.log("Fetched jobs:", response.data.data);
      } catch (err) {
        console.log("Error fetching job list:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 flex justify-start items-center relative top-[45px] md:top-[65px] text-white">
        <img
          src="../homeAssets/corevalue_homebanner.png"
          className="h-full w-full hidden md:block"
          alt="Banner"
        />
        <img
          src="../homeAssets/mobile_homebanner.png"
          className="h-full w-full block md:hidden"
          alt="Mobile Banner"
        />
        <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
          <div className="w-full max-w-6xl mx-auto md:px-0 px-5 flex justify-start items-center">
            <div className="leading-[35px] md:leading-tight">
              <h2 className="text-[24px] md:text-[32px] text-white/90 font-extralight leading-14">
                Careers
              </h2>
              <h3 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                At Viscadia, our people are our brands
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] ">
        <div className="md:max-w-6xl w-full mx-auto md:px-0 px-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-0 sm:gap-14 items-center sm:py-14 mx-auto">
            <div className="space-y-6 sm:mt-0 mt-6 md:pb-0 pb-7 order-2 lg:order-1">
              <h2 className="text-2xl lg:text-[32px] text-black font-light leading-tight">
                Who We Are
              </h2>
              <div className="space-y-4">
                <p className="text-[#4E4E4E] text-[20px] font-light leading-[28px]">
                  At Viscadia, we are passionate about delivering excellence at
                  whatever we do.
                  <br />
                  <br className="hidden sm:block" />
                  We are resolute to work through challenges and create
                  opportunities to learn and grow. As visionary leaders, we
                  celebrate our past, embrace present, and are fueled by future.
                </p>
              </div>
            </div>
            <div className="order-1 sm:mt-0 mt-6 lg:order-2">
              <img src="/homeAssets/HRC09366222.png" />
              {/* <Career
                className="w-full h-full "
                slides={[
                  { img: "/careers/HRC09366.webp" },
                  { img: "/careers/HRC09187.webp" },
                  { img: "/careers/HRC09366.webp" },
                  { img: "/homeAssets/HRC09366222.png" },
                ]}
              /> */}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="md:max-w-6xl w-full mx-auto md:px-0 px-0">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 sm:gap-14 items-center py-6 sm:py-14 md:max-w-6xl mx-auto md:px-0 px-5">
              <div className="order-1 lg:order-1">
                <img src="/homeAssets/HRC09011222bjhyv22.png" />
                {/* <Career
                  className="w-full h-full "
                  slides={[
                    { img: "/careers/Sathish_1800x.webp" },
                    { img: "/careers/HRC09260.webp" },
                    { img: "/careers/HRC09011.webp" },
                    { img: "/homeAssets/HRC09011222bjhyv22.png" },
                  ]}
                /> */}
              </div>
              <div className="space-y-6 sm:mt-0 mt-6 md:pb-0 pb-7 order-2 lg:order-1">
                <h2 className="text-2xl lg:text-[32px] text-black font-light leading-tight">
                  What Drives Us
                </h2>
                <div className="space-y-4">
                  <p className="text-[#4E4E4E] text-[20px] font-light leading-[28px]">
                    At Viscadia, our effectiveness is driven by a clear vision,
                    results-oriented management, and highly self-driven
                    employees. We are committed to building long-lasting
                    relationships with our clients by delivering unique
                    solutions to their most complex challenges. With our
                    worldwide presence, Viscadia is adept at combining
                    state-of-the-art forecasting advances with deep market
                    insights to produce consistently superior outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#EEEEEE] pt-5 sm:pt-18 sm:pb-18 xl:px-8 px-5 sm:px-0 pb-5">
            <div className=" md:max-w-6xl w-full mx-auto">
              <h2 className="text-[24px] sm:text-[32px] pb-3 text-black font-light">
                Career Opportunities
              </h2>
              <p className="text-[#4E4E4E] text-[20px] font-light">
                We are looking for smart team workers with go-getter attitude to
                work in an intellectually stimulating{" "}
                <br className="hidden sm:block" /> ecosystem. Up for a
                challenge?
              </p>
            </div>

            <div className="bg-[#EEEEEE]  md:max-w-6xl w-full  mx-auto py-5 sm:py-0">
              {loading ? (
                <div className="flex justify-center items-center  h-[300px]">
                  <img
                    src="/careers/1488_careeare.gif"
                    alt="Loading..."
                    className="w-16 h-16 bg-transparent"
                  />
                </div>
              ) : joblist && joblist.length > 0 ? (
                <div className="mt-8 space-y-4">
                  {joblist.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between border-b-2 pb-4 border-gray-300"
                    >
                      <div className="sm:flex">
                        <div className="text-[#BD2F2C] text-[14px] sm:text-[20px] font-light">
                          {job.sub_heading},
                        </div>
                        <span className="text-[#BD2F2C] ml-0 text-[14px] sm:text-[20px] font-light">
                          {job.country}
                        </span>
                      </div>

                      <Link href={`/job/${job.slug}`}>
                        <button className="text-white/80 mt-3 md:mt-0 bg-[#bd302b] font-normal text-[16px] md:text-[14px] py-2 w-[130px] h-[48px] md:h-[40px] flex justify-center items-center cursor-pointer">
                          APPLY NOW
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 mt-10">
                  No job openings available at the moment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
