import { z } from "zod";

export const userInfoSchema = z.object({
  nickname: z
    .string({
      required_error: "Nickname is required",
    })
    .min(3, {
      message: "Nickname must be at least 3 characters long",
    })
    .max(25, {
      message: "Nickname must be at most 25 characters long",
    })
    .trim(),
  avatar: z.instanceof(Buffer, {
    required_error: "Avatar is required",
  }),
  banner: z.instanceof(Buffer, {
    required_error: "Banner is required",
  }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .max(150, {
      message: "Description must be at most 150 characters long",
    })
    .trim(),
  state: z
    .string({
      required_error: "State is required",
    })
    .min(2, {
      message: "State must be at least 2 characters long",
    })
    .max(25, {
      message: "State must be at most 25 characters long",
    })
    .trim(),
});
