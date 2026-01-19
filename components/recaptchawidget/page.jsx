// "use client";
// import React, { useState, useRef } from "react";

// export default function RecaptchaWidget() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsExpanded(false);
//     }, 300); // thoda delay for smooth collapse
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       {/* reCAPTCHA Widget - Fixed to bottom right */}
//       <div className="fixed bottom-2 right-0 z-50">
//         <div
//           className={`bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer overflow-hidden transition-all duration-700 ease-in-out`}
//           style={{
//             width: isExpanded ? "275px" : "64px",
//             height: "64px",
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="relative w-full h-full flex">
//             {/* Left section (logo) */}
//             <div className="p-1 flex items-center justify-center w-16 shrink-0">
//               <img src="/casestudies/capcha.png" alt="captcha" />
//             </div>

//             {/* Right section (text) */}
//             <div
//               className={`bg-blue-500 flex flex-col justify-center px-4 py-2 overflow-hidden transition-all duration-700 ease-in-out`}
//               style={{
//                 width: isExpanded ? "100%" : "0px",
//                 opacity: isExpanded ? 1 : 0,
//               }}
//             >
//               <div className="text-white font-normal text-sm mb-1 whitespace-nowrap">
//                 protected by reCAPTCHA
//               </div>
//               <div className="flex items-center space-x-2 whitespace-nowrap">
//                 <span className="text-white hover:underline cursor-pointer text-[11px]">
//                   Privacy
//                 </span>
//                 <span className="text-white text-xs">-</span>
//                 <span className="text-white hover:underline cursor-pointer text-[11px]">
//                   Terms
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Collapsed state (only logo) */}
//           {!isExpanded && (
//             <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
//               <img src="/casestudies/privacy-terms.png" alt="privacy" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RecaptchaWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      {/* reCAPTCHA Widget - Fixed to bottom right */}
      <div className="fixed bottom-2 right-0 z-50">
        <div
          className={`bg-white border border-gray-300 shadow-lg  cursor-pointer overflow-hidden transition-all duration-700 ease-in-out`}
          style={{
            width: isExpanded ? "275px" : "64px",
            height: "64px",
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="relative w-full h-full flex">
            {/* Left section (logo) */}
            <div className="p-1 flex items-center justify-center w-16 shrink-0">
              <img src="/casestudies/capcha.png" alt="captcha" />
            </div>

            {/* Right section (text) */}
            <div
              className={`bg-blue-500 flex flex-col justify-center px-4 py-2 overflow-hidden transition-all duration-700 ease-in-out`}
              style={{
                width: isExpanded ? "100%" : "0px",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <div className="text-white font-normal text-sm mb-1 whitespace-nowrap">
                protected by reCAPTCHA
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <Link
                  href="https://policies.google.com/privacy?hl=en"
                  className="text-white hover:underline cursor-pointer text-[11px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </Link>
                <span className="text-white text-xs">-</span>
                <Link
                  href="https://policies.google.com/terms?hl=en"
                  className="text-white hover:underline cursor-pointer text-[11px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
