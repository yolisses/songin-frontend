import axios from 'axios';

export const api = axios.create(
  {
    withCredentials: true,
    baseURL: 'http://localhost:3004/',
  },
);
