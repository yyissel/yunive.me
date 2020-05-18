import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import AboutMe from "./containers/AboutMe";
import Resume from "./containers/Resume";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about-me" exact component={AboutMe}/>
        <Route path="/resume" exact component={Resume}/>
      </Switch>
    </BrowserRouter>
  );
}