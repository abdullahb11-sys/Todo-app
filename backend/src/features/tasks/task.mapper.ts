import type { Task, TaskRow } from "./task.types.js";

export function mapTaskRow(row: TaskRow): Task {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    priority: row.priority,
    completed: row.completed,

    dueDate: row.due_date,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}