import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Features.scss"


const features = [
  {
    title: "Data",
    subtitle: "Spatial data, immutably stored",
    description: "We have developed GeoDIDs, the primitive for representing raster and vector spatial data on IPFS. Read the documentation.",
    link: "https://docs.astral.global/geodids/geodid-intro",
  }, {
    title: "Oracle",
    subtitle: "Bridge the real-world with web3.",
    description: "Building the oracle systems to trustlessly fetch spatial data and analytics into spatial contracts and location-based dApps.",
    link: "https://docs.astral.global/astral-protocol/oracles",
  }, {
    title: "Smart Contracts",
    subtitle: "Location-based dApps",
    description: "We're developing libraries and tools to make using spatial data in smart contracts simple and intuitive.",
    link: "https://docs.astral.global/astral-protocol/spatial-contracts",
  }
]

const Features = () => {
  return (
    <MaxWidth className="Home__features">
      {features.map(feature => (
        <div>
          <h2 className="Home__features__title">{feature.title}</h2>
          <Link
            to={feature.link}
            className="Home__features__item"
          >
            <div>
              <h3 className="Home__features__subtitle">{feature.subtitle}</h3>
              <p className="Home__features__description">{feature.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </MaxWidth>
  )
}

Features.propTypes = {}

export default Features
