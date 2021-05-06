import React from "react";

const NavLogos = () => {
  return (
    <React.Fragment>
      <div className="center NavBar-logos" style={{ paddingTop: "1.25rem" }}>
        <a
          href="https://www.linkedin.com/in/dario-andrade-mendoza-563ab41bb/"
          target="_blank"
        >
          <img
            style={{ width: "4rem" }}
            src="Linkedin-logo.png"
            className="d-inline-block"
            alt="LinkedIn logo"
          />
        </a>

        <a href="https://github.com/Darioa80" target="_blank">
          <img
            src="github-logo-white.png"
            className="d-inline-block"
            alt="Github logo"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default NavLogos;
