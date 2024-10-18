import { z } from "zod";

export const userInfoSchema = z.object({
  name: z
    .string()
    .max(25, {
      message: "Name must be at most 25 characters long",
    })
    .trim()
    .optional(),
  nickname: z
    .string()
    .max(25, {
      message: "Nickname must be at most 25 characters long",
    })
    .trim()
    .optional(),
  avatar: z.any().optional(),
  banner: z.any().optional(),
  description: z
    .string()
    .max(150, {
      message: "Description must be at most 150 characters long",
    })
    .trim()
    .optional(),
  state: z
    .string()
    .min(2, {
      message: "State must be at least 2 characters long",
    })
    .max(25, {
      message: "State must be at most 25 characters long",
    })
    .trim()
    .optional(),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
});
