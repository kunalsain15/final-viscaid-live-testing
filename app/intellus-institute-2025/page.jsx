"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import CommonForm from "@/components/CommonFormEvents/CommonForm";
const events = [
  {
    id: 1,
    title: "Intellus Institute 2025",
    bgimageone: "/events/Intellus-WHB.png",
    logo: "/events/Intellus-Logo-768x768.png",
    date: "September 10-12, 2025",
    location: "Hyatt Regency New Brunswick, New Jersey, USA",
    about: {
      title: "ABOUT CONFERENCE",
      description:
        "The Intellus Institute 2025 is a premier gathering for healthcare insights and analytics professionals, bringing together leaders from pharma, biotech, and diagnostics to drive innovation and impact. The program features keynotes, interactive workshops, panel discussions, and networking, covering topics such as generative AI in research, integrated insights for strategic decision-making, cultural considerations in healthcare communication, and real-world evidence integration.",
      image: "/events/BIO_About.png",
    },
    speaker: {
      speaker: "Speaker",
      imgone: "./casestudies/doug.webp",
      imgtwo: "./events/shivangi-dhir.png",
      headerone: "Shivangi Dhir & Doug Willson",
      headertwo: "Manager & Principal, Viscadia",
      headerthree:
        "Topic: A New Approach for Modeling Timing and Order of Entry Effects",
      headerfour: "Date: September 11, 2025",
      headerfive: "Time: 01:15 PM (EST)",
      button: "Agenda",
      headersix:
        "Survey-based demand studies rarely provide good estimates of timing and order-of-entry effects. In this presentation we share new tools for modeling timing and order-of-entry effects that combine models based on secondary data with new metrics from survey-based demand research.",

      linktwo: "/leadership-doug-willson",
      buttonLink: "https://www.intellus.org/Events-Webinars/Institute-2025",
    },
    forecasting: [
      {
        id: 1,
        image: "/casestudies/doug.webp",
        name: "Doug Willson",
        role: "Principal",
        description:
          "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market research experience within the life sciences industry.",
        click: "Click to learn more >",
        link: "/leadership-doug-willson",
      },
      {
        id: 2,
        image: "/events/Shivangi-Dhir-DP.png",
        name: "Shivangi Dhir",
        role: "Manager, Strategic Forecasting",
        description:
          "Shivangi Dhir works as Manager, Strategic Forecasting at our Washington D.C. office in US. She has over 7+ years of consulting experience in the pharmaceutical industry.",
        click: "Click to learn more >",
        link: "/shivangi-dhir",
      },
      {
        id: 3,
        image: "/events/himanshu.webp",
        name: "Himanshu Gurnani",
        role: "Manager, Strategic Forecasting",
        description:
          "Himanshu works as a Manager, Strategic Forecasting in our Cambridge office. He has more than 8 years of consulting experience in the pharmaceutical industry.",
        click: "Click to learn more >",
        link: "/leadership-himanshu-gurnani",
      },
    ],
  },
];

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    job_title: "",
    contact_number: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      firstName,
      lastName,
      email: formData.email,
      company: formData.company,
      jobtitle: formData.job_title,
      phoneNumber: formData.contact_number,
    };

    try {
      const response = await axios.post(
        "https://api.viscadia.com/api/forms/common-form/events",
        payload
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      setFormData({
        name: "",
        company: "",
        email: "",
        job_title: "",
        contact_number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
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
          {/* Hero Section */}
          <div className="relative sm:mb-0 mb-3   mx-auto w-full  flex   flex-col-reverse lg:flex-row">
            <div className="md:w-[69%] ">
              <div className="sm:absolute sm:p-0 p-4 top-32  flex-col items-start text-left logoeventsize  eventsbanner">
                <img
                  src={event.logo}
                  alt="event logo"
                  className="sm:w-60 sm:h-60 w-52 h-54 mb-4"
                />

                {/* Title */}
                <h1 className="text-[#133D66] text-[18px] sm:text-[28px] font-light">
                  {event.title}
                </h1>
                {event.titletwo && (
                  <h2 className="text-[#133D66] text-[14px] sm:text-[28px] font-light leading-none">
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
            <div className="">
              {event.bgimageone ? (
                <img
                  src={event.bgimageone}
                  alt="Background One"
                  className="h-[200px] sm:h-[540px] w-[2250px]"
                />
              ) : null}
            </div>
          </div>

          {/* About Section */}
          {event.about && (
            <div className="font-sans text-[#2e2e2e]">
              <img src="/BIO_About.png" className="w-full block sm:hidden" />

              <section
                className="relative sm:min-h-[400px]  h-[280px] bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
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
            <div className="bg-white sm:px-0 px-5 flex mx-auto flex-col max-w-[1150px] py-10  ">
              {event.speaker.speaker && (
                <h2 className="text-center text-black text-3xl sm:text-4xl font-light mb-8">
                  {event.speaker.speaker}
                </h2>
              )}

              <div className="flex  flex-col mx-auto md:flex-row items-center justify-center gap-8">
                {(event.speaker.imgone || event.speaker.imgtwo) && (
                  <div className="sm:flex  gap-4">
                    {event.speaker.imgone && (
                      <a href={event.speaker.linkone || "#"}>
                        <img
                          src={event.speaker.imgone}
                          alt="Speaker 1"
                          className="lg:w-[185px]  lg:h-[185px] w-[150px] h-[150px]  rounded-full object-cover"
                        />
                      </a>
                    )}
                    {event.speaker.imgtwo && (
                      <a href={event.speaker.linktwo || "#"}>
                        <img
                          src="./events/shivangi-dhir.png"
                          alt="Speaker 2"
                          className="lg:w-[185px] sm:mt-0 mt-5 lg:h-[185px] w-[150px] h-[150px]   object-cover rounded-full"
                        />
                      </a>
                    )}
                  </div>
                )}

                <div className="max-w-md text-left">
                  {event.speaker.headerone && (
                    <h4 className="text-[#BD302B] hover:text-[#8b0e0a] text-lg font-normal mb-1">
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
                      className="inline-block bg-[#BD302B] hover:bg-[#8b0e0a] text-white text-base font-light py-2 px-6"
                    >
                      {event.speaker.button}
                    </a>
                  )}
                </div>
              </div>
              {event.speaker.headersix && (
                <p className="text-left mt-4  text-[#63666A] font-light">
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

      <CommonForm />
    </div>
  );
};

export default page;
