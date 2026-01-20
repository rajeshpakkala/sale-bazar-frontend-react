import axios from "axios";
import { authStorage } from "../storage/authStorage";

export const adminDashboardApi = axios.create({
  baseURL: "/salebazar/admin",
  headers: {
    "Content-Type": "application/json",
  },
});

adminDashboardApi.interceptors.request.use((config) => {
  const token = authStorage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
