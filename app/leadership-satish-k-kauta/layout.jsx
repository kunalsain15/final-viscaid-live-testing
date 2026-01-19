import React from "react";

export const metadata = {
  title: "Satish K. Kauta | Viscadia",
  description:
    "Satish is the Founder and CEO of Viscadia, with a career spanning more than 25 years in the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/leadership-satish-k-kauta/",
  },
  openGraph: {
    title: "Satish K. Kauta | Viscadia",
    description:
      "Satish is the Founder and CEO of Viscadia, with a career spanning more than 25 years in the life sciences industry.",
    url: "https://viscadia.com/leadership-satish-k-kauta/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Satish K. Kauta",
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
