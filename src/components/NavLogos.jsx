import React from "react";

const NavLogos = () => {
  return (
    <div className="d-flex justify-content-end NavBar-logos">
      <a
        href="https://www.linkedin.com/in/dario-andrade-mendoza-563ab41bb/"
        target="_blank"
      >
        <img
          style={{ width: "2.5rem" }}
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
  );
};

export default NavLogos;
