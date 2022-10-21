import axios from "axios";

const baseurl = "https://api.github.com/";

export const api = axios.create({
  baseURL: baseurl,
});
