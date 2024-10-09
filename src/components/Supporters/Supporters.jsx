import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Supporters.scss"

const Supporters = () => {
  return (
    <MaxWidth className="Supporters">
      <h2>Web3 to our core.</h2>
      <h3>Astral builds open source, open access, token-free public goods — support from:</h3>
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
            {/* <h3>{supporter.name}</h3> */}
          </div>
        ))}
      </div>
    </MaxWidth>
  )
}

const gitcoinImage = require(`../../images/gitcoin.png`).default;
const filecoinImage = require(`../../images/filecoin.svg`).default;
const kernelImage = require(`../../images/kernel.png`).default;
const easImage = require(`../../images/eas.png`).default;
const ccImage = require(`../../images/climate-collective.gif`).default;
const celoImage = require(`../../images/celo.png`).default;
const easierImage = require(`../../images/easier.png`).default
const arbitrumImage = require(`../../images/arbitrum.png`).default


const supporters = [
   {
    name: "Filecoin",
    image: filecoinImage,
    url: "https://filecoin.io/",
  },
  {
    name: "Gitcoin",
    image: gitcoinImage,
    url: "https://gitcoin.co/",
  },
  {
    name: "Kernel",
    image: kernelImage,
    url: "https://kernel.community/",
  },
  {
    name: "EAS",
    image: easImage,
    url: "https://attest.sh/",
  },
  {
    name: "Climate Collective",
    image: ccImage,
    url: "https://climatecollective.org/",
  },
  {
    name: "Celo",
    image: celoImage,
    url: "https://celo.org/",
  },
  {
    name: "Arbitrum",
    image: arbitrumImage,
    url: "https://arbitrum.io"
  },
  {
    name: "EASIER Data Initiative",
    image: easierImage,
    url: "https://easierdata.org"
  }
]

Supporters.propTypes = {}

export default Supporters
