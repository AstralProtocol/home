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
        Building a spatial data protocol for the decentralized web
      </h3>
      <Link
        doOpenInNewTab
        isButton
        className="Intro__button"
        buttonProps={{ size: "xl", color: "yellow-stroke" }}
        to="mailto:hello@marguerite.io"
      >
        Launch Astral Studio
      </Link>
    </MaxWidth>
  )
}

export default Intro
