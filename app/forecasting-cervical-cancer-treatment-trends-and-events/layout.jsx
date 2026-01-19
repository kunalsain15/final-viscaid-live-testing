import React from "react";
export const metadata = {
  title:
    "Forecasting Cervical Cancer: Treatment, Trends, and Events | Viscadia",
  description:
    "Cervical cancer continues to impose a significant burden on women. Explore treatment trends, prevention strategies, and upcoming events in our focused webinar.",
  alternates: {
    canonical:
      "https://viscadia.com/forecasting-cervical-cancer-treatment-trends-and-events/",
  },
  openGraph: {
    title:
      "Forecasting Cervical Cancer: Treatment, Trends, and Events | Viscadia",
    description:
      "Cervical cancer continues to impose a significant burden on women. Explore treatment trends, prevention strategies, and upcoming events in our focused webinar.",
    url: "https://viscadia.com/forecasting-cervical-cancer-treatment-trends-and-events/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2024/01/Upcoming-Webinar-Q1-2024-5-618x384.webp",
        width: 618,
        height: 384,
        alt: "Cervical Cancer Webinar",
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
