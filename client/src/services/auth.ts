import { http, protocolRelativeApiUrl } from "./http";

export type RegistrationRequest = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  accountType: string;
};

export type LoginRequest = { email: string; password: string };
export type PasswordResetRequest = { password: string; password_confirm: string; token?: unknown };

export const registerAccount = (credentials: RegistrationRequest) => http.post(`${protocolRelativeApiUrl}/signup`, credentials);
export const loginAccount = (credentials: LoginRequest) => http.post(`${protocolRelativeApiUrl}/login`, credentials);
export const requestPasswordReset = (values: { email: string }) => http.post("forgot", values);
export const resetPassword = (values: PasswordResetRequest) => http.post("reset", values);
export const fetchCurrentUser = () => http.get(`${protocolRelativeApiUrl}/user/profile`);
