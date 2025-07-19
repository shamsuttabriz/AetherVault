import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

function useAxiosSecure() {
  const { user, logOut } = use(AuthContext);
  const token = user?.accessToken;

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer dlkfd${token}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        logOut()
          .then(() => {
            console.log(
              `Your are logged out because of an error with ${err.status} code`
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
}

export default useAxiosSecure;
