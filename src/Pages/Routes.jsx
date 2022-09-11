import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MasterRuas from "./MasterRuas";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={MasterRuas} path="/masterruas" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
