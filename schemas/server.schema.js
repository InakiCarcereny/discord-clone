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
  logo: z.any(),
});
