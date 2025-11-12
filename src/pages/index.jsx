import React from "react"
import Intro from "components/Intro/Intro"
import Features from "components/Features/Features"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Supporters from "components/Supporters/Supporters"
import Seo from "components/SEO/Seo"
import "./home.scss"

const Home = () => (
  <Layout showNavigation showSocialCol showFooter className="Home">
    <Seo />
    <Intro />
    <Features />
    <Supporters />

    <div className="Home__cta-container">
      <MaxWidth className="Home__cta">
        <h2 className="Home__cta-heading">Ready to dive deeper?</h2>
        <a
          href="https://paragraph.com/@astralprotocol/introducing-the-astral-protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="Home__cta-button"
        >
          Introducing Astral
        </a>
      </MaxWidth>
    </div>
  </Layout>
)

export default Home
