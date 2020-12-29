import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import SpinningImgs from "components/SpinningImgs/SpinningImgs"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer__container">
      <MaxWidth size="l" className="Footer">
        <div className="Footer__pets">
          <SpinningImgs />
        </div>
        <div className="Footer__copyright__container">
          <span className="Footer__copyright">&copy; 2021 Astral — </span>
          <Link
            className="Footer__copyright__link"
            href="https://github.com/margueriteroth"
          >
            Designed by Marguerite Roth.
          </Link>
        </div>
      </MaxWidth>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
