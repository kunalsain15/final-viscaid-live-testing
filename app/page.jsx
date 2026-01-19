import React from "react";
import SectionOne from "../components/homepage/SectionOne";
import SectionTwo from "../components/homepage/SectionTwo";
import SectionThree from "../components/homepage/SectionThree";
import SectionFour from "../components/homepage/SectionFour";
import SectionFive from "@/components/homepage/SectionFive";
import SectionSix from "@/components/homepage/SectionSix";

export const metadata = {
  title: "Forecasting Expertise | Life Sciences - Viscadia",
  description:
    "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
  openGraph: {
    title: "Forecasting Expertise | Life Sciences - Viscadia",
    description:
      "Viscadia empowers the life sciences industry pioneers with custom forecasting models and market research. Visit www.viscadia.com to learn more.",
    url: "https://viscadia.com/",
    siteName: "Viscadia",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2023/04/viscadia-logo-with-white-bg.webp",
        width: 1100,
        height: 759,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://viscadia.com/",
  },
};

const page = () => {
  return (
    <div className="h-full w-full mx-auto">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className="flex flex-col-reverse md:flex-col">
        <SectionFive />
        <SectionFour />
      </div>
      <SectionSix />
    </div>
  );
};

export default page;
