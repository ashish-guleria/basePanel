import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

import { userList, blockUser } from "../../networkRequests/users";
import { userPerPage } from "../../utils/config";
import { toastError, toastSuccess, loading } from "../../utils/commonFuntions";

export default function UsersListing() {
  let history = useHistory();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [pageNumber, setpageNumber] = useState(0);
  const [pageChange, setPageChange] = useState(false);
  const [loader, setLoader] = useState(false);

  const pageCount = Math.ceil(userCount / userPerPage);

  const _GetUsers = async () => {
    try {
      setLoader(true);
      const res = await userList(userPerPage, pageNumber, search);
      console.log(res.data.users);
      setUsers(res.data.users);
      setUserCount(res.data.count);
      setLoader(false);
    } catch (err) {
      console.log(err);
      toastError(err);
      setLoader(false);
    }
  };

  const onChangePage = ({ selected }) => {
    setpageNumber(selected);
    setPageChange(!pageChange);
  };

  const block = async (userId) => {
    try {
      setLoader(true);
      const res = await blockUser(userId);
      _GetUsers();
      toastSuccess(res.message);
      _GetUsers();
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    _GetUsers();
  }, [pageChange]);

  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        {loader ? loading : ""}
        <div className="card card-custom">
          <div className="card-header flex-wrap border-0 pt-6 pb-0">
            <div className="card-title">
              <h3 className="card-label">
                Users
                <span className="d-block text-muted pt-2 font-size-sm">
                  Users listing
                </span>
              </h3>
            </div>
            <div className="card-toolbar">
              {/* Search bar */}

              <div className="input-group input-group-sm input-group-solid max-w-175px">
                <input
                  type="text"
                  className="form-control pl-4"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPageChange(!pageChange);
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <span className="svg-icon svg-icon-md">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
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
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              {/* search bar end*/}
            </div>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((m) => (
                    <tr key={m._id}>
                      <td type onClick={() => history.push(`/users/${m._id}`)}>
                        {m.email}
                      </td>

                      <td
                        // type="button"
                        onClick={() => {
                          console.log("hello");
                        }}
                      >
                        {!m.isBlocked ? (
                          <span className="label label-inline label-light-success font-weight-bold">
                            Active
                          </span>
                        ) : (
                          <span className="label label-inline label-light-danger font-weight-bold">
                            Blocked
                          </span>
                        )}
                      </td>

                      <td
                        className="datatable-toggle-detail"
                        style={{
                          width: 130,
                        }}
                      >
                        <span
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Block"
                          onClick={() => block(m._id)}
                        >
                          <span className="svg-icon svg-icon-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              className="svg-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <path
                                  d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                                  fill="#000000"
                                />
                                <path
                                  d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                />
                              </g>
                            </svg>
                          </span>
                        </span>

                        <span
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="View profiles"
                          onClick={() => block(m._id)}
                        >
                          <span className="svg-icon svg-icon-md">
                            <i class="flaticon-eye"></i>
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="example-preview">
              {/*begin::Pagination*/}
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex flex-wrap py-2 mr-3">
                  {userCount > userPerPage ? (
                    <ReactPaginate
                      previousLabel={
                        <i className="ki ki-bold-arrow-back icon-xs" />
                      }
                      nextLabel={
                        <i className="ki ki-bold-arrow-next icon-xs" />
                      }
                      pageCount={pageCount}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={1}
                      onPageChange={onChangePage}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                    />
                  ) : (
                    ""
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
