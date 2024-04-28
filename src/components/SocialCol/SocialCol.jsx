import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faTelegram,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import Link from "components/_ui/Link/Link"

import "./SocialCol.scss"

const SocialCol = () => {
  return (
    <div className="SocialCol">
      <div>
        {icons.map(({ icon, url }, index) => (
          <Link
            className="SocialCol__icon"
            doOpenInNewTab
            isButton
            buttonProps={{ category: "icon" }}
            to={url}
            key={index}
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
    icon: faTelegram,
    url: "https://t.me/+UkTOSXnDcDM5ZTBk"
  },   {
    icon: faTwitter,
    url: "https://twitter.com/astralprotocol"
  }
]

export default SocialCol
