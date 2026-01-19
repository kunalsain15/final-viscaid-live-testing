"use client";
import { useEffect, useState } from "react";
import { pressReeaseData } from "@/data/newsPressReleases";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { notFound } from "next/navigation";
const IMAGE_SRC =
  "https://viscadia.com/wp-content/uploads/2025/02/Viscadia-Named-a-Vault-Top-Consulting-Firm-2025-1536x803.png";

export default function ViscadiaPressRelease({ imageSrc = IMAGE_SRC }) {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const makeSlug = (str) =>
    str
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const staticData = pressReeaseData.find(
    (item) => makeSlug(item.title) === slug
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.viscadia.com/api/v1/article/${slug}`
        );
        if (res.data?.data) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <img
          src="/__Iphone-spinner-1.gif"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  }

  if (!data) {
    notFound();
  }
  const makeLinksClickable = (text = "") => {
    if (typeof text !== "string") return text;

    return text.replace(/www\.viscadia\.com/gi, () => {
      return `<a href="https://viscadia.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-[#3452FF] underline">
              www.viscadia.com
            </a>`;
    });
  };

  return (
    <div>
      <main className="mx-auto mt-[80px] md:mt-[65px] md:max-w-6xl md:py-12">
        <Link
          href="/news-press-releases"
          className="h-[43px] sm:mx-0 mx-5 w-[199px] px-0 mt-2 mainBg font-normal text-[14px] flex justify-center items-center gap-1 shadow-[0_2.54px_14.2px_0_#00000005] mb-5"
        >
          <i className="ri-arrow-left-s-line font-bold text-2xl"></i> News &
          Press Releases
        </Link>

        <h1 className="text-xl sm:mt-0 mt-2 sm:text-3xl sm:px-0 px-5 md:text-4xl font-light leading-tight">
          {data?.section_three_details
            ? JSON.parse(data.section_three_details)?.title
            : ""}
        </h1>

        <div className="mt-3 flex sm:px-0 px-5 flex-wrap items-center gap-1 text-[17px] font-light text-neutral-600">
          <span className="text-black font-light">{data?.date}</span>
          <span className="h-4 bg-stone-400 w-[1px]" />

          <span className="text-black font-light">
            {data?.data?.type || "Press Release"}
          </span>
          <span className="h-4 bg-stone-400 w-[1px]" />
          <span className="text-black font-light">{data?.duration}</span>
        </div>
        <div className="mt-6 sm:px-0 px-5 overflow-hidden">
          <img
            src={data.section_one_image}
            alt={data.title || "Section image"}
            className="max-h-full w-full shadow-sm object-cover"
          />
        </div>

        <h1 className="text-base sm:text-[26px] text-[#3452FF] font-light mt-4 leading-tight">
          {data?.titlethree}
        </h1>

        <article className="prose prose-neutral sm:px-0 mb-21 px-5 max-w-none md:prose-lg mt-3">
          {data?.section_two_details &&
            (() => {
              let sectionTwo = [];
              try {
                sectionTwo = JSON.parse(data.section_two_details || "[]");
              } catch (error) {
                sectionTwo = [];
              }

              return sectionTwo.map((sec, i) => (
                <div key={i}>
                  {sec.heading && (
                    <h2 className="text-2xl font-light mb-4 mt-10 sm:mt-21">
                      {sec.heading}
                    </h2>
                  )}
                  {sec.texts?.map((text, j) => (
                    // <p
                    //   key={j}
                    //   className="mb-4 text-[16px] text-[#63666A] font-light"
                    // >
                    //   {text}
                    // </p>
                    <p
                      key={j}
                      className="mb-4 text-[16px] text-[#63666A] font-light"
                      dangerouslySetInnerHTML={{
                        __html: makeLinksClickable(text),
                      }}
                    ></p>
                  ))}
                </div>
              ));
            })()}
        </article>

        {/* Media contact */}
        {/* <h2 className="text-[24px] sm:px-0 px-3 mb-8 mt-24 text-[#000000] font-light">
          Media Contact
        </h2> */}

        <section
          id="contact"
          className="
    relative px-5 md:px-0 mt-25 grid gap-4 bg-white py-6 md:grid-cols-2
    before:content-[''] before:absolute before:top-0 before:left-1/2
    before:h-[1px] before:w-[90%] before:-translate-x-1/2
    before:bg-black
    md:before:w-full
  "
        >
          {/* <section
          id="contact"
          className="px-5 md:px-0 mt-25 grid gap-4 border-t-2  bg-white py-6 md:grid-cols-2"
        > */}
          <div>
            <p className="text-[#63666A] sm:px-0 px-0 font-light">
              For more information, please contact our media relations team.
            </p>
          </div>

          <div className="flex justify-start sm:px-0 px-0 sm:justify-end">
            <div>
              <h3 className="text-[24px] font-light">Contact</h3>

              {data?.info_email &&
                (() => {
                  let info = null;
                  try {
                    info = JSON.parse(data.info_email);
                  } catch (e) {
                    console.error("Invalid info_email JSON:", e);
                  }

                  return (
                    <div className="mt-3 space-y-1 text-sm text-neutral-700">
                      <p className="font-light text-[18px]">{info?.name}</p>
                      <p>
                        <a
                          href={info?.email ? `mailto:${info.email}` : "#"}
                          className="text-[#3452FF] text-[16px] font-light"
                        >
                          {info?.email}
                        </a>
                      </p>
                    </div>
                  );
                })()}

              <h3 className="text-[16px] font-normal text-[#63666A] mt-4">
                Viscadia | Forecasting Confidence
              </h3>

              <div className="mt-3 text-sm text-neutral-700">
                <p className="text-[16px] font-normal text-[#63666A]">
                  Visit us on
                </p>

                {data?.links?.map((item, index) => (
                  <p key={index}>
                    <a
                      href={item.link}
                      className="text-[#3452FF] text-base underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
