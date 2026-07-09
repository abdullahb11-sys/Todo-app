import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100),

  description: z
    .string()
    .trim()
    .max(500)
    .optional(),

  priority: z.enum([
    "Low",
    "Medium",
    "High",
  ]),
});

export const updateTaskSchema =
  createTaskSchema.partial();

export const taskIdSchema = z.object({
  id: z.uuid("Invalid task id"),
});

export type CreateTaskDto =
  z.infer<typeof createTaskSchema>;

export type UpdateTaskDto =
  z.infer<typeof updateTaskSchema>;