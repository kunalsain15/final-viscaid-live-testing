import React from "react";

const RendererCardDesingTwo = ({ data }) => {
  return (
    <div className="md:max-w-6xl lg:mt-4 sm:px-0 px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-10">
      {data?.map((item) => (
        <div className="sm:min-h-[220px] space-y-1 shadow-[2px_4px_25.5px_0px_#0000002E] rounded-[8px] flex items-center flex-col p-4 md:p-6">
          <h2 className="text-xl lg:text-[24px] font-light mainColor text-center">
            {item?.title}
          </h2>
          <p className="text-[16px] font-light  mt-2 text-[#63666A] text-left">
            {item?.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RendererCardDesingTwo;
