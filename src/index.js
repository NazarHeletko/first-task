/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

import "assets/scss/now-ui-dashboard.scss?v=1.3.0";
import "assets/css/demo.css";

import AdminContainer from "./containers/AdminContainer";
import AuthContainer from "./containers/AuthContainer";

require('./bootstrap');

const hist = createBrowserHistory();

const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(
  rootReducer,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route
          path="/admin"
          render={props => {
            return <AdminContainer {...props} />;
          }}
        />
        <Route
          path="/auth"
          render={props => {
            return <AuthContainer {...props} />;
          }}
        />
        <Redirect to="/admin/translations" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
