import SectionOne from '@/components/sociaIimpactPage/SectionOne'
import SectionTwo from '@/components/sociaIimpactPage/SectionTwo'
import React from 'react'



export const metadata = {
  title: "Social impact | Viscadia",
  description:
    "Explore our contributions to the life sciences industry and our commitment to making a positive social impact.",
  alternates: {
    canonical: "https://viscadia.com/social-impact/",
  },
  openGraph: {
    title: "Social impact | Viscadia",
    description:
      "Explore our contributions to the life sciences industry and our commitment to making a positive social impact.",
    url: "https://viscadia.com/social-impact/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2023/06/Charity-Water-2-1.webp",
        width: 2048,
        height: 1356,
      },
    ],
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
