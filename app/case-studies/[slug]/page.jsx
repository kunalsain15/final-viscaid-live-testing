"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import DownloadWhitePaper from "@/components/resuseable/DownloadWhitepaper";
import PreddownloadPopupCaseStudy from "@/components/resuseable/PreddownloadPopupCaseStudy";

const CaseStudy = () => {
  const [caseStudyData, setCaseStudyData] = useState(null);
  const [isDownloadFormOpen, setIsDownloadFormOpen] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [request_type, setRequest_type] = useState("");
  const [document_id, setDocument_id] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.viscadia.com/api/v1/casestudy/${id}`,
        );

        if (res.data?.success) {
          setCaseStudyData(res.data.caseStudy);
        } else {
          toast.error(res.data?.message || "Something went wrong!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data!");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

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

  if (!caseStudyData) return null;

  return (
    <>
      {/* Banner */}
      <div className="h-[400px] md:h-[300px] w-full mb-12 md:mb-16 flex items-center relative top-[45px] md:top-[65px] text-white">
        <img
          src="/homeAssets/corevalue_homebanner.png"
          className="h-full w-full hidden md:block"
          alt="Banner"
        />
        <img
          src="/homeAssets/mobile_homebanner.png"
          className="h-full w-full block md:hidden"
          alt="Mobile Banner"
        />

        <div className="absolute inset-0 flex justify-center md:items-center items-start mt-12 md:mt-0">
          <div className="w-full max-w-6xl mx-auto px-5 md:px-0 about_tab_align">
            <h2 className="text-[24px] md:text-[32px] font-extralight">
              Case Studies
            </h2>
            <h3 className="text-[32px] md:text-[40px] font-light">
              {caseStudyData.main_subtitle
                ?.toLowerCase()
                ?.replace(/\b\w/g, (c) => c.toUpperCase())}
            </h3>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-24 md:mt-44 px-5 md:px-0 md:max-w-6xl mx-auto">
        <div className="flex md:h-[250px] case_studies_tabs_align flex-col relative top-[-30] lg:flex-row bg-white shadow-[2px_2px_22px_0px_#0000002E] my-10 overflow-hidden">
          <img
            src={caseStudyData.img}
            alt="Case Study"
            className="object-cover"
          />

          <div className="p-5 lg:py-4 case_studies_tabs_align_content">
            <h1 className="text-[22px] lg:text-[24px] font-light case_studies_tabs_align_content_heading">
              {caseStudyData.title}
            </h1>

            <div className="space-y-6 mt-6 therapeutic-areas_tab">
              {caseStudyData.texts?.map((text, i) => (
                <p key={i} className="text-[16px] text-[#4E4E4E] font-light case_studies_tabs_align_content_para">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highlight */}
      <div className="bg-[#F8F8F8] px-3 md:px-0 -mt-[120px] h-[235px] flex items-center justify-center">
        <p className="text-[20px] pt-12 leading-[22px] md:leading-[34px] sm:text-[26px] font-light text-center md:p-[65px] md:max-w-7xl text-[#BD2F2C]">
          {(() => {
            try {
              return JSON.parse(caseStudyData.extra_stuff || "{}")?.line || "";
            } catch {
              return "";
            }
          })()}
        </p>
      </div>

      {/* Challenges */}
      <Section
        title="CHALLENGES"
        icon="/caseStudiesAssets/detailsImages/Caution-2.png"
        data={caseStudyData.challenges}
      />

      {/* Approach */}
      <Section
        title="APPROACH"
        icon="/caseStudiesAssets/detailsImages/Approach-1.png"
        data={caseStudyData.approach}
      />

      {/* Outcomes */}
      <Section
        title="OUTCOMES"
        icon="/caseStudiesAssets/detailsImages/Outcomes-2.png"
        data={caseStudyData.outcomes}
      />

      {/* Download */}
      <div className="h-[230px] flex justify-center items-center">
        <button
          onClick={() => {
            setPdfLink(caseStudyData.pdf);
            setRequest_type("casestudy");
            setDocument_id(caseStudyData.id);
            setIsDownloadFormOpen(true);
          }}
          className="mainBg text-[17px] font-light px-4 py-2"
        >
          DOWNLOAD CASE STUDY
        </button>
      </div>

      {isDownloadFormOpen && (
        <DownloadWhitePaper
          request_type={request_type}
          document_id={document_id}
          title="Case Study"
          subTitle={caseStudyData.title}
          setisDownloadFomrOpen={setIsDownloadFormOpen}
          setIsSubmited={setIsSubmited}
        />
      )}

      {isSubmited && (
        <PreddownloadPopupCaseStudy
          setIsSubmited={setIsSubmited}
          link={pdfLink}
        />
      )}
    </>
  );
};

const Section = ({ title, icon, data }) => (
  <div className="sm:max-w-6xl mx-auto px-5 md:px-0 pt-16">
    <div className="flex flex-col items-center">
      <img src={icon} className="h-[60px]" alt="" />
      <h3 className="text-[28px] mt-5 font-light">{title}</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 about_tab_align">
      {data?.map((item, i) => (
        <div key={i}>
          {item.img && <img src={item.img} className="h-[60px]" alt="" />}
          <h3 className="text-[23px] mt-3 font-light text-[#BD2F2C]">
            {item.title}
          </h3>
          <ul className="list-disc ps-5">
            {item.texts?.map(
              (text, j) =>
                text && (
                  <li key={j} className="my-2 text-stone-500 font-light">
                    {text}
                  </li>
                ),
            )}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudy;
