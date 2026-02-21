import axios from "axios";
import { API_URL } from "@/constants/index";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": `${process.env.BACKEND_API_KEY}`,
  },
});

export default axiosInstance;
