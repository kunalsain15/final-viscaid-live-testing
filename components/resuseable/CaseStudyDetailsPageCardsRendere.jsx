import React from "react";

const ChallengesCards = ({ data }) => {
  return (
    <div className="sm:min-h-[220px]">
      {data?.img && (
        <img
          className="h-[60px] object-cover"
          src={data?.img}
          alt={data?.img}
        />
      )}
      <h3 className="text-[23px] leading-[24px] mt-3 font-light mainColor">
        {data?.title}
      </h3>
      <ul className="list-disc ps-5">
        {data?.texts?.map((el, index) => (
          <li key={index} className="my-3 text-[#63666A] list-none font-light">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengesCards;
