import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tyradex.vercel.app/',
  timeout: 5000,
});