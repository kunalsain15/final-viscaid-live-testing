import React from "react";

export const metadata = {
  title:
    "Strategies for Developing Successful Global Med Tech Forecasts | Viscadia",
  description:
    "Join us as we explore strategies for developing successful global Med Tech forecasts and address the unique challenges in forecasting new medical technologies.",
  alternates: {
    canonical:
      "https://viscadia.com/strategies-for-developing-successful-global-med-tech-forecasts/",
  },
  openGraph: {
    title:
      "Strategies for Developing Successful Global Med Tech Forecasts | Viscadia",
    description:
      "Join us as we explore strategies for developing successful global Med Tech forecasts and address the unique challenges in forecasting new medical technologies.",
    url: "https://viscadia.com/strategies-for-developing-successful-global-med-tech-forecasts/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2024/07/2024-06-20_Developing-Med-Tech-Forecasts-681x384.png",
        width: 681,
        height: 384,
        alt: "Global Med Tech Forecasts",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "1 minute",
  },
};

export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
