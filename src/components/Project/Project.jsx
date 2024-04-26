import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Button from "components/_ui/Button/Button"
import Link from "components/_ui/Link/Link"
import Label from "components/_ui/Label/Label"
import classNames from "classnames"
import PropTypes from "prop-types"
import "./Project.scss"

const Project = ({
  demo,
  description,
  github,
  hasImageBorder,
  images,
  imgType,
  inspiration,
  readMore,
  tech,
  title,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query PROJECT_QUERY {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <div className="Project__container">
          <div className="Project__info__container">
            <h2 className="Project__title">{title}</h2>
            <div className="Project__about">
              {demo && (
                <p className="Project__about__button">
                  <Link
                    to={demo}
                    isButton
                    doOpenInNewTab
                  >
                    Demo
                  </Link>
                </p>
              )}
              <div>{description}</div>

              {readMore && (
                <p className="Project__about__button">
                  <Link
                    to={readMore}
                    isButton
                  >
                    Read More
                  </Link>
                </p>
              )}

              {github && (
                <p className="Project__about__github">
                  <FontAwesomeIcon
                    className="Project__about__github__icon"
                    icon={faGithub}
                  />
                  <Link
                    doOpenInNewTab
                    to={github}
                    className="Project__about__github__link"
                  >
                    Github
                  </Link>
                </p>
              )}
            </div>
            <div className="Project__tech__section">
              {/* <Label className="Project__tech__title" category="primary">
                tools
              </Label> */}
              {Object.keys(tech).map((key) => (
                <Label className="Project__tech" key={key}>
                  {tech[key]}
                </Label>
              ))}
            </div>
          </div>
          <div
            className={classNames("Project__image__container", {
              "Project__image__container--has-link": github,
            })}
          >
            {images.map((image, i) => (
              <Link
                key={i}
                doOpenInNewTab
                className="Project__image__link"
                to={github}
              >
                <img
                  className={classNames("Project__image", {
                    "Project__image--hasBorder": hasImageBorder,
                  })}

                  src={require(`./images/${image}.png`).default}
                  alt="Project"
                />
                {demo && (
                  <div className="Project__image__action">
                    <Button
                      className="Project__image__button"
                      color="astral-yellow"
                    >
                      Go to demo
                    </Button>
                  </div>
                )}
                {readMore && (
                  <div className="Project__image__action">
                    <Button
                      className="Project__image__button"
                      color="astral-yellow"
                    >
                      Read More
                    </Button>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    />
  )
}

Project.propTypes = {
  demo: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  github: PropTypes.string,
  hasImageBorder: PropTypes.bool,
  images: PropTypes.array,
  inspiration: PropTypes.string,
  tech: PropTypes.array,
  title: PropTypes.string,
}

export default Project
