import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "../src/pages/main.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const menuTitles = ["Projects", "Bio"];
  const urlEndPoints = ["/projects", "/bio"];

  return (
    <React.Fragment>
      <NavBar menuTitles={menuTitles} urlEndPoints={urlEndPoints} />
      <main>
        <Switch>
          <Route path={urlEndPoints[0]} />
          <Route path={urlEndPoints[1]} />

          <Route path="/" exact component={MainPage} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
