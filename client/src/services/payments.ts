import { http, protocolRelativeApiUrl } from "./http";

export const deposit = (values: unknown) => http.post(`${protocolRelativeApiUrl}/payment/deposite`, values);
