import React from "react";
import { useState, useEffect } from "react";
import PDFComponent from "./PDFComponent";

const ResumeButton = (props) => {
  const { name, pdf } = props;
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.screen.width <= 768);
    }
    window.addEventListener("resize", handleResize);
  });

  //let classes = "btn btn-lg btn-primary btn-";
  //active ? (classes += "outline-success") : (classes += "success");

  const showResume = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="ResumeButtonBackground">
        {!isMobile && (
          <button onClick={showResume} className="ResumeButton">
            {name}
          </button>
        )}
        {isMobile && (
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1F3VYKopH97xEptrv6a4lniyct3KehkFP/view?usp=sharing"
          >
            <button className="ResumeButton">{name}</button>
          </a>
        )}
      </div>
      <div>{active && <PDFComponent file={pdf} active={active} />}</div>
    </React.Fragment>
  );
};

export default ResumeButton;
