"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
const page = () => {
  const [showwebinar, setShowWebinar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const showdata = async () => {
      try {
        const showAllevents = await axios.get(
          "https://api.viscadia.com/api/v1/webinar?limit=1000"
        );
        setShowWebinar(showAllevents?.data?.data || []);
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
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 relative top-[45px] md:top-[65] text-white">
        <img src="./homeAssets/corevalue_homebanner.png" className="h-[100%] w-[100%] hidden md:block" />
        <img src="./homeAssets/mobile_homebanner.png" className="h-[100%] w-[100%] block md:hidden" />
         <div className="h-full w-full absolute top-[-50] md:top-[0] px-5 md:right-125 z-10 flex justify-center items-start sm:items-center flex-col">
          <div className="leading-snug md:leading-tight">
            <h2 className="text-[32px] md:text-[40px] lg:text-[40px] text-white sm:leading-14 font-light">
              Webinars
            </h2>
          </div>
        </div>
      </div>

      <div>
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
            <>
              {/* <div className="grid grid-cols-1 px-1 eventshomepage gap-y-8 sm:gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6 2xl:max-w-[1430px] max-w-[90%] sm:max-w-[81%] mx-auto"> */}
              <div className="grid grid-cols-1 px-1 eventshomepage gap-y-8 sm:gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6 2xl:max-w-[1150px] max-w-[90%] sm:max-w-[87%] mx-auto">
                {showwebinar?.map((webinar) => (
                  <div
                    key={`dynamic-${webinar?.slug}`}
                    className="flex flex-col space-y-6"
                  >
                    <Link href={`/webinars/${webinar?.slug}`}>
                      <img
                        src={webinar?.image_one}
                        alt={webinar?.heading_one}
                        className="object-cover sm:px-1 rounded transition-transform duration-300 ease-in-out hover:scale-110 w-full h-[210px] sm:h-[400px] max-h-[210px]"
                      />
                    </Link>
                    <h2
                      className="text-xl sm:mt-2 sm:text-[22px] font-light leading-7 mb-3"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {webinar?.sub_heading
                        ?.toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </h2>
                    <p className="text-[#63666A] sm:pt-4 font-light text-[16px] leading-relaxed flex-grow">
                      {(() => {
                        const text =
                          JSON.parse(webinar?.extra_stuff)?.sections?.[0]
                            ?.keyPoints?.[0] || "";
                        const words = text.split(" ");
                        return words.length > 58
                          ? words.slice(0, 58).join(" ") + "..."
                          : text;
                      })()}
                    </p>

                    <Link href={`/webinars/${webinar?.slug}`}>
                      <button
                        className="frm_button_submit sm:mt-8 cursor-pointer bg-[#BD302B] hover:bg-[#8b0e0a] text-white font-sans font-light text-[13px] px-[22px] py-[8px] frm_final_submit w-fit"
                        type="button"
                      >
                        VIEW WEBINAR
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default page;