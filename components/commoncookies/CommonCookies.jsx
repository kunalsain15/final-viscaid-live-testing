"use client";
import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";

const CommonCookies = ({ triggerOpen }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState({});
  const [showMore, setShowMore] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    setTimeout(() => setAnimatePopup(true), 10);
  };

  const closePopup = () => {
    setAnimatePopup(false);
    setTimeout(() => setIsPopupOpen(false), 400);
  };
  React.useEffect(() => {
    if (triggerOpen) {
      setIsPopupOpen(true);
      setTimeout(() => setAnimatePopup(true), 20);
    }
  }, [triggerOpen]);
  const toggleAccordion = (categoryId) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleRejectAll = () => closePopup();
  const handleSavePreferences = () => closePopup();
  const handleAcceptAll = () => closePopup();

  const accordionData = [
    {
      id: "necessary",
      title: "Necessary",
      alwaysActive: true,
      description:
        "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    },
    {
      id: "functional",
      title: "Functional",
      alwaysActive: false,
      description:
        "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    },
    {
      id: "analytics",
      title: "Analytics",
      alwaysActive: false,
      description:
        "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    },
    {
      id: "performance",
      title: "Performance",
      alwaysActive: false,
      description:
        "Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    },
    {
      id: "advertisement",
      title: "Advertisement",
      alwaysActive: false,
      description:
        "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
    },
  ];

  return (
    <div>
      {/* Floating Button */}
      <div
        className="fixed bottom-4 left-4 z-40 group flex items-center gap-2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={openPopup}
          className="w-12 h-12 cursor-pointer hover:bg-red-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg"
          style={{ backgroundColor: "#8B0E0A" }}
          aria-label="Consent Preferences"
        >
          <img src="/webinars/revisit.svg" className="w-6 h-6 text-white" />
        </button>

        {showTooltip && (
          <div className="relative inline-block group">
            <span
              className="absolute left-full top-1/2 w-[133px] -translate-y-1/2
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                bg-[#54595F] bg-opacity-80 text-white text-xs font-medium px-2 py-1 rounded
                transition-all duration-300 transform group-hover:translate-x-1"
            >
              Consent Preferences
              <span
                className="absolute right-full top-1/2 -translate-y-1/2
                  border-8 border-transparent border-r-[#54595F]"
              ></span>
            </span>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center z-50"
          onClick={(e) => e.target === e.currentTarget && closePopup()}
        >
          <div
            className={`bg-white border border-gray-200 rounded-lg max-w-4xl w-11/12 max-h-screen overflow-hidden shadow-xl transform transition-all duration-500 ease-out ${
              animatePopup
                ? "translate-y-0 mt-[60px] opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h1 className="text-xl font-medium text-[#212121]">
                Customize Consent Preferences
              </h1>
              <button
                onClick={closePopup}
                className="p-1 hover:bg-gray-100 rounded"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-96 overflow-y-auto">
              <div className="p-5 text-[#63666A] text-[14px] font-light leading-relaxed">
                <p className="mb-4">
                  We use cookies to help you navigate efficiently and perform
                  certain functions. You will find detailed information about
                  all cookies under each consent category below.
                </p>
                <p className="mb-4">
                  The cookies that are categorized as "Necessary" are stored on
                  your browser as they are essential for enabling the basic
                  functionalities of the site.
                  {!showMore && "..."}
                  {!showMore && (
                    <button
                      onClick={() => setShowMore(true)}
                      className="text-[#1863DC] font-light ml-1 hover:text-blue-800"
                    >
                      Show more
                    </button>
                  )}
                </p>

                {showMore && (
                  <>
                    <p className="mb-4 text-gray-600">
                      These cookies enable core website functionality and cannot
                      be disabled. They are usually set in response to actions
                      made by you such as setting your privacy preferences or
                      filling in forms.
                    </p>
                    <button
                      onClick={() => setShowMore(false)}
                      className="text-[#1863DC] font-light hover:text-blue-800"
                    >
                      Show less
                    </button>
                  </>
                )}
              </div>

              {/* Accordion */}
              <div className="px-5 pb-5">
                {accordionData.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 mb-2">
                    <div className="flex items-start">
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="mr-3 mt-4 p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight
                          className={`w-4 h-4 text-gray-600 transition-transform ${
                            expandedAccordions[item.id] ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <div className="flex-1 py-4">
                        <div className="flex justify-between items-center mb-2">
                          <button
                            onClick={() => toggleAccordion(item.id)}
                            className="text-left font-medium text-gray-800 text-base hover:text-gray-600"
                          >
                            {item.title}
                          </button>
                          {item.alwaysActive && (
                            <span className=" text-[#008000] text-[14px] px-2 py-1 rounded-full text-xs font-medium">
                              Always Active
                            </span>
                          )}
                        </div>
                        <p className="text-[#63666A] font-light text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {expandedAccordions[item.id] && (
                          <div className="mt-3 px-2 p-2 bg-[#F8F8F8] rounded text-center">
                            <p className="text-[#63666A] font-light text-left text-[12px]">
                              No cookies to display.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="relative p-5 bg-white border-t border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-transparent to-white"></div>
              <div className="flex gap-3 justify-end flex-wrap">
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-2 flex-1 border-2 hover:opacity-90 rounded text-sm font-medium transition-colors"
                  style={{ borderColor: "#8B0E0A", color: "#8B0E0A" }}
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-5 py-2 flex-1 border-2 hover:opacity-90  rounded text-sm font-medium transition-colors"
                  style={{ borderColor: "#8B0E0A", color: "#8B0E0A" }}
                >
                  Save My Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2 flex-1 text-white rounded hover:opacity-90 transition-opacity text-sm font-medium"
                  style={{ backgroundColor: "#8B0E0A" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonCookies;
