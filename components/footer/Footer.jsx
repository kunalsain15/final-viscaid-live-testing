"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      await axios.post("https://api.viscadia.com/api/v1/subscribe", { email });
      toast.success("You are subscribed");
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <footer className="bg-[#63666A] h-full text-white">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-13 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[16px] md:text-[18px] pt-2 font-light mb-5 sm:mb-4 md:text-white/80 text-white/70">
              Driving decisions one forecast at a time™.
            </h2>
            <div className="flex sm:space-x-4">
              <a
                href="https://www.linkedin.com/company/viscadia-inc-/"
                className="inline-block w-10 h-10 sm:w-9 sm:h-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 229 229"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.0397 71.652V229H0.00429378V71.652H57.0397ZM143.017 71.3612V80.6329C151.343 75.2591 160.944 72.135 175.504 72.135C222.924 72.135 229 108.95 229 141.021V228.996H171.678V145.406C171.678 131.348 166.648 128.683 157.348 128.683C148.506 128.683 143.017 131.492 143.017 145.406V228.996H85.6951V71.3612H143.017ZM28.5177 0C44.2526 0 57.0354 12.797 57.0354 28.5175C57.0354 44.238 44.2526 57.0351 28.5176 57.0351C12.7972 57.0351 0 44.238 0 28.5174C0 12.7972 12.7971 0 28.5177 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <div className="mb-5 text-center md:text-left w-[90%]">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 mt-5"
              >
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  className="
    md:px-5 px-3 py-[6.8px] w-[250px]
    bg-white
    text-[15px] text-gray-700
    border border-gray-300
    shadow-sm outline-none
    font-roboto
    placeholder:text-[#4E4E4E]
    placeholder:text-[12px]
    placeholder:font-light
    placeholder:font-roboto
  "
                  onChange={(e) => setEmail(e.target.value)}/>

                <button
                  type="submit"
                  className="px-6 cursor-pointer py-[9px] border-white/40 border font-light bg-[#BD302B] text-white/80 text-[12px] hover:bg-[#a70d08]">
                  Subscribe
                </button>
              </form>
            </div>

            <p className="text-[16px] md:text-[18px] md:text-white/80 text-white/70 font-light pt-1">
              United States | Switzerland | India
            </p>
          </div>

          <div className="flex sm:space-y-0 pt-0 md:pt-2 space-y-6 justify-center gap-17 sm:gap-27">
            <div className="flex flex-col items-start">
              <h2 className="text-[20px] md:text-[22px] text-left text-white font-normal mb-2.5 md:mb-4">
                Useful Links
              </h2>
              <ul className="space-y-1.5 md:space-y-3 text-left md:text-left">
                <li>
                  <Link
                    href="/case-studies/"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Our Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/view"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[20px] text-left md:text-[22px] text-white font-normal mb-2.5 md:mb-4">
                Company
              </h2>
              <ul className="space-y-1.5 md:space-y-3 text-left md:text-left">
                <li>
                  <Link
                    href="/about-us/"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leadership/"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/life-at-viscadia"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Life at Viscadia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers/"
                    className="text-white/70 md:text-white/80 text-[16px] md:text-[18px] font-light"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-20 text-center">
          <p className="text-[12px] md:text-white/70 text-white/60 font-light leading-relaxed">
            © 2026 Viscadia Inc. All Rights Reserved.
            <br className="block sm:hidden" />
            <a
              href="/privacy-policy"
              className="text-[12px] md:text-white/70 text-white/60 underline font-light ml-1"
            >
              Privacy Policy
            </a>{" "}
            <a
              href="/terms-of-use"
              className="text-[12px] md:text-white/70 text-white/60 underline font-light ml-1"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
