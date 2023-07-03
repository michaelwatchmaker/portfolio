import React from "react";
import "../styles/global.css";
import { Link } from "gatsby";
import ArrowRight from "../images/ArrowRight";

const ProjectTile = (props) => {
    return (
        <Link to={props.route} className={`project-tile tile-${props.theme}`}>
            <div className="project-tile-header">
                <h3 className="project-tile-title">{props.title}<br/><span className={`${props.theme}-company`}>{props.company}</span></h3>
                <ArrowRight size={44}/>
            </div>
            <img src={props.image} alt="project tile"/>
        </Link>
    );
};

export default ProjectTile