import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const depositFields = z.object({
  amount: z.string().trim().min(1, "Enter an amount").refine((value) => Number(value) > 0 && Number.isFinite(Number(value)), "Enter an amount greater than zero"),
  phone: z.string().trim().min(1, "Enter a phone number"),
});

export const depositSchema = toTypedSchema(depositFields);
export type DepositValues = z.infer<typeof depositFields>;
