import React from "react"
import Link from "components/_ui/Link/Link"
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__content">
        <p>
          We're excited to announce that we're merging with UMD's EASIER Data Initiative — our new home is the <strong>Decentralized Geospatial Collaborative</strong>.{" "}
          
        </p>
        <p>
          Our mission to build tools for the decentralized geospatial web still stands — more updates coming soon! <Link
            to="https://decentralizedgeo.org/"
            doOpenInNewTab
            className="Banner__link"
          >
            Learn more →
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Banner 