import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:8000",
  // baseURL: "http://versionator-api.herokuapp.com",
  Accept: "application/json",
  "Content-type": "multipart/form-data",
});

export default api;
