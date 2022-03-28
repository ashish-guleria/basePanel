import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../networkRequests/auth";
import { toastError, toastSuccess, loading } from "../utils/commonFuntions";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const _login = async (e) => {
    e.preventDefault();
    if (!email) {
      return toastError("Please enter email");
    }
    if (!password) {
      return toastError("Please enter password");
    }
    try {
      setLoader(true);
      var res = await loginUser(email, password);
      localStorage.setItem("accessToken", res.data.token);
      history.push("/");
      setLoader(false);
    } catch (err) {
      console.log(err);
      toastError(err.data.message);
      setLoader(false);
    }
  };

  return (
    <div className="d-flex flex-column flex-root">
      {loader ? loading : ""}
      <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="login-container order-2 order-lg-1 d-flex flex-center flex-row-fluid px-7 pt-lg-0 pb-lg-0 pt-4 pb-6 bg-white">
          <div className="login-content d-flex flex-column pt-lg-0 pt-12">
            <a href="#" className="login-logo pb-xl-20 pb-15">
              <img
                src="/assets/media/handyLogo.png"
                className="max-h-70px"
                alt
              />
            </a>

            <div className="login-form">
              <form className="form" id="kt_login_singin_form" action>
                <div className="pb-5 pb-lg-15">
                  <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                    Login
                  </h3>
                </div>
                <div className="form-group">
                  <label className="font-size-h6 font-weight-bolder text-dark">
                    Your Email
                  </label>
                  <input
                    placeholder="Your Email"
                    className="form-control form-control-solid py-7 px-6 rounded-lg border-0"
                    //value={email}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <div className="d-flex justify-content-between mt-n5">
                    <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                      Your Password
                    </label>
                  </div>
                  <input
                    placeholder="Your Password"
                    className="form-control form-control-solid py-7 px-6 rounded-lg border-0"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="pb-lg-0 pb-5">
                  <button
                    onClick={_login}
                    type="submit"
                    className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right">
          <div
            className="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom"
            style={{
              backgroundImage: "url(/assets/media/login-visual-4.svg)",
            }}
          >
            <h3 className="pt-lg-40 pl-lg-20 pb-lg-0 pl-10 py-20 m-0 d-flex justify-content-lg-start font-weight-boldest display5 display1-lg text-white">
              {process.env.REACT_APP_PROJECT_NAME}
              <br />
              Pannel
              <br />
              For You
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
