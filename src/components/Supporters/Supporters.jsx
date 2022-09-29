import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Supporters.scss"

const Supporters = () => {
  return (
    <MaxWidth className="Supporters">
      <h2>Supported by</h2>
      <div className="Supporters__container">
        {supporters.map((supporter, index) => (
          <div key={index}>
            <Link
              className="Supporters__container__link"
              doOpenInNewTab
              to={supporter.url}
            >
              <img
                className="Supporters__container__item"
                src={supporter.image}
                alt={supporter.name}
              />
            </Link>
            <h3>{supporter.name}</h3>
          </div>
        ))}
      </div>
    </MaxWidth>
  )
}

const gitcoinImage = require(`../../images/gitcoin.png`).default;
const filecoinImage = require(`../../images/filecoin.png`).default;

const supporters = [
  {
    name: "Gitcoin",
    image: gitcoinImage,
    url: "https://gitcoin.co/",
  }, {
    name: "Filecoin",
    image: filecoinImage,
    url: "https://filecoin.io/",
  }
]

Supporters.propTypes = {}

export default Supporters
