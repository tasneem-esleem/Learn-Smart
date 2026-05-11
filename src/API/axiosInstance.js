import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.learn-smart.com/api', // هاد الرابط اللي رح يعطيكِ اياه الباك اند
  headers: {
    'Content-Type': 'application/json',
  },
});

// هون ممكن نضيف "Interceptor" عشان يبعت الـ Token تلقائياً مع كل طلب
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;