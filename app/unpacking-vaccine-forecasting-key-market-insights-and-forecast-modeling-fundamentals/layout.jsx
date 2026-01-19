import React from "react";

export const metadata = {
  title:
    "Unpacking Vaccine Forecasting: Key Market Insights and Forecast Modeling Fundamentals | Viscadia",
  description:
    "Join this in-depth webinar to explore the dynamic landscape of vaccine forecasting, current market trends, and forecast modeling fundamentals.",
  alternates: {
    canonical:
      "https://viscadia.com/unpacking-vaccine-forecasting-key-market-insights-and-forecast-modeling-fundamentals/",
  },
  openGraph: {
    title:
      "Unpacking Vaccine Forecasting: Key Market Insights and Forecast Modeling Fundamentals | Viscadia",
    description:
      "Join this in-depth webinar to explore the dynamic landscape of vaccine forecasting, current market trends, and forecast modeling fundamentals.",
    url: "https://viscadia.com/unpacking-vaccine-forecasting-key-market-insights-and-forecast-modeling-fundamentals/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2024/11/Vaccine-Image-672x384.png",
        width: 672,
        height: 384,
        alt: "Vaccine Forecasting Webinar",
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
