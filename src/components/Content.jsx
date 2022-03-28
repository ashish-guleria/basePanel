import React, { Suspense } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "../routes";
import { loading } from "../utils/commonFuntions";

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
