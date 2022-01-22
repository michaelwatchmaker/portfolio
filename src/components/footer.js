import React from "react";
import "../styles/footer.css";

const Footer = () => {

    const thisYear = new Date().getFullYear();

    return (
      <div className="footer-wrapper">
          <p className="body medium">Made with 🍺 in {thisYear}</p>
      </div>
    )
  }

export default Footer