import CaseStudyCards from '@/components/caseStudies/CaseStudyCards'
import SectionOne from '@/components/caseStudies/SectionOne'
import React from 'react'

export const metadata = {
  title: "Success Stories and Case Studies | Viscadia",
  description:
    "Case Studies Rising to meet the key challenges our clients are facing GLOBAL PATIENT CASE DEMAND STUDY Global demand study for a rare type of hematological cancer with complex treatment...",
  alternates: {
    canonical: "https://viscadia.com/case-studies/",
  },
  openGraph: {
    title: "Success Stories and Case Studies | Viscadia",
    description:
      "Case Studies Rising to meet the key challenges our clients are facing GLOBAL PATIENT CASE DEMAND STUDY Global demand study for a rare type of hematological cancer with complex treatment...",
    url: "https://viscadia.com/case-studies/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/03/Global-Patient.png",
        width: 400,
        height: 400,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "4 minutes",
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
      <CaseStudyCards/>
    </div>
  )
}

export default page
