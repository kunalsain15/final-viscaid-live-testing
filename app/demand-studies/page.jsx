import SectionOne from '@/components/demandStudies/SectionOne'
import SectionThree from '@/components/demandStudies/SectionThree'
import SectionTwo from '@/components/demandStudies/SectionTwo'
import RendererCardDesingTwo from '@/components/resuseable/RendererCardDesingTwo'
import { demandStudiesData } from '@/data/demandStudiesData'
import React from 'react'


export const metadata = {
  title: "Demand Studies | Viscadia",
  description:
    "Demand Studies Demand study solutions that drive the forecast. Market Research Demand Studies Models and Platforms Cycle Support Research That Asks the Right Questions, Drives the Best Forecasts Predicting demand...",
  alternates: {
    canonical: "https://viscadia.com/demand-studies/",
  },
  openGraph: {
    title: "Demand Studies | Viscadia",
    description:
      "Demand Studies Demand study solutions that drive the forecast. Market Research Demand Studies Models and Platforms Cycle Support Research That Asks the Right Questions, Drives the Best Forecasts Predicting demand...",
    url: "https://viscadia.com/demand-studies/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/03/Section-2-Vector.png",
        width: 4500,
        height: 4500,
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
      <RendererCardDesingTwo data={demandStudiesData || []}/>
      <SectionThree/>
    </div>
  )
}

export default page
