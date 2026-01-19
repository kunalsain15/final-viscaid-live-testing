"use client";
import React, { useState } from "react";

const ViscadiaHero = () => {
  const [play, setPlay] = useState(false);
  const points = [
    {
      title: "PROBLEM SOLVING",
      desc: "We recommended innovative solutions supported with a proof-of-concept demo wherever necessary to solve for existing business problems.",
      img: "/webinars/download.webp",
    },
    {
      title: "HEALTH CHECK REPORT",
      desc: "An audit of various models, platforms, and processes was conducted to identify opportunities for enhancement.",
      img: "/webinars/download-1.webp",
    },
    {
      title: "TRAININGS & KNOWLEDGE SHARING",
      desc: "We discussed on trainings, workshops, and knowledge sharing sessions to upskill various teams on technical and analytical fronts.",
      img: "/view-2/download-2.webp",
    },
  ];
  const testimonials = [
    {
      text: `Thank you for working and helping us with the valuable market insights we were looking for. The data you've collected is very plausible and I appreciate the clinical approach you took. We're glad and grateful that Viscadia came up with the VIEW initiative and decided to induct us and help with our problem statement. These insights shall help us make informed decisions to create a sustainable and impactful initiative improving the education of visually impaired students worldwide.`,
      name: "Saif Shaikh",
      title: "Co-Founder and Director ",
      titleone: "Thinkerbell Labs",
      image: "/view-2/Frame-11-6.png",
    },
    // Add more testimonials if needed
  ];
  return (
    <>
      <div className="relative  pt-[100px] sm:pt-[190px] min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/view-2/GettyImages-614436826-scaled-1-1-1-1.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 px-4 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/view-2/xbanner_logo.webp.pagespeed.ic_.fqz2F0JNvy.webp"
            alt="Viscadia Logo"
            className="mb-6 max-w-[300px] w-full"
          />

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            <span className="block">Viscadia Innovation &</span>
            <span className="block">Enterprise Week</span>
          </h1>

          {/* Date */}
          <div className="text-xl md:text-2xl text-white mb-8 font-light">
            June 12 – 16, 2023
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-lg md:text-xl text-white font-light leading-relaxed">
            A week-long flagship event to celebrate the power of consulting to
            drive innovation and growth in the life sciences industry,
            <br />
            all at a zero-dollar invoice.
          </div>

          {/* Decorative Dots */}
          <div className="flex justify-center space-x-2 mt-12">
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
            <div className="w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        {/* Heading */}
        <h2 className="text-center text-black font-light text-3xl md:text-4xl mb-12">
          Key Points Discussed
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div key={idx} className=" flex flex-col items-center text-center">
              <img
                src={point.img}
                alt={point.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-[#BD302B] font-light text-lg mb-2">
                {point.title}
              </h4>
              <p className="text-black font-light text-sm">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-4 mt-10 ">
        {/* Heading */}
        <h2 className="text-2xl sm:text-[48px] font-light mb-4">
          About the <span className="font-bold">Event</span>
        </h2>

        {/* Video Section */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow">
          {!play ? (
            <button
              onClick={() => setPlay(true)}
              className="w-full h-full flex items-center justify-center relative"
            >
              <img
                src="./charityWater/About-the-event-Featured-Image-view.jpg"
                alt="About the Event"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                {/* White-bordered play button */}
                <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
                  <div className="ml-1 w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></div>
                </div>
              </div>
            </button>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1_qHIWEh_mA?autoplay=1"
              title="About the Event"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <div className="flex max-w-6xl mt-[26px] lg:px-0 px-3 mb-[36px] sm:mb-[72px] mx-auto flex-wrap w-full bg-white justify-center">
        {/* Section 1: Who we serve */}
        <div className="flex flex-col lg:px-0 px-3 items-center mt-[32px] w-full md:w-1/2">
          <h2 className="text-[18px] sm:text-[34px] text-[#163D66] font-light mb-4">
            Who we serve
          </h2>
          <img
            src="/events/xclient-feedback.png.pagespeed.ic_.kr2fitltdn.webp"
            alt="Partners Logo"
            className="lg:max-w-[801px] h-auto "
          />
        </div>

        {/* Section 2: What they say about us */}
        <div className="flex flex-col items-center py-8 w-full md:w-1/2">
          <h2 className="text-[18px] sm:text-[34px] text-[#163D66] font-light mb-4">
            What they say about us
          </h2>
          <img
            src="/events/xpartners-logo.jpg.pagespeed.ic_.lfbalxpa5p-1024x451.webp"
            alt="Client Feedback"
            className=" h-auto"
          />
        </div>
      </div>

      <section className="flex justify-center items-center  bg-[#f3f3f3]">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="  flex flex-col items-center text-center mb-6 "
              >
                <div className="space-y- ">
                  <img
                    src="/view-2/Frame-45.png"
                    className="w-20 h-20 mx-auto"
                  />
                  <p className="text-[#BD302B] lg:max-w-[870px] mx-auto font-light text-base sm:text-xl mt-7 mb-9">
                    {t.text}
                  </p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mb-4 object-cover mx-auto"
                  />
                  <h3 className="font-semibold text-black text-xl">{t.name}</h3>
                  <p className="text-black font-light text-md sm:text-lg">
                    {t.title}
                  </p>
                  <p className="text-black font-light text-md sm:text-lg">
                    {t.titleone}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="elementor-widget-container lg:px-0 px-3 mt-9 mb-5 text-[14px] font-light text-[#63666A]">
            If you are interested in learning more about Viscadia and how we can
            create a positive impact on a global scale, please feel free to
            reach out to us at
            <a
              href="mailto:info@viscadia.com"
              style={{
                color: "blue",
                textDecoration: "underline",
                marginLeft: "4px",
                fontWeight: "300",
              }}
            >
              info@viscadia.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViscadiaHero;
