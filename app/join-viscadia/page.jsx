import SectionOne from "@/components/joinViscadia/SectionOne";
import SectionTwo from "@/components/joinViscadia/SectionTwo";
import RenderSectionsAlternateTwo from "@/components/resuseable/RenderSectionsAlternateTwo";
import React from "react";
import CarrearsComapny from "@/components/resuseable/CarrearsCompany";

const page = () => {
  const dataOne = [
    {
      img: "./joinViscadia/IMG2-900x600.png",
      title: "Life at Viscadia",
      subTitle:
        "At Viscadia, our team members make us who we are. Our commitment to each other, our clients and our communities is the foundation of our success.",
      description:
        "We foster an engaging atmosphere and inviting culture that enables our employees to form long-lasting professional and personal relationships.",
      link: "/life-at-viscadia",
    },
  ];
  const datatwo = [
    {
      img: "./homeAssets/IMG3_-681x385.png",
      title: "Careers",
      description:
        "If you are interested, please review our available positions.",
      subTitle:
        "Our expanding company offers many opportunities and a supportive culture for professional and personal growth.",
      link: "/careers",
    },
  ];

  return (
    <div>
      <SectionOne />
      <RenderSectionsAlternateTwo data={dataOne} />
      <CarrearsComapny data={datatwo} />
      <SectionTwo />
    </div>
  );
};

export default page;
