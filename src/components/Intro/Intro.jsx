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
        At Astral we are building tools to enable the location-based
        decentralized web.
      </h1>
      <div className="Intro__buttons">
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "filled" }}
          // TODO: restore back to subdomain once issue is closed (https://github.com/AstralProtocol/astralprotocol/issues/20#issue-2026525326).
          //
          // to="https://docs.astral.global" 
          to="https://astral-protocol.gitbook.io/astral/"
        >
          Read our Litepaper
        </Link>
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "outlined" }}
          to="https://discord.gg/BMKQyP7DrD"
        >
          Join us!
        </Link>
      </div>
    </MaxWidth>
  )
}

export default Intro
