import React from "react";

export default function ForgetPassword(props) {
  console.log(props.match.params);
  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div
        style={{
          height: "100vh" /* Magic here */,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-4">
          <div className="card card-custom gutter-b example example-compact">
            <div className="card-header">
              <h3 className="card-title">Forgot Password</h3>
              <div className="card-toolbar">
                <div className="example-tools justify-content-center"></div>
              </div>
            </div>

            <div className="card card-custom gutter-b example example-compact">
              {/*begin::Form*/}
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label>
                      Old Password
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      required
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      New Password
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      required
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Confirm Password
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      required="true"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="reset" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
              {/*end::Form*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
