// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const events = [
//   {
//     id: 8,
//     title: "New Product Planning Summit",
//     slug: "new-product-planning-summit",
//     bgimagethree: "/events/NPP-2024.png",
//     logosizefour: "/events/Frame-46.webp", // left side logo

//     date: "September 30 - October 1, 2024",
//     location: "Boston, MA",
//     about: {
//       title: "ABOUT NPP",
//       description: `New Product Planning Summit is dedicated to shaping how new product planning and related functions make informed, value-based, data-driven decisions about products in the pipeline. Life science industry professionals gather here annually to learn how and when to leverage various resources and ask the right questions to ensure commercial success.`,
//       image: "/events/BIO_About.png",
//     },

//     speaker: {
//       speaker: "Presenting Speaker",

//       imgone: "/events/anindy.webp",
//       headerone: "Anindya Roy",
//       headertwo: "Principal, Viscadia",
//       headerthree:
//         "Topic: Translating Research to Revenue: Forecasting for Clinical Development Planning and Go-to-Market Strategy.",
//       headerfour: "Date: 9/30 at 12:15 pm",
//       // headerfive: "Time: 3:40 PM-4:10 PM (EST",
//       button: "Learn More",
//       linkone: "/leadership-anindya-roy",
//       linktwo: "/forecasting/doug-willson",
//       buttonLink:
//         "https://newproductplanning2024.sched.com/event/1ei00?iframe=no",
//     },

//     forecasting: [
//       {
//         id: 1,
//         image: "/casestudies/SKK-LinkedIn-1-1.webp",
//         name: "Satish K. Kauta",
//         role: "Founder & CEO",
//         description:
//           "Satish guides Viscadias teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
//         click: "Click to learn more >",
//         link: "/leadership-satish-k-kauta",
//       },
//       {
//         id: 3,
//         image: "/casestudies/anindya.webp",
//         name: "Anindya Roy",
//         role: "principal",
//         description:
//           "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
//         click: "Click to learn more >",
//         link: "/leadership-anindya-roy",
//       },
//       {
//         id: 3,
//         image: "/casestudies/Vipul_DP.png",
//         name: "Vipul Vaid",
//         role: "Associate principal",
//         description:
//           "Vipul works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 8 years of consulting experience in the pharmaceutical industry. ",
//         click: "Click to learn more >",
//         link: "/leadership-vipul-vaid",
//       },

//       {
//         id: 4,
//         image: "/events/pulkit.webp",
//         name: "Pulkit Goel",
//         role: "Manager, Stragetic Forecasting",
//         description:
//           "Pulkit works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 10 years of consulting experience in the pharmaceutical industry.",
//         click: "Click to learn more >",
//         link: "/leadership-pulkit-goel",
//       },

//       {
//         id: 5,
//         image: "/events/Sai-Kadambari-1080x1080-1.png",
//         name: "Sai Kadambari",
//         role: "Associate Consultant",
//         description: "",
//       },
//     ],
//     HighlightsoftheEvent: [
//       {
//         text: "Highlights of the Event",
//         imgone: "/events/NPP_1-1000x934.png",
//         imgtwo: "/events/NPP_4-1000x9601.png",
//         imgthree: "/NPP_3-1000x960.png",
//         imgfour: "/NPP_2-1000x960.png",
//         imgfive: "/events/NPP_2_npp.png",
//         linkone: "/events/intellus-3",
//         linktwo: "/NPP_2-1000x960.png",
//       },
//     ],
//   },
// ];

// const page = () => {
//   const [isSliderOpen, setIsSliderOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Collect all images from highlights
//   const getAllImages = (event) => {
//     const images = [];
//     if (event.HighlightsoftheEvent) {
//       event.HighlightsoftheEvent.forEach((highlight) => {
//         if (highlight.imgone) {
//           images.push({
//             src: highlight.imgone,
//             link: highlight.linkone,
//             alt: "Event highlight 1",
//           });
//         }
//         if (highlight.imgtwo) {
//           images.push({
//             src: highlight.imgtwo,
//             link: highlight.linktwo,
//             alt: "Event highlight 2",
//           });
//         }
//         if (highlight.imgthree) {
//           images.push({
//             src: highlight.imgthree,
//             link: highlight.linkthree,
//             alt: "Event highlight 3",
//           });
//         }
//         if (highlight.imgfour) {
//           images.push({
//             src: highlight.imgfour,
//             link: highlight.linkfour,
//             alt: "Event highlight 4",
//           });
//         }
//       });
//     }
//     return images;
//   };

//   const openSlider = (imageIndex) => {
//     setCurrentImageIndex(imageIndex);
//     setIsSliderOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeSlider = () => {
//     setIsSliderOpen(false);
//     document.body.style.overflow = "unset";
//   };

//   const goToNext = (allImages) => {
//     setCurrentImageIndex((prev) =>
//       prev === allImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrev = (allImages) => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? allImages.length - 1 : prev - 1
//     );
//   };

//   const slugify = (text) =>
//     text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "-") // space → -
//       .replace(/[^\w\-]+/g, "") // non-word chars hatao
//       .replace(/\-\-+/g, "-");

//   return (
//     <div>
//       {events.map((event) => {
//         const allImages = getAllImages(event);

//         return (
//           <div key={event.id}>
//             {/* Hero Section */}
//             <div className="headevents relative mt-20 w-full flex flex-col-reverse sm:flex-row">
//               <div className="relative sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px] xl:w-[69%] h-[330px] sm:h-[370px]">
//                 <div className="sm:absolute z-20 top-10 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
//                   <img
//                     src={event.logosizefour}
//                     alt="event logo"
//                     className="mb-4 w-full h-56 mt-7"
//                   />

//                   {/* Title */}
//                   <h1 className="text-[#133D66] text-[18px] sm:text-[28px] font-light">
//                     {event.title}
//                   </h1>
//                   <h2 className="text-[#133D66] text-[18px] sm:text-[28px] font-light leading-none">
//                     {event.titletwo}
//                   </h2>
//                   <div className="sm:flex sm:space-y-0 space-y-3 items-center gap-6 mt-3 text-[#133D66] text-[14px] font-light w-full">
//                     <span className="flex text-[14px] items-center gap-2">
//                       <FaCalendar className="text-[22px]" /> {event.date}
//                     </span>
//                     <span className="flex text-[14px] items-center gap-2">
//                       <FaMapMarkerAlt className="text-[22px]" />{" "}
//                       {event.location}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative hidden xl:block z-10 w-full h-[250px] sm:h-[390px] xl:h-[430px]">
//                 <div className="w-full h-full">
//                   <img
//                     src={event.bgimagethree}
//                     alt="Background Two"
//                     className="w-full h-full "
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="font-sans sm:mt-0 mt-18 text-[#2e2e2e]">
//               <img src="/BIO_About.png" className="w-full block sm:hidden" />
//               <section
//                 className="relative sm:min-h-[400px] bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
//                 style={{ backgroundImage: `url(${event.about.image})` }}
//               >
//                 <div className="container mx-auto px-5 lg:px-8 py-12 md:py-16">
//                   <div className="max-w-xl ml-auto text-left">
//                     <h2 className="text-white text-[32px] font-light leading-tight">
//                       {event.about.title}
//                     </h2>
//                     <p className="mt-4 text-white font-light text-base leading-[1.1]">
//                       {event.about.description}
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             </div>

//             {/* Speaker Section */}
//             {event.speaker && (
//               <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
//                 {event.speaker.speaker && (
//                   <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
//                     {event.speaker.speaker}
//                   </h2>
//                 )}

//                 <div className="flex flex-col mx-auto md:flex-row items-center justify-center gap-8">
//                   {(event.speaker.imgone || event.speaker.imgtwo) && (
//                     <div className="flex gap-4">
//                       {event.speaker.imgone && (
//                         <a
//                           href={event.speaker.linkone || "#"}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <img
//                             src={event.speaker.imgone}
//                             alt="Speaker 1"
//                             className="w-[195px] h-[185px] ml-0 md:ml-26 rounded-full object-cover"
//                           />
//                         </a>
//                       )}
//                       {event.speaker.imgtwo && (
//                         <a
//                           href={event.speaker.linktwo || "#"}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <img
//                             src={event.speaker.imgtwo}
//                             alt="Speaker 2"
//                             className="w-[185px] h-[185px] object-cover rounded-full"
//                           />
//                         </a>
//                       )}
//                     </div>
//                   )}

//                   <div className="max-w-md text-left">
//                     {event.speaker.headerone && (
//                       <h4 className="text-[#BD302B] hover:text-[#F4D35E] text-lg font-normal mb-1">
//                         {event.speaker.headerone}
//                       </h4>
//                     )}
//                     {event.speaker.headertwo && (
//                       <p className="text-black font-light text-[14px] mb-1">
//                         {event.speaker.headertwo}
//                       </p>
//                     )}
//                     {event.speaker.headerthree && (
//                       <p className="text-black font-light text-[14px] mb-1">
//                         {event.speaker.headerthree}
//                       </p>
//                     )}
//                     {event.speaker.headerfour && (
//                       <p className="text-black font-light text-[14px] mb-1">
//                         {event.speaker.headerfour}
//                       </p>
//                     )}
//                     {event.speaker.headerfive && (
//                       <p className="text-black font-light text-[14px] mb-3">
//                         {event.speaker.headerfive}
//                       </p>
//                     )}
//                     {event.speaker.button && event.speaker.buttonLink && (
//                       <a
//                         href={event.speaker.buttonLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block bg-[#BD302B] hover:bg-[#cf1e18] text-white text-base font-light py-2 px-6"
//                       >
//                         {event.speaker.button}
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 {event.speaker.headersix && (
//                   <p className="text-left mt-4 text-[#63666A] font-light">
//                     {event.speaker.headersix}
//                   </p>
//                 )}
//               </div>
//             )}
//             {event.forecasting && event.forecasting.length > 0 && (
//               <>
//                 <div className="forcastingspeacialist mt-4 ">
//                   <h1 className="text-black md:text-[38px] text-[19px] text-center font-light">
//                     Our Forecasting Specialists at the Event
//                   </h1>
//                 </div>
//                 <div className="grid grid-cols-1 xl:p-0  p-4 sm:grid-cols-2 md:grid-cols-3 mt-[30px] sm:mb-[30px] mb-[20px] gap-10 max-w-[1100px] mx-auto">
//                   {event.forecasting.map((person) =>
//                     person.link ? (
//                       <Link key={person.id} href={person.link}>
//                         <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
//                           <div className="relative w-full h-[260px] group overflow-hidden">
//                             <img
//                               src={person.image}
//                               alt={person.name}
//                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             />
//                             <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
//                               <p className="text-[14px] leading-4">
//                                 {person.description}
//                               </p>
//                               {person.click && (
//                                 <span className="mt-4 text-[14px]">
//                                   {person.click}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <div className="mt-2 text-center">
//                             <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
//                               {person.name}
//                             </h2>
//                             <p className="text-black text-[14px] px-1 font-light">
//                               {person.role}
//                             </p>
//                           </div>
//                         </div>
//                       </Link>
//                     ) : (
//                       <div
//                         key={person.id}
//                         className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-default"
//                       >
//                         <div className="relative w-full h-[260px] group overflow-hidden">
//                           <img
//                             src={person.image}
//                             alt={person.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="mt-2 text-center">
//                           <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
//                             {person.name}
//                           </h2>
//                           <p className="text-black text-[14px] px-1 font-light">
//                             {person.role}
//                           </p>
//                         </div>
//                       </div>
//                     )
//                   )}

//                   {event.agendaforecasting?.map((item, index) => (
//                     <div
//                       key={index}
//                       className="col-span-full cursor-pointer flex justify-center"
//                     >
//                       <a href={item.agendaLink || "#"}>
//                         <button className="bg-[#BD302B] cursor-pointer font-light text-white px-6 py-2">
//                           {item.agenda}
//                         </button>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* Enhanced Highlights Section with Slider */}
//             {event.HighlightsoftheEvent &&
//               event.HighlightsoftheEvent.length > 0 && (
//                 <div className="bg-white py-10 mb-5 px-4 sm:px-6 lg:px-24">
//                   <div className="text-center">
//                     {event.HighlightsoftheEvent.map((highlight, i) => (
//                       <div key={i}>
//                         {highlight.text && (
//                           <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
//                             {highlight.text}
//                           </h2>
//                         )}
//                         <div className="flex flex-col sm:flex-row justify-center gap-3">
//                           {highlight.imgone && (
//                             <div
//                               onClick={() => {
//                                 const imageIndex = allImages.findIndex(
//                                   (img) => img.src === highlight.imgone
//                                 );
//                                 openSlider(imageIndex);
//                               }}
//                               className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
//                             >
//                               <img
//                                 src={highlight.imgone}
//                                 alt="Event highlight 1"
//                                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                               />
//                               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
//                             </div>
//                           )}
//                           {highlight.imgtwo && (
//                             <div
//                               onClick={() => {
//                                 const imageIndex = allImages.findIndex(
//                                   (img) => img.src === highlight.imgtwo
//                                 );
//                                 openSlider(imageIndex);
//                               }}
//                               className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
//                             >
//                               <img
//                                 src={highlight.imgtwo}
//                                 alt="Event highlight 2"
//                                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                               />
//                               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
//                             </div>
//                           )}
//                           {highlight.imgthree && (
//                             <div
//                               onClick={() => {
//                                 const imageIndex = allImages.findIndex(
//                                   (img) => img.src === highlight.imgthree
//                                 );
//                                 openSlider(imageIndex);
//                               }}
//                               className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
//                             >
//                               <img
//                                 src={highlight.imgthree}
//                                 alt="Event highlight 3"
//                                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                               />
//                               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
//                             </div>
//                           )}
//                           {highlight.imgfour && (
//                             <div
//                               onClick={() => {
//                                 const imageIndex = allImages.findIndex(
//                                   (img) => img.src === highlight.imgfour
//                                 );
//                                 openSlider(imageIndex);
//                               }}
//                               className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
//                             >
//                               <img
//                                 src={highlight.imgfour}
//                                 alt="Event highlight 4"
//                                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                               />
//                               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//             {/* Full Screen Slider Modal */}
//             {isSliderOpen && (
//               <div
//                 className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center transition-opacity duration-300 ${
//                   isSliderOpen ? "opacity-100" : "opacity-0"
//                 }`}
//                 onClick={closeSlider}
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={closeSlider}
//                   className="absolute top-4 right-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
//                 >
//                   <X className="w-6 h-6 text-white" />
//                 </button>

//                 {/* Image Counter */}
//                 <div className="absolute top-4 left-4 z-60 text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
//                   {currentImageIndex + 1} / {allImages.length}
//                 </div>

//                 {/* Previous Button */}
//                 {allImages.length > 1 && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       goToPrev(allImages);
//                     }}
//                     className="absolute left-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 group"
//                   >
//                     <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
//                   </button>
//                 )}

//                 {/* Next Button */}
//                 {allImages.length > 1 && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       goToNext(allImages);
//                     }}
//                     className="absolute right-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 group"
//                   >
//                     <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
//                   </button>
//                 )}

//                 {/* Main Image */}
//                 <div
//                   className="relative max-w-7xl max-h-[90vh] mx-4"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <img
//                     src={allImages[currentImageIndex]?.src}
//                     alt={allImages[currentImageIndex]?.alt}
//                     className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 transform ${
//                       isSliderOpen
//                         ? "scale-100 opacity-100"
//                         : "scale-95 opacity-0"
//                     }`}
//                   />
//                 </div>

//                 {/* Thumbnail Navigation */}
//                 {allImages.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2  bg-opacity-50 rounded-lg p-2">
//                     {allImages.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setCurrentImageIndex(index);
//                         }}
//                         className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                           index === currentImageIndex
//                             ? "bg-white scale-125"
//                             : "bg-white bg-opacity-50 hover:bg-opacity-75"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const events = [
  {
    id: 8,
    title: "New Product Planning Summit",
    slug: "new-product-planning-summit",
    bgimagethree: "/events/NPP-2024.png",
    logosizefour: "/events/Frame-46.webp", // left side logo

    date: "September 30 - October 1, 2024",
    location: "Boston, MA",
    about: {
      title: "ABOUT NPP",
      description: `New Product Planning Summit is dedicated to shaping how new product planning and related functions make informed, value-based, data-driven decisions about products in the pipeline. Life science industry professionals gather here annually to learn how and when to leverage various resources and ask the right questions to ensure commercial success.`,
      image: "/events/BIO_About.png",
    },

    speaker: {
      speaker: "Presenting Speaker",

      imgone: "/events/anindy.webp",
      headerone: "Anindya Roy",
      headertwo: "Principal, Viscadia",
      headerthree:
        "Topic: Translating Research to Revenue: Forecasting for Clinical Development Planning and Go-to-Market Strategy.",
      headerfour: "Date: 9/30 at 12:15 pm",
      // headerfive: "Time: 3:40 PM-4:10 PM (EST",
      button: "Learn More",
      linkone: "/leadership-anindya-roy",
      linktwo: "/forecasting/doug-willson",
      buttonLink:
        "https://newproductplanning2024.sched.com/event/1ei00?iframe=no",
    },

    forecasting: [
      {
        id: 1,
        image: "/casestudies/SKK-LinkedIn-1-1.webp",
        name: "Satish K. Kauta",
        role: "Founder & CEO",
        description:
          "Satish guides Viscadias teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
        click: "Click to learn more >",
        link: "/leadership-satish-k-kauta",
      },
      {
        id: 3,
        image: "/casestudies/anindya.webp",
        name: "Anindya Roy",
        role: "Principal",
        description:
          "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
        click: "Click to learn more >",
        link: "/leadership-anindya-roy",
      },
      {
        id: 3,
        image: "/casestudies/Vipul_DP.png",
        name: "Vipul Vaid",
        role: "Associate principal",
        description:
          "Vipul works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 8 years of consulting experience in the pharmaceutical industry. ",
        click: "Click to learn more >",
        link: "/leadership-vipul-vaid",
      },

      {
        id: 4,
        image: "/events/pulkit.webp",
        name: "Pulkit Goel",
        role: "Manager, Stragetic Forecasting",
        description:
          "Pulkit works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 10 years of consulting experience in the pharmaceutical industry.",
        click: "Click to learn more >",
        link: "/leadership-pulkit-goel",
      },

      {
        id: 5,
        image: "/events/Sai-Kadambari-1080x1080-1.png",
        name: "Sai Kadambari",
        role: "Associate Consultant",
        description: "",
      },
    ],
    HighlightsoftheEvent: [
      {
        text: "Highlights of the Event",
        imgone: "/events/NPP_1-1000x934.png",
        imgtwo: "/events/NPP_4-1000x9601.png",
        imgthree: "/NPP_3-1000x960.png",
        imgfour: "/NPP_2-1000x960.png",
        imgfive: "/events/NPP_2_npp.png",
        linkone: "/events/intellus-3",
        linktwo: "/NPP_2-1000x960.png",
      },
    ],
  },
];

const page = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Collect all images from highlights
  const getAllImages = (event) => {
    const images = [];
    if (event.HighlightsoftheEvent) {
      event.HighlightsoftheEvent.forEach((highlight) => {
        if (highlight.imgone) {
          images.push({
            src: highlight.imgone,
            link: highlight.linkone,
            alt: "Event highlight 1",
          });
        }
        if (highlight.imgtwo) {
          images.push({
            src: highlight.imgtwo,
            link: highlight.linktwo,
            alt: "Event highlight 2",
          });
        }
        if (highlight.imgthree) {
          images.push({
            src: highlight.imgthree,
            link: highlight.linkthree,
            alt: "Event highlight 3",
          });
        }
        if (highlight.imgfour) {
          images.push({
            src: highlight.imgfour,
            link: highlight.linkfour,
            alt: "Event highlight 4",
          });
        }
      });
    }
    return images;
  };

  const openSlider = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsSliderOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToNext = (allImages) => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = (allImages) => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // space → -
      .replace(/[^\w\-]+/g, "") // non-word chars hatao
      .replace(/\-\-+/g, "-");

  return (
    <div>
      {events.map((event) => {
        const allImages = getAllImages(event);

        return (
          <div key={event.id}>
            {/* Hero Section */}
            <div className="headevents relative mt-20 w-full flex flex-col-reverse sm:flex-row">
              <div className="relative sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px] xl:w-[69%] h-[330px] sm:h-[370px]">
                <div className="sm:absolute z-20 top-10 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
                  <img
                    src={event.logosizefour}
                    alt="event logo"
                    className="mb-4 w-full h-56 mt-7"
                  />

                  {/* Title */}
                  <h1 className="text-[#133D66] text-[18px] sm:text-[28px] font-light">
                    {event.title}
                  </h1>
                  <h2 className="text-[#133D66] text-[18px] sm:text-[28px] font-light leading-none">
                    {event.titletwo}
                  </h2>
                  <div className="sm:flex sm:space-y-0 space-y-3 items-center gap-6 mt-3 text-[#133D66] text-[14px] font-light w-full">
                    <span className="flex text-[14px] items-center gap-2">
                      <FaCalendar className="text-[22px]" /> {event.date}
                    </span>
                    <span className="flex text-[14px] items-center gap-2">
                      <FaMapMarkerAlt className="text-[22px]" />{" "}
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative hidden xl:block z-10 w-full h-[250px] sm:h-[390px] xl:h-[430px]">
                <div className="w-full h-full">
                  <img
                    src={event.bgimagethree}
                    alt="Background Two"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>

            <div className="font-sans sm:mt-0 mt-18 text-[#2e2e2e]">
              <img src="/BIO_About.png" className="w-full block sm:hidden" />
              <section
                className="relative sm:min-h-[400px] bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
                style={{ backgroundImage: `url(${event.about.image})` }}
              >
                <div className="container mx-auto px-5 lg:px-8 py-12 md:py-16">
                  <div className="max-w-xl ml-auto text-left">
                    <h2 className="text-white text-[32px] font-light leading-tight">
                      {event.about.title}
                    </h2>
                    <p className="mt-4 text-white font-light text-base leading-[1.1]">
                      {event.about.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Speaker Section */}
            {event.speaker && (
              <div className="bg-white py-10 px-4 sm:px-6 lg:px-24">
                {event.speaker.speaker && (
                  <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
                    {event.speaker.speaker}
                  </h2>
                )}

                <div className="flex flex-col mx-auto md:flex-row items-center justify-center gap-8">
                  {(event.speaker.imgone || event.speaker.imgtwo) && (
                    <div className="flex gap-4">
                      {event.speaker.imgone && (
                        <a
                          href={event.speaker.linkone || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={event.speaker.imgone}
                            alt="Speaker 1"
                            className="w-[195px] h-[185px] ml-0 md:ml-26 rounded-full object-cover"
                          />
                        </a>
                      )}
                      {event.speaker.imgtwo && (
                        <a
                          href={event.speaker.linktwo || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={event.speaker.imgtwo}
                            alt="Speaker 2"
                            className="w-[185px] h-[185px] object-cover rounded-full"
                          />
                        </a>
                      )}
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
                  <p className="text-left mt-4 text-[#63666A] font-light">
                    {event.speaker.headersix}
                  </p>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 xl:p-0 p-4 sm:grid-cols-2 md:grid-cols-3 mt-[30px] sm:mb-[30px] mb-[20px] gap-10 max-w-[1100px] mx-auto">
              {/* Satish K. Kauta */}
              <Link href="/leadership-satish-k-kauta">
                <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                  <div className="relative w-full h-[260px] group overflow-hidden">
                    <img
                      src="/casestudies/SKK-LinkedIn-1-1.webp"
                      alt="Satish K. Kauta"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                      <p className="text-[14px] leading-4">
                        Satish guides Viscadias teams in corporate development
                        and strategy, new product planning, and forecasting from
                        our Washington, DC office. He has more than 25 years of
                        experience working at and with large, mid-size, and
                        specialty pharmaceutical companies.
                      </p>
                      <span className="mt-4 text-[14px]">
                        Click to learn more
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                      Satish K. Kauta
                    </h2>
                    <p className="text-black text-[14px] px-1 font-light">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </Link>

              {/* Anindya Roy */}
              <Link href="/leadership-anindya-roy">
                <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                  <div className="relative w-full h-[260px] group overflow-hidden">
                    <img
                      src="/casestudies/anindya.webp"
                      alt="Anindya Roy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                      <p className="text-[14px] leading-4">
                        Anindya leads the forecasting and business strategy team
                        in our Cambridge office. He has more than 15 years of
                        analytical consulting experience for the pharmaceutical
                        and biotechnology industry.
                      </p>
                      <span className="mt-4 text-[14px]">
                        Click to learn more
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                      Anindya Roy
                    </h2>
                    <p className="text-black text-[14px] px-1 font-light">
                      principal
                    </p>
                  </div>
                </div>
              </Link>

              {/* Vipul Vaid */}
              <Link href="/leadership-vipul-vaid">
                <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                  <div className="relative w-full h-[260px] group overflow-hidden">
                    <img
                      src="/casestudies/Vipul_DP.png"
                      alt="Vipul Vaid"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                      <p className="text-[14px] leading-4">
                        Vipul works as a Manager, Strategic Forecasting in our
                        Cambridge office. He has more than 8 years of consulting
                        experience in the pharmaceutical industry.
                      </p>
                      <span className="mt-4 text-[14px]">
                        Click to learn more
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                      Vipul Vaid
                    </h2>
                    <p className="text-black text-[14px] px-1 font-light">
                      Associate principal
                    </p>
                  </div>
                </div>
              </Link>

              {/* Pulkit Goel */}

              <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                <div className="relative w-full h-[260px] group overflow-hidden">
                  <img
                    src="/events/pulkit.webp"
                    alt="Pulkit Goel"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                    <p className="text-[14px] leading-4">
                      Pulkit works as a Manager, Strategic Forecasting in our
                      Cambridge office. He has more than 10 years of consulting
                      experience in the pharmaceutical industry.
                    </p>
                    <span className="mt-4 text-[14px]">
                      Click to learn more
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                    Pulkit Goel
                  </h2>
                  <p className="text-black text-[14px] px-1 font-light">
                    Manager, Stragetic Forecasting
                  </p>
                </div>
              </div>

              {/* Sai Kadambari */}
              {/* <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-default">
                <div className="relative w-full h-[260px] group overflow-hidden">
                  <img
                    src="/events/Sai-Kadambari-1080x1080-1.png"
                    alt="Sai Kadambari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
                    Sai Kadambari
                  </h2>
                  <p className="text-black text-[14px] px-1 font-light">
                    Associate Consultant
                  </p>
                </div>
              </div> */}

              <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                <div className="relative w-full h-[260px] group overflow-hidden">
                  <img
                    src="/events/Sai-Kadambari-1080x1080-1.png"
                    alt="Pulkit Goel"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between"></div>
                </div>
                <div className="mt-2 text-center">
                  <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#E6BD2D]">
                    Sai Kadambari
                  </h2>
                  <p className="text-black text-[14px] px-1 font-light">
                    Associate Consultant
                  </p>
                </div>
              </div>
              {/* Agenda Buttons */}
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

            {/* Enhanced Highlights Section with Slider */}
            {event.HighlightsoftheEvent &&
              event.HighlightsoftheEvent.length > 0 && (
                <div className="bg-white py-10 mb-5 px-4 sm:px-6 lg:px-24">
                  <div className="text-center">
                    {event.HighlightsoftheEvent.map((highlight, i) => (
                      <div key={i}>
                        {highlight.text && (
                          <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                            {highlight.text}
                          </h2>
                        )}
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                          {highlight.imgone && (
                            <div
                              onClick={() => {
                                const imageIndex = allImages.findIndex(
                                  (img) => img.src === highlight.imgone
                                );
                                openSlider(imageIndex);
                              }}
                              className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            >
                              <img
                                src={highlight.imgone}
                                alt="Event highlight 1"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                          )}
                          {highlight.imgtwo && (
                            <div
                              onClick={() => {
                                const imageIndex = allImages.findIndex(
                                  (img) => img.src === highlight.imgtwo
                                );
                                openSlider(imageIndex);
                              }}
                              className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            >
                              <img
                                src={highlight.imgtwo}
                                alt="Event highlight 2"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                          )}
                          {highlight.imgthree && (
                            <div
                              onClick={() => {
                                const imageIndex = allImages.findIndex(
                                  (img) => img.src === highlight.imgthree
                                );
                                openSlider(imageIndex);
                              }}
                              className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            >
                              <img
                                src={highlight.imgthree}
                                alt="Event highlight 3"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                          )}
                          {highlight.imgfour && (
                            <div
                              onClick={() => {
                                const imageIndex = allImages.findIndex(
                                  (img) => img.src === highlight.imgfour
                                );
                                openSlider(imageIndex);
                              }}
                              className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            >
                              <img
                                src={highlight.imgfour}
                                alt="Event highlight 4"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Full Screen Slider Modal */}
            {isSliderOpen && (
              <div
                className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center transition-opacity duration-300 ${
                  isSliderOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={closeSlider}
              >
                {/* Close Button */}
                <button
                  onClick={closeSlider}
                  className="absolute top-4 right-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-60 text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                  {currentImageIndex + 1} / {allImages.length}
                </div>

                {/* Previous Button */}
                {allImages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev(allImages);
                    }}
                    className="absolute left-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 group"
                  >
                    <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                  </button>
                )}

                {/* Next Button */}
                {allImages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext(allImages);
                    }}
                    className="absolute right-4 z-60  bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                  </button>
                )}

                {/* Main Image */}
                <div
                  className="relative max-w-7xl max-h-[90vh] mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={allImages[currentImageIndex]?.src}
                    alt={allImages[currentImageIndex]?.alt}
                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 transform ${
                      isSliderOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  />
                </div>

                {/* Thumbnail Navigation */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2  bg-opacity-50 rounded-lg p-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default page;
