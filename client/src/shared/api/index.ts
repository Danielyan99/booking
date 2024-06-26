import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
