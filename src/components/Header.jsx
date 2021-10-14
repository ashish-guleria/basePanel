import React from "react";
import { useHistory, NavLink } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  return (
    <div id="kt_header" className="header header-fixed">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="header-menu-wrapper header-menu-wrapper-left"
          id="kt_header_menu_wrapper"
        >
          <div
            id="kt_header_menu"
            className="header-menu header-menu-mobile header-menu-layout-default"
          ></div>
          {/*end::Header Menu*/}
        </div>

        <div className="topbar">
          {/*begin::User*/}
          <div className="dropdown">
            <div
              className="topbar-item"
              data-toggle="dropdown"
              data-offset="10px,0px"
            >
              {/* START mobile bar*/}
              <div
                id="kt_header_mobile"
                className="header-mobile align-items-center header-mobile-fixed"
              >
                {/*begin::Logo*/}
                <NavLink to="/" className="brand-logo">
                  <h4>One Name</h4>
                  {/* <img alt="Logo" src="../assets/media/logos/logo-light.png" /> */}
                </NavLink>
                {/*end::Logo*/}
                {/*begin::Toolbar*/}
                <div className="d-flex align-items-center">
                  {/*begin::Aside Mobile Toggle*/}
                  <button
                    className="btn p-0 burger-icon burger-icon-left"
                    id="kt_aside_mobile_toggle"
                  >
                    <span />
                  </button>

                  <div
                    className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                    id="kt_quick_user_toggle"
                  >
                    <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                      <span className="symbol-label font-size-h5 font-weight-bold">
                        A
                      </span>
                    </span>
                  </div>
                  {/*end::Topbar Mobile Toggle*/}
                </div>
                {/*end::Toolbar*/}
              </div>

              {/* END mobile bar  */}

              <div
                className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                id="kt_quick_user_toggle"
              >
                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                  Hi
                </span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                  Admin
                </span>
                <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                  <span className="symbol-label font-size-h5 font-weight-bold">
                    A
                  </span>
                </span>
              </div>
            </div>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-md dropdown-menu-right">
              {/*begin::Nav*/}
              <ul className="navi navi-hover py-4">
                {/*begin::Item*/}

                {/*end::Item*/}

                <li
                  className="navi-item"
                  //onClick={Logout}
                >
                  <div
                    type="button"
                    onClick={() => {
                      history.push(`/changePassword`);
                    }}
                    className="navi-link"
                  >
                    <span className="symbol symbol-20 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>

                    <span className="navi-text">Change Password</span>
                  </div>
                </li>

                {/*begin::Item*/}
                <li
                  className="navi-item"
                  //onClick={Logout}
                >
                  <div
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("accessToken");
                      window.location.reload();
                    }}
                    className="navi-link"
                  >
                    <span className="symbol symbol-20 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <path
                            d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            opacity="0.3"
                            transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000) "
                          />
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000) "
                            x="13"
                            y="6"
                            width="2"
                            height="12"
                            rx="1"
                          />
                          <path
                            d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000) "
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="navi-text">Logout</span>
                  </div>
                </li>

                {/*end::Item*/}
              </ul>
              {/*end::Nav*/}
            </div>
          </div>
          {/*end::User*/}
        </div>
        {/*end::Topbar*/}
      </div>
      {/*end::Container*/}
    </div>
  );
}
