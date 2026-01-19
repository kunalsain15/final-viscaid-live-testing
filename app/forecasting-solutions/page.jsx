import SectionOne from '@/forecastingSolutions/SectionOne'
import React from 'react'


export const metadata = {
  title: "Custom Forecasting Solutions | Viscadia",
  description:
    "Explore our tailored forecasting solutions and models for the life sciences industry for effective decision support.",
  alternates: {
    canonical: "https://viscadia.com/forecasting-solutions/",
  },
  openGraph: {
    title: "Custom Forecasting Solutions | Viscadia",
    description:
      "Explore our tailored forecasting solutions and models for the life sciences industry for effective decision support.",
    url: "https://viscadia.com/forecasting-solutions/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://bff.ola.mybluehost.me/wp-content/uploads/2023/08/Market-Research-Icon-01-2-1-1-1.webp",
        width: 800,
        height: 530,
        type: "image/webp",
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
    </div>
  )
}

export default page
