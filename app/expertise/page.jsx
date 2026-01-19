import SectionOne from '@/components/expertise/SectionOne'
import SectionTwo from '@/components/expertise/SectionTwo'
import React from 'react'


export const metadata = {
  title: "Our Forecasting Expertise | Viscadia",
  description:
    "Discover our deep forecasting expertise and precision models for the life sciences industry that drive confident decision-making.",
  alternates: {
    canonical: "https://viscadia.com/expertise/",
  },
  openGraph: {
    title: "Our Forecasting Expertise | Viscadia",
    description:
      "Discover our deep forecasting expertise and precision models for the life sciences industry that drive confident decision-making.",
    url: "https://viscadia.com/expertise/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/07/Forecasting-1.png",
        width: 72,
        height: 72,
        type: "image/png",
      },
    ],
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

const page = () => {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default page
