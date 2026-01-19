import React from "react";

export const metadata = {
  title: "Aparajit Ghosh | Viscadia",
  description:
    "Aparajit Ghosh is a Principal at Viscadia and leads the consulting function and India operations. He brings over 15 years of experience in life sciences and consulting.",
  alternates: {
    canonical: "https://viscadia.com/leadership-aparajit-ghosh/",
  },
  openGraph: {
    title: "Aparajit Ghosh | Viscadia",
    description:
      "Aparajit Ghosh is a Principal at Viscadia and leads the consulting function and India operations. He brings over 15 years of experience in life sciences and consulting.",
    url: "https://viscadia.com/leadership-aparajit-ghosh/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/elementor/thumbs/linkedin-4-r1hvisg5hhjiip8ivpxyejcr05p0p4ajibid8i8rnk.png",
        width: 800,
        height: 800,
        alt: "Aparajit Ghosh",
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
