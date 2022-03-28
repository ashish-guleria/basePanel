import React, { useState } from "react";
import { changePassword } from "../networkRequests/auth";
import {
  loading,
  toastError,
  toastSuccess,
  validatePassword,
} from "../utils/commonFuntions";

export default function ChnagePassword() {
  const [loader, setLoader] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const _changePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      return toastError("Please fill all fields");
    }

    if (oldPassword.length < 6) {
      return toastError("Password is incorrect.");
    }
    const passwordError = validatePassword(newPassword);
    if (passwordError.length) {
      return toastError(passwordError.join());
    }

    if (newPassword !== confirmPassword) {
      return toastError("New and confirm password does not match");
    }
    try {
      setLoader(true);
      const res = await changePassword(oldPassword, newPassword);
      toastSuccess(res.message);
      setOldPassword("");
      setConfirmPassword("");
      setNewPassword("");
      setLoader(false);
    } catch (error) {
      console.log(error);
      toastError(error.data.message);
      setLoader(false);
    }
  };

  return (
    <div className="container">
      {loader ? loading : ""}
      <div className="card card-custom">
        <div className="card-header">
          <h3 className="card-title">Change Password</h3>
          <div className="card-toolbar">
            <div className="example-tools justify-content-center">
              <span
                className="example-toggle example-toggled"
                data-toggle="tooltip"
                title
                data-original-title="View code"
              />
              <span
                className="example-copy"
                data-toggle="tooltip"
                title
                data-original-title="Copy code"
              />
            </div>
          </div>
        </div>
        {/*begin::Form*/}
        <form id="submit">
          <div className="card-body">
            <div className="form-group">
              <label>
                Old Password
                {/* <span className="text-danger">*</span> */}
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                New Password
                {/* <span className="text-danger">*</span> */}
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {/* <span className="form-text text-muted">
                We'll never share your email with anyone else.
              </span> */}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Confirm Password
                {/* <span className="text-danger">*</span> */}
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="card-footer">
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={(e) => {
                e.preventDefault();
                _changePassword();
              }}
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => {
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                document.getElementById("submit").reset();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        {/*end::Form*/}
      </div>
    </div>
  );
}