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
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
