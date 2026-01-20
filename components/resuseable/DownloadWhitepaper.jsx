"use client";
import { API_ENDPOINTS } from "@/endpoint";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DownloadWhitePaper({
  request_type,
  document_id,
  title = "White Paper",
  subTitle,
  setisDownloadFomrOpen,
  setIsSubmited,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
  });

  const [isButtonEnable, setIsButtonEnable] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsButtonEnable(false);
    try {
      setIsSubmiting(true);

      await axios
        .post(`https://api.viscadia.com/api/forms/documnet-request`, {
          ...formData,
          request_type,
          document_id,
        })
        .then((res) => {
          if (res.status) {
            setIsButtonEnable(true);
            setIsSubmited(true);
            setisDownloadFomrOpen(false);
            setIsSubmiting(false);
          } else {
            setIsButtonEnable(true);
            setIsSubmiting(false);
            toast.error("Something Went Wrong!");
          }
        });
    } catch (error) {
      console.log(error);
      setIsSubmiting(false);
      toast.error("Something Went Wrong!");
      setIsButtonEnable(true);
    }
  };

  return (
    <div
      onClick={() => setisDownloadFomrOpen(false)}
      className="h-full w-full fixed top-8.5 left-0 bg-[#00000027] z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-auto relative w-[650px] bg-white shadow-lg rounded-lg px-5 py-5 flex flex-col items-center"
      >
        <i
          onClick={() => setisDownloadFomrOpen(false)}
          className="ri-close-line absolute top-0 right-0 bg-black text-md text-white h-[25px] shadow-2xl m-2 cursor-pointer w-[25px] flex justify-center items-center rounded-full"
        ></i>

        <h2 className="text-2xl font-light mainColor text-center">
          Viscadia {title}
        </h2>
        <p className="text-gray-700 text-center mt-2 text-[23px] font-light">
          Please submit this form to download the {title}:
        </p>
        <form className="w-full space-y-4 mb-6 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Name <span className="mainColor">*</span>
            </label>
            <div className="flex space-x-2 mt-1">
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-none focus:outline-none border-stone-300 mb-4 focus:border-[#bd302b] focus:shadow shadow-[#bd302b3b]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-none focus:outline-none border-stone-300 mb-4 focus:border-[#bd302b] focus:shadow shadow-[#bd302b3b]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-none mt-1 focus:outline-none border-stone-300 mb-4 focus:border-[#bd302b] focus:shadow shadow-[#bd302b3b]"
            />
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Company <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-none mt-1 focus:outline-none border-stone-300 mb-4 focus:border-[#bd302b] focus:shadow shadow-[#bd302b3b]"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-none mt-1 focus:outline-none border-stone-300 mb-4 focus:border-[#bd302b] focus:shadow shadow-[#bd302b3b]"
              />
            </div>
          </div>

          <div className="pt-0">
            {isSubmiting ? (
              <div
                role="status"
                className="flex  items-center justify-center mainBg text-white cursor-pointer w-fit px-6 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 spin-slow"
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
              <button className="mainBg text-white cursor-pointer w-fit px-6 py-2 rounded hover:bg-red-700 transition duration-300">
                Submit
              </button>
            )}
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}