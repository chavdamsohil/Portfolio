import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { projectList } from "../Helper/projectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((projects, index) => {
          return (
            <ProjectItem
              id={index}
              name={projects.name}
              image={projects.image}
            ></ProjectItem>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
