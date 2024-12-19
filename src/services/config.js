import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" }); //Instance

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
