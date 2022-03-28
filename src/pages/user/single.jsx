import React, { useState, useEffect } from "react";
import { getSingleUser, verifyUniversity } from "../../networkRequests/users";
import { toastError, toastSuccess, loading } from "../../utils/commonFuntions";

export default function single(props) {
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const _getSingleUser = async () => {
    try {
      setLoader(true);
      const res = await getSingleUser(props.match.params.userId);
      setUserData(res.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const _verifyUniversity = async () => {
    try {
      setLoader(true);
      const res = await verifyUniversity(props.match.params.userId);
      setLoader(false);
      setUserData(res.data);
      toastSuccess(res.message);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  useEffect(_getSingleUser, []);

  return (
    <div>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          {loader ? loading : ""}
          <div className="d-flex flex-row">
            <div className="w-300px w-xl-350px">
              {/*begin::Card*/}
              <div className="card card-custom gutter-b">
                <div className="card-body pt-4">
                  <div className="d-flex justify-content-end">
                    <div className="dropdown dropdown-inline">
                      <span className="btn btn-clean "></span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                      <div
                        className="symbol-label"
                        style={{
                          backgroundImage:
                            'url("../assets/media/users/300_13.jpg")',
                        }}
                      />
                    </div>
                    <div>
                      <span className="font-weight-bold font-size-h5 text-dark-75 mr-3">
                        {userData.name}
                      </span>
                      {userData.isUniversityVerified ? (
                        <i className="flaticon2-correct text-success font-size-h5" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="pt-8 pb-6">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-weight-bold mr-2">Email:</span>

                      <span className="text-muted"> {userData.email}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-weight-bold mr-2">Phone:</span>
                      <span className="text-muted">{userData.phoneNumber}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-weight-bold mr-2">User Name:</span>
                      <span className="text-muted">{userData.userName}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-weight-bold mr-2">University:</span>
                      <span className="text-muted">{userData.university} </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between ">
                      <span className="font-weight-bold mr-2">club:</span>
                      <span className="text-muted">{userData.club}</span>
                    </div>
                  </div>
                  <span className="font-weight-bold mr-2">Bio</span>
                  <div className="pb-6">{userData.bio}</div>
                  {userData.isUniversityVerified ? (
                    ""
                  ) : (
                    <span
                      onClick={_verifyUniversity}
                      className="btn btn-light-success font-weight-bold py-3 px-6 mb-2 text-center btn-block"
                    >
                      Verify University
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
