import axios from "axios";

const API = axios.create({
  baseURL: "https://pipocaatopica.jelastic.saveincloud.net/api/",
});

export default API;
