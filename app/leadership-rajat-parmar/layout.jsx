import React from "react";

export const metadata = {
  title: "Rajat Parmar | Viscadia",
  description:
    "Rajat Parmar is an Associate Principal at Viscadia, spearheading the establishment and growth of Viscadia Europe in Luzern, Switzerland. With over eight years of experience in the pharmaceutical and biotech industry.",
  alternates: {
    canonical: "https://viscadia.com/leadership-rajat-parmar/",
  },
  openGraph: {
    title: "Rajat Parmar | Viscadia",
    description:
      "Rajat Parmar is an Associate Principal at Viscadia, spearheading the establishment and growth of Viscadia Europe in Luzern, Switzerland. With over eight years of experience in the pharmaceutical and biotech industry.",
    url: "https://viscadia.com/leadership-rajat-parmar/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Rajat Parmar",
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
