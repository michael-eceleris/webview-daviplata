import axios from "axios";

import { Configuration } from "../configuration/config";

export const serviceAxios = axios.create();

serviceAxios.interceptors.request.use((config) => {
  const baseURL = Configuration.microservice.baseUrl || "http://127.0.0.1:8003";
  return { baseURL, ...config };
});
