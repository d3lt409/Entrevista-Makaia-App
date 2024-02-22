import axios from "axios";

const apiURL = "https://entrevista-makaia-api.onrender.com/api/v1/";

const apiUrl = "http://localhost:8080/api/v1/";

export const axiosMain = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});
