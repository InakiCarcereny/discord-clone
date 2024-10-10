import { z } from "zod";

export const serverSchema = z.object({
  tittle: z
    .string({
      required_error: "Tittle is required",
    })
    .min(5, {
      message: "Tittle must be at least 5 characters long",
    })
    .max(50, {
      message: "Tittle must be at most 50 characters long",
    })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(5, {
      message: "Description must be at least 5 characters long",
    })
    .max(150, {
      message: "Description must be at most 150 characters long",
    })
    .trim(),
  logo: z.instanceof(Buffer, {
    required_error: "Logo is required",
  }),
});
