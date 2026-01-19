import React from "react";

export const metadata = {
  title: "Webinars | Viscadia",
  description:
    "Explore Viscadia webinars covering vaccine forecasting, market insights, and modeling fundamentals. Learn current and future trends in forecasting.",
  alternates: {
    canonical: "https://viscadia.com/webinars/",
  },
  openGraph: {
    title: "Webinars | Viscadia",
    description:
      "Explore Viscadia webinars covering vaccine forecasting, market insights, and modeling fundamentals. Learn current and future trends in forecasting.",
    url: "https://viscadia.com/webinars/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/11/Vaccine-Image-1-e1731524644307.png",
        width: 790,
        height: 545,
        alt: "Vaccine Forecasting Webinar",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "3 minutes",
  },
};
export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
