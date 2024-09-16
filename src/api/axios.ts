// src/api/axios.ts
import axios from "axios";
import { base_url } from "./routes";

// const PRODUCTIONURL = "";
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
