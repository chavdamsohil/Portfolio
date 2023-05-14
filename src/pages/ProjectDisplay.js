import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../Helper/projectList";
import GitHub from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.path}>
        <img src={project.image} alt="" />
      </a>
      <p>
        <b>Skills</b>:{project.skills}
      </p>

      <GitHub></GitHub>
    </div>
  );
}

export default ProjectDisplay;
