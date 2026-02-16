"use client";
import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { API_ENDPOINTS } from "@/endpoint";

const ContactPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setCaptchaError(false);
    setFieldErrors({});

    await new Promise((resolve) => setTimeout(resolve, 200));

    let errors = {};

    if (!formData.name) errors.name = "Please enter your name.";
    if (!formData.email) errors.email = "Please enter your email.";
    if (!formData.phone) errors.phone = "Please enter your phone number.";
    if (!formData.message) errors.message = "Please enter your message.";
    if (!verified) errors.captcha = "The captcha is missing from this form.";

    if (Object.keys(errors).length > 0) {
      setError("Please correct any issues noted below and resubmit the form.");
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await axios.post("https://api.viscadia.com/api/forms/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        file_urls: "null",
      });

      setSuccess("Your responses were successfully submitted. Thank you!");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      setVerified(false);
      setFieldErrors({});
    } catch (err) {
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors;

        const newFieldErrors = {};
        Object.keys(errors).forEach((key) => {
          newFieldErrors[key] = errors[key][0];
        });

        setFieldErrors(newFieldErrors);
        setError(
          "Please correct any issues noted below and resubmit the form."
        ); 
      }
    } finally {
      setLoading(false);
    }
  };

  const offices = [
       {
      id: 1,
      city: "Washington, D.C.",
      subText : "Global Headquarters",
      icon: "/washinton.png",
      address1: "901 N. Glebe Road Suite 750  Arlington, VA 22203",
    },
    {
      id: 2,
      city: "Boston",
      icon: "/contact/home.png",
      address1: "185 Alewife Brook Pkwy, Suite 205",
      address2: "Cambridge, MA 02138",
    },
    {
      id: 3,
      city: "Lucerne",
      icon: "/contact/icon-switzerland.png",
      address1: "Platz 10, 6039 Root D4",
      address2: "Lucerne, Switzerland",
    },
    {
      id: 4,
      city: "Delhi",
      icon: "/contact/indiagate.png",
      address1: "JMD Regent Square, MG Road",
      address2: "Gurgaon, Haryana 122002",
    },
  ];

  return (
    <>
      <div className="flex flex-col mt-20 md:grid md:grid-cols-12 mx-auto gap-16 justify-center pt-8 sm:pt-[50px] pb-10 sm:pb-[60px] md:items-start max-w-[95%] sm:max-w-6xl bg-white">
        <div className="md:col-span-5 col-span-12">
          <div className="mb-8">
            <img
              src="/contactus.png"
              alt="World Map"
              className="w-full  h-full"
            />
          </div>
          <div className="mt-8 sm:text-left text-center">
            <h1 className="sm:text-2xl text-xl md:text-left text-center md:text-[24px] lg:text-[34px] font-light text-black ">
              Contact Viscadia today!
            </h1>
            <p className="text-[#63666A] md:text-left text-center font-light text-[14px] mt-1 leading-relaxed">
              To contact us, please complete this form or send an email to{" "}
              <br />
              <a
                href="mailto:info@viscadia.com"
                className="text-[#4762FF] text-base font-light "
              >
                info@viscadia.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=" lg:col-span-7 col-span-12">
          <div className="md:max-w-2xl">
            {success ? (
              <p className=" text-[14px] text-[#63666A] mt-[5px] mb-[15px] bg-[#DFF0D8] rounded-[var(--border-radius)] pt-3 pb-10 p-5 font-light">
                {success}
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <p className="bg-[#f2DEDE] p-5 text-[14px]  text-[#B94A48] font-light">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5">
                  {/* Name */}
                  <div className="col-span-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-3 border-2 placeholder:text-[16px] placeholder:text-[#63666A] focus:shadow-[0_0_5px_rgba(189,48,43,0.6)] border-[#717073] focus:border-gray-600 focus:outline-none bg-white text-gray-800 font-normal  text-[14px]"
                    />
                    {error && (
                      <p className="text-[#444444] font-medium pt-2 text-[12px]">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  {/* Company */}
                  <div className="col-span-1">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-2 py-3 border-2 border-[#717073] focus:border-gray-600 focus:outline-none focus:shadow-[0_0_5px_rgba(189,48,43,0.6)] bg-white placeholder:text-[15px] font-normal placeholder:text-[#63666A]"
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-2 py-3 border-2 border-[#717073] focus:border-gray-600 focus:outline-none  bg-white placeholder:text-[16px] font-normal placeholder:text-[#63666A]
               focus:shadow-[0_0_5px_rgba(189,48,43,0.6)]"
                    />
                    {error && (
                      <p className="text-[#444444] font-medium pt-2 text-[12px]">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-2 py-3 border-2 border-[#717073] focus:shadow-[0_0_5px_rgba(189,48,43,0.6)] focus:border-gray-600 focus:outline-none bg-white font-normal  placeholder:text-[16px] placeholder:text-[#63666A]"
                    />
                    {fieldErrors.phone && (
                      <p className="text-[#444444] font-medium pt-2 text-[12px]">
                        {fieldErrors.phone}{" "}
                      </p>
                    )}
                  </div>
                  {/* Message */}
                  <div className="col-span-2">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-2 py-3 font-normal border-2 focus:shadow-[0_0_5px_rgba(189,48,43,0.6)] border-[#717073]
      focus:border-gray-600 focus:outline-none
      bg-white text-[#63666A] placeholder:text-[#63666A]
      resize-none text-base"
                    />
                    {fieldErrors.message && (
                      <p className="text-[#444444] font-medium pt-2 text-[12px]">
                        {fieldErrors.message}{" "}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2 relative w-max">
                    {/* <ReCAPTCHA
                      sitekey="6LdPQM4rAAAAAEUTL_n_6rLyV_OiDkZolZh5FaXn"
                      onChange={() => setVerified(true)}
                    /> */}
                      <ReCAPTCHA
                      sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                      onChange={(val) => setVerified(val)}
                    />

                    {/* <ReCAPTCHA
                      sitekey="6LfhcugrAAAAAHFf6n_fF4hWJELvYjkT2NcCodo5"
                      onChange={(val) => setVerified(val)}
                    /> */}
                    {fieldErrors.captcha && (
                      <span className=" text-[#444444] font-medium pt-1 text-[12px] pointer-events-none">
                        {fieldErrors.captcha}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="frm_submit justify-end cursor-pointer flex gap-4 md:mt-0 mt-5">
                  <button
                    className="frm_button_submit shadow-[0_2.54px_14.2px_0_#00000005] cursor-pointer font-normal bg-[#BD302B] text-white font-sans text-[20px] px-[30px] py-[8px] rounded-sm frm_final_submit flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div
                        role="status"
                        className="flex px-[20px] items-center justify-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 spin-slow"
                          viewBox="0 0 100 101"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Outer circle transparent */}
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
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-[#f1f1f1] py-10 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-[14px]">
          {offices.map((office,index) => (
            <div
              key={office.id}
              className="flex flex-col items-center justify-between h-40 space-y-2"
            >
              <img src={office.icon} alt={office.city} />
              <h3 className="text-[24px] text-black font-light">
                {office.city}
              </h3>
              {office?.subText &&  <p className=" text-black leading-1 fw400 text-[15px] mb-4">
                  {office?.subText }
                </p>}
                 {!office?.subText &&  <p className="opacity-0 font-[300] text-black/60 leading-1">
                  Tett
                </p>}
                
              
              <div className="flex flex-col">
                <p className={`text-[#63666A] ${index === 0 && "max-w-[90%] mx-auto"}  text-base font-light`}>
                  {office.address1}
                </p>
                
                
                <p className="text-[#63666A] text-base font-light">
                  {office.address2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
