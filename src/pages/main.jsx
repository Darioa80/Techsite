import React from "react";
import Image from "../components/Image";
import ResumeButton from "../components/ResumeButton";
import Logos from "../components/Logos";
//import file from "../Resume.pdf";
import "../components/Text.css";

const MainPage = () => {
  const logos = [
    "MongoDB-Logo.png",
    "node-express.png",
    "react-logo.png",
    "unity.png",
    "C-Sharp.png",
    "java.png",
  ];

  return (
    <React.Fragment>
      <div className="center">
        <div
          className="center main-back"
          style={{ flexDirection: "column", marginTop: "4rem" }}
        >
          <p className="name" style={{ textAlign: "center" }}>
            Dario Andrade Mendoza <br />
          </p>
          <p className="mainText" style={{ textAlign: "center" }}>
            Pronouns: He/Him/His <br />
            Electrical and Computer Engineering | M.S. <br />
            Mechanical Engineering | B.S. <br />
          </p>
          <p className="mainText" style={{ color: "#1A3675" }}>
            <b>dario.andrade.mendoza@gmail.com</b>
          </p>
        </div>
      </div>

      <div className="center">
        <Logos logos={logos} />
      </div>

      <ResumeButton name="Resume" pdf={"Resume.pdf"} />
    </React.Fragment>
  );
};

export default MainPage;
