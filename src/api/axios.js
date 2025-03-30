import axios from 'axios';

const baseURLs = {
  default: 'https://vue-course-api.hexschool.io/api/yunhsi',
};

const createApiInstance = (baseType = 'default') => {
  const api = axios.create({
    baseURL: baseURLs[baseType] || baseURLs.default,
    headers: { 'Content-Type': 'application/json' }
  });

  // 統一錯誤處理
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response.status;
      const message = error.response?.data?.message || '請求失敗';

      console.error(`API 錯誤 (狀態碼: ${status}):`, message);

      return Promise.reject(error);
    }
  );

  return api;
};

export const api = createApiInstance();
