import axios from "axios";

const api = axios.create({
  baseURL: "http://versionator-api.herokuapp.com",
  Accept: "application/json",
  "Content-type": "multipart/form-data",
});

export default api;
