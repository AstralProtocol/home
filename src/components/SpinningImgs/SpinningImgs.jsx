import React, { Component } from "react"
import Spinner from "components/_ui/Spinner/Spinner"
import "./SpinningImgs.scss"

class SpinningImgs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: ["ethereum"],
      currentImg: null,
    }

    this.img = React.createRef()
  }

  setCurrentImg = (img) => {
    this.setState({ currentImg: img })
  }

  emptyCurrentImg = () => {
    setTimeout(() => {
      this.setState({
        currentImg: null,
      })
    }, 0)
  }

  render() {
    const { currentImg, imgs } = this.state
    return (
      <div className="SpinningImgs__container">
        <div className="SpinningImgs">
          {Object.keys(imgs).map((key) => (
            <Spinner
              key={key}
              setCurrentImg={this.setCurrentImg}
              emptyCurrentImg={this.emptyCurrentImg}
              className="SpinningImgs__img"
              img={imgs[key]}
              mouseEventsEnabled
              spin
            />
          ))}
        </div>
        <span className="SpinningImgs__message">
          powered by{" "}
          {currentImg ? (
            <span className="SpinningImgs__name">{currentImg}</span>
          ) : (
            "Web3"
          )}
        </span>
      </div>
    )
  }
}

export default SpinningImgs
