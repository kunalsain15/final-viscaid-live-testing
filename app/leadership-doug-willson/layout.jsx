import React from "react";

export const metadata = {
  title: "Doug Willson | Viscadia",
  description:
    "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market experience.",
  alternates: {
    canonical: "https://viscadia.com/leadership-doug-willson/",
  },
  openGraph: {
    title: "Doug Willson | Viscadia",
    description:
      "Douglas “Doug” Willson, Ph.D., leads the forecasting and business strategy team in our Cambridge office. He has over 30 years of forecasting and quantitative market experience.",
    url: "https://viscadia.com/leadership-doug-willson/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Doug Willson",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "2 minutes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function layout({ children }) {
  return <div className="font-arial">{children}</div>;
}
