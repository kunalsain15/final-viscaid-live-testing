import React from "react";
export const metadata = {
  title: "Upcoming Events and Conferences | Viscadia",
  description:
    "Discover our participation in industry events and conferences, where we share insights and innovations.",
  alternates: {
    canonical: "https://viscadia.com/events/",
  },
  openGraph: {
    title: "Upcoming Events and Conferences | Viscadia",
    description:
      "Discover our participation in industry events and conferences, where we share insights and innovations.",
    url: "https://viscadia.com/events/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/08/Tile-Banner.png",
        width: 800,
        height: 600,
        alt: "Upcoming Events Banner",
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
