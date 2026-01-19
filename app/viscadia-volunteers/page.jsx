import SectionOne from '@/components/viscadiaVolunteers/SectionOne'
import SectionThree from '@/components/viscadiaVolunteers/SectionThree'
import SectionTwo from '@/components/viscadiaVolunteers/SectionTwo'
import React from 'react'


export const metadata = {
  title: "Viscadia Volunteers | Viscadia",
  description:
    "Social Impact Viscadia Volunteers Forecasting is complex, but sometimes the answer is clear right from the start: our communities need our support. Giving Back Our colleagues donate their time and...",
  alternates: {
    canonical: "https://viscadia.com/viscadia-volunteers/",
  },
  openGraph: {
    title: "Viscadia Volunteers | Viscadia",
    description:
      "Social Impact Viscadia Volunteers Forecasting is complex, but sometimes the answer is clear right from the start: our communities need our support. Giving Back Our colleagues donate their time and...",
    url: "https://viscadia.com/viscadia-volunteers/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2023/06/65761179_2318773564873840_8387799639910252544_o@2x-1-1.webp",
        width: 800,
        height: 530,
      },
    ],
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

const page = () => {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  )
}

export default page
