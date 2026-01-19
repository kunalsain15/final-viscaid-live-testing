import React from "react";

export const metadata = {
  title: "Contact Us | Viscadia",
  description:
    "Contact Viscadia today! To contact us, please complete this form or send an email to info@viscadia.com.",
  alternates: {
    canonical: "https://viscadia.com/contact-us/",
  },
  openGraph: {
    title: "Contact Us | Viscadia",
    description:
      "Contact Viscadia today! To contact us, please complete this form or send an email to info@viscadia.com.",
    url: "https://viscadia.com/contact-us/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/02/VIS-map.png",
        width: 481,
        height: 240,
        alt: "Contact Us Map",
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
