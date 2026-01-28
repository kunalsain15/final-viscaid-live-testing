"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const page = () => {
  const params = useParams();
  const slug = params?.slug;
  const [webinarData, setWebinarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [add, setAdd] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    if (!value.trim()) {
      errorMsg = "This field is required.";
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMsg = "Enter a valid email address.";
        }
      }
      if (name === "phoneNumber") {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          errorMsg = "Enter a valid 10-digit phone number.";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };
  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await axios.get(
          `https://api.viscadia.com/api/v1/webinar/${slug}`,
        );
        if (res.data.success) {
          setWebinarData(res.data.webinar);
        } else {
          console.error("API returned success: false");
        }
      } catch (err) {
        console.error("Error fetching webinar:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchWebinar();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field]),
    );
    if (!formData.firstName || !formData.lastName || !formData.email) {
      console.log("Required fields missing");
      return;
    }
    if (Object.values(errors).some((err) => err)) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.viscadia.com/api/forms/common-form/webinar",
        {
          ...formData,
        },
      );
      setAdd(response.data);
      toast.success("Form submitted successfully!");
      setIsOpen(false);
      setIsConfirmationOpen(true);
      console.log("Confirmation modal open?", true);
    } catch (err) {
      console.error(
        "Submission error:",
        err?.response?.data || err.message || err,
      );
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const videoData = webinarData?.webinar_video
    ? JSON.parse(webinarData.webinar_video)
    : null;

  const extraStuff =
    typeof webinarData?.extra_stuff === "string"
      ? JSON.parse(webinarData.extra_stuff)
      : webinarData?.extra_stuff;
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen py-20">
          <img
            src="/__Iphone-spinner-1.gif"
            alt="Loading..."
            className="w-16 h-16"
          />
        </div>
      ) : (
        <div className="mt-11 md:mt-17 event_tab_alignt bg-white">
          
          <div className="sm:h-[300px] w-full sm:relative sm:flex">
            <div className="EventPagesectionOne left-[56%] sm:block hidden w-full h-[300px] object-cover absolute z-10">
              <img
                className="h-[100%] w-[20%]"
                src="/homeAssets/SectionOneBg2.png"
                alt="Background"
              />
            </div>
           <div className="relative sm:hidden block w-full h-[200px]">
              <img
                className="absolute top-0 left-[-40%] w-full !h-[202px] z-10"
                src="/events/SectionOneBg.png"
                alt="Background"
              />
              <img
                src={webinarData.image_one}
                alt={webinarData.heading_one}
                className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
              />
            </div>

            <div className="md:pl-[100px] sm:w-[90%] h-full px-4 flex flex-col sm:relative z-20 sm:ps-[70px]">
              <div className="md:pl-2.5">
                <div className="w-full sm:mt-[30px] sm:leading-8 mt-6 flex items-center">
                  <h1 className="text-black text-[20px] md:max-w-[500px] sm:text-[22px] lg:text-[30px] xl:text-[30px] font-light leading-[1.1] xl:whitespace-pre-line">
                    {webinarData.sub_heading}
                  </h1>
                </div>

                <div className="mt-3 mb-3 sm:space-y-0 md:max-w-[530px] space-y-2 sm:flex gap-10">
                  {extraStuff?.sections?.map((section, index) => (
                    <div key={index} className="mb-6">
                      <p className=" text-[18px] md:text-[24px] text-black font-light leading-7 mb-3 sm:mb-0">
                        {section.subHeading}
                      </p>
                      <ul className=" text-base text-[#63666A]  font-light leading-tight">
                        {section.keyPoints?.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:block hidden  sm:w-[50%] h-full rightSide z-0  justify-end relative">
              <div className="absolute rightimagewebinar top-0 left-0 h-full w-full">
                <img
                  src={webinarData?.image_one}
                  alt="Event"
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="sm:h-[250px] h-full w-full relative sm:flex">
            <div className="w-full sm:w-[39%] h-[220px] sm:h-[250px] relative hidden md:block">
              <img
                src={webinarData?.image_two}
                alt="heading"
                className="w-full h-full object-cover object-bottom"
              />

              <img
                src="/icons/red-stripecover.png"
                alt="icon"
                className="absolute top-0 right-[-4px] h-full w-auto"
              />
            </div>

            <div className="w-full sm:w-[65%] min-h-[250px] sm:h-[250px] bg-[#BD302B] flex items-center">
              <div className="w-full px-5 sm:px-0 flex justify-center event_text_align">
                <div className="sm:w-[98%] py-6 sm:py-[0px] space-y-3">
                  <h1 className="text-white font-light text-xl sm:text-[22px] lg:text-[32px]">
                    {webinarData?.heading_two || "Test"}
                  </h1>

                  <div className="space-y-3">
                    {webinarData?.key_points?.map((el, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <img
                          className="object-contain w-6 h-6 mt-[2px]"
                          src="/icons/keyPoints.png"
                          alt="icon"
                        />
                        <p className="text-white text-[12px] sm:text-[14px] font-light leading-relaxed">
                          {el}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {extraStuff?.webinarVideoStatus && (
            <div className="sm:min-h-[300px] mt-3 mb-2  sm:mt-9 sm:mb-0 w-full   p-5">
              <div className="w-full flex justify-center">
                <div className="text-[30px] font-light">Webinar Video</div>
              </div>

              <div className="w-full mt-4 flex justify-center items-center">
                <div className="relative w-full md:max-w-[740px] h-[300px] sm:h-[481px] bg-amber-200">
                  <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                    {isConfirmationOpen ? (
                      <video
                        controls
                        muted
                        loop
                        src={videoData?.videoUrl}
                        className="h-full object-cover w-[731px]  sm:h-[481px] mx-auto cursor-pointer"
                        poster={videoData?.thumbnail}
                      />
                    ) : (
                      <img
                        src={videoData?.thumbnail}
                        alt="Webinar Thumbnail"
                        className="h-full  w-[731px] object-contain  sm:h-[481px] mx-auto cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      />
                    )}
                    {/* Popup Form */}
                    {isOpen && (
                      <div className="w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center ">
                        <div className="h-[600px] max-h-[96vh] overflow-y-auto scrollbar-hide relative w-[90%] max-w-[560px] bg-white shadow-lg rounded-lg p-4 sm:p-8 flex flex-col items-center mx-4">
                          <style jsx>{`
                            .scrollbar-hide {
                              -ms-overflow-style: none;
                              scrollbar-width: none;
                            }
                            .scrollbar-hide::-webkit-scrollbar {
                              display: none;
                            }
                          `}</style>
                          <i
                            onClick={() => setIsOpen(false)}
                            className="ri-close-line absolute top-0 right-0 bg-black text-md text-white h-[25px] m-2 cursor-pointer w-[25px] flex justify-center items-center rounded-full"
                          ></i>

                          <form
                            className="w-full px-2 sm:px-6 space-y-4 sm:space-y-6 mt-4"
                            onSubmit={handleSubmit}
                          >
                            <p className="text-center text-[#BD302B] max-w-[400px] mx-auto text-[16px] sm:text-[20px] md:text-[32px] font-light">
                              To watch the video, please submit the form below:
                            </p>
                            <div className="mx-auto">
                              {/* Name */}
                              <div className="gap-3">
                                <label className="block text-left text-black font-medium mb-1">
                                  Name <span className="text-red-600">*</span>
                                </label>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                                  {/* First Name */}
                                  <div className="w-full">
                                    <input
                                      type="text"
                                      name="firstName"
                                      value={formData.firstName}
                                      onChange={handleChange}
                                      onBlur={(e) =>
                                        validateField(
                                          e.target.name,
                                          e.target.value,
                                        )
                                      }
                                      className={`w-full border px-3 py-2 focus:outline-none ${
                                        errors.firstName
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`}
                                    />
                                    <div className="flex justify-start">
                                      <span className="text-gray-500 mt-1 text-sm">
                                        First
                                      </span>
                                    </div>
                                    {errors.firstName && (
                                      <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                                        <img
                                          src="/webinars/caution.png"
                                          alt="error"
                                          className=""
                                        />
                                        <p className="pt-1">
                                          {" "}
                                          {errors.firstName}
                                        </p>
                                      </div>
                                    )}
                                  </div>

                                  {/* Last Name */}
                                  <div className="w-full">
                                    <input
                                      type="text"
                                      name="lastName"
                                      value={formData.lastName}
                                      onChange={handleChange}
                                      onBlur={(e) =>
                                        validateField(
                                          e.target.name,
                                          e.target.value,
                                        )
                                      }
                                      className={`w-full border px-3 py-2 focus:outline-none ${
                                        errors.lastName
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      }`}
                                    />
                                    <div className="flex mt-1 justify-start">
                                      <span className="text-gray-500 text-sm">
                                        Last
                                      </span>
                                    </div>

                                    {errors.lastName && (
                                      <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                                        <img
                                          src="/webinars/caution.png"
                                          alt="error"
                                          className=""
                                        />
                                        <p className="pt-1">
                                          {" "}
                                          {errors.lastName}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Work Email */}
                            <div className="text-left">
                              <label className="block text-black font-medium mb-1">
                                Work Email{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={(e) =>
                                  validateField(e.target.name, e.target.value)
                                }
                                className={`w-full border px-3 py-2 focus:outline-none ${
                                  errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                              {errors.email && (
                                <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                                  <img
                                    src="/webinars/caution.png"
                                    alt="error"
                                    className=""
                                  />
                                  <p className="pt-1">{errors.email}</p>
                                </div>
                              )}
                            </div>

                            {/* Company Name */}
                            <div className="text-left">
                              <label className="block text-black font-medium mb-1">
                                Company Name{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                onBlur={(e) =>
                                  validateField(e.target.name, e.target.value)
                                }
                                className={`w-full border px-3 py-2 focus:outline-none ${
                                  errors.company
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                              {errors.company && (
                                <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                                  <img
                                    src="/webinars/caution.png"
                                    alt="error"
                                    className=""
                                  />
                                  <p className="pt-1"> {errors.company}</p>
                                </div>
                              )}
                            </div>

                            {/* Telephone */}
                            <div className="text-left">
                              <label className="block text-black font-medium mb-1">
                                Telephone{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                onBlur={(e) =>
                                  validateField(e.target.name, e.target.value)
                                }
                                className={`w-full border px-3 py-2 focus:outline-none ${
                                  errors.phoneNumber
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                              {errors.phoneNumber && (
                                <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                                  <img
                                    src="/webinars/caution.png"
                                    alt="error"
                                    className=""
                                  />
                                  <p className="pt-1"> {errors.phoneNumber}</p>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-center">
                              <button
                                type="submit"
                                className="bg-[#BD302B] text-white px-8 py-2 rounded hover:bg-[#972622] transition duration-300 flex items-center justify-center"
                                disabled={loading}
                              >
                                {loading ? (
                                  <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 spin-slow"
                                    viewBox="0 0 100 101"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142
                                                100.591 50 100.591C22.3858 100.591
                                                0 78.2051 0 50.5908C0 22.9766 22.3858
                                                0.59082 50 0.59082C77.6142 0.59082
                                                100 22.9766 100 50.5908ZM9.08144
                                                50.5908C9.08144 73.1895 27.4013
                                                91.5094 50 91.5094C72.5987 91.5094
                                                90.9186 73.1895 90.9186
                                                50.5908C90.9186 27.9921 72.5987
                                                9.67226 50 9.67226C27.4013
                                                9.67226 9.08144 27.9921 9.08144
                                                50.5908Z"
                                      fill="transparent"
                                    />
                                    {/* Spinning part white */}
                                    <path
                                      d="M93.9676 39.0409C96.393
                                                38.4038 97.8624 35.9116
                                                97.0079 33.5539C95.2932
                                                28.8227 92.871 24.3692
                                                89.8167 20.348C85.8452
                                                15.1192 80.8826 10.7238
                                                75.2124 7.41289C69.5422
                                                4.10194 63.2754 1.94025
                                                56.7698 1.05124C51.7666
                                                0.367541 46.6976 0.446843
                                                41.7345 1.27873C39.2613
                                                1.69328 37.813 4.19778
                                                38.4501 6.62326C39.0873
                                                9.04874 41.5694 10.4717
                                                44.0505 10.1071C47.8511
                                                9.54855 51.7191 9.52689
                                                55.5402 10.0491C60.8642
                                                10.7766 65.9928 12.5457
                                                70.6331 15.2552C75.2735
                                                17.9648 79.3347 21.5619
                                                82.5849 25.841C84.9175
                                                28.9121 86.7997 32.2913
                                                88.1811 35.8758C89.083
                                                38.2158 91.5421 39.6781
                                                93.9676 39.0409Z"
                                      fill="white"
                                    />
                                  </svg>
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                          </form>

                          <ToastContainer
                            position="top-right"
                            autoClose={2000}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {extraStuff?.speakersStatus && webinarData?.speaker?.length > 0 && (
            <div className="h-auto mt-0 mb-8 sm:mt-20 xl:mb-40 sm:mb-24 w-full sm:pt-0">
              <h2 className="text-black text-[24px] text-center sm:text-[34px] font-light mb-6">
                Speaker
              </h2>
              <div className="flex flex-wrap justify-center  sm:px-0 mb-10 gap-5 max-w-[90%] sm:max-w-[85%] 2xl:max-w-[1400px] mx-auto place-items-center">
                {webinarData?.speaker?.map((el, index) => (
                  <>
                    {el?.profileUrl ? (
                      <>
                        {" "}
                        <Link
                          key={index}
                          href={
                            el?.profileUrl ? `/leadership/${el.profileUrl}` : ""
                          }
                          className="flex flex-col items-center gap-3
                        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                        hover:shadow-[0_6px_25px_rgba(0,0,0,0.25)] transition-shadow
                        duration-300 rounded-md bg-white overflow-hidden sm:w-[350px] sm:h-[300px]"
                        >
                          <div className="relative w-full h-[260px] overflow-hidden bg-[#FFF5F5] flex items-center justify-center group">
                            <img
                              src={
                                el?.image ||
                                "https://viscadia.com/casestudies/KT-Headshot.png"
                              }
                              alt={el?.full_name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between px-5 py-6">
                              <p className="text-[14px] text-white text-left font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {el.introduction}
                              </p>
                              <span className="text-[14px] text-white opacity-0 font-light group-hover:opacity-100 transition-opacity duration-500">
                                Click to learn more &gt;
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 pb-4 text-center px-3">
                            <p className="text-[#BD302B] hover:text-[#e91815] font-roboto text-[20px] font-normal transition-colors">
                              {el?.fullName}
                            </p>
                            <p className="text-black text-[14px] px-1 font-normal">
                              {el?.designation}
                            </p>
                          </div>
                        </Link>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div
                          key={index}
                          href={
                            el?.profileUrl ? `/leadership/${el.profileUrl}` : ""
                          }
                          className="flex flex-col items-center gap-3
                        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                        hover:shadow-[0_6px_25px_rgba(0,0,0,0.25)] transition-shadow
                        duration-300 rounded-md bg-white overflow-hidden sm:w-[350px] sm:h-[300px]"
                        >
                          <div className="relative w-full h-[260px] overflow-hidden bg-[#FFF5F5] flex items-center justify-center group">
                            <img
                              src={
                                el?.image ||
                                "https://viscadia.com/casestudies/KT-Headshot.png"
                              }
                              alt={el?.full_name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#BD302BB3] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between px-5 py-6">
                              <p className="text-[14px] text-white text-left font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {el.introduction}
                              </p>
                              <span className="text-[14px] text-white opacity-0 font-light group-hover:opacity-100 transition-opacity duration-500">
                                Click to learn more &gt;
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 pb-4 text-center px-3">
                            <p className="text-[#BD302B] font-roboto text-[20px] font-normal hover:text-[#e91815] transition-colors">
                              {el?.fullName}
                            </p>
                            <p className="text-black text-[14px] px-1 font-normal">
                              {el?.designation}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
          )}
          {isConfirmationOpen && (
            <div className="h-full w-full fixed top-0 left-0 bg-[#00000080] z-50 flex justify-center items-center">
              <div className="relative w-[560px] bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
                <i
                  onClick={() => setIsConfirmationOpen(false)}
                  className="ri-close-line absolute top-0 right-0 bg-black text-md text-white h-[25px] m-2 cursor-pointer w-[25px] flex justify-center items-center rounded-full"
                ></i>
                <h2
                  className="text-[#bd302b] mb-2 text-center font-light text-[32px] leading-[39px] font-roboto"
                  style={{ textShadow: "0px 0px 0px rgba(2, 2, 2, 0.23)" }}
                >
                  Thank you for submitting! <br />
                  Click below to watch the webinar:
                </h2>

                <div className="bg-[#e0ffc7] border border-[#b4d39b] w-[500px] p-6 mx-auto flex flex-col items-center">
                  <p className="text-[#63666A] text-base font-light mb-4 text-center">
                    Thank you for submitting.
                  </p>
                  <a
                    href={videoData?.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#BD302B] text-white px-6 py-2 rounded transition duration-300"
                  >
                    Please click here to watch webinar
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default page;
