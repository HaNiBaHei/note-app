// utils/validation/authSchemas.ts
import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(8, "Must be at least 8 characters"),
});

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(8, "Must be at least 8 characters")
      .max(32, "Must be less than 32 characters"),
    lastName: z
      .string()
      .min(8, "Must be at least 8 characters")
      .max(32, "Must be less than 32 characters"),
      username: z.string().min(8, "Must be at least 8 characters"),
    password: z
      .string()
      .min(8, "Must be at least 8 characters")
      .regex(/[a-z]/, "Must include at least one lowercase letter")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must include at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // points the error to confirmPassword
  });
