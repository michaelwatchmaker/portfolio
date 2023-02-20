import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import "../styles/footer.css";
import ArrowExternal from "../images/ArrowExternal";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="contact-wrapper">
            <h2>Want to know more?<br/><span className="contact-alt header-alt">Let's chat about it</span></h2>
            <Button variant="button alt">Email</Button>
        </div>
        <div className="bottom-wrapper">
            <p>Michael Watchmaker {year}</p>
            <div className="footer-links">
                <Link to="/about">
                    <Button variant="button ghost">
                        About me
                    </Button>
                </Link>
                <Button variant="button ghost">Resume<ArrowExternal/></Button>
            </div>
        </div>
      </div>
    );
  };

export default Footer