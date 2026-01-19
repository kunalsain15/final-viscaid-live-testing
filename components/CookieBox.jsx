"use client";
import React, { useEffect, useState } from "react";
import CommonCookies from "./commoncookies/CommonCookies";

const CookieBox = () => {
  const [showCookieModel, setShowCookieModel] = useState(false);
  const [openCommonPopup, setOpenCommonPopup] = useState(false); // trigger state

  useEffect(() => {
    const token = localStorage.getItem("isTAccepted");
    if (token) {
      setShowCookieModel(false);
    } else {
      setShowCookieModel(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("isTAccepted", "true");
    setShowCookieModel(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("isTAccepted", "false");
    setShowCookieModel(false);
  };

  const handleCustomize = () => {
    setShowCookieModel(false);
    setOpenCommonPopup(true);
  };

  return (
    <>
      {showCookieModel && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-4 sm:right-auto z-50 bg-white p-4 sm:p-5 rounded-lg shadow-lg w-auto sm:w-[440px] h-auto sm:h-[230px] flex flex-col justify-evenly">
          <h2 className="text-[20px] font-light mb-10 text-gray-600">
            We value your privacy.
          </h2>
          <p className="text-sm text-gray-700 font-light mb-5">
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleCustomize}
              className="px-3 py-2 flex-1 cursor-pointer border-2 font-medium border-[#aa201b] text-sm transition-colors text-[#aa201b]"
            >
              Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="px-3 py-2 flex-1 cursor-pointer border-2 font-medium border-[#aa201b] text-sm transition-colors text-[#aa201b]"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 py-2 flex-1 cursor-pointer text-white bg-[#aa201b] border-2 font-medium border-[#aa201b] text-sm transition-colors "
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      <CommonCookies triggerOpen={openCommonPopup} className="mt-[140px]" />
    </>
  );
};

export default CookieBox;
