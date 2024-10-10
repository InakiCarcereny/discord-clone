import { z } from "zod";

export const createChannelSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 5 characters long",
    })
    .max(25, {
      message: "Name must be at most 50 characters long",
    })
    .trim(),
});

export const updateChannelSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 5 characters long",
    })
    .max(25, {
      message: "Name must be at most 50 characters long",
    })
    .trim(),
});
