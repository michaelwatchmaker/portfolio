import React, { useState }from "react";
import { Link } from "gatsby";
import Button from "./button";
import "../styles/nav.css";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);
  
    const navigation = [
      { link: '/about', text: 'About' },
      { link: '/project', text: 'Project' },
    ];
  
    return (
      <nav>
        <header>
          <Link to="/" className="logo">Michael Watchmaker</Link>
          <Button variant="alt icon" onClick={toggle}>
            <img alt="icon" src={isOpen ? close : menu}/>
          </Button>
        </header>
        {isOpen && (
          <ul className="nav-links">
            {navigation.map(nav => (
              <li key={nav.text}>
                <Link to={nav.link} onClick={toggle} onBlur={hide} onFocus={show}>
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    );
  };

export default Navigation