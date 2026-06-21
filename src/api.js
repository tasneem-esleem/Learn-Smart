import axios from "axios";
export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://educational-platform-backend-935l.onrender.com/api";

export const SERVER_ROOT_URL = API_BASE_URL.replace(/\/api\/?$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
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
    return response.data?.data ?? response.data;
  },
  (error) => {
    const errResponse = error.response?.data;

    
    if (!error.response) {
      return Promise.reject({
        success: false,
        message:
          "تعذر الوصول إلى السيرفر. تأكد من اتصالك بالإنترنت، أو أن السيرفر يعمل (قد يستغرق Render حتى 50 ثانية للاستيقاظ إذا كان نائماً).",
        statusCode: null,
        error: "NETWORK_ERROR",
      });
    }

    // AUTH HANDLING
    if (error.response?.status === 401) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
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
