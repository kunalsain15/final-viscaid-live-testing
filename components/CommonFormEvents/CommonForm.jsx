"use client";
import React, { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CommonForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    job_title: "",
    contact_number: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const payload = {
      firstName,
      lastName,
      email: formData.email,
      company: formData.company,
      jobtitle: formData.job_title,
      phoneNumber: formData.contact_number,
      message: formData.message,
    };

    try {
      const response = await axios.post(
        "https://api.viscadia.com/api/forms/common-form/events",
        payload
      );
      console.log("Success:", response.data);
      setIsSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
      setFormData({
        name: "",
        company: "",
        email: "",
        job_title: "",
        contact_number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    // <div
    //   ref={formRef}
    //   className="flex flex-col items-center sm:px-0 px-4 sm:mb-0 mb-7 bg-white sm:py-10 w-full max-w-full"
    // >
    <div
      ref={formRef}
      className="flex flex-col items-center sm:mb-7 mb-7 bg-white sm:py-5 px-5 sm:px-6 md:px-24"
    >
      <h2 className="text-center text-[28px] md:text-[38px] font-light text-black mb-5 font-['Open_Sans']">
        Book a meeting with us
      </h2>
      <div className="flex justify-center w-full">
        <form
          className="w-full max-w-[700px] space-y-[8px]"
          onSubmit={handleSubmit}
        >
          {/* inputs */}
          <div className="flex flex-col sm:flex-row gap-[9px]">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] text-sm rounded-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
                placeholder="Name*"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] rounded-sm text-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
                placeholder="Company*"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-[9px]">
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] rounded-sm text-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
                placeholder="Email*"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] rounded-sm text-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
                placeholder="Job Title"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] rounded-sm text-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
              placeholder="Contact Number"
              required
            />
          </div>

          <div className="w-full">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="focus:border-blue-800 w-full p-3 border border-[#6D6D6D] rounded-sm text-sm font-bold text-[#2e2e2e] bg-white focus:outline-none"
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* button */}
          <div className="w-full -mt-1 ">
            <button
              type="submit"
              disabled={loading}
              className="w-full hover:bg-[#BD3028] font-light bg-[#63666A] text-white text-base py-2 px-4 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  Submit
                  <svg
                    className="animate-spin w-6 h-6"
                    viewBox="0 0 100 100"
                    fill="#fff"
                  >
                    <circle cx="50" cy="20" r="7" />
                    <circle cx="71" cy="25" r="7" />
                    <circle cx="85" cy="40" r="7" />
                    <circle cx="90" cy="60" r="7" />
                    <circle cx="85" cy="80" r="7" />
                    <circle cx="71" cy="95" r="7" />
                    <circle cx="50" cy="100" r="7" />
                    {/* skip some dots for gap */}
                    <circle cx="15" cy="40" r="7" />
                    <circle cx="29" cy="25" r="7" />
                  </svg>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {isSubmitted && (
            <div className="flex items-center gap-2 mt-4">
              <img
                src="/events/icons8-checked-checkbox.gif"
                alt="checked"
                className="w-5 h-5"
              />
              <p className="text-[#676767] text-base">
                Thank you for your response!
              </p>
            </div>
          )}
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default CommonForm;
