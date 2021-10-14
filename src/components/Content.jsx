import React, { Suspense } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "../routes";

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
      <img src="../assets/media/handyLoader.gif" />
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

export default function Content() {
  return (
    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
      <div className="d-flex flex-column-fluid">
        <div className="container">
          {/* <BrowserRouter> */}
          <Suspense fallback={loading}>
            <Switch>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Suspense>
          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}
