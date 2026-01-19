import React from "react";

const SectionTwo = () => {
  const data = [
    {
      img: "./therapeuticAreas/Asset-31.png",
      title: "CARDIOVASCULAR",
    },
    {
      img: "./therapeuticAreas/Asset-33.webp",
      title: "INFECTIOUS DISEASE",
    },
    {
      img: "./therapeuticAreas/Asset-34.webp",
      title: "RESPIRATORY / PULMONARY",
    },
    {
      img: "./therapeuticAreas/Asset-36.webp",
      title: "DERMATOLOGY",
    },
    {
      img: "./therapeuticAreas/Asset-37.webp",
      title: "INFLAMMATORY / PAIN",
    },
    {
      img: "./therapeuticAreas/Group-170-e1615488365369.webp",
      title: "TRANSPLANT",
    },
    {
      img: "./therapeuticAreas/Asset-38.webp",
      title: "GASTROENTEROLOGY",
    },
    {
      img: "./therapeuticAreas/Asset-39.webp",
      title: "ONCOLOGY",
    },
    {
      img: "./therapeuticAreas/Asset-41.webp",
      title: "UROLOGY",
    },
    {
      img: "./therapeuticAreas/Asset-42.webp",
      title: "GENETIC / BLOOD",
    },
    {
      img: "./therapeuticAreas/Asset-52-1.webp",
      title: "WOMEN'S HEALTH",
    },
    {
      img: "./therapeuticAreas/Asset-53-1.webp",
      title: "HORMONAL DISORDERS",
    },
  ];
  return (
    <div>
      <div className="sm:min-h-[400px] w-full py-5 sm:py-10">
        <div className="md:max-w-6xl sm:px-0 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          {data?.map((el, index) => (
            <div
              key={index}
              className="h-[160px] md:border-b flex justify-center items-center flex-col gap-2"
            >
              <img src={el.img} alt={el.title} className="h-[55px]" />
              <p className="text-[18px] font-light uppercase text-center">
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:max-w-6xl sm:px-0 2xl:px-1 px-5 mx-auto mb-10">
        <div className="w-full space-y-4 min-h-[300px] md:flex gap-10 my-20">
          <div className="md:w-[40%] w-full">
            <img
              className="h-full"
              src="./therapeuticAreas/Group-287.png"
              alt=""
            />
          </div>
          <div className="md:w-[60%] w-full">
            <h2 className="text-[22px] font-light">Mira Aubuchon, MD, FACOG</h2>
            <p className="text-[16px] text-[#63666A] font-light mt-2 md:mt-5">
              Patient preference, efficacy, side effects and affordability
              influence a physician’s treatment choice across a wide spectrum of
              women’s health issues. Accurately forecasting demand requires much
              more than just understanding various physicians’ perceptions of
              the drug. Identifying the appropriate patient epidemiology,
              incorporating payer-access nuances and simulating different
              channel dynamics are also important to consider when constructing
              a comprehensive forecast. With our expertise at the intersection
              of business and medicine, Viscadia can help you build agile,
              data-driven models to cater to different cross-functional needs.
            </p>
          </div>
        </div>
        <div className="w-full space-y-4 sm:min-h-[300px] md:flex gap-10 my-20 flex-row-reverse">
          <div className="md:w-[40%] w-full">
            <img
              className="h-full"
              src="./therapeuticAreas/Group-286@2x-e1615490185133.webp"
              alt=""
            />
          </div>
          <div className="md:w-[60%] 2xl:w-[70%] w-full">
            <h2 className="text-[22px] font-light">Sapan K. Polepalle, MD</h2>
            <p className="text-[16px] text-[#63666A] font-light mt-2 md:mt-5">
              Men’s health has evolved rapidly in the last decade, bringing
              men’s sexual, physical, endocrine, and mental issues to the
              forefront. Several factors influence the choice of treatment and
              providing effective health care often requires a
              multi-disciplinary approach to treatment. Forecasting demand in
              these therapy areas not only requires a comprehensive forecast
              methodology, but also a deep understanding of patient and
              physician preference. Viscadia puts our deep therapeutic expertise
              and decades of forecasting experience for products with complex
              patient journeys to work for you — helping you achieve greater
              confidence and clarity in your forecasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
