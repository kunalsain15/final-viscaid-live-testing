// "use client";

// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function PressReleseCard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.viscadia.com/api/v1/article?limit=1000"
//         );
//         const apiData = Array.isArray(res.data.data) ? res.data.data : [];
//         setData(apiData);
//       } catch (err) {
//         console.error("API Error:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   const makeSlug = (str) =>
//     str
//       ?.toLowerCase()
//       .replace(/[^\w\s-]/g, "")
//       .trim()
//       .replace(/\s+/g, "-");

//   return (
//     <div className="grid grid-cols-1 sm:px-0 px-3 sm:grid-cols-2 lg:grid-cols-3 py-10 sm:py-14 gap-8 w-full md:max-w-[81%] philosphy mx-auto 2xl:max-w-[1330px]">
//       {data?.map((item, indx) => {
//         let sectionThree = {};
//         try {
//           sectionThree = JSON.parse(item?.section_three_details || "{}");
//         } catch (e) {
//           console.error("Invalid JSON in section_three_details:", e);
//         }

//         return (
//           <Link href={`/${item?.slug}`} key={indx} className="xl:min-h-[500px]">
//             <div className="h-[260px] relative">
//               <div className="h-full w-full absolute top-0 hover:top-[-10px] transition-all duration-500 left-0">
//                 <img
//                   className="h-full w-full sm:object-fill 2xl:object-cover rounded-md"
//                   src={sectionThree?.img || item?.thumbnail}
//                   alt={
//                     sectionThree?.imageName ||
//                     item?.title ||
//                     "Press release image"
//                   }
//                 />
//               </div>
//             </div>

//             <div className="pt-0">
//               <p className="text-[14px] text-stone-700 mt-3">NEWS</p>

//               <h3 className="text-[23px] leading-[30px] font-light">
//                 {item?.title || item?.section_three_details}
//               </h3>
//             </div>
//             <p className="text-[14px] text-[#63666A] font-light mt-5">
//               {item?.section_two_details &&
//                 JSON.parse(item.section_two_details)[0]?.texts[0]}
//             </p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PressReleseCard() {
  const [data, setData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // mobile view toggle

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.viscadia.com/api/v1/article?limit=1000"
        );
        const apiData = Array.isArray(res.data.data) ? res.data.data : [];
        setData(apiData);
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchData();
  }, []);

  const makeSlug = (str) =>
    str
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:px-0 px-5 sm:grid-cols-2 lg:grid-cols-3 py-10 sm:py-19 gap-8 xl:gap-10 w-full md:max-w-6xl 2xl:gap-24 mx-auto">
      {data?.map((item, indx) => {
        let sectionThree = {};
        try {
          sectionThree = JSON.parse(item?.section_three_details || "{}");
        } catch (e) {
          console.error("Invalid JSON in section_three_details:", e);
        }

        return (
          <Link href={`/${item?.slug}`} key={indx} className="xl:min-h-[500px]">
            <div className="h-[260px] relative">
              <div className="h-full w-full absolute top-0 hover:top-[-10px] transition-all duration-500 left-0">
                <img
                  className="h-full w-full sm:object-fill 2xl:object-cover rounded-md"
                  src={sectionThree?.img || item?.thumbnail}
                  alt={
                    sectionThree?.imageName ||
                    item?.title ||
                    "Press release image"
                  }
                />
              </div>
            </div>

            <div className="pt-0">
              <p className="text-[14px] text-stone-700 mt-4">NEWS</p>

              <h3 className="text-[23px] leading-[30px] font-light">
                {item?.title || item?.section_three_details}
              </h3>
            </div>

            <p
              className={`text-[14px] text-[#63666A] font-light mt-2 
                sm:line-clamp-none 
                ${expandedIndex === indx ? "line-clamp-none" : "line-clamp-2"}
              `}
            >
              {item?.section_two_details &&
                JSON.parse(item.section_two_details)[0]?.texts[0]}
            </p>

            <div
              className="sm:hidden text-[#BD2F2C] leading-2 underline font-normal text-[14px] mt-1 cursor-pointer flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                toggleExpand(indx);
              }}
            >
              <span className="sm:mt-0 mt-1">
                {expandedIndex === indx ? "View Less" : "View More"}
              </span>

              {expandedIndex === indx ? (
                <img
                  src="/viscadiaVolunteersAssets/sliderimgsone/lower.svg"
                  alt="Less arrow"
                  className="w-3 sm:mt-0 mt-1 h-3"
                />
              ) : (
                <img
                  src="/viscadiaVolunteersAssets/sliderimgsone/upper.svg"
                  alt="More arrow"
                  className="w-3 sm:mt-0 mt-1 h-3"
                />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
