import { axiosMethodType } from '../redux/types';

import axiosInstance from '.';
/**
 * logout from app
 * @param response logout response
 */
function handleLogout(response: { data?: { statusCode: number; }; }) {
  if (response?.data?.statusCode === 401) {
    // do something when token will expire
  }
}
/**
 * To call get API's
 * @param param0 get data
 * @returns api response on success or error on fail
 */
export const getDataApi = ({
  path = 'no-path-provided',
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(path, {
          params: data,
        })
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

/**
 * To call Post API's
 * @param param0 post data
 * @returns api response on success or error on fail
 */
export const postDataApi = ({
  path = 'no-path-provided',
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(path, data)
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

/**
 * To call put API's
 * @param param0 put data
 * @returns api response on success or error on fail
 */
export const putDataApi = ({
  path = 'no-path-provided',
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put(path, data)
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

/**
 * To call delete API's
 * @param param0 delete data
 * @returns api response on success or error on fail
 */
export const deleteDataApi = ({
  path = 'no-path-provided',
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(path, { data })
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  } catch (error: any) {
    return error.message;
  }
};
