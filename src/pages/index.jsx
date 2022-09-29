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
  <Layout showNavigation showSocialCol showFooter>
    <Seo />
    <Intro />
    <Features />
    <MaxWidth id="work" className="Home__projects">
      {Object.entries(Projects).map(([key, value]) => (
        <Project
          {...value}
          images={value.img_src}
        />
      ))}
    </MaxWidth>
    <Supporters />
  </Layout>
)

export default Home
