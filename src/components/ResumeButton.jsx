import React from "react";
import { useState, useEffect, useRef } from "react";
import PDFComponent from "./PDFComponent";

const ResumeButton = (props) => {
  const { name, pdf } = props;
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef(null);

  const PDFURL =
    "https://drive.google.com/file/d/1JVNsZXude4g3OAXmEJYFkg7ToCbL28na/view?usp=sharing";
  useEffect(() => {
    function handleResize() {
      console.log(elementRef.current.getBoundingClientRect().width);
      setIsMobile(elementRef.current.getBoundingClientRect().width <= 960);
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
      <div className="ResumeButtonBackground" ref={elementRef}>
        {!isMobile && (
          <button onClick={showResume} className="ResumeButton">
            {name}
          </button>
        )}
        {isMobile && (
          <a target="_blank" href={PDFURL}>
            <button className="ResumeButton">{name}</button>
          </a>
        )}
      </div>
      <div className="centerColumn">
        {active && <PDFComponent file={pdf} active={active} PDFURL={PDFURL} />}
      </div>
    </React.Fragment>
  );
};

export default ResumeButton;
