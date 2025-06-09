import React, { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const uxProjects = [
    { img: "project1.png", title: "Byblos", desc: "User Research, Wireframing, Usability Testing" },
    { img: "project2.png", title: "Citi Bank 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project3.png", title: "Subway", desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping" },
    { img: "project4.png", title: "Style Sphere", desc: "User Research, Wireframing and Prototyping, Usability Testing" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project6.png", title: "Humber Esports", desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping" },
  ];

  const devProjects = [
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: "project5.png", title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
  ];

  return (
    <section id="projects">
      <div className="projects-header-centered">
        <h2 id="projects-title">Featured UX Projects</h2>
        <div className="project-toggle">
          <button
            className={`tab-toggle ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => handleTabChange("ux")}
          >
            UX Projects
          </button>
          <button
            className={`tab-toggle ${activeTab === "dev" ? "active" : ""}`}
            onClick={() => handleTabChange("dev")}
          >
            Web Dev Projects
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {(activeTab === "ux" ? uxProjects : devProjects).map((project, index) => (
          <div className="project" key={index}>
            <img
              src={`/assets/images/${project.img}`}
              alt={`${project.title} project screenshot`}
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
