import React from "react";
import { useState } from "react";
import PDFComponent from "./PDFComponent";

const Button = (props) => {
  const { name, pdf } = props;
  const [active, setActive] = useState(false);
  //let classes = "btn btn-lg btn-primary btn-";
  //active ? (classes += "outline-success") : (classes += "success");

  const showResume = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="ResumeButtonBackground">
        <button onClick={showResume} className="ResumeButton">
          {name}
        </button>
      </div>
      <div>{active && <PDFComponent file={pdf} active={active} />}</div>
    </React.Fragment>
  );
};

export default Button;
