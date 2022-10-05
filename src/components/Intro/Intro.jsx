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
      <Link className="Header__logo" to="/">
        <img
          className={classNames("Header__logo__container")}
          src={require(`images/astral-logo.svg`).default}
          alt="Logo"
        />
      </Link>
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
