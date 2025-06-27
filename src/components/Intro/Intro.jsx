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
      <p class="sub-heading">Location-based services for the decentralized web.</p>
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
        <button
          data-tally-open="mZANZ0"
          data-tally-emoji-text="✨"
          data-tally-emoji-animation="flash"
          data-tally-auto-close="1000"
          className="Intro__buttons_button Intro__buttons_button--waitlist"
        >
          Join Waitlist
        </button>
      </div>
    </MaxWidth>
  )
}

export default Intro
