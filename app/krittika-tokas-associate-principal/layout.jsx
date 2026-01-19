import React from "react";

export const metadata = {
  title: "Krittika Tokas | Associate Principal | Viscadia",
  description:
    "Krittika serves as the Associate Principal in Viscadia's India office. She has 9+ years of consulting experience, specializing in forecasting for the pharmaceutical industry.",
  alternates: {
    canonical: "https://viscadia.com/krittika-tokas-associate-principal/",
  },
  openGraph: {
    title: "Krittika Tokas | Associate Principal | Viscadia",
    description:
      "Krittika serves as the Associate Principal in Viscadia's India office. She has 9+ years of consulting experience, specializing in forecasting for the pharmaceutical industry.",
    url: "https://viscadia.com/krittika-tokas-associate-principal/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Krittika Tokas",
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
