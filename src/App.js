import React from 'react';
import Index from './Pages/index'
import CommitsPage from './Pages/commitsPage'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './common.css'

function App() {
  return (
    <Router basename="/teste-sciensa/">
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/:handle" component={CommitsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
