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
            src={require(`images/Transparent-Symbol.png`).default}
            alt="Logo"
          />
        </Link>
        <div className="Header__links">
          <Link
            doOpenInNewTab
            className="Header__link"
            to={"https://docs.astral.global"}
          >
            Litepaper
          </Link>
          <Link className="Header__link" to={"/#work"}>
            Projects
          </Link>
          {/* hidden for now
          <Link className="Header__link" to={"/blog"}>
            Blog
          </Link>
          */}
          <Link
            doOpenInNewTab
            className="Header__link Header__link--email"
            to="mailto:contact@astral.global"
          >
            Contact
            <span>&#8594;</span>
          </Link>
          <Link
            doOpenInNewTab
            className="Header__link Header__link--donate"
            to="https://gitcoin.co/grants/1102/astral"
          >
            Donate
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </MaxWidth>
  </Headroom>
)

Header.propTypes = {
  knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
  knockoutHeader: false,
}

export default Header
