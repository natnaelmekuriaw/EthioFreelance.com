import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const feedbackFields = z.object({
  message: z.string().trim().min(1, "Write your feedback before sending"),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address")]),
});

export const feedbackSchema = toTypedSchema(feedbackFields);
export type FeedbackValues = z.infer<typeof feedbackFields>;
