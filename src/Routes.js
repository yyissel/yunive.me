import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";

import Contact from "./containers/Contact";
import Resume from "./containers/Resume";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
    </BrowserRouter>
  );
}