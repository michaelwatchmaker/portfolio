import React from "react";
import "../styles/global.css";
import { Link } from "gatsby";

const ProjectTile = (props) => {
    return (
        <Link to={props.route} className={`project-tile tile-${props.status}`}>
            <div className="project-tile-header">
                <p className="body bold text-alt">{props.caption}</p>
                <h4 className="project-tile-title">{props.title}</h4>
            </div>
        </Link>
    );
};

export default ProjectTile