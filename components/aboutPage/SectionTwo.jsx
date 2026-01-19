import React from 'react'
import RenderSectionsAlternate from '../resuseable/RenderSectionsAlternate';

const SectionTwo = () => {
     const data = [
    {
      img: "./aboutAssets/Shruti-Pulkit-Anindya_Edited.webp",
      title: "Core Values",
      subTitle: "The ideals that drive us",
      description:
        "We are deeply committed to a vision of shared growth and success for our clients, colleagues and communities.",
      link: "/core-values",
    },
    {
      img: "./aboutAssets/viscadia-leadership.webp",
      title: "Leadership",
      subTitle: "Our dedicated, experienced management team",
      description:
        "We deliver a forward-thinking approach to precision forecasting, guided by deep expertise.",
      link: "/leadership",
    },
    {
      img: "./aboutAssets/Anjali-Group-2048x1536.webp",
      title: "Social Impact",
      subTitle: "Making an impact in vulnerable communities",
      description:
        "We are dedicated to supporting innovative solutions to deep health and educational disparities in our local communities and around the world.",
      link: "/social-impact",
    },
  ];
  return (
    <RenderSectionsAlternate data={data}/>
  )
}

export default SectionTwo
