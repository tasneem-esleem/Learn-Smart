// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://educational-platform-backend-935l.onrender.com/api', 
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('userToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://educational-platform-backend-935l.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => {
    // 🔥 stable contract (prevents breaking frontend)
    return response.data?.data ?? response.data;
  },
  (error) => {
    const errResponse = error.response?.data;

    // AUTH HANDLING
    if (error.response?.status === 401) {
      localStorage.removeItem("userToken");
      window.location.href = "/login";
    }

    return Promise.reject({
      success: false,
      message: errResponse?.message || "Something went wrong",
      statusCode: error.response?.status,
      error: errResponse?.error || null,
    });
  }
);

export default api;