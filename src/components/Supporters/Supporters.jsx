import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./Supporters.scss"

const Supporters = () => {
  return (
    <MaxWidth className="Supporters">
      <h2>Built with the best.</h2>
      <h3>Open, reliable, user-centric systems — <br /> with support from:</h3>
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
const celoImage = require(`../../images/celo.png`).default;
const easierImage = require(`../../images/easier.png`).default
const arbitrumImage = require(`../../images/arbitrum.png`).default
const umdImage = require(`../../images/umd.png`).default
const octantImage = require(`../../images/octant.png`).default
const baseImage = require(`../../images/base.svg`).default
const ethereumImage = require(`../../images/ethereum.png`).default


const supporters = [
  // Blockchains
  {
    name: "Ethereum",
    image: ethereumImage,
    url: "https://ethereum.org/",
  },
  {
    name: "Base",
    image: baseImage,
    url: "https://base.org/",
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
  // Tools and Funders
  {
    name: "EAS",
    image: easImage,
    url: "https://attest.sh/",
  },
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
    name: "Octant",
    image: octantImage,
    url: "https://octant.app/project/7/0x6c9770edc75b4D1e1F49d7ce7a65541CA67602bD"
  },
  // Partners
  {
    name: "Kernel",
    image: kernelImage,
    url: "https://kernel.community/",
  },
  {
    name: "University of Maryland",
    image: umdImage,
    url: "https://umd.edu"
  },
  {
    name: "EASIER Data Initiative",
    image: easierImage,
    url: "https://easierdata.org"
  }
]

Supporters.propTypes = {}

export default Supporters
