import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(10);
  const [serviceProvider, setServiceProvider] = useState(8);
  

  return (
    <div className="row">
      <div className="col-xl-3">
        <div
          className="card card-custom bgi-no-repeat card-stretch gutter-b"
          style={{
            backgroundPosition: "right top",
            backgroundSize: "30% auto",
            backgroundImage: "url(assets/media/svg/shapes/abstract-1.svg)",
          }}
        >
          {/*begin::Body*/}
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-info">
              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
            <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
              {user}
            </span>
            <span className="font-weight-bold text-muted font-size-sm">
              Users
            </span>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Stats Widget 29*/}
      </div>
      <div className="col-xl-3">
        {/*begin::Stats Widget 30*/}
        <div className="card card-custom bg-info card-stretch gutter-b">
          {/*begin::Body*/}
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-white">
              {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Tools\Tools.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path
                    d="M15.9497475,3.80761184 L13.0246125,6.73274681 C12.2435639,7.51379539 12.2435639,8.78012535 13.0246125,9.56117394 L14.4388261,10.9753875 C15.2198746,11.7564361 16.4862046,11.7564361 17.2672532,10.9753875 L20.1923882,8.05025253 C20.7341101,10.0447871 20.2295941,12.2556873 18.674559,13.8107223 C16.8453326,15.6399488 14.1085592,16.0155296 11.8839934,14.9444337 L6.75735931,20.0710678 C5.97631073,20.8521164 4.70998077,20.8521164 3.92893219,20.0710678 C3.1478836,19.2900192 3.1478836,18.0236893 3.92893219,17.2426407 L9.05556629,12.1160066 C7.98447038,9.89144078 8.36005124,7.15466739 10.1892777,5.32544095 C11.7443127,3.77040588 13.9552129,3.26588995 15.9497475,3.80761184 Z"
                    fill="#000000"
                  />
                  <path
                    d="M16.6568542,5.92893219 L18.0710678,7.34314575 C18.4615921,7.73367004 18.4615921,8.36683502 18.0710678,8.75735931 L16.6913928,10.1370344 C16.3008685,10.5275587 15.6677035,10.5275587 15.2771792,10.1370344 L13.8629656,8.7228208 C13.4724413,8.33229651 13.4724413,7.69913153 13.8629656,7.30860724 L15.2426407,5.92893219 C15.633165,5.5384079 16.26633,5.5384079 16.6568542,5.92893219 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
            <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">
              {serviceProvider}
            </span>
            <span className="font-weight-bold text-white font-size-sm">
              Service Provider
            </span>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Stats Widget 30*/}
      </div>

      <div className="col-xl-3">
        {/*begin::Stats Widget 31*/}
        <div className="card card-custom bg-danger card-stretch gutter-b">
          {/*begin::Body*/}
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-white">
              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x={13}
                    y={4}
                    width={3}
                    height={16}
                    rx="1.5"
                  />
                  <rect
                    fill="#000000"
                    x={8}
                    y={9}
                    width={3}
                    height={11}
                    rx="1.5"
                  />
                  <rect
                    fill="#000000"
                    x={18}
                    y={11}
                    width={3}
                    height={9}
                    rx="1.5"
                  />
                  <rect
                    fill="#000000"
                    x={3}
                    y={13}
                    width={3}
                    height={7}
                    rx="1.5"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
            <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">
              $50,000
            </span>
            <span className="font-weight-bold text-white font-size-sm">
              Milestone Reached
            </span>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Stats Widget 31*/}
      </div>
      <div className="col-xl-3">
        {/*begin::Stats Widget 32*/}
        <div className="card card-custom bg-dark card-stretch gutter-b">
          {/*begin::Body*/}
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-white">
              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path
                    d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                    fill="#000000"
                  />
                  <path
                    d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
            <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 text-hover-primary d-block">
              23,508
            </span>
            <span className="font-weight-bold text-white font-size-sm">
              Support Tickets
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
