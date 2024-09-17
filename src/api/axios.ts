import axios from "axios";
import { base_url } from "./routes";

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
