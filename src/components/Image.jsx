import React from "react";
import "./Image.css";

const Image = (props) => {
  const { image, alt, styleName, name, description, nameClass } = props;

  return (
    <React.Fragment>
      {name && (
        <div className="center" style={{ width: "100%", marginTop: "2rem" }}>
          <p className={nameClass ? nameClass : "name"}>{name}</p>
        </div>
      )}
      <div className="center">
        <img className={styleName} src={image} alt={alt} />
      </div>
      <div className="center">{description && <p>{description}</p>}</div>
    </React.Fragment>
  );
};

export default Image;
