import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import "./Header.scss"

const Header = ({ knockoutHeader }) => (
  <Headroom className="Header__headroom">
    <MaxWidth
      size="l"
      className={classNames("Header__container", {
        "Header__container--knockoutColors": knockoutHeader,
      })}
    >
      <div className="Header__content">
        <Link className="Header__logo" to="/">
          <img
            className={classNames("Header__logo__container")}
            src={require(`images/astral-logo.svg`).default}
            alt="Logo"
          />
        </Link>
        <div className="Header__links">
          {links.map((link, index) => (
            <Link
              doOpenInNewTab
              className="Header__link"
              to={link.url}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </MaxWidth>
  </Headroom>
)

const links = [
  {
    name: "Litepaper",
    url: "https://docs.astral.global",
  }, {
    name: "Projects",
    url: "/#work",
  }, {
    name: "Contact",
    url: "mailto:contact@astral.global",
  }, {
    name: "Donate",
    url: "https://gitcoin.co/grants/1102/astral",
  }
]

Header.propTypes = {
  knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
  knockoutHeader: false,
}

export default Header
