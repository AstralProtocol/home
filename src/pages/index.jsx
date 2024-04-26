import React from "react"
import Intro from "components/Intro/Intro"
import Features from "components/Features/Features"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Project from "components/Project/Project"
import Projects from "components/Project/Projects.js"
import Supporters from "components/Supporters/Supporters"
import Seo from "components/SEO/Seo"

const Home = () => (
  <Layout showNavigation showSocialCol showFooter className="Home">
    <Seo />
    <Intro />
    <Features />
    <h3 id="features-footer">Now, smart contracts are connected to the <strong>real world</strong>.</h3>
    <Supporters />

    <MaxWidth id="work" className="Home__projects">
      {Object.entries(Projects).map(([key, value], index) => (
        <Project
          {...value}
          images={value.img_src}
          key={index}
        />
      ))}
    </MaxWidth>
  </Layout>
)

export default Home
