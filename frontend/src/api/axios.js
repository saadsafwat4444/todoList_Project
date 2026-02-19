import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});
let isHandling401 = false;

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !isHandling401) {
      isHandling401 = true;

      localStorage.removeItem("token");

      window.dispatchEvent(new Event("unauthorized"));

      setTimeout(() => {
        isHandling401 = false;
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default instance;
