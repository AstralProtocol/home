import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import SpinningImgs from "components/SpinningImgs/SpinningImgs"
import "./Footer.scss"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="Footer__container">
      <MaxWidth size="l" className="Footer">
        <div className="Footer__pets">
          {/* <SpinningImgs /> */}
        </div>
        <div className="Footer__copyright__container">
          <span className="Footer__copyright">&copy; {year} Astral</span>
        </div>
      </MaxWidth>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
