import React from "react";

export const metadata = {
  title: "Anindya Roy | Viscadia",
  description:
    "Anindya Roy is a Principal at Viscadia. He leads the forecasting and business strategy team in Cambridge, bringing over 15 years of analytical consulting experience for the pharmaceutical industry.",
  alternates: {
    canonical: "https://viscadia.com/leadership-anindya-roy/",
  },
  openGraph: {
    title: "Anindya Roy | Viscadia",
    description:
      "Anindya Roy is a Principal at Viscadia. He leads the forecasting and business strategy team in Cambridge, bringing over 15 years of analytical consulting experience for the pharmaceutical industry.",
    url: "https://viscadia.com/leadership-anindya-roy/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Anindya Roy",
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
