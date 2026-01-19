import React from "react";

export const metadata = {
  title: "Jim Martin | Viscadia",
  description:
    "Jim Martin is the Head of Client Development at Viscadia. He has over 20 years of experience driving growth for strategic consulting and client solutions.",
  alternates: {
    canonical: "https://viscadia.com/leadership-jim-martin/",
  },
  openGraph: {
    title: "Jim Martin | Viscadia",
    description:
      "Jim Martin is the Head of Client Development at Viscadia. He has over 20 years of experience driving growth for strategic consulting and client solutions.",
    url: "https://viscadia.com/leadership-jim-martin/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Jim Martin",
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
