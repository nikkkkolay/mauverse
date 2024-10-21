import axios from 'axios';

export const API_URL = import.meta.env.VITE_JSON_SERVER_URL;

export const api = axios.create({ baseURL: API_URL });
