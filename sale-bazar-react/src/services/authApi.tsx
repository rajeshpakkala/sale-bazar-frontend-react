import axios from "axios";

export const API = "http://localhost:8080/salebazar/auth";

export const authApi = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
