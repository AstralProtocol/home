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
              <strong>Docs↗</strong>
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
    title: "Location Proof Protocol",
    subtitle: "<strong>Build real world x on-chain experiences with Astral location proofs, powered by EAS.</strong> <br /><br />Deployed on Celo, Base, Arbitrum + Sepolia.",
    // description: "Building the oracle systems to trustlessly fetch spatial data and analytics into spatial contracts and location-based dApps.",
    link: "https://docs.astral.global/docs/location-proof-protocol/introduction",
  }, 
  {
    title: "Verifiable<br />Geocomputation",
    subtitle: "<strong>Register geographic assets onchain: polygons, lines + points. Deploy your own sub-registry or build on the Astral Map.</strong> <br /><br />In R+D)",
    // description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    link: "https://docs.astral.global/docs/tools/introduction#onchain-gis",
  },
  {
    title: "Geospatial Data Storage",
    subtitle: "<strong>Store geospatial data on IPFS and write spatial queries.</strong> <br /><br />Research by the EASIER Data Initiative.",
    // description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    link: "https://docs.astral.global/docs/decentralized-spatial-data/introduction",
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