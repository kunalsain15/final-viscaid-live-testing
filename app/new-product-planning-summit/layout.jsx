import React from "react";

export const metadata = {
  title: "NEW PRODUCT PLANNING SUMMIT | Viscadia",
  description:
    "New Product Planning Summit September 30 – October 1, 2024 in Boston, MA. Learn about new product strategies, network with industry leaders, and book your slot now.",
  alternates: {
    canonical: "https://viscadia.com/new-product-planning-summit/",
  },
  openGraph: {
    title: "NEW PRODUCT PLANNING SUMMIT | Viscadia",
    description:
      "New Product Planning Summit September 30 – October 1, 2024 in Boston, MA. Learn about new product strategies, network with industry leaders, and book your slot now.",
    url: "https://viscadia.com/new-product-planning-summit/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2023/09/Frame-46.webp",
        width: 400,
        height: 300,
        alt: "New Product Planning Summit",
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
