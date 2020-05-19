import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>

        <Route component={NotFound}/>
        
      </Switch>
    </BrowserRouter>
  );
}