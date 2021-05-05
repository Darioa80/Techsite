import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "../src/pages/main.jsx";
import Projects from "./pages/projects.jsx";
import Bio from "./pages/bio.jsx";

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
          <Route path={urlEndPoints[0]} component={Projects} />
          <Route path={urlEndPoints[1]} component={Bio} />

          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
