import axios from "axios";

export const http = axios;
export const apiUrl = "http://localhost:8081/api";
export const protocolRelativeApiUrl = "//localhost:8081/api";

export function setAuthToken(token: string) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function installUnauthorizedHandler(onUnauthorized: () => void) {
  http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) onUnauthorized();
      return Promise.reject(error);
    }
  );
}
