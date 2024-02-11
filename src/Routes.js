import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Pages/Form";
import Profile from "./components/Profile";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
