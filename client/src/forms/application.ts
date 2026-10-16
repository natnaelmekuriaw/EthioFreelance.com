import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const applicationFields = z.object({
  bid: z.string().trim().min(1, "Enter your bid").refine((value) => Number(value) > 0 && Number.isFinite(Number(value)), "Enter an amount greater than zero"),
  proposal: z.string().trim().min(1, "Write a cover letter"),
});

export const applicationSchema = toTypedSchema(applicationFields);
export type ApplicationValues = z.infer<typeof applicationFields>;
