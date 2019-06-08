import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./pages/home";
import UserRepos from "./pages/userRepos";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/repos" component={UserRepos} />
    </Switch>
  );
};

export default Routes;
