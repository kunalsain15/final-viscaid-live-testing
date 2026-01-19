import SectionOne from '@/components/therapeuticAreas/SectionOne'
import SectionTwo from '@/components/therapeuticAreas/SectionTwo'
import React from 'react'


export const metadata = {
  title: "Forecasting in Therapeutic Areas | Viscadia",
  description:
    "We specialize in forecasting for various therapeutic areas, including Cardiovascular, Oncology, Respiratory and more.",
  alternates: {
    canonical: "https://viscadia.com/therapeutic-areas/",
  },
  openGraph: {
    title: "Forecasting in Therapeutic Areas | Viscadia",
    description:
      "We specialize in forecasting for various therapeutic areas, including Cardiovascular, Oncology, Respiratory and more.",
    url: "https://viscadia.com/therapeutic-areas/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2021/03/Asset-31.png",
        width: 51,
        height: 51,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "6 minutes",
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
