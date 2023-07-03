import React from "react";
import "../styles/project.css";

const SummaryBrick = ({ type, title, body }) => {
    return (
      <div className="summary-brick">
        <div className={`summary-brick-bar bar-${type}`}></div>
        <div className="summary-brick-content">
            <p className={`body bold left summary-brick-title title-${type}`}>{title}</p>
            <p className="body left">{body}</p>
        </div>
      </div>
    );
};

export default SummaryBrick