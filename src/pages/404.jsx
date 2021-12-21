import React from "react"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import "./404.scss"

const NotFoundPage = () => (
  <Layout showNavigation showSocialCol showFooter>
    <MaxWidth className="NotFound">
      <img src={require(`../images/Twitter-Banner.png`).default} />
      <h1 className="NotFound__header">Page not found</h1>
    </MaxWidth>
  </Layout>
)

export default NotFoundPage
