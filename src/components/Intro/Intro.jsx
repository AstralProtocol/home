import React from "react"
import classNames from "classnames"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Intro.scss"

const Intro = () => {
  return (
    <MaxWidth size="m" className="Intro">
      <img
        className={classNames("Intro__image_container")}
        src={require(`images/Transparent-Logo.png`)}
        alt="Project"
      />
      <h3 className="Intro__subheader">
        At Astral we are building tools to enable the location-based
        decentralized web.
      </h3>
      <Link
        doOpenInNewTab
        isButton
        className="Intro__button"
        buttonProps={{ size: "xl", color: "astral-yellow" }}
        to="/example"
      >
        Read the docs
      </Link>
    </MaxWidth>
  )
}

export default Intro
