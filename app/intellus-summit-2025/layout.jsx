import React from "react";

export const metadata = {
  title: "Intellus Summit 2025 | Viscadia",
  description:
    "Intellus Summit 2025, March 11-13, 2025, Charlotte, NC. Book your slot to attend the premier Intellus Worldwide not-for-profit summit.",
  alternates: {
    canonical: "https://viscadia.com/intellus-summit-2025/",
  },
  openGraph: {
    title: "Intellus Summit 2025 | Viscadia",
    description:
      "Intellus Summit 2025, March 11-13, 2025, Charlotte, NC. Book your slot to attend the premier Intellus Worldwide not-for-profit summit.",
    url: "https://viscadia.com/intellus-summit-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/02/Intellus_2025.png",
        width: 313,
        height: 534,
        alt: "Intellus Summit 2025 Badge",
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
