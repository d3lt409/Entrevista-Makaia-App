import axios from "axios";

const apiURL = "https://equipo4-production-caa0.up.railway.app/api/v1/";

// const apiUrl = "http://localhost:8080/api/v1/";

export const axiosMain = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});
