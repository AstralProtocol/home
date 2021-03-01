import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import Link from "components/_ui/Link/Link"

import "./SocialCol.scss"

const SocialCol = () => {
  return (
    <div className="SocialCol">
      <div className="SocialCol__icons">
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://github.com/AstralProtocol"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://www.linkedin.com/company/astralprotocol/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://discord.gg/BMKQyP7DrD"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
        {/*
                <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://instagram.com/marguer.ite/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
            */}

        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://twitter.com/astralprotocol"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </div>
  )
}

export default SocialCol
