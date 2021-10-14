import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./pages/Layout";
//const Layout = React.lazy(() => import("./pages/Layout"));
const Login = React.lazy(() => import("./pages/Login"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Error = React.lazy(() => import("./pages/Error"));

const history = createBrowserHistory();

const loading = (
  <div id="splash-screen" className="kt-splash-screen">
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-100px",
        marginTop: "-100px",
      }}
    >
      <img src="assets/media/handyLoader.gif" />
      {/* <img src="../assets/media/logos/logo-letter-2.png" alt="Metronic logo" /> */}
      <svg className="splash-spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx={25}
          cy={25}
          r={20}
          fill="none"
          strokeWidth={5}
        />
      </svg>
    </div>
  </div>
);

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
          <Route  exact component={Error} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
