import React from "react"
import Intro from "components/Intro/Intro"
import Layout from "components/Layout/Layout"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Project from "components/Project/Project"
import Projects from "components/Project/Projects.js"
import Seo from "components/SEO/Seo"

const Home = () => (
  <Layout showNavigation showSocialCol showFooter>
    <Seo />
    <Intro />
    <MaxWidth className="Home__features">
      <div>
        <h2>Data</h2>
        <Link
          to="https://docs.astral.global/geodids/geodid-intro"
          className="Home__features__item"
        >
          <div>
            <h3>Spatial data, immutably stored</h3>
            <p>
              We have developed GeoDIDs, the primitive for representing raster
              and vector spatial data on IPFS. Read the documentation.
            </p>
          </div>
        </Link>
      </div>
      <div>
        <h2>Oracle</h2>
        <Link
          to="https://docs.astral.global/astral-protocol/oracles"
          className="Home__features__item"
        >
          <div>
            <h3>Bridge the real-world with web3.</h3>
            <p>
              Building the oracle systems to trustlessly fetch spatial data and
              analytics into spatial contracts and location-based dApps.
            </p>
          </div>
        </Link>
      </div>
      <div>
        <h2>Smart Contracts</h2>
        <Link
          to="https://docs.astral.global/astral-protocol/spatial-contracts"
          className="Home__features__item"
        >
          <div>
            <h3>Location-based dApps</h3>
            <p>
              We're developing libraries and tools to make using spatial data in
              smart contracts simple and intuitive.
            </p>
          </div>
        </Link>
      </div>
    </MaxWidth>
    <MaxWidth id="work" className="Home__projects">
      <Project 
        {...Projects.hyperaware}
        images={Projects.hyperaware.img_src}
      />
    </MaxWidth>
    <MaxWidth className="Home__backedby">
      <h1>Supported by</h1>
      <div className="Home__backedby__container">
        <div>
          <Link
            className="Home__backedby__container__link"
            doOpenInNewTab
            to="https://gitcoin.co/"
          >
            <img
              className="Home__backedby__container__item"
              src={require(`../images/gitcoin.png`).default}
              alt="Gitcoin"
            />
          </Link>
          <h3>Gitcoin</h3>
        </div>
        <div>
          <Link
            className="Home__backedby__container__link"
            doOpenInNewTab
            to="https://filecoin.io/"
          >
            <img
              className="Home__backedby__container__item"
              src={require(`../images/filecoin.png`).default}
              alt="Filecoin"
            />
          </Link>
          <h3>Filecoin</h3>
        </div>
      </div>
    </MaxWidth>
  </Layout>
)

export default Home
