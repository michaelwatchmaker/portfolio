import React from "react";
import { Link } from "gatsby";

import "../styles/footer.css";
import "../styles/global.css";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
      <footer>
        <div className="bottom-wrapper">
            <Link to="/">
              <p className="meta regular text-alt footer-name">Michael Watchmaker {year}</p>
            </Link>
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
      </footer>
    );
  };

export default Footer