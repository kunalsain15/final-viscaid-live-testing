import SectionOne from "@/components/cycleSupport/SectionOne";
import SectionTwo from "@/components/cycleSupport/SectionTwo";
// import SectionThree from "@/components/marketResearch/SectionThree";
import SectionCycle from "@/components/cycleSupport/SectionCycle";
import RendererCardDesingTwo from "@/components/resuseable/RendererCardDesingTwo";
import { CycleSupportsData } from "@/data/CycleSupportsData";
import React from "react";

export const metadata = {
  title: "Cycle Support | Viscadia",
  description:
    "Forecasting Solutions Operational and strategic support in key business processes Market Research Demand Studies Models and Platforms Cycle Support Your Trusted Partner Every Step of the Way As your trusted...",
  alternates: {
    canonical: "https://viscadia.com/cycle-support/",
  },
  openGraph: {
    title: "Cycle Support | Viscadia",
    description:
      "Forecasting Solutions Operational and strategic support in key business processes Market Research Demand Studies Models and Platforms Cycle Support Your Trusted Partner Every Step of the Way As your trusted...",
    url: "https://viscadia.com/cycle-support/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2024/07/CycleSupport0724.png",
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
      <SectionOne />
      <SectionTwo />
      <RendererCardDesingTwo data={CycleSupportsData} />
      {/* <SectionThree/> */}
      <SectionCycle />
    </div>
  );
};

export default page;
