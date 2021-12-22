import React from "react";
import "../styles/hero-image.css";

const HeroImage = (props) => {
    return (
      <div className={props.type}>
          {props.children}
      </div>
    )
  }

export default HeroImage