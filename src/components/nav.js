import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import Logo from "../images/Logo";
import "../styles/nav.css";

const Navigation = ({ theme }) => {
    return (
      <nav>
        <Link to="/" className={`${theme}-logo`}>
            <Logo/>
        </Link>
        <div className="nav-links">
          <Link to="/about">
            <Button variant={`button ${theme}-ghost`}>About</Button>
          </Link>
          <a href="mailto:michaelwatchmaker@outlook.com">
            <Button variant={`button ${theme}-primary`}>Say hi 👋🏼</Button>
          </a>
        </div>
      </nav>
    );
};

export default Navigation