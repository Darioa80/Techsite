import React from "react";
import Image from "../components/Image";
import Button from "../components/Button";

import "../components/Text.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p className="quote">
              "If I've learned anything from engineering, it's that I can always
              try to figure out a probelm/situation. It's an encouraging
              thought, which makes the great uncertainty of life seem a bit less
              intimidating."
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
              name="Dario Andrade Mendoza"
            />
          </div>
        </div>
      </div>
      <div>
        <Button name="Resume" />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
