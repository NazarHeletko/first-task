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
/*
import Ecommerce from "views/Ecommerce/Ecommerce";
import SaasService from "views/SaasService/SaasService";
import APIConnections from "views/APIConnections/APIConnections";*/
import DashboardContainer from "containers/DashboardContainer";
import SettingsEcommerce from "views/Settings/SettingsEcommerce";
import SettingsPlans from "views/Settings/SettingsPlans";
import SettingsActivity from "views/Settings/SettingsActivity";
import SettingsSass from "./views/Settings/SettingsSass";
import User from "./views/Pages/UserPage";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import TranslationsContainer from "containers/TranslationsContainer";
import SettingsAdminsContainer from "./containers/SettingsAdminContainer";

import Loaders from "./views/Components/Loaders";

let routes = [
  {
    path: "/dashboard",
    name: "App Users",
    icon: "fpp-icon-phone",
    component: DashboardContainer,
    layout: "/admin"
  },
  {
    path: "/translations",
    name: "Translations",
    icon: "fpp-icon-phone",
    component: TranslationsContainer,
    layout: "/admin"
  },
  /*{
    path: "/ecommerce",
    name: "Ecommerce",
    icon: "fpp-icon-eshop",
    component: Ecommerce,
    layout: "/admin"
  },
  {
    path: "/saas-service",
    name: "Saas Service",
    icon: "fpp-icon-cloud",
    component: SaasService,
    layout: "/admin"
  },
  {
    path: "/api-connections",
    name: "API Connections",
    icon: "fpp-icon-api",
    component: APIConnections,
    layout: "/admin"
  },*/
  {
    path: "/settings-plans",
    name: "Settings",
    icon: "fpp-icon-settings",
    component: SettingsPlans,
    layout: "/admin",
    childPath: '/admin/settings',
    permissionsNeeded: [ "SUPERADMIN" ]
  },
  {
    path: "/settings-activity",
    name: "Settings",
    invisible: true,
    component: SettingsActivity,
    layout: "/admin",
  },
  {
    path: "/settings-admins",
    name: "Settings",
    invisible: true,
    component: SettingsAdminsContainer,
    layout: "/admin"
  },
  {
    path: "/settings-ecommerce",
    name: "Settings",
    invisible: true,
    component: SettingsEcommerce,
    layout: "/admin"
  },
  {
    path: "/settings-sass",
    name: "Settings",
    invisible: true,
    component: SettingsSass,
    layout: "/admin"
  },
  {
    collapse: true,
    path: "/pages",
    name: "Pages",
    state: "openPages",
    icon: "now-ui-icons design_image",
    invisible: true,
    views: [
      {
        path: "/register",
        name: "Register",
        short: "Register",
        mini: "RP",
        component: RegisterContainer,
        layout: "/auth"
      },
      {
        path: "/login",
        name: "Login",
        short: "Login",
        mini: "LP",
        component: LoginContainer,
        layout: "/auth"
      },
      {
        path: "/profile",
        name: "Profile",
        short: "Profile",
        mini: "Pr",
        component: User,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: "now-ui-icons education_atom",
    invisible: true,
    views: [
      {
        path: "/loaders",
        name: "Loaders",
        mini: "LD",
        component: Loaders,
        layout: "/admin"
      }
    ]
  }
];


export default routes;
