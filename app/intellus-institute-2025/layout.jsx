import React from "react";

export const metadata = {
  title: "Intellus Institute 2025 | Viscadia",
  description:
    "Intellus Institute 2025 September 10-12, 2025 Hyatt Regency New Brunswick, New Jersey, USA. Book a slot to attend and learn from industry experts.",
  alternates: {
    canonical: "https://viscadia.com/intellus-institute-2025/",
  },
  openGraph: {
    title: "Intellus Institute 2025 | Viscadia",
    description:
      "Intellus Institute 2025 September 10-12, 2025 Hyatt Regency New Brunswick, New Jersey, USA. Book a slot to attend and learn from industry experts.",
    url: "https://viscadia.com/intellus-institute-2025/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/08/Website-Badge-.png",
        width: 313,
        height: 534,
        alt: "Intellus Institute 2025 Badge",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
