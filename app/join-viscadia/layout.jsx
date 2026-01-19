import React from "react";

export const metadata = {
  title: "Join Viscadia",
  description:
    "Find rewarding career opportunities with Viscadia and be a part of our commitment to innovative forecasting solutions.",
  alternates: {
    canonical: "https://viscadia.com/join-viscadia/",
  },
  openGraph: {
    title: "Join Viscadia",
    description:
      "Find rewarding career opportunities with Viscadia and be a part of our commitment to innovative forecasting solutions.",
    url: "https://viscadia.com/join-viscadia/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/05/IMG2.png",
        width: 1362,
        height: 768,
        alt: "Join Viscadia",
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

export default function Layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
