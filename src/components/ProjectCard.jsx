import React from "react";
import Image from "./Image";
import ViewProj from "./ViewProj";

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
      <div className="col-sm" style={{ margin: "1rem" }}>
        <p className="projText">{text}</p>
        <div className="center">
          {logos.map((item, index) => (
            <img
              className="logoImage"
              src={item}
              style={{ margin: "0rem .25rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
