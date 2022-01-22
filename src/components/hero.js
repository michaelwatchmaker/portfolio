import React from "react";
import "../styles/hero.css";

const Hero = (props) => {
    return (
      <div className="hero-wrapper">
          <h1 className="title">{props.children}</h1>
      </div>
    )
  }

export default Hero