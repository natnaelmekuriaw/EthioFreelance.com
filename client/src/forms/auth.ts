import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const email = z.string().trim().min(1, "Email is required").email("Enter a valid email address");

const loginFields = z.object({
  email,
  password: z.string().min(1, "Password is required"),
});

const forgotPasswordFields = z.object({ email });

const resetPasswordFields = z
  .object({
    password: z.string().min(8, "Use at least 8 characters"),
    password_confirm: z.string().min(1, "Confirm your password"),
  })
  .refine((values) => values.password === values.password_confirm, {
    message: "Passwords do not match",
    path: ["password_confirm"],
  });

const accountFields = z.object({
  firstname: z.string().trim().min(1, "First name is required"),
  lastname: z.string().trim().min(1, "Last name is required"),
  username: z.string().trim().min(1, "Username is required"),
  email,
  password: z.string().min(8, "Use at least 8 characters"),
  cpassword: z.string().min(1, "Confirm your password"),
});

const matchingPasswords = (values: { password: string; cpassword: string }) => values.password === values.cpassword;

const registerFields = accountFields
  .extend({
    accountType: z.enum(["freelancer", "employer"]),
  })
  .refine(matchingPasswords, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });

const adminFields = accountFields.refine(matchingPasswords, {
  message: "Passwords do not match",
  path: ["cpassword"],
});

export const loginSchema = toTypedSchema(loginFields);
export const registerSchema = toTypedSchema(registerFields);
export const adminSchema = toTypedSchema(adminFields);
export const forgotPasswordSchema = toTypedSchema(forgotPasswordFields);
export const resetPasswordSchema = toTypedSchema(resetPasswordFields);
export type LoginValues = z.infer<typeof loginFields>;
export type RegisterValues = z.infer<typeof registerFields>;
export type AdminValues = z.infer<typeof adminFields>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordFields>;
export type ResetPasswordValues = z.infer<typeof resetPasswordFields>;
