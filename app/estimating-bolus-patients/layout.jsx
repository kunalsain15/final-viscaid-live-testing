import React from "react";

export const metadata = {
  title: "Estimating Bolus patients | Viscadia",
  description:
    "ESTIMATING BOLUS PATIENTS FORECASTING IN ONCOLOGY. Bolus demand in the pharmaceutical industry represents a sudden and substantial increase in demand that occurs during the drug's launch. This surge is primarily...",
  alternates: {
    canonical: "https://viscadia.com/estimating-bolus-patients/",
  },
  openGraph: {
    title: "Estimating Bolus patients | Viscadia",
    description:
      "ESTIMATING BOLUS PATIENTS FORECASTING IN ONCOLOGY. Bolus demand in the pharmaceutical industry represents a sudden and substantial increase in demand that occurs during the drug's launch. This surge is primarily...",
    url: "https://viscadia.com/estimating-bolus-patients/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/01/radiation-onco-3.webp",
        width: 790,
        height: 545,
        alt: "Estimating Bolus Patients",
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
