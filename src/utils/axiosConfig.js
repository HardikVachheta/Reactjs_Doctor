import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
console.log("Axios Base URL:", baseURL);

const instance = axios.create({
  baseURL: baseURL, // dynamic URL
//   timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors (Optional for auth tokens)
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default instance;
