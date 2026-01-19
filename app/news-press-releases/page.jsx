import SectionOne from '@/components/newsPressReleases/SectionOne'
import PressReleseCard from '@/components/resuseable/PressReleseCard'
import React from 'react'


export const metadata = {
  title: "Latest News and Press Releases | Viscadia",
  description:
    "Stay updated with our latest news and press releases, showcasing our achievements and innovations in the life sciences industry.",
  alternates: {
    canonical: "https://viscadia.com/news-press-releases/",
  },
  openGraph: {
    title: "Latest News and Press Releases | Viscadia",
    description:
      "Stay updated with our latest news and press releases, showcasing our achievements and innovations in the life sciences industry.",
    url: "https://viscadia.com/news-press-releases/",
    siteName: "Viscadia",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://viscadia.com/wp-content/uploads/2025/06/Thumbnail-Card.png",
        width: 726,
        height: 526,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    label1: "Est. reading time",
    data1: "8 minutes",
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
      <PressReleseCard/>
    </div>
  )
}

export default page
