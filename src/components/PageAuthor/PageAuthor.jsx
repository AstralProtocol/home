import React from "react"
import classNames from "classnames"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from "components/_ui/Link/Link"
import "./PageAuthor.scss"

const PageAuthor = ({ postLocation, className }) => {
  return (
    <StaticQuery
      query={graphql`
        query HEADSHOT_QUERY {
          headshot: file(relativePath: { regex: "/Transparent-Symbol.png/" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          className={classNames(
            "PageAuthor",
            `PageAuthor--${postLocation}`,
            className
          )}
        >
          <div className="PageAuthor__image__container">
            <Img
              fluid={data.headshot.childImageSharp.fluid}
              className="PageAuthor__image"
            />
          </div>
          <div className="PageAuthor__info">
            <h4 className="PageAuthor__info__title">Astral</h4>
            <div className="PageAuthor__info__description">
              Building tools to enable the location-based decentralized web.
            </div>
            <div className="PageAuthor__info__links">
              <Link
                className="PageAuthor__info__link"
                doOpenInNewTab
                to="https://github.com/astraldao"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                className="PageAuthor__info__link"
                doOpenInNewTab
                to="https://twitter.com/astraldao"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                className="PageAuthor__info__link"
                doOpenInNewTab
                to="mailto:contact@astral.global"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default PageAuthor
