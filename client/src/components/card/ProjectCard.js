import React from "react";
import data from "../../files/json/ProjectCardData.json";

const ProjectCard = ({ label, status }) => {
  const filteredProjects = data.filter(
    (project) => project.label === label && project.status === status
  );
  
  return (
    <div className="pro-card-container">
      {filteredProjects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={require("../../files/image/" + project.imgURL)} alt="" />
          <div className="description">{project.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
