import React from 'react'

const PreddownloadPopupCaseStudy = ({ link, setIsSubmited }) => {
  return (
    <div className="fixed inset-0 bg-[#00000031] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[60%] p-5 min-h-[270px] relative">
        <i onClick={() => setIsSubmited(false)}
          className="ri-close-line absolute top-0 right-0 bg-black text-md text-white h-[25px] shadow-2xl m-2 cursor-pointer w-[25px] flex justify-center items-center rounded-full"
        ></i>

        <div className="p-6 text-center h-full">
          <div className="bg-[#DFF0D8] h-full flex gap-4 flex-col justify-center items-center p-6 rounded-md">
            <p className="text-gray-700 mb-4 text-[24px] font-light">Thank you for your submission.</p>
            <a
              href={link}
              target='_blank'
              className="bg-[#bd302b] hover:bg-[#a11713] text-white font-light py-3 px-6"
            >
              Click here to download the case study
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreddownloadPopupCaseStudy
