import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./containers/main";
import Repos from "./components/Repos";

const Routes = () => {
  return (
    <Switch>
      <Route path="/repos" component={Repos} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
