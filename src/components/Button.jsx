import React from "react";
import { useState } from "react";

const Button = (props) => {
  const { name } = props;
  const [active, setActive] = useState(false);
  let classes = "btn btn-lg btn-primary btn-";
  active ? (classes += "outline-success") : (classes += "success");

  const showResume = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="center">
        <button onClick={showResume} className={classes}>
          {name}
        </button>
      </div>
      {active && (
        <div>
          <h1>Resume Will be here - Visual + Google doc link</h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default Button;
