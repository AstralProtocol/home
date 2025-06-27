import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import "./Features.scss"

const Features = () => {
  return (
    <MaxWidth className="Features__container">
      {features.map((feature, index) => (
        <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="Features__item">
          <h2 className="Features__item__title" dangerouslySetInnerHTML={{__html: feature.title}}></h2>
          <h3 className="Features__item__subtitle">
            {/* Render the HTML from feature.subtitle */}
            <span dangerouslySetInnerHTML={{ __html: feature.subtitle }} />

            {/* Add &nbsp;s and the link */}
            &nbsp;&nbsp;&nbsp;
            <span><a href={feature.link} rel="noopener noreferrer">
              <strong>{feature.linkText || 'Docs'}↗</strong>
            </a></span>
          </h3>            
          {/* <p className="Features__item__description">{feature.description}
          </p> */}
          
        </a>
      ))}
      <br />
    </MaxWidth>
  )
}

const features = [
  {
    title: "Location Protocol",
    subtitle: "A common standard for structured, signed spatial data. <br /><br />Built on EAS, deployed on Celo, Base, Arbitrum + Sepolia.",
    // description: "Building the oracle systems to trustlessly fetch spatial data and analytics into spatial contracts and location-based dApps.",
    link: "https://docs.astral.global/location-protocol/introduction",
  }, 
  {
    title: "Astral AVS",
    subtitle: "Location proof verification and geospatial processing.<br /><br />",
    // description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    link: "https://x.com/AstralProtocol/status/1937881217728221684",
    linkText: "Demo",
  },
  {
    title: "Astral API<br />+ SDK",
    subtitle: "Dev tools + infrastructure to build location-based dapps. <br /><br />In alpha.",
    // description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    link: "https://docs.astral.global/api/getting-started",
  },
  // , 
  // {
  //   title: "Smart Contracts",
  //   subtitle: "Location-based dApps",
  //   description: "We're developing libraries and tools to make using spatial data in smart contracts simple and intuitive.",
  //   link: "https://docs.astral.global/astral-protocol/spatial-contracts",
  // }
]

Features.propTypes = {}

export default Features