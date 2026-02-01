import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import AsciiGlobe from "components/AsciiGlobe/AsciiGlobe"
import "./Intro.scss"

const Intro = () => {
  return (
    <div className="Intro__wrapper">
      <AsciiGlobe />
      <MaxWidth size="m" className="Intro">
        <h1 className="Intro__header">
          The Astral Protocol
        </h1>
        <p className="sub-heading">The trust layer for location data.</p>
        <div className="Intro__buttons">
          <Link
            doOpenInNewTab
            isButton
            className="Intro__buttons_button"
            buttonProps={{ category: "filled" }}
            to="https://docs.astral.global"
          >
            Start Building
          </Link>
          <button
            data-tally-open="mZANZ0"
            data-tally-emoji-text="✨"
            data-tally-emoji-animation="flash"
            data-tally-auto-close="1000"
            className="Intro__buttons_button Intro__buttons_button--outlined"
          >
            Book Consultation
          </button>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Intro
