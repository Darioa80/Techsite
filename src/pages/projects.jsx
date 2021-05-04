import React from "react";

import ProjectCard from "../components/ProjectCard";
const towerDefenseLogos = ["unity.png", "C-Sharp.png"];
const MERNLogos = ["MongoDB-Logo.png", "node-express.png", "react-logo.png"];
const Projects = () => {
  return (
    <React.Fragment>
      <div className="container center" style={{ paddingTop: "1rem" }}>
        <ProjectCard
          image="thumbnail.png"
          styleName="projectImage"
          alt="thumbnail showing the 2D Tower Defense game made on Unity"
          name="2D Tower Defense"
          text="This is a 2D Tower Defense game I built on Unity. Once the game starts, enemies appear from the left side of the path and make their way to the end. The user is 
      able to click on the UI and select towers to place on the map to damage these enemies. If 5 enemies make it to the end, the player loses. I created this using Object Oriented
      Programming principles such as Inheritance and Polymorphism to create multiple types of towers and enemies. "
          GitURL="https://github.com/Game-Development-UA/Dario---Final-Game"
          logos={towerDefenseLogos}
          nameClass="projName"
        />
      </div>
      <div className="container center" style={{ paddingTop: "1rem" }}>
        <ProjectCard
          image="mern.PNG"
          styleName="projectImage"
          alt="Image of the MERN Fullstack application I deployed following Udemy's `The MERN Fullstack Guide`. it shows a place a user has created. The user is at the University of Arizona's Aerospace and Mechanical Engineering building."
          text="This is a MERN Fullstack application I deployed following Udemy's `The MERN Fullstack Guide`. This application allows users to create an account and share places they have been. A place is shared by uploading an image,and sharing a description and an address for the Google Maps integration. After following the course, I added extra features such as storing the images on AWS S3 buckets instead of Heroku's free dynos to permanently store uploaded images."
          name="MERN App"
          projectURL="https://mern-practice-b1ac2.web.app/"
          GitURL="https://github.com/Darioa80/MERN-Backend"
          logos={MERNLogos}
          nameClass="projName"
        />
      </div>
    </React.Fragment>
  );
};

export default Projects;
