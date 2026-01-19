import SectionOne from '@/components/aboutPage/SectionOne'
import SectionThree from '@/components/aboutPage/SectionThree'
import SectionTwo from '@/components/aboutPage/SectionTwo'
import React from 'react'



export const metadata = {
  title: "About Viscadia",
  description:
    "Learn about our commitment to forecasting excellence and how we empower the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/about-us/",
  },
  openGraph: {
    title: "About Viscadia",
    description:
      "Learn about our commitment to forecasting excellence and how we empower the life sciences industry.",
    url: "https://viscadia.com/about-us/",
    siteName: "Viscadia",
    type: "article",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2023/06/Shruti-Pulkit-Anindya_Edited-2048x1356-1-1.webp",
        width: 2048,
        height: 1356,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "3 minutes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const Page = () => {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  )
}

export default Page
