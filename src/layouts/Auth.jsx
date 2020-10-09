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
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import NotificationAlert from "react-notification-alert";

// core components
import Footer from "components/Footer/Footer.jsx";

import routes from "routes.js";
import Loader from "../views/CustomComponents/Loader";

var ps;

class Auth extends React.Component {
  state = {
    filterColor: "blue"
  };
  notificationAlert = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.fullPages);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    // const { authenticated } = this.props;
    return (
      <>
        <div className="wrapper wrapper-full-page" ref="fullPages">
         <NotificationAlert ref={this.notificationAlert} />
          <div
            className="full-page section-image"
            filter-color={this.state.filterColor}
          >
            <Switch>
              {this.getRoutes(routes)}
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
            <Footer fluid />
          </div>
        </div>
        <Loader/>
      </>
    );
  }
}

export default Auth;
