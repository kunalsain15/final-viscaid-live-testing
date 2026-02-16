"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const LeadershipSection = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.viscadia.com/api/v1/leadership?limit=10000")
      .then((res) => {
        setLeaders(
          res.data.data.sort((a, b) => a.display_index - b.display_index)
        );
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto leaderhsipsection md:max-w-6xl py-2 mt-18 md:mt-0 px-5 lg:px-0 lg:py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 sm:gap-10 justify-items-center">
      {loading ? (
        <div className="flex justify-center items-center col-span-full py-20">
          <img
            src="/__Iphone-spinner-1.gif"
            alt="Loading..."
            className="w-16 h-16"
          />
        </div>
      ) : (
        leaders.map((person) => {
          const slug = person.slug;
          return (
            <Link key={person.id} href={`/leadership/${slug}`}>
              <div className="flex  pb-3 xl:px-0 px-2 hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex-col items-center cursor-pointer">
                <div className="relative group overflow-hidden shadow-lg">
                  <img
                    src={person.banner_image}
                    alt={person.banner_heading}
                    loading="lazy"
                    className="w-[460px] h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                    <p className="text-[14px] font-light leading-4">
                      {person.title}
                    </p>
                    <span className="mt-4 font-light text-[14px]">
                      Click to learn more &gt;
                    </span>
                  </div>
                </div>
                <div className="sm:mt-3 sm:mb-0 mt-5 mb-3 text-center">
                  <h2 className="text-[#BD2F2C]  hover:text-[#BD302b] hover:font-normal font-roboto text-xl sm:text-[18px] font-normal">
                    {person.banner_heading}
                  </h2>
                  <p className="text-[#4E4E4E] text-base sm:text-[14px] px-1 font-normal">
                    {person.designation}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default LeadershipSection;
