import React from "react";

export const metadata = {
  title: "Vipul Vaid | Viscadia",
  description:
    "Vipul Vaid is an Associate Principal at Viscadia’s Cambridge, MA office, with over a decade of consulting experience in the pharmaceutical and biotech industry.",
  alternates: {
    canonical: "https://viscadia.com/leadership-vipul-vaid/",
  },
  openGraph: {
    title: "Vipul Vaid | Viscadia",
    description:
      "Vipul Vaid is an Associate Principal at Viscadia’s Cambridge, MA office, with over a decade of consulting experience in the pharmaceutical and biotech industry.",
    url: "https://viscadia.com/leadership-vipul-vaid/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Vipul Vaid",
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
