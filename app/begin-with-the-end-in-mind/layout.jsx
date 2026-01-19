import React from "react";

export const metadata = {
  title: "Begin with the end in mind | Viscadia",
  description:
    "Begin with the End in Mind Designing Demand Research to Drive the Forecast. Join us for an insightful webinar as we delve into the art and science of demand research...",
  alternates: {
    canonical: "https://viscadia.com/begin-with-the-end-in-mind/",
  },
  openGraph: {
    title: "Begin with the end in mind | Viscadia",
    description:
      "Begin with the End in Mind Designing Demand Research to Drive the Forecast. Join us for an insightful webinar as we delve into the art and science of demand research...",
    url: "https://viscadia.com/begin-with-the-end-in-mind/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-31-at-6.43.21-PM-576x384.webp",
        width: 576,
        height: 384,
        alt: "Begin with the End in Mind Webinar",
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

export default function Layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
