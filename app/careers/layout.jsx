import React from "react";

export const metadata = {
  title: "Career Opportunities at Viscadia",
  description:
    "Explore rewarding career opportunities at Viscadia, a leader in innovative forecasting solutions for the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/careers/",
  },
  openGraph: {
    title: "Career Opportunities at Viscadia",
    description:
      "Explore rewarding career opportunities at Viscadia, a leader in innovative forecasting solutions for the life sciences industry.",
    url: "https://viscadia.com/careers/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/03/GPTW-25-1.png",
        width: 727,
        height: 1240,
        alt: "Career Opportunities at Viscadia",
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

export default function Layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
