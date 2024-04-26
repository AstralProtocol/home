import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Features.scss"

const Features = () => {
  return (
    <MaxWidth className="Features__container">
      {features.map((feature, index) => (
        <a key={index} href={feature.link} className="Features__item">
          <h2 className="Features__item__title">{feature.title}</h2>
          <h3 className="Features__item__subtitle">{feature.subtitle}</h3>
          <p className="Features__item__description">{feature.description}</p>
        </a>
      ))}

      <br />
    </MaxWidth>
  )
}

const features = [
  {
    title: "Your on-chain basemap.",
    subtitle: "Register geographic assets: polygons, lines + points. Deploy your own sub-registry or build on the Astral Map.",
    // description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    // link: "https://docs.astral.global/geodids/geodid-intro",
  }, {
    title: "ZK location proofs.",
    subtitle: "Build real world Web3 experiences with our privacy-preserving geospatial coordinate attestations, powered by zkMaps and EAS",
    // description: "Building the oracle systems to trustlessly fetch spatial data and analytics into spatial contracts and location-based dApps.",
    // link: "https://docs.astral.global/astral-protocol/oracles",
  }
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