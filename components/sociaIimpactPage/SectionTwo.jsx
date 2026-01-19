import React from "react";
import RenderSection from "../resuseable/RenderSection";

const SectionTwo = () => {
  const data = [
    {
      img: "./socialImpact/Charity-Water.webp",
      title: "charity: water",
      subTitle: "663 million people around the world live without clean water.",
      description:
        "Clean water changes everything. Viscadia is proud to partner with charity: water to help provide clean and safe drinking water to people in developing nations.",
      link: "/charity-water",
    },
    {
      img: "./socialImpact/viscadiaVolunteers.webp",
      title: "Viscadia Volunteers",
      subTitle:
        "Our colleagues donate their time and energy to a number of worthwhile causes.",
      description:
        "Our commitment to excellence includes being a servant-leader in our communities.",
      link: "/viscadia-volunteers",
    },
  ];
  return (
    <div>
      <RenderSection colorType={1} data={data} />
    </div>
  );
};

export default SectionTwo;
