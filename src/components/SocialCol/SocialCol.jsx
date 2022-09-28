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
        {icons.map(({ icon, url }) => (
          <Link
            className="SocialCol__icon"
            doOpenInNewTab
            isButton
            buttonProps={{ category: "icon" }}
            to={url}
          >
            <FontAwesomeIcon size="lg" icon={icon} />
          </Link>
        ))}
      </div>
      <div className="SocialCol__separator"></div>
    </div>
  )
}

const icons = [
  {
    icon: faGithub,
    url: "https://github.com/AstralProtocol"
  },   {
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/company/astralprotocol/"
  },   {
    icon: faDiscord,
    url: "https://discord.gg/BMKQyP7DrD"
  },   {
    icon: faTwitter,
    url: "https://twitter.com/astralprotocol"
  }
]

export default SocialCol
