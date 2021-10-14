import axios from "axios";
import { baseUrl } from "../../../../utils/config";

export const handleError = (error) => {
  if (
    error.response.data.code == 401 &&
    error.response.data.message == "Please authenticate"
  ) {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
  throw error.response;
};

export const makePostRequest = (url, data = {}, config, options = {}) => {
  config = {
    skipAuth: false,
    contentType: "application/x-www-form-urlencoded",
    ...config,
  };
  const header = {
    headers: {
      authorization: config.skipAuth
        ? null
        : "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": config.contentType,
    },
  };

  return axios
    .post(`${baseUrl}${url}`, data, header, options)
    .catch((error) => handleError(error));
};

export const makeGetRequest = (url, params = {}, config, options = {}) => {
  config = {
    skipAuth: false,
    contentType: "application/x-www-form-urlencoded",
    ...config,
  };
  const header = {
    params,
    headers: {
      authorization: config.skipAuth
        ? null
        : "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": config.contentType,
    },
  };

  return axios
    .get(`${baseUrl}${url}`, header)
    .catch((error) => handleError(error));
};

export const makeDeleteRequest = (url, data = {}, config) => {
  config = {
    skipAuth: false,
    contentType: "application/x-www-form-urlencoded",
    ...config,
  };
  const reqConfig = {
    headers: {
      authorization: config.skipAuth
        ? null
        : "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": config.contentType,
    },
  };
  return axios.delete(url, reqConfig).catch((error) => handleError(error));
};

export const makePutRequest = (url, data = {}, config, options = {}) => {
  config = {
    skipAuth: false,
    contentType: "application/x-www-form-urlencoded",
    ...config,
  };
  const header = {
    headers: {
      authorization: config.skipAuth
        ? null
        : "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": config.contentType,
    },
  };

  console.log("jmhjkfhgjkhfkghkjfhkgkflhklhgkklghhfklgh", data);

  return axios
    .put(`${baseUrl}${url}`, data, header, options)
    .catch((error) => handleError(error));
};

// const AxiosBase = axios.create({
//   baseURL: baseUrl,
// });
// AxiosBase.interceptors.request.use(
//   async (config) => {
//     config.headers["authorization"] =
//       "Bearer " + localStorage.getItem("accessToken");
//     // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// AxiosBase.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     //console.log("errrrrrrrrrrrrrrrrrrr",error.response.data.message)
//     // if (error && error.response && error.response.status === 401) {
//     if (error.response.data.message == "Please authenticate") {
//       localStorage.removeItem("accessToken");
//       window.location.reload();
//       //window.location = "35.83.75.2:5000";
//     }
//     throw error;
//     //return error;
//   }
// );

// export default AxiosBase;
// export const handleError = (error) => {
//   alert("handle Error");
//   console.log("HandleError : ", JSON.stringify(error));
//   if (error.response.status === 404) {
//     // showMessage(error.response.data.Message)
//   }
// };
