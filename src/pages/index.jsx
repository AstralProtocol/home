import React from "react"
import Link from "components/_ui/Link/Link"
import Intro from "components/Intro/Intro"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Project from "components/Project/Project"
import projects from "components/Project/projects.js"
import SEO from "components/SEO/SEO"

const Home = () => (
  <Layout showNavigation showSocialCol showFooter>
    <SEO />
    <Intro />
    <MaxWidth className="Home__features">
      <div>
        <h2>Data</h2>
        <Link to="/example" className="Home__features__item">
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
        <Link to="/blog/set-up-local-website" className="Home__features__item">
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
        <Link to="/blog/set-up-local-website" className="Home__features__item">
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
      <h1>Astral Work</h1>
      {Object.keys(projects).map((key) => (
        <Project
          demo={projects[key].demo}
          description={projects[key].description}
          github={projects[key].github}
          hasImageBorder={projects[key].hasImageBorder}
          images={projects[key].img_src}
          imgType={projects[key].imgType}
          inspiration={projects[key].inspiration}
          projectType={projects[key].projectType}
          tech={projects[key].tech}
          title={projects[key].title}
          readMore={projects[key].readMore}
          key={key}
        />
      ))}
    </MaxWidth>
    <MaxWidth className="Home__backedby">
      <h1>Backed by</h1>
      <div className="Home__backedby__container">
        <div>
          <Link
            className="Home__backedby__container__link"
            doOpenInNewTab
            to="https://gitcoin.co/"
          >
            <img
              className="Home__backedby__container__item"
              src={require(`../images/gitcoin.png`)}
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
              src={require(`../images/filecoin.png`)}
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
