import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute/>
      <Route/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
