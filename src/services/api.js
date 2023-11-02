import axios from "axios";

export const api = axios.create({
  baseURL: "https://rs-explorer-api-rocketmovies.onrender.com",
});
