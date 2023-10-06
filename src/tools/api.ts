import axios from "axios";
import * as config from "./config";

export const api = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "user-id": "bas",
  },
});
