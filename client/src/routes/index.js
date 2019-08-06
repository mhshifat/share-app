import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ResponseComponent from "../pages/ResponseComponent";
import Download from "../pages/Download";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/response" component={ResponseComponent} />
          <Route exact path="/download/:id" component={Download} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
