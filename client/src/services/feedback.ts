import { apiUrl, http } from "./http";

export const sendFeedback = (values: unknown) => http.post(`${apiUrl}/feedback`, values);
export const sendReview = (values: unknown) => http.post(`${apiUrl}/ratingreview`, values);
