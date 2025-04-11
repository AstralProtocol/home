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
        Introducing<br />the Astral Protocol
      </h1>
      <p class="sub-heading">A spatial extension for the decentralized web.</p>
      <div className="Intro__buttons">
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "filled" }}
          // TODO: restore back to subdomain once issue is closed (https://github.com/AstralProtocol/astralprotocol/issues/20#issue-2026525326).
          //
          // to="https://docs.astral.global" 
          to="https://paragraph.com/@astralprotocol/introducing-the-astral-protocol"
        >
          Introducing Astral
        </Link>
        <Link
          doOpenInNewTab
          isButton
          className="Intro__buttons_button"
          buttonProps={{ category: "outlined" }}
          to="https://docs.astral.global"
        >
          Read the docs
        </Link>
      </div>
    </MaxWidth>
  )
}

export default Intro
