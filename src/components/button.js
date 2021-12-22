import React from "react";
import "../styles/button.css";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.variant}>
            {props.children}
        </button>
    );
};

export default Button