import React from "react";

export const metadata = {
  title: "Ramu Ramalingam | Viscadia",
  description:
    "Ramu Ramalingam joined Viscadia as Principal in March 2025. He has over 20 years of experience as a life sciences business development leader with expertise in pharma and biotech.",
  alternates: {
    canonical: "https://viscadia.com/leadership-ramu-ramalingam/",
  },
  openGraph: {
    title: "Ramu Ramalingam | Viscadia",
    description:
      "Ramu Ramalingam joined Viscadia as Principal in March 2025. He has over 20 years of experience as a life sciences business development leader with expertise in pharma and biotech.",
    url: "https://viscadia.com/leadership-ramu-ramalingam/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Ramu Ramalingam",
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
