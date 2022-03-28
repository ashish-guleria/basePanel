import qs from "qs";

import { makeGetRequest, makePostRequest, makePutRequest } from "./AxiosBase";

export const loginUser = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    console.log(email, password);
    const config = { skipAuth: true };
    let res = await makePostRequest(
      "/admin/auth/login",
      qs.stringify(data),
      config,
      { crossDomain: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const data = {
      oldPassword,
      newPassword,
    };
    const config = { skipAuth: false };
    let res = await makePutRequest(
      "/admin/auth/changePassword",
      qs.stringify(data),
      config,
      { crossDomain: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getDashboardData = async () => {
  try {
    const data = {};
    const config = { skipAuth: false };
    let res = await makeGetRequest("/admin/auth/dashboard", data, config, {
      crossDomain: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
