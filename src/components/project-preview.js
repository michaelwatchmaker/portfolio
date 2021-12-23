import { Link } from "gatsby";
import React from "react";
import "../styles/project-preview.css";
import Button from "./button";

const ProjectPreview = (props) => {
    return (
      <div className="project-wrapper">
          <div className="project-details">
            <h2 className="section">{props.name}</h2>
            <p className="body">{props.description}</p>
            <Link to={props.page}>
                <Button variant="alt">View Project</Button>
            </Link>
          </div>
          <Link className={props.variant} to={props.page}>
            {props.children}
          </Link>
      </div>
    )
  }

export default ProjectPreview