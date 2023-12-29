import React from "react";
import { Link } from "gatsby";

import "../styles/nav.css";
import "../styles/global.css";

import Memoji from "../images/memoji.png";


const Navigation = () => {
    return (
      <nav>
        <Link to="/" className='logo'>
          <img src={Memoji} alt="memoji"/>
        </Link>
        <div className="nav-links">
          <Link to="/about">
            <p className="meta medium link-sm height-md">About</p>
          </Link>
          <a href="mailto:michaelwatchmaker@icloud.com">
            <p className="meta medium link-sm height-md">Say hi 📨</p>
          </a>
        </div>
      </nav>
    );
};

export default Navigation