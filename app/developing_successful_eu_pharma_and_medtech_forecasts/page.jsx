"use client";
import axios from "axios";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINTS } from "@/endpoint";

const page = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [Add, setAdd] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
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
        }
      );
      setAdd(response.data);
      toast.success("Form submitted successfully!");
      setIsOpen(false);
      setIsConfirmationOpen(true);
    } catch (err) {
      console.error(
        "Submission error:",
        err?.response?.data || err.message || err
      );
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const webinars = [
    {
      id: 2,
      title:
        "THE DEVIL IS IN THE DETAILS - A CHECKLIST FOR DEVELOPING SUCCESSFUL EU PHARMA AND MEDTECH FORECASTS",
      slug: "developing_successful_eu_pharma_and_medtech_forecasts",
      bgimageone: "/webinars/Pills-Map.png",
      titlethree:
        "Forecasting the value of biopharmaceutical and Med Tech assets often begins with the US market due to its size and significance. However, successfully transitioning these forecasts to European markets or beginning with a Europe-first strategy requires careful consideration and expertise, often leading to redefinition of forecast structures and assumptions. Drawing on examples from our extensive forecasting experience, we outline a comprehensive checklist that highlights the critical differences between the US and European markets and forecasts.",
      about: {
        title: "KEY TAKEAWAYS:",
        points: [
          "EXPLORE KEY MARKET DIFFERENCES: UNDERSTAND HOW VARIATIONS IN MARKET LANDSCAPES, PATIENT AND PRESCRIBER ATTITUDES AND BEHAVIORS, REGULATION, AND MARKET ACCESS AND PRICING ENVIRONMENTS INFLUENCE THE STRUCTURE AND ASSUMPTIONS UNDERLYING EU FORECASTS.",
          "IDENTIFY SUCCESS FACTORS: PINPOINT THE MOST IMPORTANT ELEMENTS THAT CONTRIBUTE TO SUCCESSFUL FORECASTING IN EUROPEAN MARKETS.",
        ],
        image: "/webinars/pharmacysite.png",
      },
      forecasting: [
        { header: "Speaker" },

        {
          id: 1,
          image: "/casestudies/doug.webp",
          name: "Doug Willson",
          role: "Principal",
          description:
            "Douglas Doug Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market research experience within the life sciences industry.",
          click: "Click to learn more >",
          link: "/leadership-doug-willson",
        },
        {
          id: 2,
          image: "/casestudies/Rajat_DP.png",
          name: "Rajat Parmar",
          role: "Associate Principal",
          description:
            "Rajat leads Viscadia's European office in Lucerne, Switzerland, bringing over 8 years of expertise in forecasting, market research, and financial modelling in the life sciences industry.",
          click: "Click to learn more >",
          link: "/leadership-rajat-parmar",
        },
      ],
      webinarVideo: {
        text: "Webinar Video",
        image: "/webinars/Webinar-Cover-1536x828.png",
        alt: "Cover image for vaccine forecasting webinar",
      },
    },
  ];

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");

  return (
    <div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .spin-slow {
          animation: spin 1.5s linear infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .group {
          position: relative;
        }

        .group-hover\:opacity-100:hover {
          opacity: 1 !important;
        }

        .group-hover\:scale-110:hover img {
          transform: scale(1.1);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(189, 48, 43, 0.7);
          color: white;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .image-container:hover img {
          transform: scale(1.1);
        }

        .hero-container {
          display: flex !important;
          flex-direction: row !important;
          gap: 0;
          align-items: flex-start;
          width: 100%;
          margin-top: 80px;
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse !important;
            gap: 1rem;
            margin-top: 60px;
          }
        }

        .text-section {
          flex: 0 0 45%;
          padding-right: 2rem;
          padding-left: 1rem;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .text-section {
            flex: 0 0 auto;
            padding-right: 1rem;
            padding-left: 1rem;
            width: 100%;
          }
        }

        .image-section {
          flex: 1;
          min-width: 0;
        }

        @media (max-width: 768px) {
          .image-section {
            width: 100%;
          }
        }

        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 640px) {
          .flex-between {
            flex-direction: column;
          }
        }

        .flex-wrap-center {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2.5rem;
        }
      `}</style>

      {webinars.map((webinar, index) => (
        <div key={webinar.id || index}>
          <div className="flex 2xl:max-w-[2100px] mx-auto flex-col-reverse sm:flex-row mt-20">
            <div className="p-6 xl:mb-0 mb-3 xl:p-20 unpakingwebinar lg:p-12  max-w-[640px] ">
              <h2 className="text-xl md:text-[28px] font-light leading-8 lg:leading-9 mb-4">
                {webinar.title}
              </h2>
              <p className="text-base text-[#63666A] font-light leading-tight">
                {webinar.titlethree}
              </p>
            </div>
            <div className="image-section">
              <img
                src={webinar.image || webinar.bgimageone}
                alt={webinar.title}
                className="w-full h-full sm:border-none border-2 border-gray-200"
              />
            </div>
          </div>

          <div className="font-sans text-[#2e2e2e]">
            <img
              src="/webinars/pharmacysite.png"
              className="w-full block sm:hidden"
            />
            <section
              className="relative sm:min-h-[350px] h-[280px] bg-white bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
              style={{
                backgroundImage: `url(${webinar.about?.image})`,
              }}
            >
              <div className="container mx-auto px-6 sm:px-0 py-12 md:py-16 w-full">
                <div className="max-w-2xl ml-auto text-left">
                  <h2 className="text-white text-[18px] sm:text-[32px] font-light leading-tight">
                    {webinar.about?.title}
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {webinar.about?.points?.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-white font-light text-base leading-snug"
                      >
                        <img
                          src="/webinars/check-removebg-preview.png"
                          className="w-10 h-10 mr-3 sm:block hidden flex-shrink-0"
                          alt="check"
                        />
                        <span className="text-[12px] sm:text-[14px]">
                          {point}
                        </span>
                      </li>
                    )) || []}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="webinarvideo mt-[20px] mb-[30px] text-center px-4 sm:px-0">
            <h2 className="text-black text-[18px] sm:text-[34px] font-light">
              {webinar.webinarVideo.text}
            </h2>
            <h2 className="text-[#133D65] pb-6 text-[18px] sm:text-[34px] font-light">
              {webinar.webinarVideo.textone}
            </h2>
            {webinar.webinarVideo.image ? (
              <img
                src={webinar.webinarVideo.image}
                className="w-full sm:w-[731px] sm:h-[481px] px-3 h-[200px] mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                alt={webinar.webinarVideo.alt}
                onClick={() => setIsOpen(true)}
              />
            ) : null}

            {/* Popup Form */}
            {isOpen && (
              <div className="w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                <div className="h-[600px] max-h-[96vh] overflow-y-auto scrollbar-hide relative w-[90%] max-w-[560px] bg-white shadow-lg rounded-lg p-4 sm:p-8 flex flex-col items-center mx-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 bg-black text-white h-[25px] w-[25px] flex justify-center items-center rounded-full hover:bg-gray-800 transition z-10"
                  >
                    ✕
                  </button>

                  <form
                    className="w-full px-2 sm:px-6 space-y-4 sm:space-y-6 mt-4"
                    onSubmit={handleSubmit}
                  >
                    <p className="text-center text-[#BD302B] max-w-[400px] mx-auto text-[16px] sm:text-[20px] md:text-[32px] font-light">
                      To watch the video, please submit the form below:
                    </p>
                    <div className="mx-auto">
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
                                validateField(e.target.name, e.target.value)
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
                                  className="w-4 h-4"
                                />
                                <p>{errors.firstName}</p>
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
                                validateField(e.target.name, e.target.value)
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
                                  className="w-4 h-4"
                                />
                                <p>{errors.lastName}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Work Email */}
                    <div className="text-left">
                      <label className="block text-black font-medium mb-1">
                        Work Email <span className="text-red-600">*</span>
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
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                          <img
                            src="/webinars/caution.png"
                            alt="error"
                            className="w-4 h-4"
                          />
                          <p>{errors.email}</p>
                        </div>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="text-left">
                      <label className="block text-black font-medium mb-1">
                        Company Name <span className="text-red-600">*</span>
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
                          errors.company ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.company && (
                        <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                          <img
                            src="/webinars/caution.png"
                            alt="error"
                            className="w-4 h-4"
                          />
                          <p>{errors.company}</p>
                        </div>
                      )}
                    </div>

                    {/* Telephone */}
                    <div className="text-left">
                      <label className="block text-black font-medium mb-1">
                        Telephone <span className="text-red-600">*</span>
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
                            className="w-4 h-4"
                          />
                          <p>{errors.phoneNumber}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#BD302B] text-white px-8 py-2 rounded hover:bg-[#972622] transition duration-300 flex items-center justify-center disabled:opacity-60"
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
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="transparent"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="white"
                            />
                          </svg>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>

                  <ToastContainer position="top-right" autoClose={2000} />
                </div>
              </div>
            )}
          </div>

          <div className="mt-[20px] mb-[30px] px-3 sm:px-0 max-w-[1100px] mx-auto">
            <h2 className="text-black text-[18px] text-center sm:text-[34px] font-light mb-6">
              {webinar.forecasting[0].header}
            </h2>
            <div className="flex-wrap-center mb-2 sm:mb-48">
              {webinar.forecasting
                ?.filter((person) => person.id)
                .map((person) =>
                  person.link ? (
                    <Link key={person.id} href={person.link}>
                      <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                        <div className="group image-container">
                          <img src={person.image} alt={person.name} />
                          <div className="image-overlay">
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
                      <div className="image-container">
                        <img src={person.image} alt={person.name} />
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
            </div>
          </div>
        </div>
      ))}

      {isConfirmationOpen && (
        <div className="h-full w-full fixed top-0 left-0 bg-[#00000080] z-50 flex justify-center items-center">
          <div className="relative w-[90%] sm:w-[560px] bg-white shadow-lg rounded-lg p-8 flex flex-col items-center mx-4">
            <button
              onClick={() => setIsConfirmationOpen(false)}
              className="absolute top-2 right-2 bg-black text-white h-[25px] w-[25px] flex justify-center items-center rounded-full hover:bg-gray-800 transition z-10"
            >
              ✕
            </button>
            <h2
              className="text-[#bd302b] mb-2 text-center font-light text-[32px] leading-[39px] font-roboto"
              style={{ textShadow: "0px 0px 0px rgba(2, 2, 2, 0.23)" }}
            >
              To watch the video, please <br /> submit the form below:
            </h2>

            <div className="bg-[#e0ffc7] border border-[#b4d39b] w-full sm:w-[500px] p-6 mx-auto flex flex-col items-center mt-4">
              <p className="text-[#63666A] text-base font-light mb-4 text-center">
                Thank you for submitting.
              </p>
              <a
                href="https://www.youtube.com/embed/mgaBEJ-MrHY?si=yShL9-LEisiqKFTu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BD302B] text-white px-6 py-2 rounded transition duration-300 hover:bg-[#972622]"
              >
                Please click here to watch webinar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
