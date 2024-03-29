/* eslint-disable no-underscore-dangle */
import axios, { InternalAxiosRequestConfig } from 'axios';

const { VITE_API_URL } = import.meta.env;

export const client = axios.create({
  baseURL: VITE_API_URL,
});

client.interceptors.request.use((req) => {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${token}`,
      },
    } as InternalAxiosRequestConfig;
  }
  return req;
});

// TODO HANDLE ERRORS & TOKEN REFRESH ACCORDING TO NEEDS.
client.interceptors.response.use(undefined, async (error) => {
  const originalConfig = error.config;
  if (error.response) {
    if (
      error.response.data.message === 'Token expired.'
      && !originalConfig._retry
    ) {
      originalConfig._retry = true;
      // return refreshToken()
      //   .then((res) => {
      //     const newToken = res.data.token;
      //     localStorage.setItem('token', newToken);
      //     return client(originalConfig);
      //   })
      //   .catch(() => {
      //     localStorage.removeItem('token');
      //     window.location.reload();
      //   });
    }
  }
  return Promise.reject(error);
});
