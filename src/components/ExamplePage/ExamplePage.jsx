import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Label from "components/_ui/Label/Label"
import "./Example.scss"

const Example = () => {
  return (
    <MaxWidth size="l" className="Example">
      <MaxWidth size="l" className="Example__header">
        <Link to="/" className="Example__home__link">
          <Label category="primary">← Astral</Label>
        </Link>
        <h1 className="Example__header__title">The Example</h1>
        <h3 className="Example__header__description">
          Welcome Example Nation. Following along with the new contestants is
          hard—this guide is here to help! 🌹
        </h3>
      </MaxWidth>
    </MaxWidth>
  )
}

export default Example
