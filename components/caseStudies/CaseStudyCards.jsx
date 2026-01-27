"use client";
import { caseStudyCardsData, whitePapersData } from "@/data/caseStudy";
import Link from "next/link";
import DownloadWhitePaper from "../resuseable/DownloadWhitepaper";
import { useState, useEffect } from "react";
import PredownloadPopup from "../resuseable/PredownloadPopup";
import axios from "axios";

const CaseStudyCards = () => {
  const makeSlug = (str) =>
    str
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const [pdfLink, setPdfLink] = useState(null);
  const [isDownloadFomrOpen, setisDownloadFomrOpen] = useState(false);
  const [isSubbmited, setIsSubmited] = useState(false);
  const [subTitle, setSubtitle] = useState("");
  const [request_type, setRequest_type] = useState("casestudy");
  const [document_id, setDocument_id] = useState(0);
  const [caseStudyCardsData, setCaseStudyCardsData] = useState([]);
  const [whitePapersData, setWhitePapersData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.viscadia.com/api/v1/casestudy?limit=100")
      .then((res) => {
        setCaseStudyCardsData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Error fetching case studies:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchWhitePapers = async () => {
      try {
        const response = await fetch(
          "https://api.viscadia.com/api/v1/whitepaper"
        );
        const data = await response.json();
        setWhitePapersData(data?.data || []); // ensure correct array
      } catch (error) {
        console.error("Error fetching white papers:", error);
      }
    };

    fetchWhitePapers();
  }, []);

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
  return (
    <div>
      {isDownloadFomrOpen && (
        <DownloadWhitePaper
          setIsSubmited={setIsSubmited}
          request_type={request_type}
          document_id={document_id}
          subTitle={subTitle}
          setisDownloadFomrOpen={setisDownloadFomrOpen}
          pdfLink={pdfLink}
        />
      )}
      {isSubbmited && (
        <PredownloadPopup
          title={subTitle}
          setIsSubmited={setIsSubmited}
          link={pdfLink}
        />
      )}

      <div
        id="case-study"
        className="md:max-w-6xl about_tab_align sm:px-0 px-5 mx-auto min-h-[500px] py-11 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15"
      >
        {caseStudyCardsData?.map((el, index) => (
          <div key={index} className="min-h-[600px] bg-white flex flex-col">
            <Link
              href={`/case-studies/${el?.slug}`}
              className="h-[350px] w-full"
            >
              <img
                src={el?.img}
                alt={el?.title}
                className="w-full h-full object-cover hover:scale-[1.08] transition-transform duration-300 ease-in-out"
              />
            </Link>

            <div className="flex flex-col justify-between py-5 mt-1">
              <div className="min-h-[150px]">
                <h2 className="text-[22px] leading-[24px] font-light text-black">
                  {el?.main_subtitle?.toUpperCase()}
                </h2>

                <p className="text-[16px] text-[#4E4E4E] md:leading-[22px] font-light mt-4">
                  {(() => {
                    const text = el?.title || "";
                    const words = text.split(" ");
                    return words.length > 40
                      ? words.slice(0, 40).join(" ") + "..."
                      : text;
                  })()}
                </p>
              </div>
              <Link
                href={`/case-studies/${el?.slug}`}
                className="md:mt-0 mainBg text-white text-[16px] font-light px-6 py-[10px] w-fit"
              >
                VIEW CASE STUDY
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#EEEEEE]">
        <div
          id="white-paper"
          className="md:max-w-6xl about_tab_align sm:px-0 px-3 mx-auto min-h-[500px] py-11 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-25 gap-2"
        >
          {whitePapersData?.map((el, index) => (
            <div key={index} className=" min-h-[600px]  flex flex-col">
              <div className="sm:h-[350px] sm:px-0 px-5 w-full">
                <img
                  onClick={() => {
                    setSubtitle(el?.title);
                    setRequest_type("whitepaper");
                    setDocument_id(el?.id);
                    setisDownloadFomrOpen(true);
                    setPdfLink(el?.pdf);
                  }}
                  src={el?.img}
                  alt={el?.title}
                  className="sm:w-[100%] cursor-pointer h-full  hover:scale-[1.08] transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="flex sm:px-0 px-3 flex-col justify-between py-5">
                <div className="flex-1 flex flex-col justify-between min-h-[120px]">
                  <h2 className="text-xl sm:text-[22px] leading-[24px] font-light text-black">
                    {el?.heading}
                  </h2>
                  <p className="text-base sm:text-[16px] text-[#4E4E4E] md:leading-[22px] font-light mt-0 md:mt-3 mb-5 md:mb-0">
                    {el?.sub_heading}
                  </p>
                </div>
                <div
                  onClick={() => {
                    setSubtitle(el?.title);
                    setRequest_type("whitepaper");
                    setDocument_id(el?.id);
                    setisDownloadFomrOpen(true);
                    setPdfLink(el?.pdf);
                  }}
                  className="sm:mt-3 cursor-pointer mainBg text-white text-[16px] font-light px-6 py-[10px] w-fit"
                >
                  VIEW WHITE PAPER
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCards;
