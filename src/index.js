
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";

import "./assets/css/material-dashboard-react.css";
import LoginUi from "./components/login/LoginUi.js";
import {connect, Provider} from 'react-redux'
import store  from './store'

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/admin/login" component={LoginUi} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/login" />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
