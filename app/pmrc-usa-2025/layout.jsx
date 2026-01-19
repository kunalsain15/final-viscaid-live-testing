import React from "react";

export const metadata = {
  title: "PMRC USA 2025 | Viscadia",
  description:
    "We are presenting & exhibiting at PMRC USA 2025, February 5-6, 2025 in Newark, New Jersey. Book your slot to explore new tools for modeling timing and order of entry effects.",
  alternates: {
    canonical: "https://viscadia.com/pmrc-2025-usa/",
  },
  openGraph: {
    title: "PMRC USA 2025 | Viscadia",
    description:
      "We are presenting & exhibiting at PMRC USA 2025, February 5-6, 2025 in Newark, New Jersey. Book your slot to explore new tools for modeling timing and order of entry effects.",
    url: "https://viscadia.com/pmrc-2025-usa/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/01/PMRC_USA25Badge-1.png",
        width: 313,
        height: 534,
        alt: "PMRC USA 2025 Badge",
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
