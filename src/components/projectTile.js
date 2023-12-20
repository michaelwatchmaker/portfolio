import React from "react";
import "../styles/global.css";
import { Link } from "gatsby";

const ProjectTile = (props) => {
    return (
        <Link to={props.route} className={`project-tile hero-${props.name}`}>
            <img src={props.img}/>
        </Link>
    );
};

export default ProjectTile