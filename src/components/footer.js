import React from "react";

import "../styles/footer.css";
import "../styles/global.css";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="bottom-wrapper">
            <p className="meta regular text-alt footer-name">Michael Watchmaker {year}</p>
            <div className="footer-links">
              <a href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">
                <p className="meta medium link-sm height-md">Figma</p>
              </a>
              <a href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">
                <p className="meta medium link-sm height-md">Resume</p>
              </a>
              <a href="https://www.linkedin.com/in/michaelwatchmaker/" target="_blank" rel="noreferrer">
                <p className="meta medium link-sm height-md">LinkedIn</p>
              </a>
            </div>
        </div>
      </div>
    );
  };

export default Footer