import React from "react";
import Image from "../components/Image";
import ResumeButton from "../components/ResumeButton";

//import file from "../Resume.pdf";
import "../components/Text.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p className="quote">
              "A jack of all trades is a master of none, but{" "}
              <b>oftentimes better </b> than a master of one"
            </p>
            <p className="maintext">
              Dario Andrade Mendoza holds a Master's degree in Electrical and
              Computer Engineering from the University of Arizona. Dario also
              holds a bachelor's degree in Mechanical Engineering. While he has
              spent years studying STEM he has also managed to create profound
              change in Tucson Arizona as a grassroots communty leader.
            </p>
            <p className="maintext">
              Given the scope of his experience, Dario has decided to pursue
              <b> Software Development</b> as a career. This site is his
              personal website to share the programming projects he has worked
              on and deployed.
            </p>
          </div>
          <div className="col-sm">
            <Image
              image="Dario-main-tall.jpg"
              alt="Dario"
              styleName="mainImage"
              name="Dario Andrade Mendoza"
            />
          </div>
        </div>
      </div>
      <div>
        <ResumeButton name="Resume" pdf={"Resume.pdf"} />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
