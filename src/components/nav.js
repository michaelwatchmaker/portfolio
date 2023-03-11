import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import ArrowExternal from "../images/ArrowExternal";
import Logo from "../images/Logo";
import "../styles/nav.css";

const Navigation = () => {
    return (
      <nav>
        <Link to="/" className="logo">
            <Logo/>
        </Link>
        <div className="nav-links">
          <Link to="/about">
            <Button variant="button ghost">About</Button>
          </Link>
            <Button variant="button alt">Resume<ArrowExternal/></Button>
        </div>
      </nav>
    );
  };

export default Navigation