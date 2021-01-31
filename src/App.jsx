import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./fragments/AppBar";
import Background from "./fragments/Background";

import HomePage from "./pages/Home";

export default function App() {
  return (
    <Router>
      <AppBar />
      {/* <Background /> */}

      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
