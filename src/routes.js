import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));
const userListing = React.lazy(() => import("./pages/user/list"));
const singleUser = React.lazy(() => import("./pages/user/single"));

const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/changePassword",
    exact: true,
    name: "Change Admin password",
    component: ChangePassword,
  },
  {
    path: "/users",
    exact: true,
    name: "User list",
    component: userListing,
  },
  {
    path: "/users/:userId",
    exact: true,
    name: "single user",
    component: singleUser,
  },
];

export default routes;
