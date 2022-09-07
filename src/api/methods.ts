import { axiosMethodType } from '../redux/types';

import axiosInstance from '.';

function handleLogout(response: { data?: { statusCode: number; }; }) {
  if (response?.data?.statusCode === 401) {
    // do something when token will expire
  }
}

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
