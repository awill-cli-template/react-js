import axios from "axios";
import storage from "utils/storage.js";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = storage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization.split(" ")[1];
    if (token) {
      storage.setItem("token", token);
    }
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      storage.removeItem("token");
      window.location.href = "/login";
    }
    if (error.response.status === 500) {
      console.error("服务器错误");
    }
    return Promise.reject(error);
  },
);

export const Get = (url, data, config) => request.get(url, { params: data, ...config });
export const Post = (url, data, config) => request.post(url, data, config);
export const Put = (url, data, config) => request.put(url, data, config);
export const Del = (url, data, config) => request.delete(url, { params: data, ...config });
