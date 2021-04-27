import React from "react";
import "./Image.css";

const Image = (props) => {
  const { image, alt, name, description } = props;

  return (
    <React.Fragment>
      <div className="center">
        <img className="mainImage" src={image} alt={alt} />
      </div>
      <div className="center">
        {name && <p className="name">{name}</p>}
        {description && <p>{description}</p>}
      </div>
    </React.Fragment>
  );
};

export default Image;
