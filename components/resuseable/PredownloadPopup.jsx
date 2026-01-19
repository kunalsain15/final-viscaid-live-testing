import React from 'react'

const PredownloadPopup = ({link,setIsSubmited,title}) => {
  return (
    <div className="fixed inset-0 bg-[#0000001e]  bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg min-h-[75%] shadow-lg w-[44%] relative">
         <i onClick={()=> setIsSubmited(false)}
          className="ri-close-line absolute top-0 right-0 bg-black text-md text-white h-[25px] shadow-2xl m-2 cursor-pointer w-[25px] flex justify-center items-center rounded-full"
        ></i>

        <div className="p-6 text-center">
          <h2 className="text-[30px] font-light text-[#bd302b] mb-3">
            Viscadia White Paper
          </h2>
          <p className="text-gray-600 mb-4 text-[25px] font-light max-w-[80%] mx-auto">
            Please submit this form to download the white paper:
          </p>
          <p className="italic text-gray-500 mb-6 max-w-[80%] mx-auto font-light">
            {title}
          </p>

          <div className=' bg-[#D6E9C6] py-7'>
               <div className=" text-green-800 p-4 pt-0 rounded mb-4 text-[23px] font-light">
            Thank you for your submission.
          </div>

          <a href={link} target='_blank' className="bg-[#bd302b] cursor-pointer text-white px-8 py-3 hover:bg-[#a31c18] transition">
            Click here to download the white paper
          </a>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default PredownloadPopup
