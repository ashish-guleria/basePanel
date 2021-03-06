import React from "react";

export default function Error() {
  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Error*/}
      <div
        className="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"
        style={{ backgroundImage: "url(assets/media/error/bg1.jpg)" }}
      >
        {/*begin::Content*/}
        <h1
          className="font-weight-boldest text-dark-75 mt-15"
          style={{ fontSize: "10rem" }}
        >
          404
        </h1>
        <p className="font-size-h3 text-muted font-weight-normal">
          OOPS! Something went wrong here
        </p>
        {/*end::Content*/}
      </div>
      {/*end::Error*/}
    </div>
  );
}
