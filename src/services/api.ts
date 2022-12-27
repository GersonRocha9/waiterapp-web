import axios from "axios";

const api = axios.create({
  baseURL: "https://waiterapp-api.up.railway.app",
});

export default api;
