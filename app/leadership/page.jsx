import React from "react";
import CommonBanner from "@/components/resuseable/CommonBanner";
import LeadershipSection from "@/components/leaderShipSection/LeadershipSection";

// Metadata for SEO
export const metadata = {
  title: "Meet Our Leadership Team | Viscadia",
  description:
    "Get to know the experienced leaders guiding Viscadia's commitment to excellence in forecasting solutions for the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/leadership/",
  },
  openGraph: {
    title: "Meet Our Leadership Team | Viscadia",
    description:
      "Get to know the experienced leaders guiding Viscadia's commitment to excellence in forecasting solutions for the life sciences industry.",
    url: "https://viscadia.com/leadership/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2023/06/Shruti-Pulkit-Anindya_Edited-2048x1356-1-1.webp",
        width: 2048,
        height: 1356,
        alt: "Viscadia Leadership Team",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "4 minutes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <CommonBanner />
      <LeadershipSection />
    </>
  );
}
