import SectionOne from "@/components/charityWater/SectionOne";
import SectionThree from "@/components/charityWater/SectionThree";
import SectionTwo from "@/components/charityWater/SectionTwo";
import React from "react";

export const metadata = {
  title: "charity : water | Viscadia",
  description:
    "Social Impact charity: water Forecasting is complex, but sometimes the answer is clear right from the start: our communities need our support. charity: water 663 million people around the world...",
  alternates: {
    canonical: "https://viscadia.com/charity-water/",
  },
  openGraph: {
    title: "charity : water | Viscadia",
    description:
      "Social Impact charity: water Forecasting is complex, but sometimes the answer is clear right from the start: our communities need our support. charity: water 663 million people around the world...",
    url: "https://viscadia.com/charity-water/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "./charityWater/Charity-Water-Family-on-Road-1.webp",
        width: 800,
        height: 530,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "3 minutes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const page = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default page;
