import {useState, useEffect, React} from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import "./Header.scss"

const Header = ({ knockoutHeader }) =>{
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
      // Function to update state based on window width
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      // Set up event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
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
        {windowWidth <= 1000 ? null : (<div className="Header__links">
          
            <Link
              doOpenInNewTab
              isButton
              className="Intro__buttons_button"
              buttonProps={{ category: "outlined" }}
              to="https://dorahacks.io/hackathon/ftc-2024/tracks#environmental-impact-by-klimadao"
            >
              Enter the FtC x EC Hackathon ↗
            </Link>
            <Link
              doOpenInNewTab
              isButton
              className="Intro__buttons_button"
              buttonProps={{ category: "filled" }}
              // TODO: restore back to subdomain once issue is closed (https://github.com/AstralProtocol/astralprotocol/issues/20#issue-2026525326).
              //
              // to="https://docs.astral.global" 
              to="https://logbook.astral.global"
            >
              Logbook App →
            </Link>
        </div>)}
      </div>
    </MaxWidth>
  </Headroom>
)}

Header.propTypes = {
  knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
  knockoutHeader: false,
}

export default Header
