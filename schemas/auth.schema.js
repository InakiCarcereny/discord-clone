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
  name: z
    .string({
      required_error: "Name is required",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  day: z.string({
    required_error: "Day is required",
  }),
  month: z.string({
    required_error: "Month is required",
  }),
  year: z.string({
    required_error: "Year is required",
  }),
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
