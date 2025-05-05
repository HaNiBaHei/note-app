import { z } from "zod";

export const todoSchema = z.object({
  description: z.string(),
  status: z.boolean(),
});