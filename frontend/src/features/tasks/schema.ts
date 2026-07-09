import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(5, "Description must be at least 5 characters")
    .max(500, "Description cannot exceed 500 characters"),

  priority: z.enum(["Low", "Medium", "High"]),
});

export type CreateTaskData = z.infer<typeof createTaskSchema>;