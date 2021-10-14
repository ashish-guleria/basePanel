import qs from "qs";

import { makePostRequest } from "./axios/AxiosBase";

export const loginUser = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password,
    };
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
