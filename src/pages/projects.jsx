import React from "react";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container" style={{ paddingTop: "1rem" }}>
      <ProjectCard
        image="thumbnail.png"
        styleName="projectImage"
        alt="thumbnail showing the 2D Tower Defense game made on Unity"
        name="2D Tower Defense"
        text="This is a 2D Tower Defense game I built on Unity. Once the game starts, enemies appear from the left side of the path and make their way to the end. The user is 
      able to click on the UI and select towers to place on the map to damage these enemies. If 5 enemies make it to the end, the player loses. I created this using Object Oriented
      Programming principles such as Inheritance and Polymorphism to create multiple types of towers and enemies. "
        GitURL="https://github.com/Game-Development-UA/Dario---Final-Game"
      />
    </div>
  );
};

export default Projects;
