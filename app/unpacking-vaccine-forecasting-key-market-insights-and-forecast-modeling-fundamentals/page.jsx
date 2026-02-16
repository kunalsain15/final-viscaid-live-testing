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
  const webinars = {
    id: 1,
    title:
      "Unpacking Vaccine Forecasting: Key Market Insights and Forecast Modelling Fundamentals",
    slug: "unpacking-vaccine-forecasting-key-market-insights-and-forecast-modeling-fundamentals",
    bgimageone: "/webinars/vaccine.png",
    titlethree:
      "Join us for an in-depth webinar where we’ll explore the dynamic landscape of vaccine forecasting. We will examine the current and future market trends, share insights into the complexities of predicting vaccine demand, and break down the essential fundamentals of developing effective vaccine forecasting models. Don’t miss out on this opportunity to deepen your understanding of vaccine forecasts.",
    titletwo: "",
    titlefive: "",
    buttonview: "",
    buttonLink: "",
    about: {
      title: "KEY TAKEAWAYS:",
      points: [
        "UNDERSTAND CURRENT AND FUTURE TRENDS IN THE VACCINE MARKET LANDSCAPE",
        "IDENTIFY KEY DRIVERS INFLUENCING VACCINE DEMAND INCLUDING VACCINE TYPES, RECOMMENDATION SCHEDULES, AND VACCINATION UPTAKE/HESITANCY",
        "LEARN THE MODELLING FUNDAMENTALS ESSENTIAL FOR SUCCESSFUL VACCINE DEMAND FORECASTING",
      ],
      image: "/webinars/pharmacysite.png",
    },
    forecasting: [
      { header: "Speaker" },
      {
        id: 1,
        image: "/casestudies/KT-Headshot.png",
        name: "Krittika Tokas",
        role: "Associate principal",
        description:
          "Krittika is an Associate Principal located in our Delhi, India office.  She has 9+ years of consulting experience, specializing in forecasting for the pharmaceutical industry.",
        click: "Click to learn more >",
        link: "/krittika-tokas-associate-principal",
      },
    ],
    webinarVideo: {
      text: "Webinar Video",
      textone: "",
      image: "/webinars/Webinar-Cover-1536x828.png",
      imgageone: "",
      alt: "Cover image for vaccine forecasting webinar",
    },
  };

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
      <div className="flex 2xl:max-w-[2100px] mx-auto flex-col-reverse sm:flex-row mt-20">
        <div className="p-6 xl:mb-0 mb-3 xl:p-20 unpakingwebinar lg:p-12  max-w-[640px] ">
          <h2 className="text-xl md:text-[28px] font-light leading-8 lg:leading-9 mb-4">
            Unpacking Vaccine Forecasting: Key Market Insights and Forecast
            Modelling Fundamentals
          </h2>
          <p className="text-xl md:text-[28px] font-light text-[#63666A] mb-4">
            {webinars.titletwo}
          </p>
          <p className="text-base text-[#63666A] font-light leading-tight">
            {webinars.titlethree}
          </p>
          <p className="text-base text-[#63666A] mt-3 leading-tight">
            {webinars.titlefive}
          </p>

          {webinars.buttonview && webinars.buttonLink && (
            <a
              href={webinars.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="mt-6 cursor-pointer bg-[#BD302B] text-white font-sans font-light text-[18px] px-[23px] py-[7px]"
                type="button"
              >
                {webinars.buttonview}
              </button>
            </a>
          )}
        </div>
        <div>
          <img
            src={webinars.bgimageone}
            alt={webinars.title}
            className="w-full h-full sm:border-none border-2 border-gray-200 "
          />
        </div>
      </div>

      <div className="font-sans text-[#2e2e2e]">
        <img src="/BIO_About.png" className="w-full block sm:hidden" />
        <section
          key={webinars.id}
          className="relative sm:min-h-[350px] h-[280px]  bg-white bg-cover bg-no-repeat bg-right-top sm:bg-left-top flex items-center"
          style={{ backgroundImage: `url(${webinars.about.image})` }}
        >
          <div className="container p-2 mx-auto py-8 md:py-16 ">
            <div className="max-w-2xl ml-auto text-left">
              <h2 className="text-white text-2xl sm:text-[32px] font-light leading-tight">
                {webinars.about.title}
              </h2>
              <ul className="mt-6 space-y-5 px-6 sm:px-0">
                {webinars.about.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center  text-white font-light text-base leading-snug"
                  >
                    <img
                      src="/webinars/check-removebg-preview.png"
                      className=" w-10 h-10 mr-3 sm:block hidden"
                      alt="check"
                    />
                    <span className="text-[12px] sm:text-[14px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div ref={formRef} className="webinarvideo mt-15 mb-15 text-center">
        <h2 className="text-black text-[24px] sm:text-[34px] font-light">
          {webinars.webinarVideo.text}
        </h2>
        <h2 className="text-[#133D65] pb-6 text-[18px] sm:text-[34px] font-light">
          {webinars.webinarVideo.textone}
        </h2>
        {webinars.webinarVideo.image && (
          <img
            src={webinars.webinarVideo.image}
            className="w-[731px] sm:h-[481px] px-3 h-[200px] mx-auto cursor-pointer"
            alt={webinars.webinarVideo.alt}
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
                              className=""
                            />
                            <p className="pt-1"> {errors.firstName}</p>
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
                          <span className="text-gray-500 text-sm">Last</span>
                        </div>

                        {errors.lastName && (
                          <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                            <img
                              src="/webinars/caution.png"
                              alt="error"
                              className=""
                            />
                            <p className="pt-1"> {errors.lastName}</p>
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
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full border px-3 py-2 focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
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
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full border px-3 py-2 focus:outline-none ${
                      errors.company ? "border-red-500" : "border-gray-300"
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
                    Telephone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`w-full border px-3 py-2 focus:outline-none ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
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

              <ToastContainer position="top-right" autoClose={2000} />
            </div>
          </div>
        )}
      </div>

      <div className="mt-[20px] mb-[20px] max-w-[1100px] mx-auto">
        <h2 className="text-black text-[24px] text-center sm:text-[34px] font-light mb-6">
          {webinars.forecasting[0].header}
        </h2>

        <div className="flex flex-wrap px-3 sm:px-0 justify-center gap-10 mb-2 sm:mb-48">
          {webinars.forecasting
            ?.filter((person) => person.id)
            .map((person) =>
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

          {webinars.agendaforecasting?.map((item, index) => (
            <div
              key={index}
              className="col-span-full cursor-pointer flex justify-center w-full mt-4"
            >
              <a href={item.agendaLink || "#"}>
                <button className="bg-[#BD302B] cursor-pointer font-light text-white px-6 py-2">
                  {item.agenda}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
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
              To watch the video, please <br /> submit the form below:
            </h2>

            <div className="bg-[#e0ffc7] border border-[#b4d39b] w-[500px] p-6 mx-auto flex flex-col items-center">
              <p className="text-[#63666A] text-base font-light mb-4 text-center">
                Thank you for submitting.
              </p>
              <a
                href="https://www.youtube.com/embed/FxEj8bAcY_g?si=3U_jktgXchX34hqx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BD302B] text-white px-6 py-2 rounded  transition duration-300"
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
