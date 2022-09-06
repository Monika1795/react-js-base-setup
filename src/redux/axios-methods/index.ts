import axios from "axios";

// import { AUTH_FAILURE } from "src/redux/actions";
// import { store } from "src/redux/store";
import { axiosMethodType } from 'src/redux/types';

const getApiUrl = (path: string = "") => {
  return `${process.env.REACT_APP_API_BASE_URL}/${path}`;
};

function getTokenHeaders() {
  const accessToken = '';
  return {
    "x-access-token": accessToken,
  };
}

export const getDataApi = ({
  path = "no-path-provided",
  headers = {
    accept: "text/plain",
    ...getTokenHeaders(),
  },
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${getApiUrl(path)}`, {
          headers,
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
  path = "no-path-provided",
  headers = {
    accept: "text/plain",
    ...getTokenHeaders(),
  },
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .post(`${getApiUrl(path)}`, data, { headers })
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject({ message: error.response?.data?.error || error.message });
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

export const putDataApi = ({
  path = "no-path-provided",
  headers = {
    accept: "text/plain",
    ...getTokenHeaders(),
  },
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .put(`${getApiUrl(path)}`, data, { headers })
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject({ message: error.response?.data?.error || error.message });
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

export const deleteDataApi = ({
  path = "no-path-provided",
  headers = {
    accept: "text/plain",
    ...getTokenHeaders(),
  },
  data = {},
}: axiosMethodType) => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${getApiUrl(path)}`, { headers, data })
        .then((response: any) => {
          handleLogout(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject({ message: error.response?.data?.error || error.message });
        });
    });
  } catch (error: any) {
    return error.message;
  }
};

function handleLogout(response: { data?: { statusCode: number; }; }) {
  if (response?.data?.statusCode === 401) {
    // when token will expire
    // store.dispatch({ type: AUTH_FAILURE });
  }
}
