import React from "react"
import Intro from "components/Intro/Intro"
import Features from "components/Features/Features"
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
    <Features />
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
