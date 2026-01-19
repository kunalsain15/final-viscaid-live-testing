"use client";
import React from "react";
import Link from "next/link";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import CommonForm from "@/components/CommonFormEvents/CommonForm";
const events = [
  {
    id: 7,
    title: "We are Presenting & Exhibiting at PMRC",
    titletwo: "New Tools for Modeling Timing and Order of Entry Effects",
    slug: "pmrc-usa-2025",

    bgimagethree: "/events/PMRC-USA-2025-768x393.png",
    logosizefour: "/events/pmrc-2025-use.png", // left side logo

    date: "February 5-6, 2025",
    location: "Newark, New Jersey",
    about: {
      title: "ABOUT PMRC",
      description: `Explore the Pharma Market Research Conference with practical sessions led by seasoned professionals. In MasterClasses, presentations, panels, and roundtables, gain insights into pharmaceutical trends and market dynamics. Join discussions, collaborate in roundtables, and experience a conference that goes beyond the ordinary. This event is your gateway to shaping the future of pharmaceutical market research, offering straightforward insights. Join us for an industry immersion that's genuine and enlightening. Your path to understanding begins here.
  `,
      image: "/events/BIO_About.png",
    },

    speaker: {
      speaker: "Speaker",

      imgone: "/events/Mask-group-5.webp",
      headerone: "Doug Willson",
      headertwo: "Principal, Viscadia",
      headerthree:
        "Topic: New Tools for Modeling Timing and Order of Entry Effects",
      headerfour: "Date: Feb 5, 2025",
      headerfive: "Time: 3:40 PM-4:10 PM (EST",
      button: "Agenda",
      headersix:
        "Survey-based demand studies for pipeline products rarely provide good estimates of timing and order-of-entry effects as they arise mostly as a consequence of real-world prescribing experience. Forecasters often rely on secondary data analogs to model the effects of timing and order-of- entry but these estimates often fail to capture the unique characteristics and market situations for pipeline products. This presentation shares new tools for modeling timing and order-of-entry that combine models based on secondary data with new metrics from survey-based demand research. Accuracy of the methodology is demonstrated with several case studies.",
      linkone: "/leadership-doug-willson",
      linktwo: "/forecasting/doug-willson",
      buttonLink: "https://www.intellus.org/Events-Webinars/Institute-2025",
    },

    forecasting: [
      {
        id: 1,
        image: "/casestudies/SKK-LinkedIn-1-1.webp",
        name: "Satish K. Kauta",
        role: "Founder & CEO",
        description:
          "Satish guides Viscadia’s teams in corporate development and strategy, new product planning, and forecasting from our Washington, DC office. He has more than 25 years of experience working at and with large, mid-size, and specialty pharmaceutical companies.",
        click: "Click to learn more >",
        link: "/leadership-satish-k-kauta",
      },
      {
        id: 2,
        image: "/casestudies/doug.webp",
        name: "Doug Willson",
        role: "Principal",
        description:
          "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market research experience within the life sciences industry.",
        click: "Click to learn more >",
        link: "/leadership-doug-willson",
      },
      {
        id: 3,
        image: "/casestudies/anindya.webp",
        name: "Anindya Roy",
        role: "principal",
        description:
          "Anindya leads the forecasting and business strategy team in our Cambridge office. He has more than 15 years of analytical consulting experience for the pharmaceutical and biotechnology industry.",
        click: "Click to learn more >",
        link: "/leadership-anindya-roy",
      },
    ],
  },
];

const page = () => {
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
          {/* Hero Section */}
          <div className="relative headevents mt-20 w-full flex flex-col-reverse sm:flex-row">
            <div className="relative sm:px-0 px-3 w-full sm:w-[100px] lg:w-[500px] xl:w-[69%] h-[220px] sm:h-[370px]">
              <div className="sm:absolute z-20  top-10 left-8 xl:left-10 flex flex-col items-start text-left logoeventsize">
                <img
                  src={event.logosizefour}
                  alt="event logo"
                  className=" mt-4 xl:mt-[40px]"
                />
                {/* Title */}
                <h1 className="text-[#133D66] text-[18px] sm:text-[28px] mt-3 mb-3 font-light">
                  {event.title}
                </h1>
                <h2 className="text-[#133D66]  w-66 sm:w-sm text-[18px] sm:text-[28px]  font-light leading-7">
                  {event.titletwo}
                </h2>
                <div className="flex sm:space-y-0 space-y-3 items-center gap-6 mt-6 text-[#133D66] text-[14px] font-light whitespace-nowrap w-full ">
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
            <div className="relative z-10 w-full  h-[200px] sm:h-[390px] xl:h-[430px]">
              <div className="relative w-full h-full">
                <img
                  src={event.bgimagethree}
                  alt="Background Two"
                  className="w-full h-full border border-gray-300 sm:border-none"
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
                      <Link href={event.speaker.linkone || "#"}>
                        <img
                          src={event.speaker.imgone}
                          alt="Speaker 1"
                          className="w-[195px] h-[185px] ml-0 md:ml-26 rounded-full object-cover cursor-pointer"
                        />
                      </Link>
                    )}
                    {event.speaker.imgtwo && (
                      <Link href={event.speaker.linktwo || "#"}>
                        <img
                          src={event.speaker.imgtwo}
                          alt="Speaker 2"
                          className="w-[185px] h-[185px] object-cover rounded-full cursor-pointer"
                        />
                      </Link>
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
          {event.forecasting && event.forecasting.length > 0 && (
            <>
              <div className="forcastingspeacialist mt-4">
                <h1 className="text-black md:text-[38px] text-[19px] text-center font-light">
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
          {event.HighlightsoftheEvent && (
            <div className="bg-white mb-7 py-10 px-4 sm:px-6 lg:px-24">
              <div className="text-center">
                {event.HighlightsoftheEvent.map((highlight, i) => (
                  <div key={i}>
                    {highlight.text && (
                      <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                        {highlight.text}
                      </h2>
                    )}
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      {[
                        { img: highlight.imgone, link: highlight.linkone },
                        { img: highlight.imgtwo, link: highlight.linktwo },
                      ]
                        .filter((item) => item.img)
                        .map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[48%] rounded-lg shadow-md overflow-hidden"
                          >
                            <img
                              src={item.img}
                              alt={`Event highlight ${idx + 1}`}
                              className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition duration-500 ease-in-out"></div>
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Book a Meeting Form */}
      <CommonForm />
    </div>
  );
};

export default page;
