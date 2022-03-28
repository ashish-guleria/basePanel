import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./pages/Layout";
import { loading } from "./utils/commonFuntions";
//const Layout = React.lazy(() => import("./pages/Layout"));
const Login = React.lazy(() => import("./pages/Login"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Error = React.lazy(() => import("./pages/Error"));

const history = createBrowserHistory();



function App() {
  let auth = localStorage.accessToken;
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/forgotPassword/:token"
            component={ForgotPassword}
          />

          {auth && (
            <Route
              path="/"
              name="Home"
              render={(props) => <Layout {...props} />}
            />
          )}

          {!auth && (
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
          )}
          {!auth && (
            <Route
              render={() => {
                history.push({ pathname: "/login" });
                history.go("/login");
              }}
            />
          )}
          {/* <Route  exact component={Error} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
