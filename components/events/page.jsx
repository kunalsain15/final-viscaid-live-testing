// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// const page = () => {
//   const [showevents, setShowEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const showdata = async () => {
//       try {
//         const showAllevents = await axios.get(
//           "https://api.viscadia.com/api/v1/events?limit=1000"
//         );
//         setShowEvents(showAllevents?.data?.data || []);
//         console.log(showAllevents?.data?.data || []);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     showdata();
//   }, []);

//   return (
//     <>
//       <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 relative top-[45px] md:top-[65] text-white">
//         <img src="./homeAssets/corevalue_homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
//         <img src="./homeAssets/mobile_homebanner.png" className="h-[100%] w-[100%] block md:hidden" />
//         <div className="h-full w-full absolute top-[-50] md:top-[0] px-5 md:right-125 z-10 flex justify-center items-start sm:items-center flex-col">
//           <div className="leading-snug md:leading-tight about_tab_align">
//             <h2 className="text-[24px] sm:ml-0 ml-2 md:text-[32px] text-white/90 font-extralight leading-14">
//               Events
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="sm:mt-24 mt-18 mb-6 sm:mb-24">
//         {loading ? (
//           <div className="flex justify-center items-center col-span-full py-20">
//             <img
//               src="/__Iphone-spinner-1.gif"
//               alt="Loading..."
//               className="w-16 h-16"
//             />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 px-1 eventshomepage gap-y-8 sm:gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6 2xl:max-w-[1430px] max-w-[90%] sm:max-w-[81%] mx-auto">
//             {showevents.map((event) => (
//               <div
//                 key={`dynamic-${event.slug}`}
//                 className="flex flex-col space-y-3"
//               >
//                 <Link href={`/events/${event.slug}`}>
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-[210px] sm:h-[400px] max-h-[210px] object-cover  transition-transform duration-300 ease-in-out hover:scale-105"
//                   />
//                 </Link>
//                 <h2 className="text-xl sm:text-[28px] lg:text-[34px] font-light leading-none pt-1 line-clamp-2">
//                   {event.title}
//                 </h2>
//                 <p className="text-black font-light text-base leading-relaxed flex-grow">
//                   {(() => {
//                     const text = event.sub_heading || event.description || "";
//                     const words = text.split(" ");
//                     return words.length > 59
//                       ? words.slice(0, 59).join(" ") + "..."
//                       : text;
//                   })()}
//                 </p>

//                 <Link href={`/events/${event.slug}`}>
//                   <button
//                     className="frm_button_submit mt-2 cursor-pointer bg-[#BD302B] hover:bg-[#8b0e0a] text-white font-sans font-light text-[14px] px-[22px] py-[7px] frm_final_submit w-fit"
//                     type="button"
//                   >
//                     VIEW EVENT
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default page;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
const page = () => {
  const [showevents, setShowEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const showdata = async () => {
      try {
        const showAllevents = await axios.get(
          "https://api.viscadia.com/api/v1/events?limit=1000"
        );
        setShowEvents(showAllevents?.data?.data || []);
        console.log(showAllevents?.data?.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    showdata();
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
            <div className="leading-[35px] md:leading-tight about_tab_align">
              <h2 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
                Events
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-24 mt-18 mb-6 sm:mb-24">
        {loading ? (
          <div className="flex justify-center items-center col-span-full py-20">
            <img
              src="/__Iphone-spinner-1.gif"
              alt="Loading..."
              className="w-16 h-16"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:px-0 px-5 about_tab_align eventshomepage gap-y-8 sm:gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:max-w-6xl mx-auto">
            {showevents?.map((event) => (
              <div
                key={`dynamic-${event.slug}`}
                className="flex flex-col space-y-3"
              >
                <Link href={`/events/${event.slug}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[210px] sm:h-[400px] max-h-[210px] object-cover  transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
                <h2 className="text-xl sm:text-[28px] lg:text-[34px] font-light leading-none pt-1 line-clamp-2">
                  {event.title}
                </h2>
                <p className="text-black font-light text-base leading-relaxed flex-grow">
                  {(() => {
                    const text = event.sub_heading || event.description || "";
                    const words = text.split(" ");
                    return words.length > 59
                      ? words.slice(0, 59).join(" ") + "..."
                      : text;
                  })()}
                </p>

                <Link href={`/events/${event.slug}`}>
                  <button
                    className="frm_button_submit mt-2 cursor-pointer bg-[#BD302B] hover:bg-[#8b0e0a] text-white font-sans font-light text-[14px] px-[22px] py-[7px] frm_final_submit w-fit"
                    type="button"
                  >
                    VIEW EVENT
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;