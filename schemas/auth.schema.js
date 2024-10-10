import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(25, {
      message: "Username must be at most 25 characters long",
    })
    .trim(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
});

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .trim(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .trim(),
});
