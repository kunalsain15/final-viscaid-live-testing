import React from "react";

export const metadata = {
  title: "PMRC EU 2025 | Viscadia",
  description:
    "PMRC EU 2025, April 23-24, 2025, Munich, Germany. Book your slot to attend the Pharma Market Research Conference.",
  alternates: {
    canonical: "https://viscadia.com/pmrc-eu-2025/",
  },
  openGraph: {
    title: "PMRC EU 2025 | Viscadia",
    description:
      "PMRC EU 2025, April 23-24, 2025, Munich, Germany. Book your slot to attend the Pharma Market Research Conference.",
    url: "https://viscadia.com/pmrc-eu-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/03/PMRC_EUBadge.png",
        width: 313,
        height: 534,
        alt: "PMRC EU 2025 Badge",
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
