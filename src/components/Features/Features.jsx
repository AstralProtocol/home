import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Features.scss"

const Features = () => {
  return (
    <MaxWidth className="Features__container">
      <h2 className="Features__heading">Problems We Solve</h2>
      {features.map((feature, index) => (
        <div key={index} className="Features__item">
          <h3 className="Features__item__title">{feature.title}</h3>
          <p className="Features__item__description">{feature.description}</p>
          <p className="Features__item__examples">{feature.examples}</p>
          <a
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            className="Features__item__cta"
          >
            <strong>{feature.linkText}↗</strong>
          </a>
        </div>
      ))}
      <br />
    </MaxWidth>
  )
}

const features = [
  {
    title: "Trust where your infrastructure runs",
    description: "Prove validator compliance. Verify data center locations. Meet regulatory requirements with cryptographic location proofs—not trust.",
    examples: "Validators · AI compute · CDN operators",
    link: "https://docs.astral.global",
    linkText: "Learn More",
  },
  {
    title: "Build location into your product",
    description: "Add geofencing, distance checks, or regional restrictions without becoming a location-proof expert. Simple APIs, verifiable results.",
    examples: "DeFi apps · Social platforms · Supply chain",
    link: "https://docs.astral.global/api/getting-started",
    linkText: "Start Building",
  },
  {
    title: "Partner with location experts",
    description: "From scoping to production, we build location-based applications and infrastructure tailored to your needs. Technical consulting, custom development, and deep geospatial expertise.",
    examples: "Satellite networks · Mobility platforms · Research organizations",
    link: "https://docs.astral.global",
    linkText: "Book Consultation",
  },
]

Features.propTypes = {}

export default Features