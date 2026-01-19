import React from "react";
export const metadata = {
  title: "FPW 2025 | Viscadia",
  description:
    "Fierce Pharma Week 2025, September 8-11, 2025, Pennsylvania Convention Center, Philadelphia, PA. Book a slot to attend the conference.",
  alternates: {
    canonical: "https://viscadia.com/fpw-2025/",
  },
  openGraph: {
    title: "FPW 2025 | Viscadia",
    description:
      "Fierce Pharma Week 2025, September 8-11, 2025, Pennsylvania Convention Center, Philadelphia, PA. Book a slot to attend the conference.",
    url: "https://viscadia.com/fpw-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/08/Badge_FPW2025.png",
        width: 313,
        height: 534,
        alt: "FPW 2025 Badge",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "4 minutes",
  },
};

export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
