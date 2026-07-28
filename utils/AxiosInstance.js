import axios from 'axios';
import useAuthStore from '../src/Store/authStore';

const api = axios.create({
  // baseURL: 'https://room-sathi-backend.onrender.com/api',
  baseURL: 'http://localhost:3005/api',

  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Attach the JWT to every request — protected routes (profile, post/delete
// room) reject anything without it.
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// An expired/invalid token means the stored session is dead — clear it so
// the app falls back to the logged-out state instead of retrying forever.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api;
