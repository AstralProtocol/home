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
      <img
        className={classNames("Intro__image_container")}
        src={require(`images/Transparent-Logo.png`).default}
        alt="Project"
      />
      <h3 className="Intro__subheader">
        At Astral we are building tools to enable the location-based
        decentralized web.
      </h3>
      <div className="Intro__buttons">
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ size: "xl", color: "astral-yellow" }}
          to="https://docs.astral.global"
        >
          Read the docs
        </Link>
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ size: "xl", color: "discord" }}
          to="https://discord.gg/BMKQyP7DrD"
        >
          <span>
            <FontAwesomeIcon icon={faDiscord} />
          </span>
          <span> Join us!</span>
        </Link>
      </div>
    </MaxWidth>
  )
}

export default Intro
