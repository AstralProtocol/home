import React from "react"
import Link from "components/_ui/Link/Link"
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__content">
        <p className="Banner__announcement">
          We're live on <Link to="https://octant.app/project/7/0x6c9770edc75b4D1e1F49d7ce7a65541CA67602bD" doOpenInNewTab className="Banner__link">Octant Epoch 7</Link> and <Link to="https://explorer.gitcoin.co/#/round/42161/863" doOpenInNewTab className="Banner__link">Gitcoin GG23</Link> — we'd love your support!
        </p>
      </div>
    </div>
  )
}

export default Banner 