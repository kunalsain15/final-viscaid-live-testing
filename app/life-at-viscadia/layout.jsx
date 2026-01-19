import React from "react";

export const metadata = {
  title: "Life at Viscadia",
  description:
    "Start a rewarding career with us! Learn about the unique workplace culture at Viscadia and what makes it an exciting place to work.",
  alternates: {
    canonical: "https://viscadia.com/life-at-viscadia/",
  },
  openGraph: {
    title: "Life at Viscadia",
    description:
      "Start a rewarding career with us! Learn about the unique workplace culture at Viscadia and what makes it an exciting place to work.",
    url: "https://viscadia.com/life-at-viscadia/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2023/04/people-img2.webp",
        width: 688,
        height: 518,
        alt: "Life at Viscadia",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "5 minutes",
  },
};

export default function Layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
