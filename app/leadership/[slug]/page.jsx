"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { notFound } from "next/navigation";
const page = () => {
  const { slug } = useParams();
  const [leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeader = async () => {
      try {
        const res = await axios.get(
          `https://api.viscadia.com/api/v1/leadership/${slug}`
        );
        if (res.data.success) {
          setLeader(res.data.data);
        } else {
          console.error("API returned success: false");
        }
      } catch (err) {
        console.error(
          "Error fetching leader:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchLeader();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen py-20">
        <img
          src="/__Iphone-spinner-1.gif"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  }
  if (!leader) {
    notFound();
  }

  return (
    <section className="bg-white mt-[60px] md:mt-[80px] text-gray-900 md:py-12">
      <div className="max-w-[1080px] md:max-w-6xl xl:px-0 px-0 sm:px-3 mx-auto">
        <div className="xl:px-0 pb-10 pt-5 sm:pt-0 sm:pb-6 md:pb-16 px-5 sm:px-2">
          <Link href="/leadership">
            <p className="text-base md:text-[22px] text-[#133D66] font-light hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 md:max-w-6xl mx-auto xl:px-0 px-5 sm:px-5 gap-8 md:gap-12 items-center justify-center">
          <div className="space-y-8  pt-8 sm:pt-0 col-span-12 md:col-span-7 order-2 md:order-1">
            <h1 className="text-4xl lg:text-6xl font-light text-black mb-3 leading-tight">
              {leader.banner_heading}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-black mb-6">
              {leader.designation}
            </h2>
            <p className="text-[#63666A] font-light text-base">
              {leader.banner_sub_heading}
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <a
                href={leader.hyper_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leader.logo || "/linkedin-4.png"}
                  alt="logo"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>

          <div className="flex sm:px-0 px-0 justify-center lg:justify-end col-span-12 md:col-span-5 order-1 md:order-2">
            {/* <div className="relative overflow-hidden shadow-lg"> */}
              <img
                src={leader.banner_image || ""}
                alt={leader.banner_heading}
                className="w-full h-auto object-cover"
              />
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="bg-[#ECECEC] sm:pt-16 sm:pb-16 pt-8 pb-8 px-5 md:px-5 mt-10 md:mt-14">
        <div className="mx-auto md:max-w-6xl lg:px-0 sm:px-5 about_tab_align px-0">
          <div className=" mx-auto">
            <h2 className="text-[34px] font-light text-black mb-4">
              Experience
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14">
              <div className="col-span-7 space-y-6">
                {leader.experience_subheading
                  ?.split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <p
                      key={index}
                      className={`text-[#63666A] font-light text-[14px] ${index !== 0 ? "mt-1" : ""
                        }`}
                    >
                      {line}
                    </p>
                  ))}
              </div>

              <div className="col-span-5">
                {/* <p className="text-black font-light text-[16px] mb-2">
                  {leader.title}
                </p> */}
                <div className="space-y-2">
                  {leader.company.map((c, i) => (
                    <p key={i} className="text-[15px] text-black font-light">
                      {c}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:gap-0 gap-8  md:grid-cols-3 xl:px-0 px-5 py-8 sm:pt-[72px] sm:pb-[50px] max-w-[1120px] justify-center mx-auto h-auto">
        {/* {leader.section_three.map((item, i) => (
          <div key={i} className="text-center space-y-5">
            <img
              src={item.img || "/casestudies/Therapuetic.png"}
              alt={item.heading || "Default Heading"}
              className="mx-auto max-h-[100px] object-contain"
            />
            <p className="text-xl text-black font-light">{item.heading}</p>
            {item.subHeading.map((sub, j) => {
              if (i === 2) {
                let parsed;
                try {
                  parsed = JSON.parse(sub);
                } catch {
                  parsed = null;
                }
                if (parsed && typeof parsed === "object") {
                  return (
                    <div key={j}>
                      {parsed.heading && (
                        <p className="text-base text-black font-light">
                          {parsed.heading}
                        </p>
                      )}
                      {parsed.keypoint && (
                        <p className="text-[14px] text-stone-500 font-light italic">
                          {parsed.keypoint}
                        </p>
                      )}
                    </div>
                  );
                }
                return (
                  <p key={j} className="text-base text-black font-light">
                    {sub}
                  </p>
                );
              }
              return (
                <p key={j} className="text-base text-black font-light">
                  {sub}
                </p>
              );
            })}
          </div>
        ))} */}
        {leader.section_three.map((item, i) => (
          <>
            {item.show !== false && (
              <div key={i} className="text-center space-y-5">
                <img
                  src={item.img || "/casestudies/Therapuetic.png"}
                  alt={item.heading || "Default Heading"}
                  className="mx-auto max-h-[100px] object-contain"
                />
                <p className="text-xl text-black font-light">{item.heading}</p>
                {item.subHeading.map((sub, j) => {
                  if (i === 2) {
                    let parsed;
                    try {
                      parsed = JSON.parse(sub);
                    } catch {
                      parsed = null;
                    }
                    if (parsed && typeof parsed === "object") {
                      return (
                        <div key={j}>
                          {parsed.heading && (
                            <p className="text-base text-black font-light">
                              {parsed.heading}
                            </p>
                          )}
                          {parsed.keypoint && (
                            <p className="text-[14px] text-stone-500 font-light italic">
                              {parsed.keypoint}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return (
                      <p key={j} className="text-base text-black font-light">
                        {sub}
                      </p>
                    );
                  }
                  return (
                    <p key={j} className="text-base text-black font-light">
                      {sub}
                    </p>
                  );
                })}
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default page;
