import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

// Базовый URL фейкового API
const API_BASE_URL = 'https://api.fake-rest.refine.dev';

// Создаём экземпляр axios с настройками по умолчанию
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик запросов (можно добавить токен авторизации при необходимости)
apiClient.interceptors.request.use(
  (config) => {
    // Например, если понадобится авторизация:
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers = config.headers || {};
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Перехватчик ответов: возвращаем сразу данные, а не полный ответ axios
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Здесь можно централизованно обрабатывать ошибки (401, 500 и т.д.)
    console.error('API error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;