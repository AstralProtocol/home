import React from "react"
import Link from "components/_ui/Link/Link"
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__content">
        <p className="Banner__announcement">
          Join the Astral waitlist — <span 
            data-tally-open="mZANZ0" 
            data-tally-emoji-text="✨" 
            data-tally-emoji-animation="flash" 
            data-tally-auto-close="1000"
            className="Banner__link"
          >
            sign up now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Banner 