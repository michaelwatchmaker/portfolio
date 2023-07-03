import React from "react";
import Button from "./button";
import "../styles/footer.css";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="contact-wrapper">
            <h2 className="center">Wanna know more? Let’s chat 🤝🏼</h2>
            <a href="mailto:michaelwatchmaker@outlook.com">
              <Button variant="button dark-primary">Say hi</Button>
            </a>
        </div>
        <div className="bottom-wrapper">
            <p className="footer-name">Michael Watchmaker {year}</p>
            <p className="footer-links"><a className="link" href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>   /   <a className="link" href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">Figma</a>   /   <a className="link" href="https://www.linkedin.com/in/michaelwatchmaker/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
      </div>
    );
  };

export default Footer