import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import "./Spinner.scss"

class Spinner extends Component {
  static propTypes = {
    emptyCurrentImg: PropTypes.func,
    currentMenuStep: PropTypes.number,
    img: PropTypes.string,
    mouseEventsEnabled: PropTypes.bool,
    size: PropTypes.string,
    spin: PropTypes.bool,
  }

  static defaultProps = {
    img: "ethereum",
    mouseEventsEnabled: false,
    spin: false,
  }

  onMouseOver = () => {
    this.props.setCurrentImg(this.props.img)
  }

  onMouseLeave = () => {
    this.props.emptyCurrentImg()
  }

  getClassName() {
    const { size, spin, className } = this.props
    return classNames(
      className,
      "Spinner__container",
      `Spinner__container--size-${size}`,
      { "Spinner__container--spin": spin }
    )
  }

  render() {
    const { img, mouseEventsEnabled } = this.props

    return (
      <div
        className={this.getClassName()}
        onMouseOver={mouseEventsEnabled ? this.onMouseOver : null}
        onMouseLeave={mouseEventsEnabled ? this.onMouseLeave : null}
      >
        <img
          src={require(`./img-${img}.png`)}
          alt="Spinning img"
          className="Spinner"
        />
      </div>
    )
  }
}

export default Spinner
