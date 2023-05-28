import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import ArrowExternal from "../images/ArrowExternal";
import "../styles/footer.css";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="contact-wrapper">
            <h2 className="center">Wanna know more? Let’s chat 🤝</h2>
            <Button variant="button primary">Say hi</Button>
        </div>
        <div className="bottom-wrapper">
            <p className="footer-name">Michael Watchmaker {year}</p>
            <div className="footer-links">
                <Link to="/about">
                    <Button variant="button ghost">About</Button>
                </Link>
                <Button variant="button ghost">Resume<ArrowExternal/></Button>
            </div>
        </div>
      </div>
    );
  };

export default Footer