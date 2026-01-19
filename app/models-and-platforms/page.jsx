import SectionThree from '@/components/marketResearch/SectionThree'
import SectionOne from '@/components/modelsAndPlatforms/SectionOne'
import SectionTwo from '@/components/modelsAndPlatforms/SectionTwo'
import RendererCardDesingTwo from '@/components/resuseable/RendererCardDesingTwo'
import { modelsAndPlatforms } from '@/data/modelsAndPlatforms'
import React from 'react'

export const metadata = {
  title: "Models And Platforms | Viscadia",
  description:
    "Forecasting Solutions Well designed and built custom models and platforms Market Research Demand Studies Models and Platforms Cycle Support Transcending the Boundaries of Forecasting with Clarity Embark on a global...",
  alternates: {
    canonical: "https://viscadia.com/models-and-platforms/",
  },
  openGraph: {
    title: "Models And Platforms | Viscadia",
    description:
      "Forecasting Solutions Well designed and built custom models and platforms Market Research Demand Studies Models and Platforms Cycle Support Transcending the Boundaries of Forecasting with Clarity Embark on a global...",
    url: "https://viscadia.com/models-and-platforms/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/07/ModelsPlatforms0724.png",
        width: 1588,
        height: 846,
        type: "image/png",
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
       <RendererCardDesingTwo data={modelsAndPlatforms || []}/>
       <SectionThree/>
    </div>
  )
}

export default page
