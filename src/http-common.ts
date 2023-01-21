import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7119/api/",
  //baseURL: "https://matricula-iglesia.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
