import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
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
        {/*
                <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://codepen.io/marguerite/"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </Link>
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
