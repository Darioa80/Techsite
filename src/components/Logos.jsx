import React from "react";

const Logos = (props) => {
  const { logos } = props;
  return (
    <div className="logos" style={{ margin: "1rem" }}>
      {logos.map((item, index) => (
        <img
          className="logoImage"
          src={item}
          style={{ margin: "0rem .333rem" }}
        />
      ))}
    </div>
  );
};

export default Logos;
