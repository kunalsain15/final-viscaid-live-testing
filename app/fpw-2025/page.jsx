// "use client";
// import React, { useRef } from "react";
// import Link from "next/link";
// import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
// import CommonForm from "@/components/CommonFormEvents/CommonForm";

// const events = [
//   {
//     id: 2,
//     title: "Fierce Pharma Week",
//     slug: "fpw-2025",
//     bgimagetwo: "/events/WHB_FPW2025.png",
//     logosize: "/events/Color-Loged_FPW-1536x664.png",
//     bookameeting: "/events/Badge_FPW2025.png",
//     date: "September 8-11, 2025",
//     location: "Pennsylvania Convention Center, Philadelphia, PA",
//     about: {
//       title: "About Conference",
//       description: `Fierce Pharma Week is where the most influential minds in life sciences come together to shape the future of pharma. Held at the Pennsylvania Convention Center in Philadelphia, the event unites experts in marketing, commercialization, medical affairs, and communications to exchange insights, explore emerging trends, and build connections that advance the industry. Through thought-provoking sessions, collaborative discussions, and networking opportunities, Fierce Pharma Week offers a powerful platform for driving innovation and improving patient outcomes.
//   `,
//       image: "/events/BIO_About.png",
//     },
//     speaker: {
//       speaker: "Speaker",
//       imgone: "/events/AR_DP.png",
//       headerone: "Anindya Roy",
//       headertwo: "Principal, Viscadia",
//       headerthree:
//         "Topic: Navigating the Niche – Forecasting in Ultra-Rare Diseases and Cell & Gene Therapies",
//       headerfour: "Date: 9 September, 2025",
//       headerfive: "Time: 11:45 AM (EST)",
//       button: "Agenda",
//       headersix:
//         "This session provides commercial leaders and strategists practical insights to navigate these challenges. We’ll discuss innovative methodologies for patient identification, capacity-constrained launches, and value-based forecasting. Let us transform our forecast into a strategic compass, driving smarter decisions and ensuring life-changing innovations reach every patient.",
//       linkone: "/leadership-anindya-roy",
//       buttonLink:
//         "https://www.fiercepharmaweek.com/fiercepharmaweekcom/full-agenda-fierce-pharma-week",
//     },

//     forecasting: [
//       {
//         id: 1,
//         image: "/casestudies/SKK-LinkedIn-1-1.webp",
//         name: "Satish K. Kauta",
//         role: "Founder & CEO",
//         description:
//           "Satish guides Viscadia’s teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
//         link: "/leadership-satish-k-kauta",
//       },
//       {
//         id: 2,
//         image: "/casestudies/anindya.webp",
//         name: "Anindya Roy",
//         role: "Principal",
//         description:
//           "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
//         link: "/leadership-anindya-roy",
//       },
//       {
//         id: 3,
//         image: "/casestudies/Jim-Martin-with-Viscadia-Background.png",
//         name: "Jim Martin",
//         role: "Head Of Client Development",
//         description:
//           "His career spans over 20 years of experience driving growth for strategic consulting firms operating in the biopharma and MedTech industries.",
//         link: "/leadership-jim-martin",
//       },
//     ],
//   },
// ];

// const page = () => {
//   const formRef = useRef(null);

//   const scrollToForm = () => {
//     formRef.current?.scrollIntoView({ behavior: "smooth" }); // smooth scroll
//   };

//   const slugify = (text) =>
//     text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w\-]+/g, "")
//       .replace(/\-\-+/g, "-");
//   return (
//     <div>
//       {events.map((event) => (
//         <div key={event.id}>
//           <div className="relative mt-20 w-full flex flex-col-reverse sm:flex-row">
//             <div className="relative  sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px]  xl:w-[69%] h-full sm:h-[420px]">
//               <div className="sm:absolute top-10 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
//                 <img
//                   src={event.logosize}
//                   alt="event logo"
//                   className="mb-4 mt-[25px] sm:mt-[40px] sm:px-0 px-3 w-full  sm:w-full h-full xl:w-[405px] bg-contain "
//                 />

//                 {/* Title */}
//                 <h1 className="text-[#133D66] text-[28px] font-light">
//                   {event.title}
//                 </h1>
//                 {event.titletwo && (
//                   <h2 className="text-[#133D66] text-[28px] font-light leading-none">
//                     {event.titletwo}
//                   </h2>
//                 )}

//                 {/* Date & Location */}
//                 <div className="xl:flex xl:space-y-0 space-y-2 items-center gap-6 mt-3 text-[#133D66] text-[14px] font-light whitespace-nowrap w-full overflow-x-auto">
//                   <span className="flex text-[14px] items-center gap-2">
//                     <FaCalendar className="text-[22px]" /> {event.date}
//                   </span>
//                   <span className="flex text-[14px] items-center gap-2">
//                     <FaMapMarkerAlt className="text-[22px]" /> {event.location}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Background Section */}
//             <div className="w-full ml-0 h-[200px] sm:h-[420px]">
//               <div className="w-full h-full">
//                 <img
//                   src={event.bgimagetwo}
//                   alt="Background Two"
//                   className="w-full h-[200px] sm:border-none border-2 border-gray-200 sm:h-full "
//                 />
//                 {event.bookameeting && (
//                   <img
//                     src={event.bookameeting}
//                     onClick={scrollToForm}
//                     alt="Book a Meeting"
//                     className="fixed top-20 sm:top-22  cursor-pointer right-5 sm:right-10 w-[100px] sm:w-[130px] h-auto z-10 "
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* About Section */}
//           {event.about && (
//             <div className="font-sans sm:mt-0 mt-8 text-[#2e2e2e]">
//               <img src="/BIO_About.png" className="w-full block sm:hidden" />
//               <section
//                 className="relative sm:min-h-[400px] h-[320px]  bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
//                 style={{ backgroundImage: `url(${event.about.image})` }}
//               >
//                 <div className="container mx-auto px-5 lg:px-8 py-10 sm:py-12 md:py-16">
//                   <div className="max-w-[570px] ml-auto text-left">
//                     <h2 className="text-white text-xl sm:text-[32px] font-light leading-tight">
//                       {event.about.title}
//                     </h2>
//                     <p className="mt-4 text-white font-light text-base leading-[1.1]">
//                       {event.about.description}
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}

//           {/* Speaker Section */}
//           {event.speaker && (
//             <div className="bg-white py-10  flex mx-auto flex-col max-w-[1100px] px-4 ">
//               {event.speaker.speaker && (
//                 <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
//                   {event.speaker.speaker}
//                 </h2>
//               )}

//               <div className="flex flex-col mx-auto md:flex-row items-center justify-center gap-8">
//                 {event.speaker.imgone && (
//                   <div className="flex gap-4">
//                     <Link href={event.speaker.linkone || "#"}>
//                       <img
//                         src={event.speaker.imgone}
//                         alt="Speaker 1"
//                         className="w-[195px] h-[185px]  rounded-full object-cover"
//                       />
//                     </Link>
//                   </div>
//                 )}

//                 <div className="max-w-md text-left">
//                   {event.speaker.headerone && (
//                     <h4 className="text-[#BD302B] hover:text-[#F4D35E] text-lg font-normal mb-1">
//                       {event.speaker.headerone}
//                     </h4>
//                   )}
//                   {event.speaker.headertwo && (
//                     <p className="text-black font-light text-[14px] mb-1">
//                       {event.speaker.headertwo}
//                     </p>
//                   )}
//                   {event.speaker.headerthree && (
//                     <p className="text-black font-light text-[14px] mb-1">
//                       {event.speaker.headerthree}
//                     </p>
//                   )}
//                   {event.speaker.headerfour && (
//                     <p className="text-black font-light text-[14px] mb-1">
//                       {event.speaker.headerfour}
//                     </p>
//                   )}
//                   {event.speaker.headerfive && (
//                     <p className="text-black font-light text-[14px] mb-3">
//                       {event.speaker.headerfive}
//                     </p>
//                   )}
//                   {event.speaker.button && event.speaker.buttonLink && (
//                     <a
//                       href={event.speaker.buttonLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block bg-[#BD302B] hover:bg-[#cf1e18] text-white text-base font-light py-2 px-6"
//                     >
//                       {event.speaker.button}
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {event.speaker.headersix && (
//                 <p className="mt-7 text-[#63666A] max-w-4xl text-[14px] text-left sm:text-center font-light mx-auto">
//                   {event.speaker.headersix}
//                 </p>
//               )}
//             </div>
//           )}

//           {/* Forecasting Specialists */}
//           {event.forecasting && event.forecasting.length > 0 && (
//             <>
//               <div className="forcastingspeacialist mt-4">
//                 <h1 className="text-black md:text-[38px] sm:px-0 px-2 text-[28px] text-center font-light">
//                   Our Forecasting Specialists at the Event
//                 </h1>
//               </div>
//               <div className="grid grid-cols-1 xl:p-0 p-4 sm:grid-cols-2 md:grid-cols-3 mt-[20px] sm:mb-[30px] mb-[20px] gap-10 max-w-[1100px] mx-auto">
//                 {event.forecasting.map((person) =>
//                   person.link ? (
//                     <Link key={person.id} href={person.link}>
//                       <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
//                         <div className="relative w-full h-[260px] group overflow-hidden">
//                           <img
//                             src={person.image}
//                             alt={person.name}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
//                             <p className="text-[14px] leading-4">
//                               {person.description}
//                             </p>
//                             {person.click && (
//                               <span className="mt-4 text-[14px]">
//                                 {person.click}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                         <div className="mt-2 text-center">
//                           <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
//                             {person.name}
//                           </h2>
//                           <p className="text-black text-[14px] px-1 font-light">
//                             {person.role}
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   ) : (
//                     <div
//                       key={person.id}
//                       className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-default"
//                     >
//                       <div className="relative w-full h-[260px] group overflow-hidden">
//                         <img
//                           src={person.image}
//                           alt={person.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="mt-2 text-center">
//                         <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
//                           {person.name}
//                         </h2>
//                         <p className="text-black text-[14px] px-1 font-light">
//                           {person.role}
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 )}

//                 {event.agendaforecasting?.map((item, index) => (
//                   <div
//                     key={index}
//                     className="col-span-full cursor-pointer flex justify-center"
//                   >
//                     <a href={item.agendaLink || "#"}>
//                       <button className="bg-[#BD302B] cursor-pointer font-light text-white px-6 py-2">
//                         {item.agenda}
//                       </button>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {/* Highlights Section */}
//           {event.HighlightsoftheEvent &&
//             event.HighlightsoftheEvent.length > 0 && (
//               <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
//                 <div className="text-center">
//                   {event.HighlightsoftheEvent.map((highlight, i) => (
//                     <div key={i}>
//                       {highlight.text && (
//                         <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
//                           {highlight.text}
//                         </h2>
//                       )}
//                       <div className="flex flex-col sm:flex-row justify-center gap-6">
//                         {highlight.imgone && (
//                           <a
//                             href={highlight.linkone || "#"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
//                           >
//                             <img
//                               src={highlight.imgone}
//                               alt="Event highlight 1"
//                               className="w-full h-full object-cover transition duration-500 ease-in-out"
//                             />
//                             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
//                           </a>
//                         )}
//                         {highlight.imgtwo && (
//                           <a
//                             href={highlight.linktwo || "#"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
//                           >
//                             <img
//                               src={highlight.imgtwo}
//                               alt="Event highlight 2"
//                               className="w-full h-full object-cover transition duration-500 ease-in-out"
//                             />
//                             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//         </div>
//       ))}

//       {/* Book a Meeting Form */}
//       <div ref={formRef}>
//         <CommonForm />
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import CommonForm from "@/components/CommonFormEvents/CommonForm";

const events = [
  {
    id: 2,
    title: "Fierce Pharma Week",
    slug: "fpw-2025",
    bgimagetwo: "/events/WHB_FPW2025.png",
    logosize: "/events/Color-Loged_FPW-1536x664.png",
    bookameeting: "/events/Badge_FPW2025.png",
    date: "September 8-11, 2025",
    location: "Pennsylvania Convention Center, Philadelphia, PA",
    about: {
      title: "About Conference",
      description: `Fierce Pharma Week is where the most influential minds in life sciences come together to shape the future of pharma. Held at the Pennsylvania Convention Center in Philadelphia, the event unites experts in marketing, commercialization, medical affairs, and communications to exchange insights, explore emerging trends, and build connections that advance the industry. Through thought-provoking sessions, collaborative discussions, and networking opportunities, Fierce Pharma Week offers a powerful platform for driving innovation and improving patient outcomes.
  `,
      image: "/events/BIO_About.png",
    },
    speaker: {
      speaker: "Speaker",
      imgone: "/events/AR_DP.png",
      headerone: "Anindya Roy",
      headertwo: "Principal, Viscadia",
      headerthree:
        "Topic: Navigating the Niche – Forecasting in Ultra-Rare Diseases and Cell & Gene Therapies",
      headerfour: "Date: 9 September, 2025",
      headerfive: "Time: 11:45 AM (EST)",
      button: "Agenda",
      headersix:
        "This session provides commercial leaders and strategists practical insights to navigate these challenges. We’ll discuss innovative methodologies for patient identification, capacity-constrained launches, and value-based forecasting. Let us transform our forecast into a strategic compass, driving smarter decisions and ensuring life-changing innovations reach every patient.",
      linkone: "/leadership-anindya-roy",
      buttonLink:
        "https://www.fiercepharmaweek.com/fiercepharmaweekcom/full-agenda-fierce-pharma-week",
    },

    forecasting: [
      {
        id: 1,
        image: "/casestudies/SKK-LinkedIn-1-1.webp",
        name: "Satish K. Kauta",
        role: "Founder & CEO",
        description:
          "Satish guides Viscadia’s teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
        link: "/leadership-satish-k-kauta",
      },
      {
        id: 2,
        image: "/casestudies/anindya.webp",
        name: "Anindya Roy",
        role: "Principal",
        description:
          "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
        link: "/leadership-anindya-roy",
      },
      {
        id: 3,
        image: "/casestudies/Jim-Martin-with-Viscadia-Background.png",
        name: "Jim Martin",
        role: "Head Of Client Development",
        description:
          "His career spans over 20 years of experience driving growth for strategic consulting firms operating in the biopharma and MedTech industries.",
        link: "/leadership-jim-martin",
      },
    ],
  },
];

const page = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" }); // smooth scroll
  };

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <div className="relative mt-20 w-full flex flex-col-reverse sm:flex-row">
            <div className="relative  sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px]  xl:w-[69%] h-full sm:h-[420px]">
              <div className="sm:absolute top-10 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
                <img
                  src={event.logosize}
                  alt="event logo"
                  className="mb-4 mt-[25px] sm:mt-[40px] sm:px-0 px-3 w-full  sm:w-full h-full xl:w-[405px]  "
                />

                {/* Title */}
                <h1 className="text-[#133D66] text-[28px] font-light">
                  {event.title}
                </h1>
                {event.titletwo && (
                  <h2 className="text-[#133D66] text-[28px] font-light leading-none">
                    {event.titletwo}
                  </h2>
                )}

                {/* Date & Location */}
                <div className="xl:flex xl:space-y-0 space-y-2 items-center gap-6 mt-3 text-[#133D66] text-[14px] font-light whitespace-nowrap w-full overflow-x-auto">
                  <span className="flex text-[14px] items-center gap-2">
                    <FaCalendar className="text-[22px]" /> {event.date}
                  </span>
                  <span className="flex text-[14px] items-center gap-2">
                    <FaMapMarkerAlt className="text-[22px]" /> {event.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Background Section */}
            <div className="w-full ml-0 h-[200px] sm:h-[420px]">
              <div className="w-full h-full">
                <img
                  src={event.bgimagetwo}
                  alt="Background Two"
                  className="w-full h-[200px] sm:border-none border-2 border-gray-200 sm:h-full "
                />
                {event.bookameeting && (
                  <img
                    src={event.bookameeting}
                    onClick={scrollToForm}
                    alt="Book a Meeting"
                    className="fixed top-20 sm:top-22  cursor-pointer right-5 sm:right-10 w-[100px] sm:w-[130px] h-auto z-10 "
                  />
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          {event.about && (
            <div className="font-sans sm:mt-0 mt-8 text-[#2e2e2e]">
              <img src="/BIO_About.png" className="w-full block sm:hidden" />
              <section
                className="relative sm:min-h-[400px] h-[320px]  bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
                style={{ backgroundImage: `url(${event.about.image})` }}
              >
                <div className="container mx-auto px-5 lg:px-8 py-10 sm:py-12 md:py-16">
                  <div className="max-w-[570px] ml-auto text-left">
                    <h2 className="text-white text-xl sm:text-[32px] font-light leading-tight">
                      {event.about.title}
                    </h2>
                    <p className="mt-4 text-white font-light text-base leading-[1.1]">
                      {event.about.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Speaker Section */}
          {event.speaker && (
            <div className="bg-white py-10  flex mx-auto flex-col max-w-[1100px] px-4 ">
              {event.speaker.speaker && (
                <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
                  {event.speaker.speaker}
                </h2>
              )}

              <div className="flex flex-col mx-auto md:flex-row items-center justify-center gap-8">
                {event.speaker.imgone && (
                  <div className="flex gap-4">
                    <Link href={event.speaker.linkone || "#"}>
                      <img
                        src={event.speaker.imgone}
                        alt="Speaker 1"
                        className="w-[195px] h-[185px]  rounded-full object-cover"
                      />
                    </Link>
                  </div>
                )}

                <div className="max-w-md text-left">
                  {event.speaker.headerone && (
                    <h4 className="text-[#BD302B] hover:text-[#F4D35E] text-lg font-normal mb-1">
                      {event.speaker.headerone}
                    </h4>
                  )}
                  {event.speaker.headertwo && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headertwo}
                    </p>
                  )}
                  {event.speaker.headerthree && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headerthree}
                    </p>
                  )}
                  {event.speaker.headerfour && (
                    <p className="text-black font-light text-[14px] mb-1">
                      {event.speaker.headerfour}
                    </p>
                  )}
                  {event.speaker.headerfive && (
                    <p className="text-black font-light text-[14px] mb-3">
                      {event.speaker.headerfive}
                    </p>
                  )}
                  {event.speaker.button && event.speaker.buttonLink && (
                    <a
                      href={event.speaker.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#BD302B] hover:bg-[#cf1e18] text-white text-base font-light py-2 px-6"
                    >
                      {event.speaker.button}
                    </a>
                  )}
                </div>
              </div>

              {event.speaker.headersix && (
                <p className="mt-7 text-[#63666A] max-w-4xl text-[14px] text-left sm:text-center font-light mx-auto">
                  {event.speaker.headersix}
                </p>
              )}
            </div>
          )}

          {/* Forecasting Specialists */}
          {event.forecasting && event.forecasting.length > 0 && (
            <>
              <div className="forcastingspeacialist mt-4">
                <h1 className="text-black md:text-[38px] sm:px-0 px-2 text-[28px] text-center font-light">
                  Our Forecasting Specialists at the Event
                </h1>
              </div>
              <div className="grid grid-cols-1 xl:p-0 p-4 sm:grid-cols-2 md:grid-cols-3 mt-[20px] sm:mb-[30px] mb-[20px] gap-10 max-w-[1100px] mx-auto">
                {event.forecasting.map((person) =>
                  person.link ? (
                    <Link key={person.id} href={person.link}>
                      <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                        <div className="relative w-full h-[260px] group overflow-hidden">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                            <p className="text-[14px] leading-4">
                              {person.description}
                            </p>
                            {person.click && (
                              <span className="mt-4 text-[14px]">
                                {person.click}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                            {person.name}
                          </h2>
                          <p className="text-black text-[14px] px-1 font-light">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={person.id}
                      className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-default"
                    >
                      <div className="relative w-full h-[260px] group overflow-hidden">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
                          {person.name}
                        </h2>
                        <p className="text-black text-[14px] px-1 font-light">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {event.agendaforecasting?.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-full cursor-pointer flex justify-center"
                  >
                    <a href={item.agendaLink || "#"}>
                      <button className="bg-[#BD302B] cursor-pointer font-light text-white px-6 py-2">
                        {item.agenda}
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Highlights Section */}
          {event.HighlightsoftheEvent &&
            event.HighlightsoftheEvent.length > 0 && (
              <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
                <div className="text-center">
                  {event.HighlightsoftheEvent.map((highlight, i) => (
                    <div key={i}>
                      {highlight.text && (
                        <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                          {highlight.text}
                        </h2>
                      )}
                      <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {highlight.imgone && (
                          <a
                            href={highlight.linkone || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
                          >
                            <img
                              src={highlight.imgone}
                              alt="Event highlight 1"
                              className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
                          </a>
                        )}
                        {highlight.imgtwo && (
                          <a
                            href={highlight.linktwo || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
                          >
                            <img
                              src={highlight.imgtwo}
                              alt="Event highlight 2"
                              className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      ))}

      {/* Book a Meeting Form */}
      <div ref={formRef}>
        <CommonForm />
      </div>
    </div>
  );
};

export default page;
