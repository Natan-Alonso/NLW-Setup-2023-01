import axios from "axios";
axios.defaults.timeout = 7000;

export const api = axios.create({
  baseURL: 'http://192.168.0.29:3333',
})