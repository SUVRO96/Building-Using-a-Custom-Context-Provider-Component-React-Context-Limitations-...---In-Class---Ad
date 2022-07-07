import React, { Component, useState } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <Nav />
          <Switch>
            <Route exact path={"/"} Component={Home} />
            <Route exact path={"/about"} Component={About} />
            <Route exact path={"/*"} Component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
