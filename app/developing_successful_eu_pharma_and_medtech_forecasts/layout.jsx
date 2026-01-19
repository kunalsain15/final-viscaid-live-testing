import React from "react";
export const metadata = {
  title:
    "The Devil is in the Details - A Checklist for Developing Successful EU Pharma and MedTech Forecasts | Viscadia",
  description:
    "Explore a comprehensive checklist for developing successful EU Pharma and MedTech forecasts, understanding the value of biopharmaceutical and MedTech assets.",
  alternates: {
    canonical:
      "https://viscadia.com/developing_successful_eu_pharma_and_medtech_forecasts/",
  },
  openGraph: {
    title:
      "The Devil is in the Details - A Checklist for Developing Successful EU Pharma and MedTech Forecasts | Viscadia",
    description:
      "Explore a comprehensive checklist for developing successful EU Pharma and MedTech forecasts, understanding the value of biopharmaceutical and MedTech assets.",
    url: "https://viscadia.com/developing_successful_eu_pharma_and_medtech_forecasts/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/09/world_of_pill.png",
        width: 790,
        height: 545,
        alt: "EU Pharma and MedTech Forecasts",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "2 minutes",
  },
};

export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
