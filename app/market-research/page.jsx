import SectionOne from '@/components/marketResearch/SectionOne'
import SectionThree from '@/components/marketResearch/SectionThree'
import SectionTwo from '@/components/marketResearch/SectionTwo'
import RendererCardDesingTwo from '@/components/resuseable/RendererCardDesingTwo'
import { marketResearchCardData } from '@/data/marketResearchCardData'
import React from 'react'


export const metadata = {
  title: "Market Research | Viscadia",
  description:
    "Forecasting Solutions Framing the business case and asking the right questions Market Research Demand Studies Models and Platforms Cycle Support Research that Asks the Optimal Questions Too often, forecasting-related market...",
  alternates: {
    canonical: "https://viscadia.com/market-research/",
  },
  openGraph: {
    title: "Market Research | Viscadia",
    description:
      "Forecasting Solutions Framing the business case and asking the right questions Market Research Demand Studies Models and Platforms Cycle Support Research that Asks the Optimal Questions Too often, forecasting-related market...",
    url: "https://viscadia.com/market-research/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/07/MarketResearch0724-1.png",
        width: 1588,
        height: 846,
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
      <RendererCardDesingTwo data={marketResearchCardData || []}/>
      <SectionThree/>
    </div>
  )
}

export default page
