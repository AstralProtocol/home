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
      <h3 className="Intro__subheader">
        At Astral we are building tools to enable the location-based
        decentralized web.
      </h3>
      <div className="Intro__buttons">
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "filled" }}
          to="https://docs.astral.global"
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
