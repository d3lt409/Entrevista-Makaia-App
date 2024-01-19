import axios from "axios";

const apiUrl = "http://localhost:8080/api/v1/";

export const axiosMain = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});
