import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import Logo from "../images/Logo";
import ArrowRight from "../images/ArrowRight";
import "../styles/nav.css";

const NavProject = ({ project }) => {
    return (
      <nav className="fixed">
        <Link to="/" className="dark-logo">
            <Logo/>
        </Link>
        <div className="nav-links">
          <Link to={`/${project}`}>
            <Button variant={`button dark-alt`}>
                Next project
                <ArrowRight/>
            </Button>
          </Link>
        </div>
      </nav>
    );
};

export default NavProject