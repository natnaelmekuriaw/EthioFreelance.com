import { apiUrl, http, protocolRelativeApiUrl } from "./http";

export const fetchUsers = () => http.get(`${apiUrl}/users`);
export const updateUserStatus = (action: "approve" | "ban" | "unban", user_id: unknown) =>
  http.put(`${apiUrl}/user/${action}`, { user_id });
export const fetchUserProfile = (id: unknown) => http.get(`${protocolRelativeApiUrl}/user/profile/${id}`);
export const fetchFreelancerProfile = (id: unknown) => http.get(`${protocolRelativeApiUrl}/user/freelancer/${id}`);
export const fetchEmployerProfile = (id: unknown) => http.get(`${protocolRelativeApiUrl}/user/employer/${id}`);
export const findFreelancer = (id: unknown) => http.get(`${protocolRelativeApiUrl}/freelancer/find/${id}`);
export const createProfile = (values: unknown) => http.post(`${protocolRelativeApiUrl}/profile/create`, values);
