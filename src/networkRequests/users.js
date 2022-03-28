import qs from "qs";

import { makePostRequest, makeGetRequest, makePutRequest } from "./AxiosBase";

export const userList = async (limit, page, search) => {
  try {
    const params = {
      page,
      limit,
      search,
    };
    const config = { skipAuth: false };
    let res = await makeGetRequest("/admin/user", params, config, {
      crossDomain: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const blockUser = async (userId) => {
  try {
    const data = {
      userId,
    };
    const config = { skipAuth: false };
    let res = await makePostRequest(
      "/admin/user/block",
      qs.stringify(data),
      config,
      { crossDomain: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleUser = async (userId) => {
  try {
    const params = {
      userId,
    };
    let res = await makeGetRequest("/admin/user/single", params);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyUniversity = async (userId) => {
  try {
    const body = {
      userId,
    };
    let res = await makePutRequest(
      "/admin/user/verifyUniversity",
      qs.stringify(body)
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
