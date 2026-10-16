import { http } from "../services/http";

export function formErrorMessage(error: unknown): string {
  if (http.isAxiosError(error)) {
    const data = error.response?.data as { error?: string | { message?: string }; message?: string } | undefined;
    if (typeof data?.error === "string") return data.error;
    if (data?.error?.message) return data.error.message;
    if (data?.message) return data.message;
  }

  return "Something went wrong. Please try again.";
}
