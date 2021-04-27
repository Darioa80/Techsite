import React from "react";
import { useState } from "react";

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { menuTitles, urlEndPoints } = props;
  const idVar = "Dario";
  //nav-pills
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginTop: "25px" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dario
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {menuTitles.map((menuItem, Index) => (
              <li key={Index + idVar.charCodeAt(0)} className="nav-item">
                <NavLink
                  className="nav-link"
                  exact={urlEndPoints[Index] === "/" ? true : false}
                  to={urlEndPoints[Index]}
                  aria-current={urlEndPoints[Index] === "/" ? "page" : null}
                >
                  {menuItem}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
