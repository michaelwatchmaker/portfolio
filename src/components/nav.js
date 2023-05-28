import React from "react";
import { Link } from "gatsby";
import Button from "./button";
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
            <Button variant="button primary">Say hi 👋</Button>
        </div>
      </nav>
    );
  };

export default Navigation