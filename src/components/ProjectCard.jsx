import React from "react";
import Image from "./Image";
import ViewProj from "./ViewProj";

const ProjectCard = (props) => {
  const { image, alt, styleName, name, text, projectURL, GitURL } = props;

  return (
    <div className="row projCard-back">
      <div className="col-sm">
        <Image styleName={styleName} image={image} alt={alt} name={name} />
        <ViewProj projectURL={projectURL} GitURL={GitURL} />
      </div>
      <div className="col-sm">
        <p className="projText">{text}</p>
        <div className="center">
          <img className="logoImage" src="unity.png" />
          <img className="logoImage" src="C-Sharp.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
