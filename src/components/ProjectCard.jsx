import React from "react";
import Image from "./Image";
import ViewProj from "./ViewProj";
import Logos from "./Logos";

const ProjectCard = (props) => {
  const {
    image,
    alt,
    styleName,
    name,
    text,
    projectURL,
    GitURL,
    logos,
    nameClass,
  } = props;
  //    <img className="logoImage" src="unity.png" />
  //    <img className="logoImage" src="C-Sharp.png" />
  return (
    <div className="row projCard-back">
      <div className="col-sm">
        <Image
          styleName={styleName}
          image={image}
          alt={alt}
          name={name}
          nameClass={nameClass}
        />
        <ViewProj projectURL={projectURL} GitURL={GitURL} />
      </div>
      <div className="col-sm">
        <p className="projText">{text}</p>
        <Logos logos={logos} />
      </div>
    </div>
  );
};

export default ProjectCard;
