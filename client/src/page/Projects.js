import React, { useState } from "react";
import ProjectCard from "../components/card/ProjectCard";
import projectData from "../files/json/ProjectCardData.json";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("Building Projects");

  // Function to handle the click on list items
  const handleClick = (section) => {
    setActiveSection(section);
  };
  const hasProjects = (label, status) => {
    const filteredProjects = projectData.filter(
      (project) => project.label === label && project.status === status
    );
    return filteredProjects.length > 0;
  };

  return (
    <div className="project-page">
      <div className="selection">
        <ul className="items">
          <li
            className={
              activeSection === "Building Projects" ? "item active" : "item"
            }
            onClick={() => handleClick("Building Projects")}
          >
            Building Projects
          </li>
          <li
            className={
              activeSection === "Road Projects" ? "item active" : "item"
            }
            onClick={() => handleClick("Road Projects")}
          >
            Road Projects
          </li>
          <li
            className={
              activeSection === "Irrigation Projects" ? "item active" : "item"
            }
            onClick={() => handleClick("Irrigation Projects")}
          >
            Irrigation Projects
          </li>
          <li
            className={
              activeSection === "Steel Structures" ? "item active" : "item"
            }
            onClick={() => handleClick("Steel Structures")}
          >
            Steel Structures
          </li>
        </ul>
      </div>
      {/* <div className="Project-heading ">{activeSection}</div> */}
      <div className="project">
        {activeSection === "Building Projects" && (
          <>
            {hasProjects("Building Projects", "Ongoing") && (
              <div className="section">
                <div className="sub-heading">Ongoing Projects</div>
                <div className="container">
                  <ProjectCard label="Building Projects" status="Ongoing" />
                </div>
              </div>
            )}
            {hasProjects("Building Projects", "Completed") && (
              <div className="section">
                <div className="sub-heading">Completed Projects</div>
                <div className="container">
                  <ProjectCard label="Building Projects" status="Completed" />
                </div>
              </div>
            )}
          </>
        )}
        {activeSection === "Road Projects" && (
          <>
             {hasProjects("Road Projects", "Ongoing") && (
              <div className="section">
                <div className="sub-heading">Ongoing Projects</div>
                <div className="container">
                  <ProjectCard label="Road Projects" status="Ongoing" />
                </div>
              </div>
            )}
            {hasProjects("Road Projects", "Completed") && (
              <div className="section">
                <div className="sub-heading">Completed Projects</div>
                <div className="container">
                  <ProjectCard label="Road Projects" status="Completed" />
                </div>
              </div>
            )}
          </>
        )}
        {activeSection === "Irrigation Projects" && (
          <>
             {hasProjects("Irrigation Projects", "Ongoing") && (
              <div className="section">
                <div className="sub-heading">Ongoing Projects</div>
                <div className="container">
                  <ProjectCard label="Irrigation Projects" status="Ongoing" />
                </div>
              </div>
            )}
            {hasProjects("Irrigation Projects", "Completed") && (
              <div className="section">
                <div className="sub-heading">Completed Projects</div>
                <div className="container">
                  <ProjectCard label="Irrigation Projects" status="Completed" />
                </div>
              </div>
            )}
          </>
        )}
        {activeSection === "Steel Structures" && (
          <>
             {hasProjects("Steel Structures", "Ongoing") && (
              <div className="section">
                <div className="sub-heading">Ongoing Projects</div>
                <div className="container">
                  <ProjectCard label="Steel Structures" status="Ongoing" />
                </div>
              </div>
            )}
            {hasProjects("Steel Structures", "Completed") && (
              <div className="section">
                <div className="sub-heading">Completed Projects</div>
                <div className="container">
                  <ProjectCard label="Steel Structures" status="Completed" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
