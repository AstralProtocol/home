import React from "react"
import classNames from "classnames"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./Intro.scss"

const Intro = () => {
  return (
    <MaxWidth size="m" className="Intro">
      <h1 className="Intro__header">
        Build<br /> <strong><em>location-based</em></strong> <br />dapps.
      </h1>
      <p class="sub-heading">Astral develops open source tools + infrastructure <br />so you can easily build location-based dapps. </p>
      <div className="Intro__buttons">
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "filled" }}
          // TODO: restore back to subdomain once issue is closed (https://github.com/AstralProtocol/astralprotocol/issues/20#issue-2026525326).
          //
          // to="https://docs.astral.global" 
          to="https://docs.astral.global"
        >
          Read the docs
        </Link>
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "outlined" }}
          to="https://t.me/+UkTOSXnDcDM5ZTBk"
        >
          Join our Telegram
        </Link>
      </div>
    </MaxWidth>
  )
}

export default Intro
