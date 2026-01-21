import React from "react";
import Link from "next/link";

const SectionOne = () => {
  return (
    <div className="h-[250px] tabalignment md:h-[500px] w-full relative text-white">
    {/* <div className="border max-w-6xl h-[250px] md:h-[500px] w-full relative text-white flex justify-center items-center m-auto"> */}
      <img src="./homeAssets/homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
      <img src="./homeAssets/mobilehomebanner.png" className="h-[100%] w-[100%] block md:hidden" />
      <div className="h-full w-full absolute top-[0] md:top-[-15] left-0 z-10 flex justify-center items-center flex-col">
        <div className="leading-snug md:leading-tight">
          <h2 className="fade-in-1 align_tablests_header text-[20px] md:text-[60px] sm:px-0 px-3 text-center font-light">
            How do you achieve clarity and
          </h2>
          <h3 className="fade-in-1 align_tablests_header font-light text-center text-[20px] md:text-[60px]">
            confidence through forecasting?
          </h3>
        </div>
        <Link href="https://viscaida-live-test.vercel.app/contact-us">
          <p className="fade-in-3 text-[14px] align_tablests2_para md:text-[32px] pt-5 md:pt-10 font-normal relative inline-block after:content-[''] after:absolute after:left-1/2 md:after:-bottom-2 after:-bottom-0.5 md:after:h-[2px] after:h-[1px] after:w-full after:bg-white after:-translate-x-1/2 after:origin-center md:after:scale-x-50 md:hover:after:scale-x-100 md:after:transition-transform md:after:duration-500 after:ease-out">
            Call the Specialists
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;


// import React from "react";
// import Link from "next/link";

// const SectionOne = () => {
//   return (
//     <div className="">
//       <div className="border max-w-6xl h-[250px] md:h-[500px] w-full relative text-white flex justify-center items-center m-auto">
//         {/* kunl,; */}
//         <img src="./homeAssets/homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
//         {/* </div> */}
//         {/* <div className="h-[250px] md:h-[500px] w-full relative text-white"> */}
//         {/* <div className="border max-w-6xl flex justify-center items-center">
//         kunl,;
//       <img src="./homeAssets/homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
//       </div> */}
//         <img src="./homeAssets/mobilehomebanner.png" className="h-[100%] w-[100%] block md:hidden" />
//         <div className="h-full w-full absolute top-[0] md:top-[-15] left-0 z-10 flex justify-center items-center flex-col">
//           <div className="leading-snug md:leading-tight">
//             <h2 className="fade-in-1 text-[20px] md:text-[60px] sm:px-0 px-3 text-center font-light">
//               How do you achieve clarity and
//             </h2>
//             <h3 className="fade-in-1 font-light text-center text-[20px] md:text-[60px]">
//               confidence through forecasting?
//             </h3>
//           </div>
//           <Link href="https://viscaida-live-test.vercel.app/contact-us">
//             <p className="fade-in-3 text-[14px] md:text-[32px] pt-5 md:pt-10 font-normal relative inline-block after:content-[''] after:absolute after:left-1/2 md:after:-bottom-2 after:-bottom-0.5 md:after:h-[2px] after:h-[1px] after:w-full after:bg-white after:-translate-x-1/2 after:origin-center md:after:scale-x-50 md:hover:after:scale-x-100 md:after:transition-transform md:after:duration-500 after:ease-out">
//               Call the Specialists
//             </p>
//           </Link>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default SectionOne;

