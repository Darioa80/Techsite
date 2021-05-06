import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLogos from "./NavLogos";

import "./Image.css";

const NavBar = (props) => {
  const { menuTitles, urlEndPoints } = props;
  const idVar = "Dario";
  //nav-pills
  //id="navbarSupportedContent"
  //<NavLogos></NavLogos>
  //exact={urlEndPoints[Index] === "/" ? true : false}
  //aria-current={urlEndPoints[Index] === "/" ? "page" : null}
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginTop: "10px", paddingLeft: "3rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dario
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {menuTitles.map((menuItem, Index) => (
              <li key={Index + idVar.charCodeAt(0)} className="nav-item">
                <NavLink className="nav-link" to={urlEndPoints[Index]}>
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
