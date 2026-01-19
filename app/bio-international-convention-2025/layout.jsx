import React from "react";

export const metadata = {
  title: "BIO 2025 | Viscadia",
  description:
    "BIO International Convention 2025, June 16-19, 2025, Boston Convention & Exhibition Center. Book a slot to attend the conference.",
  alternates: {
    canonical: "https://viscadia.com/bio-international-convention-2025/",
  },
  openGraph: {
    title: "BIO 2025 | Viscadia",
    description:
      "BIO International Convention 2025, June 16-19, 2025, Boston Convention & Exhibition Center. Book a slot to attend the conference.",
    url: "https://viscadia.com/bio-international-convention-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/05/Badge_BIO-1.png",
        width: 625,
        height: 1067,
        alt: "BIO 2025 Badge",
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
