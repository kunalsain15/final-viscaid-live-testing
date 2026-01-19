import React from "react";

export const metadata = {
  title: "PMSA USA 2025 | Viscadia",
  description:
    "PMSA USA 2025, May 18-21, 2025, Hollywood, Florida. Book your slot to attend the annual PMSA conference.",
  alternates: {
    canonical: "https://viscadia.com/pmsa-usa-2025/",
  },
  openGraph: {
    title: "PMSA USA 2025 | Viscadia",
    description:
      "PMSA USA 2025, May 18-21, 2025, Hollywood, Florida. Book your slot to attend the annual PMSA conference.",
    url: "https://viscadia.com/pmsa-usa-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/04/Badge_PMSA.png",
        width: 313,
        height: 534,
        alt: "PMSA USA 2025 Badge",
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
