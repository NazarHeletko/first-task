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
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class PanelHeader extends React.Component {
  render() {
    return (
      <div
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      >
        {this.props.tabsNavs && (
          <ul className="header-nav-tabs">
            <li>
              <NavLink to="/admin/settings-plans">Plans</NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings-activity">Activity</NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings-admins">Admins</NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings-ecommerce">Ecommerce</NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings-sass">Saas</NavLink>
            </li>
          </ul>
        )}
        {this.props.content}
      </div>
    );
  }
}

PanelHeader.defaultProps = {
  size: undefined,
  content: null,
  tabsNavs: false
};

PanelHeader.propTypes = {
  // size of the panel header
  size: PropTypes.oneOf(["sm", "lg", "tabs", undefined]),
  // content
  content: PropTypes.node,
  tabsNavs: PropTypes.bool
};

export default PanelHeader;
