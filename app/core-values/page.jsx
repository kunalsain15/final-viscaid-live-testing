import SectionOne from '@/components/coreValuesPage/SectionOne'
import SectionTwo from '@/components/coreValuesPage/SectionTwo'
import React from 'react'


export const metadata = {
  title: "Our Core Values | Viscadia",
  description:
    "Discover the principals that guide our commitment to delivering innovative forecasting solutions for the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/core-values/",
  },
  openGraph: {
    title: "Our Core Values | Viscadia",
    description:
      "Discover the principals that guide our commitment to delivering innovative forecasting solutions for the life sciences industry.",
    url: "https://viscadia.com/core-values/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "1 minute",
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
