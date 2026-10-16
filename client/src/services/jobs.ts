import { apiUrl, http, protocolRelativeApiUrl } from "./http";

export const searchJobs = () => http.get(`${apiUrl}/job/search`);
export const searchJobsWithFilters = (filters: unknown) => http.post(`${apiUrl}/job/search`, filters);
export const updateJobStatus = (action: "approve" | "close" | "delete", jobId: unknown) =>
  http.put(`${apiUrl}/job/${action}`, { jobId });
export const postJob = (values: FormData) => http.post(`${protocolRelativeApiUrl}/job/post`, values);
export const applyForJob = (values: unknown) => http.post(`${apiUrl}/job/apply`, values);
export const completeJob = (values: FormData) => http.post(`${protocolRelativeApiUrl}/job/complete`, values);
export const fetchJob = (id: unknown) => http.get(`${protocolRelativeApiUrl}/job/fetch/${id}`);
export const fetchEmployerJobs = (id: unknown) => http.get(`${protocolRelativeApiUrl}/job/find/${id}`);
export const hireFreelancer = (values: unknown) => http.post(`${apiUrl}/job/hire`, values);
