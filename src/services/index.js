import axios from 'axios';
import { API_ROUTE, AUTH_ROUTE } from '../config';

const dashboardGateway = axios.create({
  baseURL: API_ROUTE,
  timeout: 20000,
})

dashboardGateway.interceptors.response.use((res) => {
  return res;
}, function (res) {
  if (res.response && res.response.status === 401) {
    localStorage.clear();
    window.location.href = '/login';
  }
  return res;
});

dashboardGateway.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers['Content-Type'] = `application/json`;
  config.headers['x-auth-token'] = `${token}`;
  return config;
});

export default dashboardGateway;

export const dashboardAuthenticator = axios.create({
  baseURL: AUTH_ROUTE,
  timeout: 20000,
});
